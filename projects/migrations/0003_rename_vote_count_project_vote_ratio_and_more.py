# Generated by Django 4.0.1 on 2022-02-01 07:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_tag_project_vote_count_review_project_tags'),
    ]

    operations = [
        migrations.RenameField(
            model_name='project',
            old_name='vote_count',
            new_name='vote_ratio',
        ),
        migrations.AddField(
            model_name='project',
            name='vote_total',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
