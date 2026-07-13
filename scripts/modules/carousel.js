export default function initCarousel() {

    let carousels = [];

    document.querySelectorAll('.carousel').forEach((carousel, index) => {
        carousels[index] = {
            content: carousel.children[0],
            currIndex: 0,
            currPos: 0,
            width: carousel.children[0].offsetWidth,
            length: carousel.children[0].childElementCount,
            nextButton: carousel.querySelector('.carousel-next'),
            prevButton: carousel.querySelector('.carousel-prev')
        }
    })

    carousels.forEach((carousel, index) => {
        carousel.prevButton.addEventListener('click', () => {
            carousels[index].currPos += carousels[index].width;
            carousels[index].currIndex++;
            if (carousels[index].currIndex >= carousels[index].length) {
                carousels[index].currIndex = 0;
                carousels[index].currPos = 0;
            }
            carousels[index].content.style.transform = `translateX(-${carousels[index].currPos}px)`;
        })
        carousel.nextButton.addEventListener('click', () => {
            carousels[index].currPos -= carousels[index].width;
            carousels[index].currIndex--;
            if (carousels[index].currIndex < 0) {
                carousels[index].currIndex = carousels[index].length;
                carousels[index].currPos = ((carousels[index].length - 1) * carousels[index].width);
            }
            carousels[index].content.style.transform = `translateX(-${carousels[index].currPos}px)`;
        })
    })

}