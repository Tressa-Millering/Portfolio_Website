


const cards = document.querySelectorAll('.proj-card');

const modal = document.querySelector('.modal');

const body = document.querySelector('body');

const closeModalButtons = document.querySelectorAll('.close-modal');

let inModal = false;

let currCard = null;


cards.forEach((card) => {
    card.addEventListener('click', () => {
        if (!inModal) {
            currCard = card;
            currCard.children[0].classList.add('animation-lock');
            currCard.offsetHeight; // Trigger a reflow, flushing the CSS changes
            modal.classList.add('show');
            body.classList.add('scroll-lock');
            inModal = true;
        }
    })
})




document.addEventListener('keydown', (event) => {
    if (inModal && event.key === 'Escape') {
        modal.classList.remove('show');
        body.classList.remove('scroll-lock');
        currCard.children[0].classList.remove('animation-lock');
        inModal = false;
    }
})


closeModalButtons.forEach((closeModal) => {
    closeModal.addEventListener('click', () => {
        console.log("I just clicked the close!")
        closeModal.parentElement.classList.remove('show');
        body.classList.remove('scroll-lock');
        currCard.children[0].classList.remove('animation-lock');
        inModal = false;
    })
})
