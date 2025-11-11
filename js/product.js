const images = document.querySelectorAll('.thumb');
const displayImage = document.getElementById('active-image');
const productName = displayImage.alt.split(' - ')[0];

images.forEach(el => {
    el.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('active')) return;

        const prevActive = document.querySelector('.active'); //no affect to the performance
        prevActive.classList.remove('active');
        prevActive.removeAttribute('aria-current');
        prevActive.children[0].setAttribute('loading', `lazy`);

        displayImage.setAttribute('src', `${e.target.src}`);
        displayImage.setAttribute('alt', `${productName} - ${e.target.alt.toLowerCase()}`);

        e.target.parentElement.classList.add('active');
        e.target.parentElement.setAttribute('aria-current', 'true');
        e.target.removeAttribute('loading');
    })
})