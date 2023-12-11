export default function index11Form0(){
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
    'testing.apps.TestingConfig', #new app
]`
}