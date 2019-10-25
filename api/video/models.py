from django.db import models

class Video(models.Model):
  videoId = models.CharField(max_length=20)
  title = models.CharField(max_length=200)