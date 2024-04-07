import { useEffect, useRef} from 'react';
import { Routes, Route , Link } from "react-router-dom";
import { 
    Introduction,Statements,Output,Variables,Arithmetic,Assignment,Types,String,StringSearch,
    StringsTemplates,Numbers,Booleans,DateJS,Random,Conditions,Switch,ArraysPart1,ArraysPart2,
    Objects,LoopFor,LoopWhile,Break,Conversion,Modules,Errors,JSON,
    //function
    Functions,Bind,Call,Apply,Map,Filter,
    //class
    ClassIntro,Static,Private,Inheritance,
    //window
    Alert,Confirm,Btoa,Prompt,Atob,Location,InnerWidth,InnerHeight,ClientWidth,ScrollBy,
    PageXOffset,PageX,ScrollIntoView,ScrollTop,Console,GetComputedStyle,
    LocalStorage,SessionStorage,MatchMedia,Navigator,Print,
    //dom
    AddEventListener,RemoveEventListener,Doctype,GetElementById,GetElementsByClassName,
    GetElementsByName,CreateComment,GetElementsByTagName,ActiveElement,Children,Body,
    DocumentElement,Cookie,ClassList,CreateElement,AppendChild,SetAttribute,CreateAttribute,
    RemoveAttribute,CreateTextNode,Remove,Head,Images,Links,QuerySelector,QuerySelectorAll,
    RequestFullscreen,Contains,Focus,Blur,Scripts,Title,Play,Pause,Load,
    //events
    Animation,CtrlKey,CurrentTarget,Data,Onafterprint,Onbeforeprint,Onblur,Oncanplay,Onchange,
    Onclick,Oncontextmenu,Oncopy,Oncut,Ondblclick,Ondrag,Ondurationchange,Onended,Onerror,Onfocus,
    Onfocusin,Onfocusout,Oninput,Oninvalid,Onkeydown,Onkeypress,Onkeyup,Onload,
    Onloadeddata,Onloadedmetadata,Onloadstart,Onmousedown,Onmouseenter,Onmouseleave,Onmousemove,
    Onmouseout,Onmouseover,Onmouseup,Onpagehide,Onpaste,Onpause,Onplay,Onprogress,Onreset,Onresize,
    Onscroll,Onselect,Onsubmit,Ontoggle,Onunload,Onvolumechange,Target,
    //api
    Intro,Fetch,ValidationAPI,History,SetInterval,ClearInterval,SetTimeout,
} from './pathJs.js';

export default function Js(props){
    const AsideRef = useRef(null);
    useEffect(() => {
       AsideRef.current.scrollTop = localStorage.getItem("js_aside") || 0;
       props.scrollY_to_0();
    },[props]); 

    const matrix = props.js_matrix.map( e =>(
        <dl>
            { 
                e.map((value, index) => (
                    (index === 0) ? 
                        <dt className="aside-dl-dt"> 
                            <i className="fa-solid fa-caret-right me-1"></i> {value}
                        </dt>:
                        <dd className="aside-dl-dd">
                            <Link to={`/js/${value.toLowerCase().replace(/\s/g, '-')}`} onClick={props.scrollY_to_0}> 
                                <i className="fa-solid fa-circle"></i> {value}
                            </Link>
                        </dd>
                ))
            }
        </dl>
    ));
return(
<>
 <main onClick={ (event)=>{ props.clickMenuHeader(event, false); props.closeSearchPhone();  } }>
    <aside className="aside" onScroll={()=>{ localStorage.setItem("js_aside",AsideRef.current.scrollTop) }} ref={AsideRef}>
        {matrix}
    </aside>
    <section>
        <Routes>
            <Route path='/' element={<Introduction />} />
            <Route path='/introduction' element={<Introduction />} /> 
            <Route path='/statements' element={<Statements />} /> 
            <Route path='/output' element={<Output />} /> 
            <Route path='/variables' element={<Variables />} /> 
            <Route path='/arithmetic' element={<Arithmetic />} /> 
            <Route path='/assignment' element={<Assignment />} /> 
            <Route path='/types' element={<Types />} /> 
            <Route path='/string' element={<String />} /> 
            <Route path='/string-search' element={<StringSearch />} /> 
            <Route path='/strings-templates' element={<StringsTemplates />} /> 
            <Route path='/numbers' element={<Numbers />} /> 
            <Route path='/booleans' element={<Booleans />} /> 
            <Route path='/date' element={<DateJS />} /> 
            <Route path='/random' element={<Random />} /> 
            <Route path='/conditions' element={<Conditions />} /> 
            <Route path='/switch' element={<Switch />} /> 
            <Route path='/arrays-part-1' element={<ArraysPart1 />} /> 
            <Route path='/arrays-part-2' element={<ArraysPart2 />} /> 
            <Route path='/objects' element={<Objects />} /> 
            <Route path='/loop-for' element={<LoopFor />} /> 
            <Route path='/loop-while' element={<LoopWhile />} /> 
            <Route path='/break' element={<Break />} /> 
            <Route path='/conversion' element={<Conversion />} /> 
            <Route path='/modules' element={<Modules />} /> 
            <Route path='/errors' element={<Errors />} /> 
            <Route path='/json' element={<JSON />} /> 

            <Route path='/functions' element={<Functions />} /> 
            <Route path='/bind' element={<Bind />} /> 
            <Route path='/call' element={<Call />} /> 
            <Route path='/apply' element={<Apply />} /> 
            <Route path='/map' element={<Map />} /> 
            <Route path='/filter' element={<Filter />} /> 

            <Route path='/class-introduction' element={<ClassIntro />} /> 
            <Route path='/static' element={<Static />} /> 
            <Route path='/private' element={<Private />} /> 
            <Route path='/inheritance' element={<Inheritance />} /> 

            <Route path='/alert' element={<Alert />} /> 
            <Route path='/confirm' element={<Confirm />} /> 
            <Route path='/btoa' element={<Btoa />} /> 
            <Route path='/prompt' element={<Prompt />} /> 
            <Route path='/atob' element={<Atob />} /> 
            <Route path='/location' element={<Location />} /> 
            <Route path='/innerwidth' element={<InnerWidth />} /> 
            <Route path='/innerheight' element={<InnerHeight />} /> 
            <Route path='/clientwidth' element={<ClientWidth />} /> 
            <Route path='/scrollby' element={<ScrollBy />} /> 
            <Route path='/pagexoffset' element={<PageXOffset />} /> 
            <Route path='/pagex' element={<PageX />} /> 
            <Route path='/scrollintoview' element={<ScrollIntoView />} /> 
            <Route path='/scrolltop' element={<ScrollTop />} /> 
            <Route path='/console' element={<Console />} /> 
            <Route path='/getcomputedstyle' element={<GetComputedStyle />} /> 
            <Route path='/localstorage' element={<LocalStorage />} /> 
            <Route path='/sessionstorage' element={<SessionStorage />} /> 
            <Route path='/matchmedia' element={<MatchMedia />} /> 
            <Route path='/navigator' element={<Navigator />} /> 
            <Route path='/print' element={<Print />} /> 
            
            
            <Route path='/addeventlistener' element={<AddEventListener />} /> 
            <Route path='/removeeventlistener' element={<RemoveEventListener />} /> 
            <Route path='/doctype' element={<Doctype />} /> 
            <Route path='/getelementbyid' element={<GetElementById />} /> 
            <Route path='/getElementsbyclassname' element={<GetElementsByClassName />} /> 
            <Route path='/getelementsbyname' element={<GetElementsByName />} /> 
            <Route path='/getelementsbytagname' element={<GetElementsByTagName />} /> 
            <Route path='/activeelement' element={<ActiveElement />} /> 
            <Route path='/children' element={<Children />} /> 
            <Route path='/body' element={<Body />} /> 
            <Route path='/documentelement' element={<DocumentElement />} /> 
            <Route path='/cookie' element={<Cookie />} /> 
            <Route path='/classlist' element={<ClassList />} /> 
            <Route path='/createelement' element={<CreateElement />} /> 
            <Route path='/appendchild' element={<AppendChild />} /> 
            <Route path='/setattribute' element={<SetAttribute />} /> 
            <Route path='/createattribute' element={<CreateAttribute />} /> 
            <Route path='/createcomment' element={<CreateComment />} /> 
            <Route path='/removeattribute' element={<RemoveAttribute />} /> 
            <Route path='/createtextnode' element={<CreateTextNode />} /> 
            <Route path='/remove' element={<Remove />} /> 
            <Route path='/head' element={<Head />} /> 
            <Route path='/images' element={<Images />} /> 
            <Route path='/links' element={<Links />} /> 
            <Route path='/queryselector' element={<QuerySelector />} /> 
            <Route path='/queryselectorall' element={<QuerySelectorAll />} /> 
            <Route path='/requestfullscreen' element={<RequestFullscreen />} /> 
            <Route path='/contains' element={<Contains />} /> 
            <Route path='/focus' element={<Focus />} /> 
            <Route path='/blur' element={<Blur />} /> 
            <Route path='/scripts' element={<Scripts />} /> 
            <Route path='/title' element={<Title />} /> 
            <Route path='/play' element={<Play />} /> 
            <Route path='/pause' element={<Pause />} /> 
            <Route path='/load' element={<Load />} /> 

            <Route path='/animation' element={<Animation />} /> 
            <Route path='/ctrlKey' element={<CtrlKey />} /> 
            <Route path='/currentTarget' element={<CurrentTarget />} /> 
            <Route path='/data' element={<Data />} /> 
            <Route path='/onafterprint' element={<Onafterprint />} /> 
            <Route path='/onbeforeprint' element={<Onbeforeprint />} /> 
            <Route path='/onblur' element={<Onblur />} /> 
            <Route path='/oncanplay' element={<Oncanplay />} /> 
            <Route path='/onchange' element={<Onchange />} /> 
            <Route path='/onclick' element={<Onclick />} /> 
            <Route path='/oncontextmenu' element={<Oncontextmenu />} /> 
            <Route path='/oncopy' element={<Oncopy />} /> 
            <Route path='/oncut' element={<Oncut />} /> 
            <Route path='/ondblclick' element={<Ondblclick />} /> 
            <Route path='/ondrag' element={<Ondrag />} /> 
            <Route path='/ondurationchange' element={<Ondurationchange />} /> 
            <Route path='/onended' element={<Onended />} /> 
            <Route path='/onerror' element={<Onerror />} /> 
            <Route path='/onfocus' element={<Onfocus />} /> 
            <Route path='/onfocusin' element={<Onfocusin />} /> 
            <Route path='/onfocusout' element={<Onfocusout />} /> 
            <Route path='/oninput' element={<Oninput />} /> 
            <Route path='/oninvalid' element={<Oninvalid />} /> 
            <Route path='/onkeydown' element={<Onkeydown />} /> 
            <Route path='/onkeypress' element={<Onkeypress />} /> 
            <Route path='/onkeyup' element={<Onkeyup />} /> 
            <Route path='/onload' element={<Onload />} /> 
            <Route path='/onloadeddata' element={<Onloadeddata />} /> 
            <Route path='/onloadedmetadata' element={<Onloadedmetadata />} /> 
            <Route path='/onloadstart' element={<Onloadstart />} /> 
            <Route path='/onmousedown' element={<Onmousedown />} /> 
            <Route path='/onmouseenter' element={<Onmouseenter />} />
            <Route path='/onmouseleave' element={<Onmouseleave />} /> 
            <Route path='/onmousemove' element={<Onmousemove />} /> 
            <Route path='/onmouseout' element={<Onmouseout />} /> 
            <Route path='/onmouseover' element={<Onmouseover />} /> 
            <Route path='/onmouseup' element={<Onmouseup />} /> 
            <Route path='/onpagehide' element={<Onpagehide />} /> 
            <Route path='/onpaste' element={<Onpaste />} /> 
            <Route path='/onpause' element={<Onpause />} /> 
            <Route path='/onplay' element={<Onplay />} /> 
            <Route path='/onprogress' element={<Onprogress />} /> 
            <Route path='/onreset' element={<Onreset />} /> 
            <Route path='/onresize' element={<Onresize />} /> 
            <Route path='/onscroll' element={<Onscroll />} /> 
            <Route path='/onselect' element={<Onselect />} /> 
            <Route path='/onsubmit' element={<Onsubmit />} /> 
            <Route path='/ontoggle' element={<Ontoggle />} /> 
            <Route path='/onunload' element={<Onunload />} /> 
            <Route path='/onvolumechange' element={<Onvolumechange />} /> 
            <Route path='/target' element={<Target />} />

            <Route path='/intro' element={<Intro />} /> 
            <Route path='/forms' element={<ValidationAPI />} /> 
            <Route path='/fetch' element={<Fetch />} /> 
            <Route path='/history' element={<History />} /> 
            <Route path='/setinterval' element={<SetInterval />} /> 
            <Route path='/clearinterval' element={<ClearInterval />} /> 
            <Route path='/settimeout' element={<SetTimeout />} /> 
        </Routes>
    </section>
</main>
</>
)
}