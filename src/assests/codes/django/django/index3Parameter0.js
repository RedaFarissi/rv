export default function index3Parameter(){
    return`from django.db import models

PRIVATE = "Private"
choix = (
    ("PRIVATE", "Private"),
    ("PUBLIC", "Public"),
)

class Article(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    admin = models.CharField(max_length=20, choices=choix, default=PRIVATE)`
}