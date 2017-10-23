import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

if (environment.production) {
	enableProdMode();
} else {
	enableProdMode();
}

const ume = {
	version: environment.version
};

(<any>window).ume = ume;

platformBrowserDynamic().bootstrapModule(AppModule)
	.catch(err => console.log(err));
