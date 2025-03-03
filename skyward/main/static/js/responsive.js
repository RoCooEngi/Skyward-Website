// Функция для подгонки ширины контента
function adjustContentWidth() {
    const contentContainers = document.querySelectorAll('.content-container, .symbols-container, .footer-content');
    const viewportWidth = window.innerWidth;

    contentContainers.forEach(container => {
        // Устанавливаем ширину контейнера равной ширине viewport, если она меньше 1300px
        if (viewportWidth < 1300) {
            container.style.width = `${viewportWidth-40}px`;
        } else {
            container.style.width = '1300px'; // Фиксируем ширину на 1300px
        }
    });
}

// Вызываем функцию при загрузке страницы и при изменении размера окна
window.addEventListener('load', adjustContentWidth);
window.addEventListener('resize', adjustContentWidth);
