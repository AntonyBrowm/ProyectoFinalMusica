# Generated by Django 3.2.13 on 2022-05-14 00:11

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('apiMusic', '0014_album_numtracks'),
    ]

    operations = [
        migrations.CreateModel(
            name='SingleSong',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, max_length=200)),
                ('duration', models.CharField(max_length=20)),
                ('completeFile', models.CharField(max_length=128)),
                ('previewFile', models.CharField(max_length=128)),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('recordLabel', models.CharField(max_length=128)),
                ('image', models.TextField()),
                ('releaseDate', models.DateField(blank=True, default=datetime.datetime.now)),
                ('genre', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='apiMusic.genre')),
            ],
        ),
        migrations.CreateModel(
            name='SinglesSingers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('singer', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='SingerWithSingles', to='apiMusic.singer')),
                ('song', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='SongWithSingers', to='apiMusic.singlesong')),
            ],
        ),
        migrations.AddField(
            model_name='singlesong',
            name='singerSingle',
            field=models.ManyToManyField(through='apiMusic.SinglesSingers', to='apiMusic.Singer'),
        ),
    ]
