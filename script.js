const about = document.getElementById('about');
const header = document.querySelector('body > header');
const navlinks = document.querySelectorAll('.nav-link');
const navbrand = document.querySelector('.navbar-brand');
const toggleBtn = document.querySelector('.navbar-toggler-icon');

const offset = about.offsetTop - 30;
window.onscroll = () => {
  if(window.scrollY > offset) {
    header.classList.add('fixed-top', 'bg-white', 'text-black', 'shadow')
    header.classList.remove('position-absolute');
    navlinks.forEach((link) => {
      link.classList.remove('text-white');
      link.classList.add('scroll');
      navbrand.classList.remove('text-white');
    })
    toggleBtn.style.cssText = 'filter: invert(1)'

  } else {
    header.classList.remove('fixed-top', 'bg-white', 'text-black', 'shadow')
    header.classList.add('position-absolute');
    navlinks.forEach((link) => {
      link.classList.add('text-white');
      link.classList.remove('scroll');
      navbrand.classList.add('text-white');
    })
    toggleBtn.style.cssText = 'filter: invert(0)'
  }
}