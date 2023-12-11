export default function index10Django_Pagination4(){
    return `from django.db import models
from django.contrib.auth.models import User

class Blog(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE , related_name="blogs")
    title = models.CharField(max_length = 100)
    article = models.TextField()
    
    def __str__(self):
        return  self.title`
}