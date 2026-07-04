const nav = document.querySelector('nav');

let active = false;

document.addEventListener('scroll', e => {
    if (window.scrollY >= 150 && !active) {
        active = true;
        nav.classList.add('scrolled');
        return;
    }

    if (window.scrollY < 150 && active) {
        active = false;
        nav.classList.remove('scrolled');
    }
})