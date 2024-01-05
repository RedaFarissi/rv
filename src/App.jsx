import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import { Header , Home , Html , Css, Js , React , Vue , Cmd , Git , Django , Laravel} from './components/path';
import "./App.sass"

function App() {
  const html_list = [ "Introduction","Editor","Attributes","Heading (h1)","Paragraph (p)" ,"Break (br)","Horizontal (hr)","Superscript (sup)","Subscript (sub)","Underline (u)","Italic (i)","Abbreviation (abbr)","Blockquote","Quotation (q)","Mark","Deleted (del)","Preformatted (pre)","Small","Anchor (a)","Image (img)","Division (div)","Span","Audio","Video","Details","Bi-Directional Isolation (bdi)","Bi-Directional Override (bdo)","Lists Ordered (ol)","Lists Unordered (ul)","Lists Definitionul (dl)","Table","Input","Select","Textarea","Form","Button", "Header","Fieldset","Dialog","Iframe","Meter","Style","Link","Meta" ]
  const git_list  = [ "Introduction","Install_git","Diagram_git","Repository","Branch","Local_Repository","Remote_Repository","Pull_Request","Clone_Repository","Initialize_Repository","git_status","git_add","git_commit","git_branch","git_remote","git_push","Work_as_a_team","git_pull","Existing_Project_powerShell","Existing_Project_App","gitignore_file","submodules","Create_new_branch","Remove_connectio"]
  const css_list  = [ "Introduction","width","height","background","color","border","border-radius","padding","margin","font-size","font-style","font-weight","font-variant","white-space","word-wrap","word-break","text-decoration","letter-spacing","word-spacing","text-align","text-transform","text-indent","line-height","float","clear","opacity","hover","display","block","inline","inline-block","visibility","border-collapse","overflow","text-shadow","transform","transform-3D","perspective","resize","focus","transition","position","list-style-type","box-sizing","object-fit","animation","clip-path","cursor","scroll-behavior","z-index","outline","invalid & valid","after & before","writing-mode","filter","quotes","transform-style","-webkit-text-stroke", "flex-direction","flex-wrap","align-items","align-self","justify-content","order","grid","accent-color","Selectors","Functions","media","scss","sass"]
  const cmd_list  = [ "Introduction","Create_Folder","Change_Directory","Remove_Directory","Create_File","Rename_File","Remove_File","Remove_all_Files","Get_all_Directory","Get_Content_File","Clear_Screen","curl_Html","POST_Requests_curl","Copy_Files_to_another_Folder","Change_extension","Print_all_Files_in_folder","View_System_Information","Turn_off_the_Computer","search_for_File_by_Extensions","Display_Text","Date_and_Time",]
  const js_matrix = [
    ["Tutorial","Introduction","Statements","Output","Variables","Arithmetic","Assignment","Types","String","String Search","Strings Templates","Numbers","Booleans","Date","Random","Conditions","Switch","Arrays part 1","Arrays part 2","Objects","Loop for","Loop while","Break","Conversion","Modules","Errors","JSON",],
    ["Functions","Functions", "bind", "call","apply",  "Map","Filter", ],
    ["Class","Class-Introduction","Static","private","Inheritance" ],
    ["Window","alert","confirm","prompt","btoa","atob","location","innerWidth","innerHeight","clientWidth","scrollBy","pageXOffset","pageX","scrollIntoView","scrollTop","console","getComputedStyle","localStorage","sessionStorage","matchMedia","navigator","print",],
    ["DOM","addEventListener","removeEventListener","doctype","getElementById","getElementsByClassName","getElementsByName","getElementsByTagName","activeElement","children","body","documentElement","cookie","classList","createElement","appendChild","setAttribute","createAttribute","removeAttribute","createComment","createTextNode","remove","head","images","links","querySelector","querySelectorAll","requestFullscreen","contains","focus","blur","scripts","title","play","pause","load",],
    ["Events","currentTarget","target","ctrlKey","data","onclick","ondblclick","onbeforeprint","animation","onfocus","onblur","onloadstart","ondurationchange","onloadedmetadata","onloadeddata","onprogress","onended","onchange","oninput","oncontextmenu","oncopy","oninvalid","onkeydown","onkeypress","onkeyup","onload","onmousedown","onmouseup","onmouseenter","onmouseleave","onmouseover","onmouseout","ondrag","onsubmit","onfocusin","onfocusout","onerror","onfullscreenchange","onpagehide","onpaste","onpause","onplay","onresize","onreset","onscroll","onselect","ontoggle","onunload","onvolumechange",],
    ["API","Intro","Forms","fetch","History","setInterval","clearInterval","setTimeout"],
  ]
  const react_matrix  = [
    ["Introduction","What_is_React","How_react_work","What_you_need_to_get_started","Verify_required_installations","ES6","Create_React_App","Run_React_App",],
    ["Component","JSX","function_Component","function_Component_props","class_Component","class_Component_this_props","Components_in_Component",],
    "Events",
    "Lists",
    "Handle_images_react",
    "Handle_import",
    "props_children",
    ["hooks","useState","this_state"],
    ["packages","npm_list","axios","react_paypal_js","react_sass","Router","useNavigate_Router","useParams_Router","react_syntax_highlighter"],
  ]
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
    ["Django_Email","send_email","list_emails"],
    "Django_Pagination",
    "Form",
    "ModelForm",
    ["Django_Filter","models_Objecjs_filter","raw_filter","lookup_expr","Q_filter","select_related",],
    "Session",
    "Context_Processors",
    "ngrok"
  ]
  const laravel_matrix = [
    ["MVC" , "what_is_laravel","what_we_need_to_use_laravel","First_Laravel_Project","run_project","artisan","views","route","route_to_views_without_puch_data","route_to_views_and_puch_data","request","Controller","group_duplicate_items_on_one_page","ussing_css_and_javaScript","route_and_name","handle_data_in_views","create_controller_to_use_data","method_in_controller","recource","list_all_route_in_project",],
    ["database" , "Connect_with_database","Create_models","create_table_in_db_from_laravel","AddColumnInTable","Foreign_Keys","droppingColumnsFromTable","truncate_models_table","dropTheLastMigrateInDB","Clearalltableindbandcreatehimagain","soft_delete","eloquent_scopes","Seeder_class",  ],
    ["database Route::resource" , "GetAllDataFromDB","Upload_image","Multiple_Images_Upload","ShowDetail_with_recource","Update_by_id_with_recource","Delete_by_id_with_recource","only_and_except",      ],
    ["database Query builder" , "Intro_QueryBuilder","insertInQueryBuilder","GetWithQueryBuilder","full_Exemple_Create_Edit_Delete","Delete_all_Data_with_Query_Builder","truncate_with_Query_Builder",],
    ["middleware" , "middlewareExemple1", "middlewareExemple2"],
    ["Tinker" , "useTinker","TinkerExemple1",  ],
    ["Mail","send-mail"],
    ["Packages" ,"Authentication_UI","Authentication_Breeze","Paypal_Payment","Stripe_Payment_Integration"],
    ["github" ,"clone_laravel_project","laravel_docker"],
  ]
  const vue_matrix = [
    [ "How_to_create_Vuejs","install_dependencies","ship_your_app_to_production"],
    "create_state_in_Vuejs",
    "v-text",
    "v-html",
    "v-for",
    "v-if_and_v-else-if_and_v-else",
    "v-once",
    "v-show",
    "v-bind",
    "v-model",
    "Component_in_vuejs",
    "change_value_state_when_click_button_in_another_Component",
  ]
  return (
    <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/html/*' element={<Html  html_list={html_list} />} />
            <Route path='/css/*' element={<Css  css_list={css_list}  />} />
            <Route path='/js/*' element={<Js js_matrix={js_matrix} />} />
            <Route path='/react/' element={<React react_matrix={react_matrix} />} />
            <Route path='/vue/' element={<Vue vue_matrix={vue_matrix} />} />
            <Route path='/django/*' element={<Django django_matrix={django_matrix} />} />
            <Route path='/laravel/*' element={<Laravel laravel_matrix={laravel_matrix}  />} />
            <Route path='/power-shell' element={<Cmd cmd_list={cmd_list}  />} />
            <Route path='/git' element={<Git git_list={git_list}  />} />
        </Routes>  
    </Router> 
  );
}

export default App;