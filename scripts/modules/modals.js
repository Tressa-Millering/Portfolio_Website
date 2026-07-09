
export default function initModals() {

    const cards = document.querySelectorAll('.proj-card');

    const modals = document.querySelectorAll('.modal');

    const body = document.querySelector('body');

    const closeModalButtons = document.querySelectorAll('.close-modal');

    let inModal = false;

    let currCard = null;

    let currModal = null;


    cards.forEach((card, index) => {
        card.addEventListener('click', async () => {
            if (!inModal) {
                currCard = index;
                currModal = index;
                inModal = true;

                cards[currCard].children[0].classList.add('animation-lock');
                cards[currCard].offsetHeight; // Trigger a reflow, flushing the CSS changes
                body.classList.add('scroll-lock');

                modals[currModal].style.display = 'block';
                modals[currModal].offsetHeight;
                modals[currModal].classList.add('show');
            }
        })
    })


    document.addEventListener('keydown', (e) => {
        if (inModal && e.key === 'Escape') {
            closeModal();
        }
    })


    closeModalButtons.forEach((button) => {
        button.addEventListener('click', (e) => { closeModal() })
    })


    function closeModal() {
        modals[currModal].classList.remove('show')
        modals[currModal].classList.add('exit')

        modals[currModal].addEventListener('transitionend', function handler(e) {
            if (e.target !== modals[currModal]) return;
            if (e.propertyName !== 'top') return;

            modals[currModal].style.display = 'none';
            body.classList.remove('scroll-lock');
            cards[currCard].children[0].classList.remove('animation-lock');
            inModal = false;
            modals[currModal].classList.remove('exit');
            modals[currModal].removeEventListener('transitionend', handler)
        })
    }

}