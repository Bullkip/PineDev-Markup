// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
'use strict'

const burgerBtn = document.querySelector('.burger__icon'),
  menu = document.querySelector('.header__navigation--mobile.burger__menu')


class Burger {
  handler(e, obj, classChange , menuItem) {
    switch (e.target) {
      case obj:
        e.target.classList.toggle(classChange)
        menuItem.classList.toggle(classChange)
        break
    }
  }
}

let burgerMenu = new Burger()

document.addEventListener('click', function(event) {
  burgerMenu.handler(event, burgerBtn, 'change',menu)
})
