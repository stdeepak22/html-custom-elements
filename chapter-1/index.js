import Modal from './components/modal.js';
import Header from './components/header.js';

/**
 * Register custom elements
 * Header as "app-header"
 * Modal as "app-modal"
 */
window.customElements.define('app-header', Header);
window.customElements.define('app-modal', Modal);


//add event listener on button to show the button
document.querySelector(`#btn1`).addEventListener('click', () => {

    //get the instance of custom element as usual with the "querySelector"
    const AppModal = document.querySelector('#modal-1');

    //call the custom method "show" on modal which is custom element
    AppModal.show();
});
