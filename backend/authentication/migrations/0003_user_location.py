# Generated by Django 4.0.4 on 2022-05-20 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_user_is_tutee_user_is_tutor'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='location',
            field=models.CharField(default=2, max_length=255),
            preserve_default=False,
        ),
    ]
