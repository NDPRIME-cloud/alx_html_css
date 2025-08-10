const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');


let isopen = false
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  isopen = !isopen;

  hamburger.textContent = isopen? "✖" : "☰"

});
