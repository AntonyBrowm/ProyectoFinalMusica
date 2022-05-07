from django.db import models

class Singer(models.Model):
    stageName=models.CharField(max_length=128)
    name=models.CharField(max_length=128)
    lastName=models.CharField(max_length=128)
    nationality=models.CharField(max_length=128)
    image= models.TextField()
    biography=models.TextField(max_length=255)
    def __str__(self):
        return self.stageName
        
class Album(models.Model):
    name=models.CharField(max_length=128)
    singer=models.ForeignKey(Singer, on_delete=models.SET_NULL, null=True)
    releaseDate=models.DateTimeField(auto_now=True,null=True)
    price=models.DecimalField(max_digits = 6, decimal_places = 2)
    stock=models.DateTimeField()
    image= models.TextField()
    duration=models.TextField()
    recordLabel=models.CharField(max_length=128)
    def __str__(self):
        return self.name
class Genre(models.Model):
    name = models.CharField(max_length=200, db_index=True, help_text='Genre of music (i.e. Blues)')

    def __str__(self):
        """String for representing the Model object."""
        return self.name
class Song(models.Model):
    name=models.CharField(max_length=128)
    releaseDate=models.DateTimeField(auto_now=True,null=True)
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





