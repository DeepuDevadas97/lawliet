var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: false,
    autoPlay: true,
    setGallerySize: false,
    wrapAround: true,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 60,
      y2: 45,
      x3: 15
    }
  };
  
  var carousel = document.querySelector('[data-carousel]');
  var slides = document.getElementsByClassName('carousel-cell');
  var flkty = new Flickity(carousel, options);
  
  flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
      var image = slides[i];
      var x = (slide.target + flkty.x) * -1/3;
      image.style.backgroundPosition = x + 'px';
    });
  });
    


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
    },
  });