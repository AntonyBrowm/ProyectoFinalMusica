# Generated by Django 3.2.13 on 2022-05-12 01:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apiMusic', '0009_album_cdprice'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='album',
            name='releaseDate',
        ),
        migrations.RemoveField(
            model_name='song',
            name='releaseDate',
        ),
    ]