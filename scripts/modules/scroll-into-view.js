export default function initScrollIntoView () {
    const items = document.querySelectorAll('.exp-item');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle('is-active', entry.isIntersecting);
            });
        },
        {
            threshold: 0.9
        }
    );

    items.forEach((el) => observer.observe(el));

}