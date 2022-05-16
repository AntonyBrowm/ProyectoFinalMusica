from rest_framework import routers
from . import views
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.contrib.staticfiles.urls import static

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
urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)