

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

}());