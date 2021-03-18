const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
  console.log('click hamburger');

  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });

  }  
});


var lastScrollTop = 600;
navbar = document.getElementById("menu");
window.addEventListener("scroll", function(){
  var scrollTop = window.pageXOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop){
    navbar.style.display="";
  }else{
    navbar.style.display="none";
  }
})


var textWrapper = document.querySelector(".intro-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /([^\x00-\x80]|\w)/g,
    "<span class='letter'>$&</span>"
);

anime
    .timeline({ loop: false })
    .add({
        targets: ".intro-title .letter",
        translateX: [140, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: function(el, i) {
            return 500 + 50 * i;
        }
    })
    .add({
        targets: ".intro-title .letter",
        translateX: [0, -140],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1200,
        delay: function(el, i) {
            return 700 + 50 * i;
        }
    });

TweenMax.to(".loader", 2.2, {
    delay: 5,
    top: "-100%",
    ease: Expo.easeInOut
});

TweenMax.from(".logo", 2, {
    delay: 2,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});

TweenMax.from("#menu", 1, {
  delay: 6.5,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
})
TweenMax.from(".header__logo", 1, {
  delay: 5.2,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
})
TweenMax.from(".header__links", 1, {
  delay: 5.4,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
})
TweenMax.from(".header__cta", 1, {
  delay: 5.4,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
})
TweenMax.from(".hero", 2, {
  delay: 5.7,
  x: 300,
  opacity: 0,
  ease: Expo.easeInOut
})
TweenMax.from(".hero__text", 2, {
  delay: 5.8,
  x:-100,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
})


window.sr = ScrollReveal();
sr.reveal('.showcase-left',{
  duration: 2000,
  origin:'left',
  distance:'300px',
  });
sr.reveal('.showcase-right',{
  duration: 2000,
  origin:'right',
  distance:'300px',
  });
sr.reveal('.showcase-middle',{
  duration: 2000,
  origin:'bottom',
  distance:'300px',
});
sr.reveal('.showcase-intro',{
  duration: 2000,
  origin:'top',
  distance:'300px',
  viewFactor: 0.2
});
sr.reveal('.showcase-grid',{
    duration: 2000,
    origin:'left',
    distance:'300px',
    viewFactor: 0.2
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });   
});

var counter = document.querySelector(".percent");

TweenLite.set(counter, {
    xPercent: -5,
    yPercent: -5,
});

window.addEventListener("mousemove", moveCounter);

function moveCounter(e) {
    TweenLite.to(counter, 0.5, {
        x: e.clientX,
        y: e.clientY,
    });
}


