# Modal Cards

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See modal card once button is clicked
- Close modal card with X button, ESC press and clicking outside modal card

### Links

- Solution URL: [https://github.com/TomasScerbak/suite-landing-page.git]
- Live Site URL: [https://tomasscerbak.github.io/suite-landing-page/]

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Desktop only approach

### What I learned

I've learned how to show user hidden elements once clicked on button and add functionality to user to escape the modal card by clicking on X button, ESC keypress or click outside modal card.

Also I created helper functions to keep DRY principle.

From the HTML persective, I learned to provide to user different img quality depending on device using WEBP format and @2x formats for RETINA displey.

To see how you can add code snippets, see below:

```js
// Helper function to open modal cards
const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

// Helper function to close modal cards
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
// Iterating thru each button and adding click function to show or close modal cards
modalBtns.forEach(element => {
    element.addEventListener('click', openModal);
})

// Closing modal cards when clicked on X button, click outside card or pressing ESC button
btn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
})

```

### Continued development

keep creating small vanilla JS projects

## Author

- Website - [Tomas Scerbak](https://tomasscerbak.github.io/tomas-scerbak-portfolio/)
- Frontend Mentor - [@Potato](https://www.frontendmentor.io/profile/TomasScerbak)
