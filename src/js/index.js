// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
'use strict'

import Swiper, { Navigation } from 'swiper';
// import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/modules/navigation/navigation.min.css';



// burger

const burgerBtn = document.querySelector('.burger__icon'),
  menu = document.querySelector('.header__navigation--mobile.burger__menu')
class Burger {
  handler(e, obj, classChange, menuItem) {
    switch (e.target) {
      case obj:
        e.target.classList.toggle(classChange)
        menuItem.classList.toggle(classChange)
        break
    }
  }
}

let burgerMenu = new Burger()

document.addEventListener('click', function (event) {
  burgerMenu.handler(event, burgerBtn, 'change', menu)
})

// change header on scroll
const headerHeight = document.querySelector('header').offsetHeight

window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > headerHeight / 2 || document.documentElement.scrollTop > headerHeight / 2) {
    document.querySelector('header').classList.add('active')
  } else {
    document.querySelector('#header').classList.remove('active')
  }
}



// // init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  direction: 'vertical',
  centeredSlides: true,
  centeredSlidesBounds: true,
  initialSlide: 0,
  slidesPerView: 1,
  spaceBetween: 20,
  // height: 400,
  slidesOffsetBefore: 0,
  breakpoints: {
    1280: {
      direction: 'horizontal',
      loop: true,
      spaceBetween: 30,
      slidesPerView: 'auto',
      slidesOffsetBefore: 400
    },
    1440: {
      direction: 'horizontal',
      loop: true,
      spaceBetween: 60,
      slidesPerView: 3,
      slidesOffsetBefore: 450
    },
    1900: {
      direction: 'horizontal',
      loop: true,
      spaceBetween: 60,
      slidesPerView: 3,
      // slidesOffsetBefore: 45
    }
  }
})



document.addEventListener('click' , (e) => {
if(e.target.classList.contains("ctaButton")) {
  e.preventDefault();
  e.target.classList.toggle("pulse")
}

})