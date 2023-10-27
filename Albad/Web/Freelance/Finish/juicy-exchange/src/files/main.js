const open = document.querySelector('#burger');
const nav = document.querySelector('#menu'),
menu = nav.querySelectorAll('.menu li');
const body = document.querySelector('body');

menu.forEach(el => {
	el.addEventListener('click', e => {
		nav.classList.remove('_active');
    body.style.overflow = '';
	})
})

open.addEventListener('click', () => {
    nav.classList.add('_active');
    body.style.overflow = 'hidden';
})

document.addEventListener("click", (e) => {
    const target = e.target;

    if (!target.closest(".header__menu") && !target.closest('.header__burger')) {
        body.style.overflow = '' ;
        nav.classList.remove('_active');
    }
});