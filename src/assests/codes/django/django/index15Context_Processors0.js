export default function index15Context_Processors0(){
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
    'app.apps.AppConfig', 
    'product.apps.ProductConfig', 
    'requests_app_test.apps.RequestsAppTestConfig', #new app
]
#....
#....
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')], 
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'requests_app_test.context_processors.requests_app', #new
            ],
        },
    },
]`
}