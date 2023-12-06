export default function index4manage_static_files1(){
    return`STATIC_URL = 'static/'
STATICFILES_DIRS = [    #new add
    BASE_DIR / "static",
    '/var/www/static/',
] `
}