
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

    async onGatewaySave(v, event, source, data) {
        var gateway = new Gateway();
        gateway.name = data.gateway.name;
        gateway.url = data.gateway.url;

        await window.ume.storage.instance.put(gateway);

        this.onSettings();
    }

    async onSettings() {
        var gateways = await window.ume.storage.instance.getAll(Gateway.name);

        console.log('GATEWAYS:', gateways);
        var data = { gateways: gateways };

        return data;
    }

    async removeGateway(v, event, source, data) {
        console.log('Data should contain the gateway to remove: ', data);
    }

    toggleMenu(v) {
        v.el('menu').classList.toggle('open');
        v.el('container').classList.toggle('open');
        v.el('content').classList.toggle('open');
    }
}