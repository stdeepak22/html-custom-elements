export default class Header extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {

        // create div container ".navbar", and add to custom element - "app-header"
        const navbar = document.createElement(`div`);
        navbar.classList.add('navbar');
        this.appendChild(navbar);

        // create a section ".brand" add it to ".navbar"
        const brand = document.createElement('div');
        brand.classList.add(`brand`);
        navbar.appendChild(brand);

        // create label with attribute "title", and add it to ".brand"
        const brandName = document.createElement('label');
        brandName.textContent = this.getAttribute('title');
        brand.appendChild(brandName);

        // a div container ".navlinks", and add it to ".navbar"
        const navlinks = document.createElement('div');
        navlinks.classList.add(`navlinks`);
        navbar.appendChild(navlinks);

        //create ul, li with dummy menus and add inside ".navlinks"
        const ul_links = document.createElement('ul');
        ['Home', 'Contact', '...more'].forEach(t => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.href = '#';
            a.textContent = t;
            li.appendChild(a);
            ul_links.append(li);
        })
        navlinks.appendChild(ul_links);
    }
}
