
const cardLinks = document.querySelectorAll('.proj-card-link');

cardLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.stopPropagation();
    })
})