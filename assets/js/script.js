// ========== JQUERY
$(document).ready(function () {

  $(window).scroll(function () {

    // ===== NAVBAR STICKY
    if (this.scrollY > 20) {
      $('.navbar').removeClass('bg-transparent');
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
    // ===== SCROLL UP BUTTON SHOW/HIDE
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }

  });

  // ===== SCROLL UP BUTTON SLIDE UP
  $('.scroll-up-btn').click(function () {
    $('html').animate({
      scrollTop: 0
    });
    // ===== REMOVING SMOOTH SCROLL ON SLIDE UP BUTTON CLICK
    $('html').css("scrollBehavior", "auto");
  });


  $('#navbarNav .navbar-nav li a').click(function () {
    // ===== APPLY SMOOTH SCROLL ON MENU ITEMS CLICK
    $('html').css("scrollBehavior", "smooth");

    // ===== REMOVE CLASS ACTIVE & CHECKED ON MENU TOGGLE
    $('#navbarNav .navbar-nav').removeClass('active')
    $('.menu-toggle input').prop('checked', false)
  });

  // ===== ADD CLASS ACTIVE ON MENU TOGGLE
  $('.menu-toggle').click(function () {
    $('#navbarNav .navbar-nav').toggleClass('active')
  });

  // ===== TYPING TEXT ANIMATION.JS
  let typed = new Typed(".typing", {
    strings: ["Web Developer", "UI/UX Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  let typed1 = new Typed(".typing-1", {
    strings: ["Web Developer", "UI/UX Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  // ===== CREATE PARALLAX EFFECT
  $(window).scroll(function () {
    let wScroll = $(this).scrollTop();

    $('#home-text .home-content').css({
      'transform': 'translate(0px, ' + wScroll / 4 + '%)'
    })
  });

  // ===== CREATE MAGNIFIC POPUP ON SECTION PROJECT
  let $btns = $('.project .button-group button');

  $btns.click(function (e) {

    $('.project .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project .show-project').isotope({
      filter: selector
    });

    return false;
  })

  $('.project .button-group #btnAll').trigger('click');

  $('.project .test-popup-link').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    }
  });

  // CREATE OWL-CAROUSEL ON SECTION CLIENT
  $('.client .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      560: {
        items: 2
      }
    }
  })

});

// ========== END JQUERY


// ========== ACTIVE LINK ON MENU ITEMS
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.navbar-nav .nav-item a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.navbar-nav .nav-item a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}
window.addEventListener('scroll', scrollActive);

// ========== END ACTIVE LINK ON MENU ITEMS





// ========================== Scroll Reveal Animation
// const sr = ScrollReveal({
//   distance: '30px',
//   duration: 1800,
//   reset: false
// });

// sr.reveal(`.services-card, .our-project`, {
//   origin: 'top',
//   interval: 200
// })

// sr.reveal(`.about-img, .contact-img`, {
//   origin: 'left'
// })

// sr.reveal(`.about-text, .contact-content`, {
//   origin: 'right'
// })

// ====================================================