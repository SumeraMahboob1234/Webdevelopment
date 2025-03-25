from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    address = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.username
