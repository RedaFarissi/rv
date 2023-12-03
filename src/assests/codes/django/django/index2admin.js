export default function index2admin(){
    return `from django.contrib import admin
from .models import Article

admin.site.register(Article)`
}