import initNav from '/scripts/modules/nav.js';
import initModals from '/scripts/modules/modals.js';
import initScrollButtons from '/scripts/modules/scroll-buttons.js';
import initCardLinks from '/scripts/modules/card-links.js';

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initModals();
    initScrollButtons();
    initCardLinks();

    console.log("TEST")
})
