# Generated by Django 3.0.8 on 2020-07-18 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myblog', '0008_tag_snippet'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tag',
            name='snippet',
            field=models.CharField(max_length=1000),
        ),
    ]
