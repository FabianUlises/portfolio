// Defining variables
const btn = document.querySelector('.btn');
const navMenu = document.querySelector('.nav-menu');

// Btn function to toggle nav
btn.addEventListener('click', () => {
    navMenu.classList.toggle('toggle-nav');
    btn.classList.toggle('toggle');

});