from datetime import date
from xmlrpc.client import DateTime
from django.db import models
from datetime import datetime

class Singer(models.Model):
    stageName=models.CharField(max_length=128)
    name=models.CharField(max_length=128)
    lastName=models.CharField(max_length=128)
    nationality=models.CharField(max_length=128)
    image= models.TextField()
    biography=models.TextField()
    def __str__(self):
        return self.stageName
        
class Album(models.Model):
    name=models.CharField(max_length=128)
    singerA=models.ForeignKey(Singer, on_delete=models.SET_NULL, null=True)
    price=models.DecimalField(max_digits = 6, decimal_places = 2)
    cdPrice=models.DecimalField(max_digits = 6, decimal_places = 2)
    numTracks=models.BigIntegerField()
    stock=models.BigIntegerField()
    image= models.TextField()
    duration=models.DurationField()
    recordLabel=models.CharField(max_length=128)
    releaseDate=models.DateField(default=datetime.now, blank=True)
    def __str__(self):
        return self.name

class Genre(models.Model):
    name = models.CharField(max_length=200, db_index=True, help_text='Genre of music (i.e. Blues)')
    def __str__(self):
        """String for representing the Model object."""
        return self.name

class Song(models.Model):
    name=models.CharField(max_length=128)
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    genre = models.ForeignKey(Genre, on_delete=models.SET_NULL, null=True)
    singers=models.ForeignKey(Singer, on_delete=models.SET_NULL, null=True)
    duration=models.CharField(max_length=20)
    completeFile=models.CharField(max_length=128)
    previewFile=models.CharField(max_length=128)
    price=models.DecimalField(max_digits = 6, decimal_places = 2)
    recordLabel=models.CharField(max_length=128)
    def __str__(self):
        return self.name
        
class SingleSong(models.Model):
    name = models.CharField(max_length=200, db_index=True)
    genre = models.ForeignKey(Genre, on_delete=models.SET_NULL, null=True)
    singerSingle=models.ManyToManyField(Singer, through='SinglesSingers')
    duration=models.CharField(max_length=20)
    completeFile=models.CharField(max_length=128)
    previewFile=models.FileField(blank=True, null=True, upload_to='documents/')
    price=models.DecimalField(max_digits = 6, decimal_places = 2)
    recordLabel=models.CharField(max_length=128)
    image= models.TextField()
    releaseDate=models.DateField(default=datetime.now, blank=True)
    def __str__(self):
        """String for representing the Model object."""
        return self.name        

        
class SinglesSingers(models.Model):
	song = models.ForeignKey(SingleSong, related_name='SongWithSingers', on_delete=models.DO_NOTHING)
	singer = models.ForeignKey(Singer, related_name='SingerWithSingles', on_delete=models.DO_NOTHING)

	def __str__(self):
		return f'{self.id}'




