class Markup {

    constructor() {

    }

    static icon(icon, ...classes) {
        var element = document.createElement('i');
        element.classList.add('material-icons');

        classes.forEach((name) => {
            element.classList.add(name);
        });

        element.innerText = icon;
        return element;
    }

    static strong(text) {
        var element = document.createElement('strong');
        element.innerText = text;
        return element;
    }

    static linebreak() {
        return document.createElement('br');
    }

    static span(text, ...classes) {
        var element = document.createElement('span');

        classes.forEach((name) => {
            element.classList.add(name);
        });

        element.innerText = text;
        return element;
    }

    static text(text) {
        return document.createTextNode(text);
    }

    static communityListItem(id, name, icon, count, updated) {
        var container = document.createElement('div');
        container.classList.add('community-item');

        container.appendChild(Markup.icon('free_breakfast', 'community-icon'));

        var openCommunityButton = Markup.icon('chevron_right', 'float-right', 'action');
        openCommunityButton.addEventListener('click', () => {
            page('community', id);
        });
        //openCommunityButton.setAttribute('data-ume-page', 'community');

        container.appendChild(openCommunityButton);
        container.appendChild(Markup.strong(name));
        container.appendChild(Markup.linebreak());
        container.appendChild(Markup.span(id, 'community-item-id'));
        container.appendChild(Markup.linebreak());
        container.appendChild(Markup.text('Posts: ' + count));
        container.appendChild(Markup.linebreak());
        container.appendChild(Markup.text('Latest post: ' + updated));

        return container;
    }
}