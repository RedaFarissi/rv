export default function index4Media_files1(){
    return `import os             #new add
..
..
STATIC_URL = 'static/' 
STATICFILES_DIRS = [   
    BASE_DIR / "static",
    '/var/www/static/',
] 

MEDIA_URL = 'media/'  #new add
MEDIA_ROOT = os.path.join(BASE_DIR,"media")   #new add`
}