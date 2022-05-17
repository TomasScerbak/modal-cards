'use strict';

// Grabbing DOM elements
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');
const modalBtns = document.querySelectorAll('.show-modal');

modalBtns.forEach(element => {
    element.addEventListener('click', function() {
        modal.classList.remove('hidden');
    })
})