const slider = document.querySelector(".slider");

let count = 0;
const slideWidth = slider.clientWidth;

function slideTo(index) {
  count = index % slider.children.length;
  updateSlidePosition();
}

function updateSlidePosition() {
  slider.style.transform = `translateX(-${count * slideWidth}px)`;
}

setInterval(() => slideTo(count + 1), 3500);

function navigateToPage2() {
  // Redirect the user to the product details page when the card is clicked
  window.location.href = "productDetails.html";
}
