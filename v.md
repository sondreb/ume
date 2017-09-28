# v.js

v.js is a tiny and quick library for interactive web apps.

If you want a full featured library, look elsewhere.

v.js only supports the most modern browsers, relies on the latest JavaScript specifications.

## Reference v.js

```html
<script src="v.js"></script>
```

## Initialize

Within your application logic, e.g. a file named "app.js" which must be included after the "v.js", you can initialize the v.js like the following example:

```js
var app = new V();
```

This is the most simple way of doing the initialization. There are options you can set to further customize the bootstrapping of v.js.

```js
var app = new V({
    root: 'my-app', 
    namespace: 'v', // 
    app: new MyApp() 
});
```

## v.js configuration options
* root: The starting HTML element. You can use multiple V instances that are connected to different HTML elements. If you don't supply the root ID, the body element will be used. This property is the ID of the DOM element, the only selector supported for root element.
* namespace: The namespace for data-* attributes. The default value is "v", you can specify custom values.
* app: Creates a new instance of an class where all your event handlers and callback handlers are registered. By default, the V instance will attempt to find the handlers on the global object.


## Page Navigation

Navigating pages are done using the "data-v-page" attribute on buttons.

```html
<button data-v-page="welcome">Open Welcome Page</button>

<div id="page-welcome">
    <h1>Welcome page!</h1>
    <p>This is the introduction.</p>
</div>
```

When this button is clicked, the HTML element with the ID "page-welcome" will be come visible.

If you want to know when a page has been activated, you can register a handler using the "data-v-opened" attribute.

```html
<div id="page-welcome" data-v-opened="onDetailsOpened">
```

When a page navigation occurs, v.js will attempt to either call a globally defined function named onDetailsOpened, or if the app instance is defined on the V instance, that will be used.

```js
async function onDetailsOpened(parameters, page) {

}
```

The parameters are supplied custom parameters to the navigation, and the page is a DOM element reference to the page object itself.

## Forms and input

v.js supports basic forms and input. Simply create input fields either with a form element or any HTML element with the class "v-form". Everything with the form, or the element with class "v-form", will be submitted to the action handler.

```html
<input type="text" name="profile-nickname">

<button data-v-action="onProfileSave">Save</button>
```

The handler for actions receives the source and data. The source if the button that triggered the action, and the data contains a nicely formatted structure that maps the properties to individuals objects based on the "-" separator.

```js
function onProfileSave(source, data) {
    var nickname = data.profile.nickname;
}
```

### Binding

On the page handlers, you can load and set the data object which is then used by the data-v-bind attributes. If we expand the previous example, it will look like this:

```html
<input type="text" name="profile-nickname" data-v-bind="profile.nickname">

<button data-ume-action="onProfileSave">Save</button>
```

Within the data-v-opened page handler for this page, you must return an object containing a profile structure with a nickname value.

```js
async function onDetailsOpened(parameters, page) {

    var identity = await getUser(parameters);

    var data = {
        profile: identity.profile;
    };

    return data;
}

```

# License

v.js is published under "The Unlicense", making it as free as possible to do with as you please. Can be used for commercial projects, open source and everything else.

# The Unlicense

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>
