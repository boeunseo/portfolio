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


function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  const offsetPosition = scrollTo.offsetTop - navbarHeight < 0 ? 0 : scrollTo.offsetTop - navbarHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  })    
  // scrollTo.scrollIntoView({ behavior: "smooth" });
}
