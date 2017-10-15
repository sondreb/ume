import { V } from './v.js';
import { ume } from './v-app.js';

// Sample that relies on a class instance for handlers.
var app = new V({
    selector: 'v',
    logging: true,
    start: 'page-home',
    configuration: { updateUrl: false },
    app: new ume()
});

// Even though these variables are not initialized within a class, they are not registered globally.
// If you need to access these instances somewhere else in code, you can uncomment this code:

// window.myApp = app;
