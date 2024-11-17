const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  observer: true,
  observeParents: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    spaceBetween: 15,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },

  slidesPerView: "auto",
  centeredSlides: false,
  spaceBetween: 0,
  slidesOffsetBefore: 16,
  slidesOffsetAfter: 16,

  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 10,
    },
    360: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    497: {
      slidesPerView: 2.1,
      spaceBetween: 15,
    },

    530: {
      slidesPerView: 2.3,
      spaceBetween: 15,
    },

    650: {
      slidesPerView: 2.8,
      spaceBetween: 15,
    },

    768: {
      slidesPerView: "auto",
      spaceBetween: 20,
      loop: false,
      enabled: false,
    },
  },
});

const actionButton = document.querySelector("#toggle-brands");
const brandsList = document.querySelector(".brand-list__items");
const iconGo = document.querySelector(".expand-icon");
let isHided = true;

let showBrands = () => {
  brandsList.classList.add("visible");
  isHided = false;
  actionButton.innerText = "Скрыть";
  iconGo.style = "transform:rotate(180deg)";
};
let hideBrands = () => {
  brandsList.classList.remove("visible");
  isHided = true;
  actionButton.innerText = "Показать все";
  iconGo.style = "transform: rotate(0deg)";
};

actionButton.addEventListener("click", () => {
  if (isHided) {
    showBrands();
  } else {
    hideBrands();
  }
});
