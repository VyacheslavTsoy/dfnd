let heroSlide = document.querySelectorAll('.hero--section')
if (heroSlide.length > 1 ) {
  const heroSwiper = new Swiper('.hero-swiper', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 6000,
    },
    loop: true
  });
}

let productSlide = document.querySelectorAll('.dynamic-product--block');
if (productSlide.length > 1 ) {
  const swiper = new Swiper('.dynamic-product--gallery', {
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    speed: 500,
    slidesPerView: 1.6,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 2.5,
        spaceBetween: 15
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
        spaceBetween: 25
      }
    }
  });
}

let textSlider = document.querySelectorAll('.image-text-slider');

if (textSlider.length) {
  textSlider.forEach((slider) => {
    new Swiper(slider, {
      slidesPerView: 'auto',
      loop: true,
      centeredSlides: true,
      slideActiveClass: 'is-active',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })
}

let testimonials = document.querySelectorAll('.testimonials__inner');

if (testimonials.length && window.innerWidth < 769) {
  testimonials.forEach((testimonialSlider) => {
    new Swiper(testimonialSlider, {
      slidesPerView: 'auto',
      loop: true,
      centeredSlides: true,
      slideActiveClass: 'is-active',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })
}

// let productSlider = document.querySelectorAll('.product-main-container');
if ((window.innerWidth <= 1023) ) {
  let init = false;
  if (!init) {
    init = true;

    const productSwiper = new Swiper('.product-carousel__inner', {
      slidesPerView: 1,
      loop: true,
      slideActiveClass: 'is-active',
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

  } else if (init) {
    productSwiper.destroy();
    init = false;
  }
}

