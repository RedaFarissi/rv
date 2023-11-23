import { Routes, Route , Link } from "react-router-dom";
import { Introduction } from './pathCss.js';

export default function Css(){
    const css_list = [ "Introduction","width","height","background","color","border","border-radius","padding","margin","font-size","font-style","font-weight","font-variant","white-space","word-wrap","word-break","text-decoration","letter-spacing","word-spacing","text-align","text-transform","text-indent","line-height","float","clear","opacity","hover","display","block","inline","inline-block","visibility","border-collapse","overflow","text-shadow","perspective","transform","transform-3D","resize","focus","transition","position","list-style-type","box-sizing","object-fit","animation","clip-path","cursor","scroll-behavior","z-index","invalid & valid","outline","after & before","writing-mode","filter","quotes","transform-style","-webkit-text-stroke", "flex-direction","flex-wrap","align-items","align-self","justify-content","order","grid","accent-color","Selectors","Functions","media","scss","sass"]
    const arrays = css_list.map(e => <li className="list-group-item"><Link  to={`/css/${e.toLowerCase().replace(/\s/g, '-')}`}>CSS {e}</Link></li>)
    return(
    <>
     <main>
        <aside className="aside">
            <h5 className="mt-3">CSS Tutorials</h5>
            <ul className="list-group m-0">
                {arrays}
            </ul>
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