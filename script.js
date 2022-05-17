'use strict';

// Grabbing DOM elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const modalBtns = document.querySelectorAll('.show-modal');

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
