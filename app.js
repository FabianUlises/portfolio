const btn = document.querySelector('.btn');
const navMenu = document.querySelector('.nav-menu');

btn.addEventListener('click', () => {
    console.log('button clicked!')
    navMenu.classList.toggle('toggle-nav');
});