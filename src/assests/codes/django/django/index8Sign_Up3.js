export default function index8Sign_Up3(){
    return `from django.contrib.auth.forms import UserCreationForm
from django.shortcuts import render, redirect

def signUp(request):
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('testing')
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', { 'form':form})`
}