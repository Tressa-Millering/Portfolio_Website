export default function initNav() {
    const nav = document.querySelector('.navbar');

    let active = false;

    const scrollButton = document.querySelector('.scroll-to-top');

    document.addEventListener('scroll', e => {
        if (window.scrollY >= 150 && !active) {
            active = true;
            nav.classList.add('scrolled');
            nav.style.paddng = ""
            scrollButton.style.opacity ='1';
            return;
        }

        if (window.scrollY < 150 && active) {
            active = false;
            nav.classList.remove('scrolled');
            scrollButton.style.opacity = '0';
        }
    })

}