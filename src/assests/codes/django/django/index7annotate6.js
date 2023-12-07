export default function index7annotate6(){
    return`from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=50)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    number_page = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title`
}