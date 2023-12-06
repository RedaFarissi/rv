export default function index6list_editable(){
    return `class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'price', 'available', 'created', 'updated']
    prepopulated_fields = {'slug': ('name',)}
    list_editable = ['price', 'available']

admin.site.register(Product, ProductAdmin)`
}