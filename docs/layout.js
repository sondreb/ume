function page(id) {
    var pages = document.getElementsByClassName('page-open');

    if (pages.length > 0) {
        pages[0].classList.remove('page-open');
    }

    var page = document.getElementById('page-' + id);
    page.classList.add('page-open');

    var openedEvent = page.getAttribute('data-ume-opened');

    if (openedEvent) {
        window[openedEvent]();
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

function onSettingsOpened() {
    updateGatewayList();
}

function updateGatewayList() {
    var gatewayList = document.getElementById('gateway-list');

    gatewayList.innerHTML = '';

    window.ume.storage.gateways.data.forEach((item) => {

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
    document.getElementById('community-id').innerText = results.communityId;
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