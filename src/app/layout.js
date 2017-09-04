function page(id, parameters) {
    var pages = document.getElementsByClassName('page-open');

    if (pages.length > 0) {
        pages[0].classList.remove('page-open');
    }

    var page = document.getElementById('page-' + id);
    page.classList.add('page-open');

    var openedEvent = page.getAttribute('data-ume-opened');

    if (openedEvent) {
        window[openedEvent](parameters);
    }
}

function toggleMenu() {
    document.getElementById('menu').classList.toggle('open');
    document.getElementById('container').classList.toggle('open');
    document.getElementById('content').classList.toggle('open');
}

function saveFile(content, filename) {
    var blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, filename);
}

function onGatewaySave(source) {
    console.log(source);

    var linkedInput = source.getAttribute('data-ume-input');
    var gatewayUrl = document.getElementById(linkedInput).value;

    var storage = window.ume.storage.gateways;
    storage.insert({ gateway: gatewayUrl });

    updateGatewayList();
}

function removeGateway(item) {
    var storage = window.ume.storage.gateways;
    storage.remove(item);
    updateGatewayList();
}

class Community {
    constructor() {
        this.name = null;
        this.id = null;
        this.description = null;
        this.publicKey = null;
        this.privateKey = null;
        this.passPhrase = null;
        this.passPhraseKey = null;
        this.passPhraseCipher = null;
        this.gateway = null;
    }
}

function input(id) {
    return document.getElementById(id).value;
}

function onCreateInviteOpened(parameters) {

    updateCommunityList();
    updateGatewayList();

}

function onCommunityOpened(parameters) {
    console.log(parameters);

    var community = window.ume.storage.communities.findOne({ 'id': parameters });

    if (!community) {
        page('introduction');
    } else {
        element('community-view-name').innerText = community.name;
        element('community-view-id').innerText = 'ID: ' + community.id;
        element('community-view-description').innerText = 'Description: ' + community.description;

        console.log(community);

    }
}

function onCommunitiesOpened() {
    var communitiesList = document.getElementById('communities-list');
    communitiesList.innerHTML = '';

    window.ume.storage.communities.data.forEach((community) => {
        communitiesList.appendChild(Markup.communityListItem(community.id, community.name, 'free_breakfast', community.count, community.updated));
    });
}

function onSaveCommunity() {
    console.log('Save the community!');

    var entity = new Community();
    entity.name = input('community-name');
    entity.description = input('community-description');
    entity.id = input('community-id');
    entity.publicKey = input('community-public-key');
    entity.privateKey = input('community-private-key');
    entity.passPhrase = input('community-pass-phrase');
    entity.gateway = input('gateway-select-list');

    window.ume.storage.communities.insert(entity);

    console.log(entity);
}

function onCreateCommunityOpened() {
    updateGatewayList();
}

function onSettingsOpened() {
    updateGatewayList();
}

function onGenerateInvite() {
    console.log('Generating invite...');

    var communityId = input('community-invite-list');
    var gateway = input('gateway-invite-list');

    console.log(communityId);
    console.log(gateway);

    var community = window.ume.storage.communities.findOne({ 'id': communityId });

    console.log(community);

    // Community owner generates a new invitation:
    var invitation = {
        "community": community.id,
        "invitationId": generateInviteKey()
    };

    var invitationEntity = {
        "type": "invite",
        "signature": null,
        "body": invitation
    }

    console.log(invitationEntity);

    //var base64CommunityPublicKey = utoa(JSON.stringify(communityPublicKey));
    //var communityHashArray = new Uint8Array(communityHash);

    return;

    // var signatureBuffer = await signInvitation(communityKeys.privateKey, stringToUint(invitation));
    // var signatureArray = new Uint8Array(signatureBuffer);
    // var signature = arrayBufferToBase64(signatureArray);

    // // Store the signature on the entity.
    // invitationEntity.signature = signature;

    // console.log('Send this invite to a user: ', JSON.stringify(invitationEntity));

}

function updateCommunityList() {

    console.log('Update community list!');

    var communityList = document.getElementById('community-invite-list');
    communityList.innerHTML = '';

    window.ume.storage.communities.data.forEach((item) => {
        var opt = document.createElement('option');
        opt.value = item.id;
        opt.innerText = item.id + ' | ' + item.name;
        communityList.appendChild(opt);
    });
}

function updateGatewayList() {

    console.log('Update gateway list!');

    var gatewayList = document.getElementById('gateway-list');
    var gatewaySelectList = document.getElementById('gateway-select-list');
    var gatewayInviteList = document.getElementById('gateway-invite-list');

    gatewayList.innerHTML = '';
    gatewaySelectList.innerHTML = '';
    gatewayInviteList.innerHTML = '';

    // Populate the dropdown.
    var optAll = document.createElement('option');
    optAll.value = '';
    optAll.innerHTML = 'Use all gateways';
    gatewaySelectList.appendChild(optAll);

    var optAll2 = document.createElement('option');
    optAll2.value = '';
    optAll2.innerHTML = 'Do not include a gateway in the invite';
    gatewayInviteList.appendChild(optAll2);

    window.ume.storage.gateways.data.forEach((item) => {

        // Populate the dropdown.
        var opt = document.createElement('option');
        opt.value = item.gateway;
        opt.innerText = item.gateway;
        gatewaySelectList.appendChild(opt);

        var opt2 = document.createElement('option');
        opt2.value = item.gateway;
        opt2.innerText = item.gateway;
        gatewayInviteList.appendChild(opt2);

        // Populate the list in settings.
        var gatewayElement = document.createElement("div");

        var node = document.createTextNode(item.gateway);
        gatewayElement.appendChild(node);

        var removeElement = document.createElement('i');
        removeElement.classList.add('material-icons', 'small-icon', 'action');
        removeElement.innerText = 'delete';
        removeElement.addEventListener('click', () => {
            removeGateway(item);
        });

        gatewayElement.appendChild(removeElement);
        gatewayList.appendChild(gatewayElement);
    });
}

function onWipeData(source) {
    document.getElementById('wipe-success').style.display = 'block';
}

function onSaveCommunityPrivateKey(source) {
    var text = document.getElementById('community-private-key').value;
    saveFile(text, 'community-private.key');
}

function onSaveCommunityPublicKey(source) {
    var text = document.getElementById('community-public-key').value;
    saveFile(text, 'community-public.key');
}

function onSaveCommunityPassPhrase(source) {
    var text = document.getElementById('community-pass-phrase').value;
    saveFile(text, 'community-pass-phrase.key');
}

async function onGenerateCommunity() {
    var results = await generateCommunity();
    console.log(results);

    document.getElementById('community-private-key').value = results.privateKey;
    document.getElementById('community-public-key').value = results.publicKey;
    document.getElementById('community-pass-phrase').value = results.passPhrase;
    document.getElementById('community-id').value = results.communityId;
}

(async function onStart() {
    // Hook up page navigations
    var pageLinks = document.querySelectorAll('[data-ume-page]');

    pageLinks.forEach((action) => {
        action.addEventListener('click', () => {
            page(action.getAttribute('data-ume-page'));
        });
    });

    // Hook up actions
    var actionLinks = document.querySelectorAll('[data-ume-action]');

    actionLinks.forEach((action) => {
        action.addEventListener('click', () => {
            window[action.getAttribute('data-ume-action')](action);
        });
    });
}());