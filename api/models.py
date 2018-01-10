# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.



class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=True, default='')
    email = models.CharField(max_length=100, blank=True, default='')
    power = models.CharField(max_length=100, blank=True, default='')

    class Meta:
        ordering = ('name',)