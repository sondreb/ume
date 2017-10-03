/// <reference path="./v.js"/>
/// <reference path="./container.js"/>
/// <reference path="./markup.js"/>
/// <reference path="./util.js"/>

var UME_PRV_HEADER = '-- BEGIN UME PRIVATE KEY BLOCK --\n-- Ver: UME v1.0.0.0 --\n';
var UME_PRV_FOOTER = '-- END UME PRIVATE KEY BLOCK --';
var UME_PUB_HEADER = '-- BEGIN UME PUBLIC KEY BLOCK --\n-- Ver: UME v1.0.0.0 --\n';
var UME_PUB_FOOTER = '-- END UME PUBLIC KEY BLOCK --';

function databind(element, data) {
    var children = element.children;
    for (var i = 0; i < children.length; i++) {
        var child = children[i];

        var bindAttribute = child.getAttribute('data-ume-bind');

        if (bindAttribute !== null) {
            var dataValue = getData(data, bindAttribute);

            if (dataValue === undefined) {
                // We'll force the dataValue to be null, so we won't see "undefined" text in input fields.
                dataValue = null;
            }

            if (child.nodeName === 'INPUT') {
                child.value = dataValue;
            } else {
                child.innerHTML = dataValue;
            }
        }

        databind(child, data);
    }
}

function getData(data, prop) {
    if (typeof data === 'undefined') {
        return;
    }

    var _index = prop.indexOf('.');

    if (_index > -1) {
        return getData(data[prop.substring(0, _index)], prop.substr(_index + 1));
    }

    return data[prop];
}

function setData(data, prop, value) {
    if (typeof data === 'undefined') {
        return;
    }

    var _index = prop.indexOf('.');

    if (_index > -1) {
        if (data[prop.substring(0, _index)] === undefined) {
            // Populate the data structure with a new empty object structure.
            data[prop.substring(0, _index)] = {};
        }

        return setData(data[prop.substring(0, _index)], prop.substr(_index + 1), value);
    }

    data[prop] = value;
}

async function page(id, parameters) {
    var pages = document.getElementsByClassName('page-open');

    if (pages.length > 0) {
        pages[0].classList.remove('page-open');
    }

    var page = document.getElementById('page-' + id);
    page.classList.add('page-open');

    var openedEvent = page.getAttribute('data-ume-opened');

    if (openedEvent) {
        // Call the opened page and grab the return data structure used for binding.
        var data = await window[openedEvent](parameters, page);
        databind(page, data);
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

function onProfileSave(source, data) {

    var profile = new Profile();

    profile.id = data.identity.id;
    profile.nickname = data.profile.nickname;
    profile.name = data.profile.name;
    profile.email = data.profile.email;
    profile.phone = data.profile.phone;
    profile.location = data.profile.location;

    window.ume.storage.instance.put(profile);

    page('security');
}

function onGatewaySave(source, data) {
    var gateway = new Gateway();
    gateway.name = data.gateway.name;
    gateway.url = data.gateway.url;

    window.ume.storage.instance.put(gateway);

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

async function updateCommunityList() {

    console.log('Update community list!');

    var communityList = document.getElementById('community-invite-list');
    communityList.innerHTML = '';

    var communities = await window.ume.storage.instance.getAll(Community.name);

    communities.forEach((item) => {
        var opt = document.createElement('option');
        opt.value = item.id;
        opt.innerText = item.id + ' (' + item.name + ')';
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

async function onSecurityOpened(parameters, page) {

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

async function onIdentityOpened(parameters, page) {

    var identity = await window.ume.storage.instance.get(Identity.name, parameters);

    var data = {
        identity: {
            publicFingerprint: CryptoUtil.uint8ArrayToHex(identity.publicKeyFingerprint, ':'),
            verifyFingerprint: CryptoUtil.uint8ArrayToHex(identity.verifyKeyFingerprint, ':')
        },
        profile: {

        }
    };

    var id = CryptoUtil.uint8ArrayToHex(identity.publicKeyFingerprint, ':');
    var profile = await window.ume.storage.instance.get(Profile.name, id);

    if (profile) {
        data.profile = profile;
    }

    return data;
}

async function onSaveIdentity(source, data) {

    console.log('Saving identity...');

    // TODO: Add export of public and private key data.
    var identityId = data.identity.id;
    var identityIdHex = identityId.split(':').join('');
    var idArray = CryptoUtil.hexToUint8Array(identityIdHex);

    var identity = await window.ume.storage.instance.get(Identity.name, idArray);

    console.log('Identity', identity);

    var publicKeyData = await CryptoUtil.exportPublicKey(identity.publicKey);
    var privateKeyData = await CryptoUtil.exportPrivateKey(identity.privateKey);

    var util = new Util();
    var publicKeyDataText = util.convertArrayBufferToBase64(publicKeyData);
    var privateKeyDataText = util.convertArrayBufferToBase64(privateKeyData);

    var identityPublicKeySection = UME_PUB_HEADER + publicKeyDataText + '\n' + UME_PUB_FOOTER; //CryptoUtil.convertUint8ArrayToBase64()
    var identityPrivateKeySection = UME_PRV_HEADER + privateKeyDataText + '\n' + UME_PRV_FOOTER;

    var identity = identityPublicKeySection + '\n\n' + identityPrivateKeySection;

    //var text = document.getElementById('community-private-key').value;
    saveFile(identity, 'identity.key');
}

function findParentWithClass(element, className) {

    if (!element) {
        return;
    }

    if (element.classList && element.classList.contains(className)) {
        return element;
    }

    return findParentWithClass(element.parentNode, className);
}


/** Event handlers are regular methods. They take a certain set of parameters */
async function onDetailsOpened() {
    console.log('onDetailsOpened!!!');
}


(async function onStart() {

    // var app = new V({
    //     root: 'my-app',
    //     namespace: 'v',
    // });

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
        action.addEventListener('click', (source) => {
            // Find all input element contained within the parent element that has a class named "input-form".
            var inputForm = findParentWithClass(action, 'input-form');

            if (inputForm) {
                var inputElements = inputForm.getElementsByTagName('input');

                var data = {
                };

                for (var i = 0; i < inputElements.length; i++) {
                    var input = inputElements[i];

                    var id = input.name.replace('-', '.');
                    var value = input.value;

                    setData(data, id, value);

                    // Replace the form input fields.
                    input.value = null;
                }
            }

            window[action.getAttribute('data-ume-action')](action, data);
        });
    });
}());