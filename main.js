// АККОРДЕОН
function accordeon(data) {
  data.classList.toggle("active");
}
// СЛАЙДЕР
sliderCount = 0;
sliderItems = document.querySelectorAll(".slider-cont_item");
sliderInterval;

function nextSlide() {
  sliderItems[sliderCount].classList.remove("active");
  if (sliderCount < sliderItems.length - 1) {
    sliderCount++;
  } else {
    sliderCount = 0;
  }
  sliderItems[sliderCount].classList.add("active");
}

function prevSlide() {
  sliderItems[sliderCount].classList.remove("active");
  if (sliderCount > 0) {
    sliderCount--;
  } else {
    sliderCount = sliderItems.length - 1;
  }
  sliderItems[sliderCount].classList.add("active");
}

function startSlider() {
  sliderInterval = setInterval(nextSlide, 3000);
}