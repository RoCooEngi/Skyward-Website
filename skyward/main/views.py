from django.shortcuts import render

# Функция для отображения главной страницы
def home(request):
    # Рендерим шаблон index.html и возвращаем его как ответ на запрос
    return render(request, 'index.html')

def meme(request):
    # Рендерим шаблон meme.html и возвращаем его как ответ на запрос
    return render(request, 'meme.html')
