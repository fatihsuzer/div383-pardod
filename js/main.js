document
  .querySelector(".js-toggle-mobile-menu")
  .addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("menu-show");
  });

document.querySelector(".js-selling").addEventListener("click", function () {
  document.querySelector(".User-label-selling").classList.toggle("active");
  document.querySelector(".User-label-sold").classList.toggle("active");
  document.querySelector(".Showcase-selected").classList.toggle("shown");
  document.getElementById("sold").classList.toggle("shown");
});

document.querySelector(".js-sold").addEventListener("click", function () {
  document.querySelector(".User-label-selling").classList.toggle("active");
  document.querySelector(".User-label-sold").classList.toggle("active");
  document.querySelector(".Showcase-selected").classList.toggle("shown");
  document.getElementById("sold").classList.toggle("shown");
});

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  centeredSlides: true,
  centeredSlidesBounds: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
});
