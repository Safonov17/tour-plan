const hotelSwiper = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  // autoplay: {
  //   delay: 3000,
  // },
  effect: "coverflow",
  // Кнопки навигации
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

const reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,
  // Кнопки навигации
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
});

// Карта
ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [7.838190124409071, 98.29879180041281],
    zoom: 14,
    controls: ["smallMapDefaultSet"],
  });
  var placemark = new ymaps.Placemark([7.838190124409071, 98.29879180041281], {
    balloonContent: "Hilton Phuket Arcadia Resort & SPA",
    // hintContent: "Гостиница",
  });
  myMap.geoObjects.add(placemark);
  placemark.balloon.open();
}

// Код для parallax эффекта

$(".parallax-window").parallax({ imageSrc: "img/newsletter-bg.jpg" });

// Мягкий скролл

$(document).bind("mousewheel", function (e) {
  var nt = $(document.body).scrollTop() - e.deltaY * e.deltaFactor * 100;
  e.preventDefault();
  e.stopPropagation();
  $(document.body).stop().animate(
    {
      scrollTop: nt,
    },
    100,
    "easeInOutCubic"
  );
});
