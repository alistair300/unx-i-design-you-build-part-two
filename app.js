const btn = document.querySelector('.toggler');
const nav = document.querySelector('.mobile-links');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    body.classList.toggle('open');
});