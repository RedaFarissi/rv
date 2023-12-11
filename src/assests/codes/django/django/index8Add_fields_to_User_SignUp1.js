export default function index8Add_fields_to_User_SignUp1(){
    return `from django.shortcuts import render, redirect
from .forms import CreateUserForm
from django.contrib.auth import login

def signUp(request):
    form = CreateUserForm(request.POST or None)

    if form.is_valid(): 
        user = form.save()   
        login(request, user)   #add login to your views for login when user created
        return redirect('testing')

    return render(request, 'signup.html', {'form': form})`
}