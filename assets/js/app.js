// Header Scroll
// $(window).scroll(function () {
//   if ($(this).scrollTop() > 25) {
//     $(".header").addClass("sticky");
//   } else {
//     $(".header").removeClass("sticky");
//   }
// });

// Sticky Header
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 25) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

// Infinite slider
$(document).ready(function () {
  $(".infinite-carousel-slider").owlCarousel({
    loop: true,
    items: 4,
    margin: 10,
    autoplay: true,
    slideTransition: "linear",
    autoplaySpeed: 5000,
    smartSpeed: 5000,
    center: true,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    freeDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".infinite-carousel-slider").trigger("play.owl.autoplay", [2000]);

  function setSpeed() {
    $(".infinite-carousel-slider").trigger("play.owl.autoplay", [5000]);
  }

  setTimeout(setSpeed, 1000);
});

// Testimonial Slider
$(".testimonials-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

const prev = document.querySelector(".testimonials-carousel button.owl-prev");

prev.innerHTML = `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.26026 1.27369C7.47464 1.48935 7.59497 1.78108 7.59497 2.08517C7.59497 2.38925 7.47464 2.68098 7.26026 2.89664L3.18562 7.02883L7.26026 11.1035C7.47464 11.3191 7.59497 11.6109 7.59497 11.9149C7.59497 12.219 7.47464 12.5108 7.26026 12.7264C7.15326 12.8343 7.02595 12.9199 6.88569 12.9784C6.74543 13.0368 6.59498 13.0669 6.44303 13.0669C6.29108 13.0669 6.14064 13.0368 6.00037 12.9784C5.86011 12.9199 5.7328 12.8343 5.6258 12.7264L0.745442 7.84606C0.637558 7.73906 0.551929 7.61176 0.493493 7.47149C0.435057 7.33123 0.404971 7.18078 0.404971 7.02883C0.404971 6.87688 0.435057 6.72644 0.493493 6.58617C0.551929 6.44591 0.637558 6.31861 0.745442 6.2116L5.6258 1.27369C5.7328 1.16581 5.86011 1.08018 6.00037 1.02174C6.14064 0.963307 6.29108 0.933221 6.44303 0.933221C6.59498 0.933221 6.74543 0.963307 6.88569 1.02174C7.02595 1.08018 7.15326 1.16581 7.26026 1.27369Z" fill="#090F4E"/>
</svg>`;

const next = document.querySelector(".testimonials-carousel button.owl-next");

next.innerHTML = `<svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.73974 1.27369C0.52536 1.48935 0.405029 1.78108 0.405029 2.08517C0.405029 2.38925 0.52536 2.68098 0.73974 2.89664L4.81438 7.02883L0.73974 11.1035C0.52536 11.3191 0.405029 11.6109 0.405029 11.9149C0.405029 12.219 0.52536 12.5108 0.73974 12.7264C0.846743 12.8343 0.974047 12.9199 1.11431 12.9784C1.25457 13.0368 1.40502 13.0669 1.55697 13.0669C1.70892 13.0669 1.85936 13.0368 1.99963 12.9784C2.13989 12.9199 2.2672 12.8343 2.3742 12.7264L7.25456 7.84606C7.36244 7.73906 7.44807 7.61176 7.50651 7.47149C7.56494 7.33123 7.59503 7.18078 7.59503 7.02883C7.59503 6.87688 7.56494 6.72644 7.50651 6.58617C7.44807 6.44591 7.36244 6.31861 7.25456 6.2116L2.3742 1.27369C2.2672 1.16581 2.13989 1.08018 1.99963 1.02174C1.85936 0.963307 1.70892 0.933221 1.55697 0.933221C1.40502 0.933221 1.25457 0.963307 1.11431 1.02174C0.974047 1.08018 0.846743 1.16581 0.73974 1.27369Z" fill="#090F4E"/>
</svg>`;

// Class in body
const navbar = document.querySelector(".header .navbar .navbar-collapse");

navbar.addEventListener("shown.bs.collapse", () => {
  document.body.classList.add("navbar-open");
});

navbar.addEventListener("hidden.bs.collapse", () => {
  document.body.classList.remove("navbar-open");
});

// Floating Card
const floatingCard = document.querySelector(".floating-section");
const hero = document.querySelector(".hero");
const footer = document.querySelector(".footer");

let heroVisible = false;
let footerVisible = false;

function updateCardVisibility() {
  if (!heroVisible && !footerVisible) {
    floatingCard.classList.add("show");
  } else {
    floatingCard.classList.remove("show");
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.target === hero) {
        heroVisible = entry.isIntersecting;
      }
      if (entry.target === footer) {
        footerVisible = entry.isIntersecting;
      }
      updateCardVisibility();
    });
  },
  { threshold: 0.1 }
);

observer.observe(hero);
observer.observe(footer);
