const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  autoplay: {
    delay: 3000,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

// Карта
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [7.838190124409071, 98.29879180041281],
    zoom: 15,
  });
}
