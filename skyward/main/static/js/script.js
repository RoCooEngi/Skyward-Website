document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const scrollToTopButton = document.getElementById('scroll-to-top');
    const quarterPageHeight = document.documentElement.scrollHeight / 4;

    window.addEventListener('scroll', function() {
        if (window.scrollY > quarterPageHeight) {
            // Скрываем header
            header.style.opacity = '0';
            header.style.visibility = 'hidden';
            // Показываем стрелочку
            scrollToTopButton.style.opacity = '1';
            scrollToTopButton.style.visibility = 'visible';
        } else {
            // Показываем header
            header.style.opacity = '1';
            header.style.visibility = 'visible';
            // Скрываем стрелочку
            scrollToTopButton.style.opacity = '0';
            scrollToTopButton.style.visibility = 'hidden';
        }
    });

    // Прокрутка вверх при нажатии на стрелочку
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});