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
            "price",
            "cdPrice",
            "numTracks",
            "stock",
            "image",
            "singerA",
            "duration",
            "recordLabel",
            "releaseDate",
        ]
    def to_representation(self, instance):
        rep = super(AlbumSerializer, self).to_representation(instance)
        rep['singerA'] = instance.singerA.stageName
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
            "singers",
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
        rep['singers'] = instance.singers.stageName
        return rep       
        
class SingleSongSerializer(serializers.HyperlinkedModelSerializer):
    singerSingle = serializers.StringRelatedField(many=True, read_only=True)    
    class Meta:
        model = SingleSong
        fields = [
            "id",
            "name",
            "genre",
            "singerSingle",
            "duration",
            "completeFile",
            "previewFile",
            "price",
            "recordLabel",
            "image",
            "releaseDate",
        ]
    def to_representation(self, instance):
        rep = super(SingleSongSerializer, self).to_representation(instance)
        rep['genre'] = instance.genre.name
        return rep   

class SinglesSingersSerializer(serializers.ModelSerializer):
    class Meta:
        model = SinglesSingers
        fields = ['id', 'song', 'singer']        
