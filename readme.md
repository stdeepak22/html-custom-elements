
# Custom Elements - in HTML and JS (no framework or library)
We must have used lot of inbuilt/predefined HTML element like - `div`, `p`, `button`, `section`, `aside` or lot more.  But do you know you can create your own custom html element eg. `app-header`, `app-modal` and can abstract the relative logic, html code, and this way you can reuse for code in the same way as you would have done, when using some framework/library eg. `Angular`, `react`, `vue`, `svelte` and others.

I will have all these possible examples of how you can create your own custom element and can utilize them, in this repository, best in my knowledge. And as they are not depending on any 3rd party framework/library, logically they will be way faster.

## Types
generally they are categorized in 2 categories ([MDN Doc - Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements))
* They can provide custom logic, behaviour to existing HTML element, and they are inherited from respective html element eg. `HTMLImageElement`, `HTMLUListElement`
* They are completely new html element eg. `app-accordion`, `my-custom-modal` - fully created by you. You only will decide what it looks like, what all methods they have, how they behave, and what all possible events they have.


When it comes to how they are rendered in DOM (Document Object Model), and how their CSS is applied and available at root score; they can be categories in two categories again - 
* your custom element's internal HTML structure will be available in DOM, and so the CSS. Mean component's CSS and the other CSS on page can overwrite each other if the CSS selector are same by mistake.
* other approach where each component can be created as Shadow DOM, mean there is no direct link/connection between ROOT DOM, and component's shadow dom. ([Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM))


We will have examples of all these in this repository.

Story doesn't end here, we will have more concept around this. Eg. -
* What's the template, and how to use one?
* Whats the slots, and how its beneficial?
* How Shadow DOM can work with root DOM? how to intract with each other?


``` javascript
💕💕 Stay Tuned!!
```

***
***

## chapter-1 ([link](./chapter-1/)) - new element use global css, not shadow-dom.
in this chapter we will create new html element, not the extension of the existing element. Also, it will use the global css, not a shadow dom.

this contains two components -
* Header
    ``` javascript
    export default class Header extends HTMLElement {
        connectedCallback() {
            this.render();
        }

        render() {
            ...
            ...
            this.appendChild(child); //append some html node
        }
    }
    ```
    which is registered as our first custom element called `app-header`

    ``` javascript
    window.customElements.define('app-header', Header);
    ```

* Modal
    ``` javascript
    export default class Modal extends HTMLElement {
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
            ...
            ...
            this.appendChild(child); //append some html node
        }
    }
    ```
    which is registered as another custom html element called "app-modal"
    ``` javascript
    window.customElements.define('app-modal', Modal);
    ```

Thats it, now we can use it like any other html element 
``` html
<app-header title="Github"></app-header>
<app-modal id="modal-1" heading="Modal 1"></app-modal>
```