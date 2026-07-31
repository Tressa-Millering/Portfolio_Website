export default function initScrollButtons() {
    const sections = document.querySelectorAll('section');

    const buttons = document.querySelectorAll('.scroll-link');

    const resnavLinks = document.querySelector('.res-nav-links');


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

    for (let i = 0; i < sections.length; i++) {
        resnavLinks.children[i].addEventListener('click', () => {
            sections[i].scrollIntoView();
        })
    }


}