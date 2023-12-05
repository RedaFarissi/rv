export default function index4manage_static_files0(){
    return`STATIC_URL = 'static/'
STATICFILES_DIRS = [
    BASE_DIR / "static",
    '/var/www/static/',
] `
}