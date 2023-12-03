function index2setting(){
return`INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    # New app
    'helloapp.apps.HelloappConfig'
]`
}


export default index2setting;