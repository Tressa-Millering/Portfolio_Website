export default function initScrollButtons() {
    const sections = document.querySelectorAll('section');

    const buttons = document.querySelectorAll('.scroll-link');

    document.querySelector('.scroll-to-top').addEventListener('click', () => {
        sections[0].scrollIntoView();
    })

    document.querySelector('.enter-button').addEventListener('click', () => {
        sections[1].scrollIntoView();
    });


    buttons.forEach((link, index) => {
        link.addEventListener('click', () => {
            sections[index].scrollIntoView();
        })
    })

    document.getElementById('footer-about').addEventListener('click', () => {
        sections[1].scrollIntoView();
    })
}