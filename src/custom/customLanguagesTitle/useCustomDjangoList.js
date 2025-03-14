export default function useCustomDjangoList(){
    const django_matrix = [
        ["Introduction", "What_is_Django","What_you_need_to_get_started","Verify_required_installations","Struct_Django",],
        ["virtualenv",  "What_is_virtualenv","Install_virtualenv","Create_virtualenv","Activate_virtualenv","Deactivate_virtualenv","Check_packages_installed","Install_django",       "Creating_Django_project","Get_version_installed_django","requirements","Running_development_server",],
        ["First_Exemple", "Creation_app_in_project","settings","includes_app_to_urlpatterns","templates","urls","views","models","admin","createsuperuser","layout_file_to_avoid_repeat"],
        ["Model_Field_Reference","Definition","Fields","Relations","Parameter" ],
        ["Static_and_Media_files","Manage_static_files"  ,"Media_files"],
        ["about_templates","Create_Public_templates","templates_tags","csrf_token","template_filters"  ],
        ["about_admin","list_display", "prepopulated_fields", "list_editable", "inlines",],
        ["about_models","get_absolute_url","create_a_database_backup","restore_the_data_from_the_backup","remove_all_from_db_models","annotate"],
        ["User_Authentication","User_and_authontication","include_urls_and_files_html","Sign_Up","Add_fields_to_User_SignUp" ,],
        ["Django_Email","_2_Step_Verification","send_email","list_emails"],
        "Django_Pagination","Form","ModelForm",
        ["Django_Filter","models_Objecjs_filter","raw_filter","lookup_expr","Q_filter","select_related",],
        "Session","Context_Processors","Ngrok_to_testing"
    ];
    return [django_matrix];
}