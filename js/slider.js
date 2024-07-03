// слайдер блока members
const membersSlider = document.querySelector('.members__cards');
const memberSlides = document.querySelectorAll('.members__profile');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentSlideDisplay = document.getElementById('current-slide');

const totalSlides = memberSlides.length;

function getSlidesPerPage() {
  return window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
}

let slidesPerPage = getSlidesPerPage()
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex -= slidesPerPage;
    updateSlider();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < (totalSlides - slidesPerPage)) {
    currentIndex += slidesPerPage;
    updateSlider();
  }
});

function updateSlider() {
  slidesPerPage = getSlidesPerPage()

  const containerWidth = document.querySelector('.members__cards').offsetWidth;

  memberSlides.forEach(slide => {
    slide.style.flex = `0 0 ${(100 / slidesPerPage)}%`;
  });

  membersSlider.style.transform = `translateX(-${currentIndex / slidesPerPage * containerWidth}px)`;
  currentSlideDisplay.textContent = `${Math.min(currentIndex + slidesPerPage, totalSlides)}/${totalSlides}`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex >= (totalSlides - slidesPerPage);
}

updateSlider();

// слайдер блока stages
const stagesSlider = document.querySelector('.stages__content');
const stagesSlides = document.querySelectorAll('.slide');

const prevMobBtn = document.getElementById('mobile-prev');
const nextMobBtn = document.getElementById('mobile-next');

const dots = document.querySelectorAll('.dot');
const totalStagesSlides = stagesSlides.length;

let stagesSlidesPerPage = 1;
let stagesSlidesCurrentIndex = 0;

prevMobBtn.addEventListener('click', () => {
  if (stagesSlidesCurrentIndex > 0) {
    stagesSlidesCurrentIndex -= stagesSlidesPerPage;
    updateStagesSlider();
  }
});

nextMobBtn.addEventListener('click', () => {
  if (stagesSlidesCurrentIndex < (totalStagesSlides - stagesSlidesPerPage)) {
    stagesSlidesCurrentIndex += stagesSlidesPerPage;
    updateStagesSlider();
  }
});

function updateStagesSlider() {
  const slideWidth = stagesSlider.clientWidth / stagesSlidesPerPage;
  stagesSlider.scrollLeft = (stagesSlidesCurrentIndex * (slideWidth + 20));

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === stagesSlidesCurrentIndex);
  });
}

function toggleBgClass() {
  if (window.innerWidth <= 768) {
    stagesSlides.forEach(slide => slide.classList.add('bg-slide'));
  } else {
    stagesSlides.forEach(slide => slide.classList.remove('bg-slide'));
  }
}

toggleBgClass();
updateStagesSlider();

window.addEventListener('resize', () => {
  toggleBgClass();
  updateStagesSlider();
});
