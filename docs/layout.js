function page(id) {

    var pages = document.getElementsByClassName('page-open');

    if (pages.length > 0) {
        pages[0].classList.remove('page-open');
    }

    var page = document.getElementById('page-' + id);
    page.classList.add('page-open');
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

(async function onStart() {

    var actionLinks = document.querySelectorAll('[data-ume-page]');

    actionLinks.forEach((action) => {
        action.addEventListener('click', function () {
            page(action.getAttribute('data-ume-page'));
        });
    });

    document.getElementById('menu-button').addEventListener('click', toggleMenu);
    document.getElementById('menu-button-close').addEventListener('click', toggleMenu);

    document.getElementById('wipe-data').addEventListener('click', () => {
        document.getElementById('wipe-success').style.display = 'block';
    });


    document.getElementById('community-private-key-save').addEventListener('click', () => {
        var text = document.getElementById('community-private-key').value;
        saveFile(text, 'community-private.key');
    });

    document.getElementById('community-public-key-save').addEventListener('click', () => {
        var text = document.getElementById('community-public-key').value;
        saveFile(text, 'community-public.key');
    });

    document.getElementById('community-pass-phrase-save').addEventListener('click', () => {
        var text = document.getElementById('community-pass-phrase').value;
        saveFile(text, 'community-pass-phrase.key');
    });

    document.getElementById('generate-community').addEventListener('click', async () => {

        var results = await generateCommunity();

        console.log(results);

        document.getElementById('community-private-key').value = results.privateKey;
        document.getElementById('community-public-key').value = results.publicKey;
        document.getElementById('community-pass-phrase').value = results.passPhrase;






    });

}());