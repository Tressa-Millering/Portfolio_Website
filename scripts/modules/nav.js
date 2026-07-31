export default function initNav() {
    const navbar = document.querySelector('.navbar');
    let navbar_active = false;

    const scrollButton = document.querySelector('.scroll-to-top');

    const resnavOpen = document.querySelector('.res-nav-open');

    document.addEventListener('scroll', () => {
        if (window.scrollY >= 150 && !navbar_active) {
            navbar_active = true;
            navbar.classList.add('scrolled');
            navbar.style.paddng = ""
            scrollButton.style.opacity ='1';
            return;
        }

        if (window.scrollY < 150 && navbar_active) {
            navbar_active = false;
            navbar.classList.remove('scrolled');
            scrollButton.style.opacity = '0';
        }
    })

    resnavOpen.addEventListener('click', (e) => {
        e.preventDefault();
        resnavOpen.children[0].checked = !resnavOpen.children[0].checked;
        resnavOpen.nextElementSibling.classList.toggle('res-nav-active');
    });

    document.addEventListener('keydown', (e) => {
        if (resnavOpen.children[0].checked && e.key === 'Escape') {
            resnavOpen.children[0].checked = false;
            resnavOpen.nextElementSibling.classList.toggle('res-nav-active');
        }
    })

}