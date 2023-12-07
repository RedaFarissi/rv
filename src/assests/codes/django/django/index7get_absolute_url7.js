export default function index7get_absolute_url7(){
    return`INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

  
    'testing.apps.TestingConfig', 
    'shop.apps.ShopConfig', #add new app
]`
}