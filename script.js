// "use strict";
// const carousel = document.querySelector('.carousel');
// const prevButton = carousel.querySelector('.prev');
// const nextButton = carousel.querySelector('.next');
// const images = carousel.querySelectorAll('img');
// let currentIndex = 0;

// function showImage(index) {
//   // Add the 'active' class to the current image
//   images[currentIndex].classList.remove('active');
//   images[index].classList.add('active');
//   currentIndex = index;
// }

// function prevImage() {
//   let newIndex = currentIndex - 1;
//   if (newIndex < 0) {
// 	newIndex = images.length - 1;
//   }
//   showImage(newIndex);
// }

// function nextImage() {
//   let newIndex = currentIndex + 1;
//   if (newIndex >= images.length) {
// 	newIndex = 0;
//   }
//   showImage(newIndex);
// }

// // Attach event listeners to buttons
// prevButton.addEventListener('click', prevImage);
// nextButton.addEventListener('click', nextImage);

// // Show the initial image
// showImage(currentIndex);




document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector('.carousel');
  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');
  const images = carousel.querySelectorAll('img');
  let currentIndex = 0;

  function showImage(index) {
    // Добавить класс 'active' текущему изображению
    images[currentIndex].classList.remove('active');
    images[index].classList.add('active');
    currentIndex = index;
  }

  function prevImage() {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    }
    showImage(newIndex);
  }

  function nextImage() {
    let newIndex = currentIndex + 1;
    if (newIndex >= images.length) {
      newIndex = 0;
    }
    showImage(newIndex);
  }

  // Присоединить слушатели событий к кнопкам
  prevButton.addEventListener('click', prevImage);
  nextButton.addEventListener('click', nextImage);

  // Показать начальное изображение
  showImage(currentIndex);

});


// gpt



var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

function showSlide() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(-" + slideIndex * 100 + "%)";
  }
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide();
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide();
}

showSlide();

