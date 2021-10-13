'use strict'

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark'); 
  } else {
    navbar.classList.remove('navbar--dark');
  }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu')
navbarMenu.addEventListener('click', event => {
  console.log(event.target);

  const link = event.target.dataset.link
  if (link == null) {
    return
  }

  scrollIntoView(link); 
})

// Handle scrolling when click on the "Contact Me" button
const contactmeBtn = document.querySelector('.home__contact');
contactmeBtn.addEventListener( 'click', () => {
  scrollIntoView('#contact');
})

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

const arrowUp = document.querySelector('.arrow-up');

document.addEventListener('scroll', () => {
  home.style.opacity = (1 - window.scrollY/homeHeight)*1.5 ;

  // Up-arrow for Scrolling upside
  if(window.scrollY > homeHeight/2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
})

// Handle click on the "Arrow up" button
arrowUp.addEventListener( 'click', () => {
  scrollIntoView('#home');
})


function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  const offsetPosition = scrollTo.offsetTop - navbarHeight < 0 ? 0 : scrollTo.offsetTop - navbarHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  })    
  // scrollTo.scrollIntoView({ behavior: "smooth" });
}

