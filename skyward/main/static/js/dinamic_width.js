// Функция для подгонки ширины контента
function adjustContentWidth() {
    const contentContainers = document.querySelectorAll('.content-container, .symbols-container, .footer-content');
    const viewportWidth = window.innerWidth;

    contentContainers.forEach(container => {
        // Устанавливаем ширину контейнера равной ширине viewport, если она меньше 1200px
        if (viewportWidth < 1200) {
            container.style.width = `${viewportWidth}px`;
        } else {
            container.style.width = '1200px'; // Фиксируем ширину на 1200px
        }
    });
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.addEventListener('load', adjustContentWidth);
window.addEventListener('resize', adjustContentWidth);
