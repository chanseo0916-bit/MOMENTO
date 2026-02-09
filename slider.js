// Collection Slider Logic
const slider = document.querySelector('.collection-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


if (slider && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
        slider.scrollBy({ left: 320, behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        slider.scrollBy({ left: -320, behavior: 'smooth' });
    });
}
