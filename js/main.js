const hotelSwiper = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
  },
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
    zoom: 17,
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

// меню
var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  console.log("Клик по кнопке меню");
  document.querySelector(".header__bottom").classList.toggle("header__bottom-visible");
});
