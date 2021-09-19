let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}



var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
loop:true,
  });

  function insta(){
    var profile=window.open("https://www.instagram.com/", "_sefl");
}
function lnk(){
  var profile=window.open("https://www.linkedin.com/in/wander-marques-69848618b", "_sefl");
}
function tt(){
  var profile=window.open("https://twitter.com/", "_sefl");
}
function gh(){
  var profile=window.open("https://github.com/Wandervm", "_sefl");
}

