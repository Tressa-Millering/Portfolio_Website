import initNav from './modules/nav.js';
import initModals from './modules/modals.js';
import initScrollButtons from './modules/scroll-buttons.js';
import initCardLinks from './modules/card-links.js';
import initScrollIntoView from './modules/scroll-into-view.js';
import initCarousel from './modules/carousel.js';

console.log("Script Loaded!")

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    initModals();
    initScrollButtons();
    initCardLinks();
    initScrollIntoView();
    initCarousel();

})
