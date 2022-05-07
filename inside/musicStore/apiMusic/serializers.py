from dataclasses import fields
from rest_framework import serializers
from .models import *

class SingerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Singer
        fields = [
            "id",
            "stageName",
            "name",
            "lastName",
            "nationality",
            "image",
            "biography",
        ]


class AlbumSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Album
        fields = [
            "id",
            "name",
            "releaseDate",
            "price",
            "stock",
            "image",
            "duration",
            "recordLabel",
        ]
    def to_representation(self, instance):
        rep = super(AlbumSerializer, self).to_representation(instance)
        rep['singer'] = instance.singer.name
        return rep

class GenreSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Genre
        fields = [
            "id",
            "name",
        ]

class SongSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Song
        fields = [
            "id",
            "name",
            "album",
            "genre",
            "releaseDate",
            "duration",
            "completeFile",
            "previewFile",
            "price",
            "recordLabel",
        ]
    def to_representation(self, instance):
        rep = super(SongSerializer, self).to_representation(instance)
        rep['album'] = instance.album.name
        rep['genre'] = instance.genre.name
        rep['singers'] = instance.singers.name
        return rep       

