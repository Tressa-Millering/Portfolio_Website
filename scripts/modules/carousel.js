export default function initCarousel() {

    let carousels = [];

    document.querySelectorAll('.carousel').forEach((carousel, index) => {
        carousels[index] = {
            content: carousel.children[0],
            currIndex: 0,
            currPos: 0,
            length: carousel.children[0].childElementCount,
            nextButton: carousel.querySelector('.carousel-next'),
            prevButton: carousel.querySelector('.carousel-prev'),
            selectors: carousel.children[1].children[2].querySelectorAll('button')
        }
    })

    window.addEventListener('resize', () => {
        carousels.forEach(carousel => { updateWidths(carousel) })
    })


    carousels.forEach((carousel, index) => {
        carousel.prevButton.addEventListener('click', () => {
            carousel.currIndex++;
            if (carousel.currIndex >= carousel.length) {
                carousel.currIndex = 0;
                carousel.currPos = 0;
            } else {
                carousel.currPos = carousel.content.children[carousel.currIndex].offsetLeft;
            }
            setSelectors(carousel, carousel.selectors[carousel.currIndex]);
            carousel.content.style.transform = `translateX(-${carousel.currPos}px)`;
        })

        carousel.nextButton.addEventListener('click', () => {
            carousel.currIndex--;
            if (carousel.currIndex < 0) {
                carousel.currIndex = carousel.length - 1;
                carousel.currPos = getCurrentPosition(carousel, carousel.currIndex);
            } else {
                carousel.currPos = carousel.content.children[carousel.currIndex].offsetLeft;
            }
            setSelectors(carousel, carousel.selectors[carousel.currIndex])
            carousels[index].content.style.transform = `translateX(-${carousels[index].currPos}px)`;
        })

        carousel.selectors.forEach((selector, index) => {
            selector.addEventListener('click', () => {
                setSelectors(carousel, selector)
                carousel.currIndex = index;
                carousel.currPos = carousel.content.children[index].offsetLeft;
                carousel.content.style.transform = `translateX(-${carousel.currPos}px)`;

            })
        })
    })

    function setSelectors(carousel, selector) {
        carousel.selectors.forEach((s) => { s.ariaSelected = 'false'; })
        selector.ariaSelected = (selector.ariaSelected === 'true') ? 'false' : 'true';
    }


    function getCurrentPosition(carousel, index) {
        return carousel.content.children[index].offsetLeft;
    }

    function updateWidths(carousel) {
        carousel.currPos = getCurrentPosition(carousel, carousel.currIndex)
        carousel.content.style.transform = `translateX(-${carousel.currPos}px)`
    }

}

