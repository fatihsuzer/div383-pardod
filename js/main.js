document
  .querySelector(".js-toggle-mobile-menu")
  .addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("menu-show");
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
