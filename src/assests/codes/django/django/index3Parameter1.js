export default function index3Parameter(){
    return`from django.db import models

class Blogs(models.Model):
    name = models.CharField(max_length=30)
    field_name = models.DateField(("Date"), auto_now_add=True)
    another_name = models.CharField(max_length=30, blank=True)`
}