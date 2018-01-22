# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.utils import timezone

# Create your models here.

class UserApp(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=False)
    email = models.CharField(max_length=100, blank=False)
    phone = models.IntegerField(max_length=100, blank=False)
    government_id =  models.IntegerField(max_length=100, blank=False,)
    birthday = models.DateField(default=timezone.now , editable=True)
    address = models.CharField(max_length=100, blank=False)
    
    class Meta:
        ordering = ('name',)

    def __unicode__(self):
        return '%d: %s' % (self.id, self.name)


class User(models.Model):
    barcode = models.AutoField(primary_key=True)#same id
    name = models.CharField(max_length=100, blank=False)
    email = models.CharField(max_length=100, blank=False)
    phone = models.IntegerField(max_length=100, blank=False)
    government_id =  models.IntegerField(max_length=100, blank=False,)
    address = models.CharField(max_length=100, blank=False)
    birthday = models.DateField( default=timezone.now, editable=True)
    app_id = models.OneToOneField(UserApp, on_delete=models.SET_NULL, null=True)
    mapping_by = models.CharField(max_length=100, null=True)

    class Meta:
        ordering = ('name',)


