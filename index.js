const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector ('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');


  burger.addEventListener('click',()=>{
      //toggle nav
    nav.classlist.toggle('nav-active');
    //animate links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
        link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards` ${index / 7 + 1.5}s
    }
  //burger animation
  burger.classlist.toggle('toggle');

  });

}

navSlide();
