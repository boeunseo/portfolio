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

  const scrollTo = document.querySelector(link);
  const top = scrollTo.offsetTop - navbarHeight < 0 ? 0 : scrollTo.offsetTop - navbarHeight;  

  scrollTo.scrollIntoView({behavior: "smooth"});
  
} )
