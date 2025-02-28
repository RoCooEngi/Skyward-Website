from django.shortcuts import render
import os
from django.conf import settings
from django.http import FileResponse

# Функция для отображения главной страницы
def home(request):
    # Рендерим шаблон index.html и возвращаем его как ответ на запрос
    return render(request, 'index.html')

def privacy(request):
    # Открываем pdf документ
    file_path = os.path.join(settings.BASE_DIR, 'main/templates', 'privacy.pdf')
    return FileResponse(open(file_path, 'rb'), content_type='application/pdf')

def telegram(request):
    # Ссылка на контакты телеграм
    return render(request, 'telegram.html')

def vk(request):
    # Ссылка на контакты вк
    return render(request, 'vk.html')
