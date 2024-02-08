/* Created by Tivotal */

var swiper = new Swiper(".slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
