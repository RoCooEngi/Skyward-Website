let currentIndex = 0;
const gallery = document.querySelector('.gallery');
const items = document.querySelectorAll('.gallery-item');
const dotsContainer = document.querySelector('.dots-container');

function createDots() {
    items.forEach((_, index) => {
        let dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active-dot');
        dot.setAttribute('onclick', `jumpToSlide(${index})`);
        dotsContainer.appendChild(dot);
    });
}

function updateGallery() {
    gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active-dot', index === currentIndex);
    });
}

function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    updateGallery();
}

function nextSlide() {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    updateGallery();
}

function jumpToSlide(index) {
    currentIndex = index;
    updateGallery();
}

function openFullscreen(element) {
    const fullscreen = document.getElementById('fullscreen');
    const fullscreenImg = document.getElementById('fullscreen-img');
    if (element.querySelector('img')) {
        fullscreenImg.src = element.querySelector('img').src;
        fullscreen.style.display = 'flex';
    }
}

function closeFullscreen() {
    document.getElementById('fullscreen').style.display = 'none';
}

createDots();