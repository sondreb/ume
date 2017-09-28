
/** v.js is a tiny and quick library for interactive web apps.
 *  v0.0.1
 * 
 * If you want a full featured library, look elsewhere.
 * 
 * v.js only supports the most modern browsers, relies on the latest JavaScript specifications.
 * 
 * It can be used in two manners: global functions or scoped functions attatched to the V instance.
 * 
 */
class V {

    constructor(configuration) {
        if (configuration.root) {
            this.root = this.el(configuration.root);
        } else {
            this.root = window.document;
        }

        this.namespace = 'data-';

        if (configuration.namespace) {
            this.namespace += configuration.namespace + '-';
        }

        this.init();
    }

    el(id) {
        return document.getElementById(id);
    }

    async page(id) {
        var pages = document.getElementsByClassName('page-open');

        if (pages.length > 0) {
            pages[0].classList.remove('page-open');
        }

        var page = document.getElementById('page-' + id);
        page.classList.add('page-open');

        var openedEvent = page.getAttribute(this.namespace + 'opened');

        if (openedEvent) {
            // Call the opened page and grab the return data structure used for binding.
            var data = await window[openedEvent](parameters, page);
            this.bind(page, data);
        }
    }

    bind(element, data) {
        var children = element.children;
        for (var i = 0; i < children.length; i++) {
            var child = children[i];

            var bindAttribute = child.getAttribute(this.namespace + 'bind');

            if (bindAttribute !== null) {
                var dataValue = this.getData(data, bindAttribute);

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

            this.bind(child, data);
        }
    }

    getData(data, prop) {
        if (typeof data === 'undefined') {
            return;
        }

        var _index = prop.indexOf('.');

        if (_index > -1) {
            return this.getData(data[prop.substring(0, _index)], prop.substr(_index + 1));
        }

        return data[prop];
    }

    setData(data, prop, value) {
        if (typeof data === 'undefined') {
            return;
        }

        var _index = prop.indexOf('.');

        if (_index > -1) {
            if (data[prop.substring(0, _index)] === undefined) {
                // Populate the data structure with a new empty object structure.
                data[prop.substring(0, _index)] = {};
            }

            return this.setData(data[prop.substring(0, _index)], prop.substr(_index + 1), value);
        }

        data[prop] = value;
    }

    init() {

        debugger;

        // Hook up page navigations
        var pageLinks = this.root.querySelectorAll('[' + this.namespace + 'page]');

        pageLinks.forEach((action) => {
            action.addEventListener('click', () => {
                debugger;
                this.page(action.getAttribute(this.namespace + 'page'));
            });
        });

        // Hook up actions
        var actionLinks = document.querySelectorAll('[' + this.namespace + 'action]');

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

                window[action.getAttribute(this.namespace + 'action')](action, data);
            });
        });
    }
}
