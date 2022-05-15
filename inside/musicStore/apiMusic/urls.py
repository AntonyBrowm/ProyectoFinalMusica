from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r"singer", views.SingerViewSet)
router.register(r"album", views.AlbumViewSet)
router.register(r"song", views.SongViewSet)
router.register(r"genre", views.GenreViewSet)
router.register(r"singleSong", views.SingleSongView)
router.register(r'singlesSinger', views.SinglesSingersViewSet)

urlpatterns = [
    path("", include(router.urls)),
]