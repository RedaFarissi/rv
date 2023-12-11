export default function index12ModelForm0(){
    return `INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'book.apps.BookConfig', 
    'handleAccount.apps.HandleaccountConfig', 
    'sendEmail.apps.SendemailConfig',
    'blog.apps.BlogConfig',
    'testing.apps.TestingConfig', 
    'app.apps.AppConfig', #new app
]
`
}