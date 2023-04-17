// TABS OUR Services
const servicesItem = document.querySelectorAll(".services-list-item");
const contentServices = document.querySelectorAll(".Our-Services-content");

servicesItem.forEach(function (item) {
  item.addEventListener("click", function () {
    const tabsContent = document.querySelector(
      `.Our-Services-content[data-name="${this.dataset.name}"]`
    );
    console.log(tabsContent);
    document
      .querySelector(".services-list-item.active")
      .classList.remove("active");

    contentServices.forEach(function (item) {
      item.classList.remove("active");
    });
    this.classList.add("active");
    tabsContent.classList.add("active");
  });
});

// FILTER OUR WORK
const workFilter = document.querySelectorAll(".work-filter-item");
const portfolioItem = document.querySelectorAll(".portfolio-item");
const ButtonLoad = document.querySelector(".load-more");

workFilter.forEach(function (item) {
  item.addEventListener("click", function () {
    const workFilterdata = item.dataset.name;

    workFilter.forEach(function (item) {
      item.classList.remove("active-filte");
    });
    item.classList.add("active-filte");

    portfolioItem.forEach(function (item) {
      const portfolioItemdata = item.dataset.name;
      item.classList.add("hidden");
      if (workFilterdata === portfolioItemdata) {
        item.classList.remove("hidden");
      }
      if (workFilterdata === "All") {
        item.classList.remove("hidden");
      }
    });
  });
});

ButtonLoad.addEventListener("click", function (e) {
  e.preventDefault();
  workFilter.forEach(function (elem) {
    if (elem.classList.contains("active-filte")) {
      let workFilterdata = elem.dataset.name;
      portfolioItem.forEach(function (item) {
        let portfolioItemdata = item.dataset.name;

        if (workFilterdata === portfolioItemdata || workFilterdata === "All") {
          function load() {
            portfolioItem.forEach(function load(el) {
              el.classList.remove("load");
            });
            ButtonLoad.style.display = "none";
          }
          setTimeout(load, 1000);
        }
      });
    }
  });
});

// CARUSEL PEPLE
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlides(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  console.log(n);
  let i;
  const slides = document.querySelectorAll(".container-people-say");
  const dotPhoto = document.getElementsByClassName("photo-people-item");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    slides[i].classList.remove("active-photo");
  }
  for (i = 0; i < dotPhoto.length; i++) {
    dotPhoto[i].classList.remove("animaiton-carusel");
  }
  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("active-photo");

  dotPhoto[slideIndex - 1].classList.add("animaiton-carusel");
}
let ul = document.querySelector(".photo-people-list");

ul.addEventListener("click", (event) => {
  let et = event.target;
  console.log(indexOf(et));
  if (et.classList.contains("carusel-photo-people")) {
    console.log(2);
    currentSlides(n);
  }
});

let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
