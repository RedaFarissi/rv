export default function index3Relations0(){
    return `from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Profile(models.Model):
    bio = models.TextField()
    person = models.OneToOneField(Person, on_delete=models.CASCADE, related_name='profile')

    def __str__(self):
        return f"Profile for {self.person.name}"`
}