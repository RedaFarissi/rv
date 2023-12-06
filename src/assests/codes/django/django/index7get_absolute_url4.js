export default function index7get_absolute_url4(){
    return`from django.db import models
from django.template.defaultfilters import slugify


class Author(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveSmallIntegerField(default=2)
    def __str__(self):
        return self.name


class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='books')
    slug = models.SlugField(blank=True, null=True)
    
    def get_absolute_url(self):
        return f"{self.slug}/"
    
    def __str__(self):
        return f"{self.title} {self.author}"
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        return super().save(*args, **kwargs)`
}