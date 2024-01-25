export default class Modeal extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    show() {
        this.querySelector('.modal-wrapper')?.classList.add('show');
    }

    hide() {
        this.querySelector('.modal-wrapper')?.classList.remove('show');
    }

    render() {
        // create one modal wrapper and add this to custom element - "app-modal"
        const wrapper = document.createElement('div');
        wrapper.classList.add('modal-wrapper');
        this.appendChild(wrapper);

        // create backdrop on the actual modal, and add it to ".modal-wrapper"
        const backdrop = document.createElement('div');
        backdrop.classList.add('modal-backdrop');
        wrapper.appendChild(backdrop);

        // create actual "modal" div which will have, header and body, and add it to ".modal-wrapper"
        const modal = document.createElement('div');
        modal.classList.add('modal');
        wrapper.appendChild(modal);

        //add header to ".modal"
        const header = document.createElement('div');
        header.classList.add('modal-header');
        modal.appendChild(header);

        // add modal title using the attribute on "app-modal" named "heading" to ".modal-header"
        const heading = document.createElement('label');
        heading.textContent = this.getAttribute('heading');
        header.appendChild(heading);

        //create close button to close the modal to ".modal-header"
        const closeButton = document.createElement('button');
        closeButton.classList.add('close-button');
        closeButton.title = `Close`;
        closeButton.innerHTML = `&times;`;
        closeButton.addEventListener(`click`, () => this.hide());
        header.appendChild(closeButton);

        // create modal body, and add it to ".modal"
        const modalBody = document.createElement('div');
        modalBody.classList.add(`modal-body`);
        modal.appendChild(modalBody);


        // add heading and image to ".modal-body"
        const h3 = document.createElement("h3");
        const img = document.createElement('img');
        h3.textContent = "this is h3 inside modal body";
        img.src = "https://picsum.photos/800/450";
        img.style.width = `100%`;
        modalBody.append(h3, img);
    }
}
