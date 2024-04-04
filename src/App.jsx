import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import { Header,Home,Html,Css,Js,React,Mysql,Python,Django,DjangoRestFramework,Cmd,Git,Php,Laravel} from './components/path';
import { useEffect } from 'react';
import "./App.sass";

function App() {
    useEffect(() => {
            // Scroll to id when print route direct in browser
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' , block: 'start', inline: 'nearest' });
                    setTimeout(() => {
                        const scrollTop = window.scrollY - 140;
                        window.scrollTo({
                            top: scrollTop ,
                            behavior: 'smooth'
                        });
                    }, 1000);  
                }
            }

            // Show Aside if window more than 1140
            window.addEventListener('resize', ()=>{
                if(window.innerWidth > 1140){
                    const asides = document.querySelectorAll('.aside');
                    asides.forEach( aside => {
                        aside.style.display = "block";
                    });
                }
            }); 
    }, []);

    const scrollYAdd = () => {
        setTimeout(() => {
            const scrollTop = window.scrollY - 140;
            window.scrollTo({
              top: scrollTop ,
              behavior: 'smooth'
            });
        }, 1000 );  
    };
    const scrollY_to_0 = () => {
        window.scrollTo({
          top: 0 ,
          behavior: 'smooth'
        });
    };



    const html_list = ["Introduction","Editor","Attributes","Heading (h1)","Paragraph (p)" ,"Break (br)","Horizontal (hr)","Superscript (sup)","Subscript (sub)","Underline (u)","Italic (i)","Abbreviation (abbr)","Blockquote","Quotation (q)","Mark","Deleted (del)","Preformatted (pre)","Small","Anchor (a)","Image (img)","Division (div)","Span","Audio","Video","Details","Bi-Directional Isolation (bdi)","Bi-Directional Override (bdo)","Lists Ordered (ol)","Lists Unordered (ul)","Lists Definitionul (dl)","Table","Input","Select","Textarea","Form","Button", "Header","Fieldset","Dialog","Iframe","Meter","Style","Link","Meta" ];
    const css_list  = ["Introduction","width","height","background","color","border","border-radius","padding","margin","font-size","font-style","font-weight","font-variant","white-space","word-wrap","word-break","text-decoration","letter-spacing","word-spacing","text-align","text-transform","text-indent","line-height","float","clear","opacity","hover","display","block","inline","inline-block","visibility","border-collapse","overflow","text-shadow","transform","transform-3D","perspective","resize","focus","transition","position","list-style-type","box-sizing","object-fit","animation","clip-path","cursor","scroll-behavior","z-index","outline","invalid & valid","after & before","writing-mode","filter","quotes","transform-style","-webkit-text-stroke", "flex-direction","flex-wrap","align-items","align-self","justify-content","order","grid","accent-color","Selectors","Functions","media","scss","sass"];
    const js_matrix = [
        ["JS Tutorial","Introduction","Statements","Output","Variables","Arithmetic","Assignment","Types","String","String Search","Strings Templates","Numbers","Booleans","Date","Random","Conditions","Switch","Arrays part 1","Arrays part 2","Objects","Loop for","Loop while","Break","Conversion","Modules","Errors","JSON",],
        ["JS Functions","Functions", "bind", "call","apply",  "Map","Filter", ],
        ["JS Class","Class-Introduction","Static","private","Inheritance" ],
        ["JS Window","alert","confirm","prompt","btoa","atob","location","innerWidth","innerHeight","clientWidth","scrollBy","pageXOffset","pageX","scrollIntoView","scrollTop","console","getComputedStyle","localStorage","sessionStorage","matchMedia","navigator","print",],
        ["JS DOM","addEventListener","removeEventListener","doctype","getElementById","getElementsByClassName","getElementsByName","getElementsByTagName","activeElement","children","body","documentElement","cookie","classList","createElement","appendChild","setAttribute","createAttribute","removeAttribute","createComment","createTextNode","remove","head","images","links","querySelector","querySelectorAll","requestFullscreen","contains","focus","blur","scripts","title","play","pause","load",],
        ["JS Events","currentTarget","target","ctrlKey","data","onclick","ondblclick","onbeforeprint","animation","onfocus","onblur","onloadstart","ondurationchange","onloadedmetadata","onloadeddata","onprogress","onended","onchange","oninput","oncontextmenu","oncopy","oninvalid","onkeydown","onkeypress","onkeyup","onload","onmousedown","onmouseup","onmouseenter","onmouseleave","onmouseover","onmouseout","ondrag","onsubmit","onfocusin","onfocusout","onerror","onpagehide","onpaste","onpause","onplay","onresize","onreset","onscroll","onselect","ontoggle","onunload","onvolumechange",],
        ["JS API","Intro","Forms","fetch","History","setInterval","clearInterval","setTimeout"],
    ];
    const react_matrix  = [
        ["Introduction","What_is_React","How_react_work","What_you_need_to_get_started","multiple_versions_of_Node","Verify_required_installations","ES6","Create_React_App","Run_React_App",],
        ["Component","JSX","function_Component","function_Component_props","class_Component","class_Component_this_props","Components_in_Component",],
        "Events", "Lists", "Handle_images_react", "Handle_import", "props_children",
        ["hooks","useState","this_state"],
        ["packages","npm_list","axios","react_paypal_js","react_sass","Router","useNavigate_Router","useParams_Router","react_syntax_highlighter"],
    ];
    const sql_list = [
        "Intro" , "Install Mysql","Create Database","Drop Database","Comments","Data Types","Select Database","Create Table","Drop Table","Insert Row","Auto-increment","Retrieving Data from Table","Merge Columns while Retrieving","IF EXISTS","IF NOT EXISTS","Retrieve Data with Conditions","Retrieve Data with Sorting","Retrieve Distinct Data","Merge Tables into One","Delete Data from Table","Update Table Data","Limit Rows Returned","Handling Null Fields","Retrieve Minimum Value in Column","Retrieve Maximum Value in Column","Count Rows in Table","Sum of Column Values","Average of Column Values","Aggregate Common Field Values","Conditions on Aggregated Fields","Copy Data to Another Table","Set Default Value for Column","CASE Condition","Relationships between tables",
    ];
    const python_list = [
        "Introduction","Install Windows","Execute Python in CMD","Indentation","Python in Visual Studio Code","Comments","Variables","Casting","Numbers","Strings","Booleans","Operators","Lists","Tuples","Sets","Dictionaries","If...Else","While Loops","For Loops","Functions","Lambda","Classes/Objects","Inheritance","Iterators","Scope","Modules","Dates","Math","JSON","RegEx","PIP","Try...Except",
        "Input","String Formatting",
        "File Handling","Read Files","Write/Create Files", "Delete Files",
    ];
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
        ["Django_Email","2_Step_Verification","send_email","list_emails"],
        "Django_Pagination","Form","ModelForm",
        ["Django_Filter","models_Objecjs_filter","raw_filter","lookup_expr","Q_filter","select_related",],
        "Session","Context_Processors"
    ];
    const django_rest_framework_matrix = [
        ["Introduction","What_is_django_rest_framework","What_is_API","Install_Django_Rest_Framework"],
        ["serializers","What_is_Serializer","Serializers_not_specific_for_models","Serializers_and_model","Serializers_validation","Serializers_and_related_name"],
        ["self-kwargs","Why_we_use_self-kwargs","get_URL_param_from_function","get_URL_param_from_class"],
        ["APIView","What_is_APIView","post","get","put","delete",],
        ["class_generic_views","ListAPIView","CreateAPIView","RetrieveAPIView","UpdateAPIView","DestroyAPIView","ListCreateAPIView","RetrieveUpdateAPIView","RetrieveDestroyAPIView","RetrieveUpdateDestroyAPIView"],
        "status",
        [ "DRF_and_React","Connect_Django_with_React","Get_data_in_React","Permissions","Authentication"],
    ];
    const php_list = [
      ["PHP Tutorial","Introduction","Install","Comments","Variables","echo print","Data Types","Strings","Numbers","Casting","Math","Constants","Operators","Conditions","Switch","Loops","Break","Functions","Arrays","Superglobals","Form Handling","RegEx","Date and Time","Include Files","Filters","Callback Functions","Exceptions","JSON"],
      ["PHP OOP","What is OOP","Classes Objects","Constructor","Destructor","Access Modifiers","Inheritance","Class Constants","Abstract Classes","Traits","Static Methods","Static Properties","Iterables"],
      ["PHP MySQL","Connect","Create Database","Create Table"]
    ];
    const laravel_matrix = [
      ["Introduction","what_is_laravel","what_we_need_to_use_laravel"],
      ["MVC","what_is_MVC","First_Laravel_Project","run_project","artisan","views","route","request","Controller","layoute_page","css_and_javaScript","route_name","controller_resource","list_all_route_in_project","Exemple"],
      ["Database","Connect_with_database","Create_models","migrate","Create_Table_without_Models","Add_Column_In_Table","Remove_Column_From_Table","Foreign_Keys","Truncate_models_table","Drop_the_last_migrate","Clear_tables_and_create_it_again","soft_delete","eloquent_scopes","Seeder_class"],
      ["Database_Route_resource","New_project","index","create","Store_and_Upload_image","Show","Edit","Destroy","only_and_except"],
      ["Database_Query_Builder","What_is_Query_Builder","Insert","Get","Full_Example","Delete_All","truncate"],
      "Tinker",
      ["Middleware","Example_1","Example_2"],
      ["Packages","Authentication_UI","Authentication_Breeze","Paypal_Payment","send_mail"],
      "Clone_Github"
    ];
    const git_list  = [ "Introduction","Install_git","Diagram_git","Repository","Branch","Local_Repository","Remote_Repository","Pull_Request","Clone_Repository","Initialize_Repository","git_status","git_add","git_commit","git_branch","git_remote","git_push","Work_as_a_team","git_pull","Existing_Project_powerShell","Existing_Project_App","gitignore_file","submodules","Create_new_branch","Generating_SSH","Remove_connection"];
    const cmd_list  = [ "Introduction","Create_Folder","Change_Directory","Remove_Directory","Create_File","Rename_File","Remove_File","Remove_all_Files","Get_all_Directory","Get_Content_File","Clear_Screen","curl_Html","POST_Requests_curl","Copy_Files_to_another_Folder","Change_extension","Change_extensions","Print_all_Files_in_folder","View_System_Information","Turn_off_the_Computer","search_for_File_by_Extensions","Display_Text","Date_and_Time"];

    // function searchAndRetrieve(searchTerm) {
    //     let matchingValues = [];
    //     const includesSearchTerm =(value)=>{
    //         value.toLowerCase().includes(searchTerm.toLowerCase());
    //     };
    //     matchingValues.push(...html_list.filter((value) => includesSearchTerm(value)));
    //     matchingValues.push(...css_list.filter((value) => includesSearchTerm(value)));
    //     matchingValues.push(...js_matrix.flat().filter((value) => includesSearchTerm(value)));
    //     matchingValues.push(...react_matrix.flat().filter((value) => includesSearchTerm(value)));
    //     matchingValues.push(...sql_list.filter((value) => includesSearchTerm(value)));
    //     matchingValues.push(...python_list.filter((value) => includesSearchTerm(value)));
    //     matchingValues.push(...django_matrix.flat().filter((value) => includesSearchTerm(value)));
    //     matchingValues.push(...django_rest_framework_matrix.flat().filter((value) => includesSearchTerm(value)));
    //     matchingValues.push(...php_list.flat().filter((value) => includesSearchTerm(value)));
    //     matchingValues.push(...laravel_matrix.flat().filter((value) => includesSearchTerm(value)));
    //     matchingValues.push(...git_list.filter((value) => includesSearchTerm(value)));
    //     matchingValues.push(...cmd_list.filter((value) => includesSearchTerm(value)));
    //     document.write("Matching Values:", searchTerm);
    //     document.write(matchingValues);
    //     matchingValues.forEach(element => {
    //         console.log(element)
    //     });
    // }   
    // searchAndRetrieve("Introduction");
  
    /***************************  Aside animation and event click ***************************/
    // open
    function myStartFunctionOpen() {
        this.style.width = "0px"; 
    }
    function MyAnimationiterationOpen(){
        this.style.width = "276px";
    }
    // close
    function myStartFunctionClose() {
        this.style.width = "276px";
        this.style.display = "block"; 
    }
    function MyAnimationiterationClose(){
        this.style.width = "0px"; 
        this.style.display = "none"; 
    }
    
    function clickMenuHeader(clickFromMenu){
        const asides = document.querySelectorAll('.aside');
        asides.forEach( aside => {
            if( aside.style.display !== 'block' && clickFromMenu === true  )  {
                aside.style.display = "block"
                aside.style.animation  = "moveAsideOpen 1s forwards";
                aside.addEventListener("animationstart", myStartFunctionOpen);
                aside.addEventListener("animationiteration", MyAnimationiterationOpen);
            }else{
                if(window.innerWidth <= 1140){
                    aside.style.animation  = "moveAsideClose 1s forwards";
                    aside.style.display = "none";    
                    aside.addEventListener("animationstart", myStartFunctionClose);
                    aside.addEventListener("animationiteration", MyAnimationiterationClose);
                }
            }
        });
    }

    return (
    <Router>
        <Header 
            clickMenuHeader={clickMenuHeader} 
        />
        <Routes>
            <Route path='/' element={<Home  />} /> 
            <Route path='/html/*' element={<Html scrollY_to_0={scrollY_to_0} clickMenuHeader={clickMenuHeader} html_list={html_list} />} />
            <Route path='/css/*' element={<Css scrollY_to_0={scrollY_to_0} clickMenuHeader={clickMenuHeader} css_list={css_list}  />} />
            <Route path='/js/*' element={<Js scrollY_to_0={scrollY_to_0} clickMenuHeader={clickMenuHeader} js_matrix={js_matrix} />} />
            <Route path='/react' element={<React scrollYAdd={scrollYAdd} clickMenuHeader={clickMenuHeader} react_matrix={react_matrix} />} />
            <Route path='/mysql/*' element={<Mysql scrollYAdd={scrollYAdd} clickMenuHeader={clickMenuHeader} sql_list={sql_list} />} />
            <Route path='/python/*' element={<Python scrollY_to_0={scrollY_to_0} clickMenuHeader={clickMenuHeader} python_list={python_list} />} />
            <Route path='/django/*' element={<Django scrollYAdd={scrollYAdd} clickMenuHeader={clickMenuHeader} django_matrix={django_matrix} />} />
            <Route path='/django-rest-framework/*' element={<DjangoRestFramework scrollYAdd={scrollYAdd} clickMenuHeader={clickMenuHeader} django_rest_framework_matrix={django_rest_framework_matrix} />} />
            <Route path='/php/*' element={<Php scrollY_to_0={scrollY_to_0} clickMenuHeader={clickMenuHeader} php_list={php_list}  />} />
            <Route path='/laravel/*' element={<Laravel scrollYAdd={scrollYAdd} clickMenuHeader={clickMenuHeader} laravel_matrix={laravel_matrix}  />} />
            <Route path='/powerShell' element={<Cmd scrollYAdd={scrollYAdd} clickMenuHeader={clickMenuHeader} cmd_list={cmd_list}  />} />
            <Route path='/git' element={<Git scrollYAdd={scrollYAdd} clickMenuHeader={clickMenuHeader} git_list={git_list}  />} />
        </Routes>
    </Router> 
    );
}

export default App;