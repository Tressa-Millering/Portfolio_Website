export default function initScrollButtons() {
    const sections = document.querySelectorAll('section');

    const buttons = document.querySelectorAll('.scroll-link');

    document.querySelector('.scroll-to-top').addEventListener('click', (e) => {
        sections[0].scrollIntoView();
    })

    document.querySelector('.enter-button').addEventListener('click', (e) => {
        sections[1].scrollIntoView();
    });


    buttons.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            sections[index].scrollIntoView();
        })
    })
}