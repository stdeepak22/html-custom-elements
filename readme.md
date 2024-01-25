
# Custom Elements - in HTML and JS (not framework or library)
We must have used lot of inbuild/predefined HTML element like - `div`, `p`, `button`, `section`, `aside` or lot more.  But do you know you can create your own custom html element eg. `app-header`, `app-modal` and can abstract the relative logic, html code, and this way you can reuse for code inthe same way as you would have done, when using some framework/library eg. `Angular`, `react`, `vue`, `svelte` and lot more.

I will have all the possible examples of how you can create your own custom element and can utilize it in this repository, best in my knowledge. And as they are not depending on any 3rd party framework/library, logically they will be way faster.

## Types
generally they are categories in 2 categories ([MDN Doc - Custom Elements](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements))
* They can provide custom logic, behaviour to existing HTML element, and they are inherited from respective html element eg. `HTMLImageElement`, `HTMLUListElement`
* They are completely new html element eg. `app-accordion`, `my-custom-modal`.


When it comes to how they are available in DOM (Document Object Model), and how their style can affact the other element on page, they can be categories in two categories again - 
* your custom element's internal HTML structure will be available in DOM, and so the CSS. mean component CSS and the page CSS can overwrite each other if the CSS selector are same by mistake.
* other approach where each component can be created as shadow dom, mean there is no direct link/connect between root dom, and their component's shadow dom. ([Shadow DOM](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_shadow_DOM))


We will have examples of all these in this repository.

Story doesn't end here, we will have more concept around this eg. -
* What's the template, and how to use one?
* Whats the slots, and how its beneficial?
* How Shadow DOM can work with root DOM? how to intract with each other?


``` javascript
💕💕 Stay Tuned!!
```
