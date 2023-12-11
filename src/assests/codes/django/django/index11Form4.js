export default function index11Form4(){
    return `from django.shortcuts import render
from .forms import MyForm

def my_form_view(request):
    if request.method == 'POST':
        form = MyForm(request.POST)

        if form.is_valid():
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            print(f" Name => {name}\n Email => {email} \n Message => {message}")
    else:
        form = MyForm()
    return render(request, 'my_form.html', {'form': form})
`
}