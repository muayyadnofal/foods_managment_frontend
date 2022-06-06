const nav = document.querySelector('nav');
const sub_nav = document.querySelector('.sub-nav');
window.addEventListener('scroll', fixNav);

// add and remove active class to navbar when scrolling
function fixNav() {
    if(window.scrollY > nav.offsetHeight - 40) {
        nav.classList.add('active');
        sub_nav.classList.add('active');
    } else {
        nav.classList.remove('active');
        sub_nav.classList.remove('active');
    }
}