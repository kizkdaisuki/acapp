from game.views.index import index
from django.urls import path, include
urlpatterns = [
    path('', index, name = 'index'),
    path('menu/', include('game.urls.menu.index')),
    path('settings/', include('game.urls.settings.index')),
    path('playground/', include('game.urls.playground.index')) 
]