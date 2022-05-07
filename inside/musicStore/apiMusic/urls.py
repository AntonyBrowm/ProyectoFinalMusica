from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r"singer", views.SingerViewSet)
router.register(r"album", views.AlbumViewSet)
router.register(r"song", views.SongViewSet)
router.register(r"genre", views.GenreViewSet)

urlpatterns = [
    path("", include(router.urls)),
]