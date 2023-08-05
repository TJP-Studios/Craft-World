const slider = document.querySelector('.slider');
let count = 0;

function nextSlide() {
  count++;
  if (count >= slider.children.length) {
    count = 0;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  const slideWidth = slider.clientWidth;
  slider.style.transform = `translateX(-${count * slideWidth}px)`;
}

// Change the slide every 3 seconds
setInterval(nextSlide, 2000);