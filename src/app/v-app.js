
export class ume {

    constructor() {

    }

    async onDetailsOpened() {
        console.log('onDetailsOpened!!!');
    }

    async onStarted(v) {
        console.log('onStarted from app module!');

        // Make the loading screen appear for a second. This is normally not needed, just for sample demo:
        setTimeout(() => {
            v.hide('loading');
        }, 500);
    }

    async onStart() {
        console.log('onStart from app module!');
    }

    async onAlert() {
        console.log('onAlert was called on MyApp!');
    }

    toggleMenu(v) {
        v.el('menu').classList.toggle('open');
        v.el('container').classList.toggle('open');
        v.el('content').classList.toggle('open');
    }
}