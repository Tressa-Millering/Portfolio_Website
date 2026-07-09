export default function initScrollButtons() {
    const sections = document.querySelectorAll('section');

    const buttons = document.querySelectorAll('.scroll-link');

    buttons.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            sections[index].scrollIntoView();
        })
    })
}