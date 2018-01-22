# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-01-16 07:07
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('barcode', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('phone', models.IntegerField(max_length=100)),
                ('government_id', models.IntegerField(max_length=100)),
                ('address', models.CharField(max_length=100)),
                ('birthday', models.DateField(auto_now_add=True)),
                ('mapping_by', models.CharField(max_length=100, null=True)),
            ],
            options={
                'ordering': ('name',),
            },
        ),
        migrations.CreateModel(
            name='UserApp',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('phone', models.IntegerField(max_length=100)),
                ('government_id', models.IntegerField(max_length=100)),
                ('birthday', models.DateField(auto_now_add=True)),
                ('address', models.CharField(max_length=100)),
            ],
            options={
                'ordering': ('name',),
            },
        ),
        migrations.AddField(
            model_name='user',
            name='app_id',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='helio.UserApp'),
        ),
    ]
