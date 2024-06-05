// Select toggle btn wrapper
const toggleBtnIcons = document.querySelector('.toggle-icon');
// Select both the toggle btns as well the bars and the times
const toggleBtnBars = document.querySelector('.times');
const toggleBtntimes = document.querySelector('.bars');
// Select the links-container and the nav links
const linksContainer = document.querySelector('.links-container');
const navContainer = document.querySelector('.nav-link-wrapper');

// Select the social icons
const showIcons = document.querySelector('.social-icons');

// Set the toggle function
function toggleIcons() {
    const linkContainerHeight = linksContainer.getBoundingClientRect().height;
    const navContainerHeight = navContainer.getBoundingClientRect().height;

    if (linkContainerHeight === 0) {
        linksContainer.style.height = `${navContainerHeight}px`;
        toggleBtnBars.style.display = "block";
        toggleBtntimes.style.display = "none";
    } else if (linkContainerHeight === navContainerHeight) {
        linksContainer.style.height = 0;
        toggleBtntimes.style.display = "block";
        toggleBtnBars.style.display = "none";
    }
}

toggleBtnIcons.addEventListener('click', toggleIcons);

// Links items
const links = document.querySelectorAll('.link');

links.forEach(function (linksItem) {
    linksItem.addEventListener('click', function (item) {
        linksContainer.style.height = 0;
        toggleBtntimes.style.display = "block";
        toggleBtnBars.style.display = "none";
    });
});

// Add functionality to animate rolling ball
const mySelf = document.querySelector('.my-self');

// Directly add the animation class to the ball element
mySelf.classList.add('animate');

// Back to top icon functionality
const scrollLink = document.querySelector('.scroll-link');
window.addEventListener('scroll', function () {
    const topLink = window.pageYOffset;
    if (topLink > 500) {
        scrollLink.classList.add('show-link');
    } else {
        scrollLink.classList.remove('show-link');
    }
});

let typed = new Typed('.auto-typed', {
    strings: ['Associate Software Engineer,'],
    typeSpeed: 30,
    backSpeed: 220,
    loop: true,
});

let typed2 = new Typed('.auto-typed2', {
    strings: ['Experion Technologies'],
    typeSpeed: 220,
    backSpeed: 30,
    loop: true,
});

