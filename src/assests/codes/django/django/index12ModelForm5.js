export default function index12ModelForm5(){
    return `from django.shortcuts import render, redirect
from .forms import PostForm
from .models import Post

def create_post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():  #check if data is valid with models 
            form.save()  # This saves the new post to the database
            return redirect('post_list')  # Redirect to the post list view
    else:
        form = PostForm()

    return render(request, 'create_post.html', {'form': form})

def post_list(request):
    posts = Post.objects.all()
    return render(request, 'post_list.html', {'posts': posts})`
}