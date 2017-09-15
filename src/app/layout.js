/// <reference path="./container.js"/>
/// <reference path="./markup.js"/>

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
    var gatewayName = document.getElementById('gateway-name').value;

    var gateway = new Gateway();
    gateway.url = gatewayUrl;
    gateway.name = gatewayName;

    window.ume.storage.instance.put(gateway);

    //var storage = window.ume.storage.gateways;
    //storage.insert({ gateway: gatewayUrl });

    updateGatewayList();
}

function removeGateway(item) {
    window.ume.storage.instance.delete(item);
    updateGatewayList();
}

function input(id) {
    return document.getElementById(id).value;
}

function onCreateInviteOpened(parameters) {

    updateCommunityList();
    updateGatewayList();

}

async function onCommunityOpened(parameters) {
    console.log(parameters);

    var community = await window.ume.storage.instance.get('Community', parameters); //  .communities.findOne({ 'id': parameters });

    if (!community) {
        page('introduction');
    } else {
        element('community-view-name').innerText = community.name;
        element('community-view-id').innerText = 'ID: ' + community.id;
        element('community-view-description').innerText = 'Description: ' + community.description;

        console.log(community);

    }
}

async function onCommunitiesOpened() {
    var communitiesList = document.getElementById('communities-list');
    communitiesList.innerHTML = '';

    var communities = await window.ume.storage.instance.getAll(Community.name);
    console.log(communities);

    communities.forEach((community) => {
        communitiesList.appendChild(Markup.communityListItem(community.id, community.name, 'free_breakfast', community.count || 0, community.updated || 'None'));
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

    window.ume.storage.instance.put(entity);
    //window.ume.storage.communities.insert(entity);

    console.log(entity);

    // Navigate to communities page.
    page('communities');
}

function onCreateCommunityOpened() {
    updateGatewayList();
}

function onSettingsOpened() {
    updateGatewayList();
}

async function importJwkKey(jwk) {

    // var jwk = {
    //     alg: 'RSASSA-PKCS1-v1_5',
    //     key_ops: ['verify'],
    //     ext: true,
    //     e: 'AQAB',
    //     kty: 'RSA',
    //     n: 'voFDcAgBSoGnffppOk_ESoQnPg6JOYXJZRv4SD6USJgsSzmFuyqw-En7LS-WvW6twN1wwJjJAyXbzohEZQEvsaR7uTXdcFqNERXef_b-MZv7NdTm9BG2euG9zaHe5NZad89U5b9hGOS9RB_rBgIsg5VZXAuDF6HnltepsQFPWFc'
    // };

    return await window.crypto.subtle.importKey(
        "jwk", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
        jwk,
        {   //these are the algorithm options
            name: "RSASSA-PKCS1-v1_5",
            hash: { name: "SHA-256" }, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
        },
        false, //whether the key is extractable (i.e. can be used in exportKey)
        ["verify"] //"verify" for public key import, "sign" for private key imports
    )
}

// function wrapMessageForTransfer(content)
// {
//     var container = new Container();
//     var message = new Message();
//     var content = new Content();

//     message.content = content;
//     container.message = message;

//     console.log('CONTAINER:');
//     console.log(container);

//     var message = {
//         communityId: content.communityId,
//         body: content
//     }

//     var result = JSON.stringify(message);
//     return result;
// }

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}

async function onGenerateInvite() {
    console.log('Generating invite...');

    var communityId = input('community-invite-list');
    var gateway = input('gateway-invite-list');

    console.log(communityId);
    console.log(gateway);

    var community = window.ume.storage.communities.findOne({ 'id': communityId });
    console.log(community);

    // // Get the user's public key for this specific community.
    // var user = window.ume.storage.keys.findOne( { 'communityId' : communityId });
    // console.log(user);

    // Community owner generates a new invitation:
    var invitation = {
        "community": community.id,
        "invitationId": generateInviteKey()
    };

    var content = new Content();
    content.id = uuidv4();
    content.community = community.id;
    content.type = 'invite';
    content.signature = null;
    content.body = invitation;

    // Wrap using static method (used as example).
    var container = Content.wrap(content);

    console.log(container);

    // Manual wrapping.
    var message = new Message(content);
    message.type = 'invite';

    var invitationContainer = new Container(message);

    //console.log(container);
    //console.log(invitationContainer);

    // Get the private key from the key storage.

    var decodedKey = atob(community.privateKey);
    console.log(decodedKey);

    var communityPrivateKeyArray = JSON.parse(decodedKey);
    console.log(communityPrivateKeyArray);

    var decodedPublicKey = atob(community.publicKey);
    console.log(decodedPublicKey);

    var communityPublicKeyArray = JSON.parse(decodedPublicKey);
    console.log(communityPublicKeyArray);

    var communityPrivateKey = await importJwkFromKeyObject(communityPrivateKeyArray, true);
    console.log(communityPrivateKey);

    var jwkKey = await exportJwkFromKeyObject(communityPrivateKey);
    console.log(jwkKey);

    var signatureBuffer = await signInvitation(communityPrivateKey, stringToUint(invitation));
    var signatureArray = new Uint8Array(signatureBuffer);
    var signature = arrayBufferToBase64(signatureArray);

    // Store the signature on the entity.
    content.signature = signature;

    //var container = new Container(content);
    //var wrappedInvitation = wrapMessageForTransfer(content);

    console.log(container);
    container.encrypt();
    console.log(container);

    //console.log('Send this invite to a user: ', JSON.stringify(invitationEntity));
    document.getElementById('invitation-text').value = JSON.stringify(content);

    //var base64CommunityPublicKey = utoa(JSON.stringify(communityPublicKey));
    //var communityHashArray = new Uint8Array(communityHash);

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

async function updateGatewayList() {

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

    var gateways = await window.ume.storage.instance.getAll(Gateway.name);

    console.log(gateways);

    gateways.forEach((item) => {

        var gatewayDisplayName = '(' + item.url + ')';

        if (item.name) {
            gatewayDisplayName = item.name + ' ' + gatewayDisplayName;
        }

        // Populate the dropdown.
        var opt = document.createElement('option');
        opt.value = item.url;
        opt.innerText = gatewayDisplayName;
        gatewaySelectList.appendChild(opt);

        var opt2 = document.createElement('option');
        opt2.value = item.url;
        opt2.innerText = gatewayDisplayName;
        gatewayInviteList.appendChild(opt2);

        // Populate the list in settings.
        var gatewayElement = document.createElement("div");

        var node = document.createTextNode(gatewayDisplayName);
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

    // Each individual clear/delete operation will be wrapped in their own try/catch to ensure everything is run and attempted.
    // If anything fails, we'll log and show errors (TODO).
    try {
        window.localStorage.clear();
    }
    catch (err) {
        console.error(err);
    }

    try {
        deleteDatabase();
    }
    catch (err) {
        console.error(err);
    }

    document.getElementById('wipe-success').style.display = 'block';

}

function onSaveCommunityPrivateKey(source) {
    var text = document.getElementById('community-private-key').value;
    saveFile(text, 'community-private.key');
}

function onSaveInvite(source) {
    var text = document.getElementById('invitation-text').value;
    saveFile(text, 'community-invite.key');
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

async function onSecurityOpened() {

    var identities = await window.ume.storage.instance.getAll(Identity.name);
    console.log(identities);

    var identitiesList = document.getElementById('identities-list');
    identitiesList.innerHTML = '';

    identities.forEach((identity) => {
        identitiesList.appendChild(Markup.identityListItem(identity.publicKeyFingerprint, identity.verifyKeyFingerprint, 'free_breakfast', identity.count, identity.updated));
    });

    //window.ume.storage.identities.data.forEach((community) => {
    //identitiesList.appendChild(Markup.communityListItem(community.id, community.name, 'free_breakfast', community.count, community.updated));
    //});

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