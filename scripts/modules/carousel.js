export default function initCarousel() {
    const carousels = document.querySelectorAll('.carousel');
    const forwardButtons = document.querySelectorAll('.carousel-forward');
    const backButtons = document.querySelectorAll('.carousel-backward');

    let currPos = 0;

    forwardButtons.forEach((forwardButton, index) => {
        forwardButton.addEventListener('click', (e) => {
            const kids = carousels[index].children[0];
            currPos += kids.offsetWidth;

            kids.style.transform = `translateX(${currPos}px)`;
        })
    })

    backButtons.forEach((backButton, index) => {
        backButton.addEventListener('click', (e) => {
            const kids = carousels[index].children[0];
            currPos -= kids.offsetWidth;

            kids.style.transform = `translateX(${currPos}px)`;
        })
    })

}