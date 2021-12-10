$(document).ready(function () {
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

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay-visible");
    modalDialog.addClass("modal__dialog-visible");
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay-visible");
    modalDialog.removeClass("modal__dialog-visible");
  }

  // Обработка форм
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
        phone: {
          required: "Phone number is required",
        },
      },
    });
  });

  AOS.init({});
});
