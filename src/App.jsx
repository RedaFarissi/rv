import { BrowserRouter as Router , Routes, Route} from "react-router-dom";
import { Header , Home , Html , Css, Js , React , Cmd , Git , Django} from './components/path';
import "./App.sass"

function App() {
  const html_list = [ "Introduction","Editor","Attributes","Heading (h1)","Paragraph (p)" ,"Break (br)","Horizontal (hr)","Superscript (sup)","Subscript (sub)","Underline (u)","Italic (i)","Abbreviation (abbr)","Blockquote","Quotation (q)","Mark","Deleted (del)","Preformatted (pre)","Small","Anchor (a)","Image (img)","Division (div)","Span","Audio","Video","Details","Bi-Directional Isolation (bdi)","Bi-Directional Override (bdo)","Lists Ordered (ol)","Lists Unordered (ul)","Lists Definitionul (dl)","Table","Input","Select","Textarea","Form","Button", "Header","Fieldset","Dialog","Iframe","Meter","Style","Link","Meta" ]
  const git_list  = [ "Introduction","Install_git","Diagram_git","Repository","Branch","Local_Repository","Remote_Repository","Pull_Request","Clone_Repository","Initialize_Repository","git_status","git_add","git_commit","git_branch","git_remote","git_push","Work_as_a_team","git_pull","Existing_Project_powerShell","Existing_Project_App","gitignore_file","submodules","Create_new_branch","Remove_connectio"]
  const css_list  = [ "Introduction","width","height","background","color","border","border-radius","padding","margin","font-size","font-style","font-weight","font-variant","white-space","word-wrap","word-break","text-decoration","letter-spacing","word-spacing","text-align","text-transform","text-indent","line-height","float","clear","opacity","hover","display","block","inline","inline-block","visibility","border-collapse","overflow","text-shadow","transform","transform-3D","perspective","resize","focus","transition","position","list-style-type","box-sizing","object-fit","animation","clip-path","cursor","scroll-behavior","z-index","outline","invalid & valid","after & before","writing-mode","filter","quotes","transform-style","-webkit-text-stroke", "flex-direction","flex-wrap","align-items","align-self","justify-content","order","grid","accent-color","Selectors","Functions","media","scss","sass"]
  const cmd_list  = [ "Introduction","Create_Folder","Change_Directory","Remove_Directory","Create_File","Rename_File","Remove_File","Remove_all_Files","Get_all_Directory","Get_Content_File","Clear_Screen","curl_Html","POST_Requests_curl","Copy_Files_to_another_Folder","Change_extension","Print_all_Files_in_folder","View_System_Information","Turn_off_the_Computer","search_for_File_by_Extensions","Display_Text","Date_and_Time",]
  const js_matrix = [
    ["Tutorial","Introduction","Statements","Output","Variables","Arithmetic","Assignment","Types","String","String Search","Strings Templates","Numbers","Booleans","Date","Random","Conditions","Switch","Arrays part 1","Arrays part 2","Objects","Loop for","Loop while","Break","Conversion","Modules","Errors","JSON",],
    ["Functions","Functions", "bind", "call","apply",  "Map","Filter", ],
    ["Class","Class Introduction","Static","private","Inheritance" ],
    ["Window","alert","confirm","btoa","prompt","atob","location","frames","innerWidth","innerHeight","clientWidth","scrollBy","pageXOffset","pageX","pageY","scrollIntoView","scrollTop","console","getComputedStyle","localStorage","sessionStorage","matchMedia","navigator","print",],
    ["DOM","addEventListener","removeEventListener","doctype","getElementById","getElementsByClassName","getElementsByName","getElementsByTagName","activeElement","children","body","documentElement","cookie","classList","createElement","appendChild","setAttribute","createAttribute","removeAttribute","createComment","createTextNode","remove","head","images","links","querySelector","querySelectorAll","requestFullscreen","exitFullscreen","contains","focus","blur","scripts","title","baseURI","play","pause","load",],
    ["Events","currentTarget","target","ctrlKey","data","onclick","ondblclick","onbeforeprint","animation","onfocus","onblur","onloadstart","ondurationchange","onloadedmetadata","onloadeddata","onprogress","onprogress","onended","onchange","oninput","oncontextmenu","oncopy","oninvalid","onkeydown","onkeypress","onkeyup","onload","onmousedown","onmouseup","onmouseenter","onmouseleave","onmouseover","onmouseout","ondrag","onsubmit","onfocusin","onfocusout","onerror","onfullscreenchange","onpagehide","onpaste","onpause","onplay","onresize","onreset","onscroll","onselect","ontoggle","onunload","onvolumechange",],
    ["API","Intro","Forms","fetch","History","setInterval","clearInterval","setTimeout"],
  ]

  
  return (
    <Router>
        <Header />
        <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/html/*' element={<Html  html_list={html_list} />} />
            <Route path='/css/*' element={<Css  css_list={css_list}  />} />
            <Route path='/js/*' element={<Js js_matrix={js_matrix} />} />
            <Route path='/react/' element={<React  />} />
            <Route path='/django/*' element={<Django  />} />
            <Route path='/power-shell' element={<Cmd cmd_list={cmd_list}  />} />
            <Route path='/git' element={<Git git_list={git_list}  />} />
        </Routes>  
    </Router> 
  );
}

  // const react_list  = [
  //   "Introduction","What_is_React","How_react_work","What_you_need_to_get_started","Verify_required_installations","ES6","Create_React_App","Run_React_App",
  //   "Component","JSX","function_Component","function_Component_props","class_Component","class_Component_this_props","Components_in_Component",
  //   "Events",
  //   "Lists",
  //   "Handle_images_react",
  //   "Handle_import",
  //   "props_children",
  //   "hooks","useState","this_state",
  //   "packages","npm_list","axios","react_paypal_js","react_sass","Router","useNavigate_Router","useParams_Router","react_syntax_highlighter"
  // ]
export default App;