export default function initCarousel() {
    const carousels = document.querySelectorAll('.carousel');
    const forwardButtons = document.querySelectorAll('.carousel-prev');
    const backButtons = document.querySelectorAll('.carousel-next');

    const length = carousels[0].children[0].childElementCount;
    let currIndex = 0;
    let currPos = 0;



    forwardButtons.forEach((forwardButton, index) => {
        forwardButton.addEventListener('click', (e) => {
            const kids = carousels[index].children[0];
            currPos += kids.offsetWidth;
            currIndex++;
            if (currIndex >= length) {
                currIndex = 0;
                currPos = 0;
            }
            kids.style.transform = `translateX(-${currPos}px)`;
        })
    })

    backButtons.forEach((backButton, index) => {
        backButton.addEventListener('click', (e) => {
            const kids = carousels[index].children[0];
            currPos -= kids.offsetWidth;
            currIndex--;
            if (currIndex < 0) {
                currIndex = length;
                currPos = ((length-1) * kids.offsetWidth);
            }
            kids.style.transform = `translateX(-${currPos}px)`;
        })
    })

}