export default function initNav() {
    const navbar = document.querySelector('.navbar');
    let navbar_active = false;

    const scrollButton = document.querySelector('.scroll-to-top');

    const resnavOpen = document.querySelector('.resnav-open');

    if (window.innerWidth < 945) {
        navbar_active = true;
        navbar.classList.add('scrolled');
    }

    const debounce = (fn, t) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn(...args), t)
        }
    };

    const resizeDebounce = debounce(() => {
        if (window.innerWidth >= 945) {
            navbar_active = false;
            navbar.classList.remove('scrolled');
            return;
        }
        navbar_active = true;
        navbar.classList.add('scrolled');
    }, 200);

    const scrollDebounce = debounce(() => {
        if (window.scrollY >= 150) {
            scrollButton.style.opacity = '1';
            if (!navbar_active) {
                navbar_active = true;
                navbar.classList.add('scrolled');
                navbar.style.paddng = ""
                return;
            }
        }

        if (window.scrollY < 150) {
            scrollButton.style.opacity = '0';

            if (window.innerWidth >= 945 && navbar_active) {
                navbar_active = false;
                navbar.classList.remove('scrolled');
            }
        }
    }, 25)

    document.addEventListener('scroll', scrollDebounce);
    window.addEventListener('resize', resizeDebounce);

    resnavOpen.addEventListener('click', (e) => {
        e.preventDefault();
        resnavOpen.children[0].checked = !resnavOpen.children[0].checked;
        resnavOpen.nextElementSibling.classList.toggle('resnav-active');
    });

    document.addEventListener('keydown', (e) => {
        if (resnavOpen.children[0].checked && e.key === 'Escape') {
            resnavOpen.children[0].checked = false;
            resnavOpen.nextElementSibling.classList.toggle('resnav-active');
        }
    })

}

