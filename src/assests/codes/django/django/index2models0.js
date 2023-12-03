export default function index2models0(){
    return`from django.db import models

class Article(models.Model): #create table Article in database
    title = models.CharField(max_length=100) #title column in Article table
    text = models.TextField() #text column in Article table
    
    #id create by default`
}