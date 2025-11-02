const buttons = document.querySelectorAll('[data-carousel-button]');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        stopCarousel();//mine
        const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
        const slides = button
            .closest('[data-carousel]')
            .querySelector('[data-slides]');

        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if(newIndex < 0) newIndex = slides.children.length - 1;
        if(newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
        startCarousel();//mine
    })
});

const carousel = document.querySelector('[data-carousel]');
const slides = carousel.querySelector('[data-slides]');
let intervalId;
function startCarousel() {
    intervalId = setInterval(() => {
        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    }, 10000);
}
function stopCarousel() {
    clearInterval(intervalId);
}
startCarousel();