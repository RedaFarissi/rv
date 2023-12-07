export default function index7get_absolute_url11(){
    return`from django.db import models
from django.urls import reverse

class Category (models.Model):
    name = models.CharField(max_length=200)
    slug = models. SlugField(unique=True)

    def get_absolute_url(self):
        return reverse('shop:category_detail', args=[self.slug])`
}