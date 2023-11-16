import { Routes, Route , Link } from "react-router-dom";
import { Introduction } from './path.js';
import "./Js.sass"

export default function Js(){
    const js_list = ["Introduction","Statements","Output","Variables","Arithmetic","Assignment","Types","String","String Search","Strings Templates","Numbers","Booleans","Date","Random","Conditions","Switch","Arrays part 1","Arrays part 2","Objects","Loop for","Loop while","Break","Conversion","Modules","Errors","JSON","Performance", ]
    const functions_list = ["Functions", "bind", "call","apply",  "Map","Filter", ]
    const class_list = ["Class Introduction","Static","private","Inheritance" ]
    const window_list = ["alert","confirm","btoa","prompt","atob","location","frames","innerWidth","innerHeight","clientWidth","scrollBy","pageXOffset","pageX","pageY","scrollIntoView","scrollTop","console","getComputedStyle","localStorage","sessionStorage","matchMedia","navigator","print",]
    const dom_list = ["addEventListener","removeEventListener","doctype","getElementById","getElementsByClassName","getElementsByName","getElementsByTagName","activeElement","children","body","documentElement","cookie","classList","createElement","appendChild","setAttribute","createAttribute","removeAttribute","createComment","createTextNode","remove","head","images","links","querySelector","querySelectorAll","requestFullscreen","exitFullscreen","contains","focus","blur","scripts","title","baseURI","play","pause","load",]
    const events_list = ["currentTarget","target","ctrlKey","data","onclick","ondblclick","onbeforeprint","animation","onfocus","onblur","onloadstart","ondurationchange","onloadedmetadata","onloadeddata","onprogress","onprogress","onended","onchange","oninput","oncontextmenu","oncopy","oninvalid","onkeydown","onkeypress","onkeyup","onload","onmousedown","onmouseup","onmouseenter","onmouseleave","onmouseover","onmouseout","ondrag","onsubmit","onfocusin","onfocusout","onerror","onfullscreenchange","onpagehide","onpaste","onpause","onplay","onresize","onreset","onscroll","onselect","ontoggle","onunload","onvolumechange",]
    const api_list = ["Intro","Forms","fetch","History","setInterval","clearInterval","setTimeout"]

    const arrays1 = js_list.map(e => <li className="list-group-item"><Link>JS {e}</Link></li>)
    const arrays2 = functions_list.map(e => <li className="list-group-item"><Link>JS {e}</Link></li>)
    const arrays3 = class_list.map(e => <li className="list-group-item"><Link>JS {e}</Link></li>)
    const arrays4 = window_list.map(e => <li className="list-group-item"><Link>JS {e}</Link></li>)
    const arrays5 = dom_list.map(e => <li className="list-group-item"><Link>JS {e}</Link></li>)
    const arrays6 = events_list.map(e => <li className="list-group-item"><Link>JS {e}</Link></li>)
    const arrays7 = api_list.map(e => <li className="list-group-item"><Link>JS {e}</Link></li>)
return(
<>
 <main>
    <aside className="aside">
        <h5 className="ms-2">JavaScript Tutorials</h5>
        <ul className="list-group">
            {arrays1}
        </ul><br/>
        <h5 className="ms-2">Functions Tutorials</h5>
        <ul className="list-group">
            {arrays2}
        </ul><br/>
        <h5 className="ms-2">Class Tutorials</h5>
        <ul className="list-group">
            {arrays3}
        </ul><br/>
        <h5 className="ms-2">Window Tutorials</h5>
        <ul className="list-group">
            {arrays4}
        </ul><br/>
        <h5 className="ms-2">DOM Tutorials</h5>
        <ul className="list-group">
            {arrays5}
        </ul><br/>
        <h5 className="ms-2">Events Tutorials</h5>
        <ul className="list-group">
            {arrays6}
        </ul><br/>
        <h5 className="ms-2">API Tutorials</h5>
        <ul className="list-group">
            {arrays7}
        </ul><br/>
        
    </aside>
    <section>
        <Routes>
            <Route path='/' element={<Introduction />} />
            <Route path='/introduction' element={<Introduction />} /> 
        </Routes>
    </section>
</main>
</>
)
}