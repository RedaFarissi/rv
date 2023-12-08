import { Routes, Route , Link } from "react-router-dom";
import { 
    Introduction,Statements,Output,Variables,Arithmetic,Assignment,Types,String,StringSearch,
    StringsTemplates,Numbers,Booleans,Date,Random,Conditions,Switch,ArraysPart1,ArraysPart2,
    Objects,LoopFor,LoopWhile,Break,Conversion,Modules,Errors,JSON,
    
    Functions,Bind,Call,Apply,Map,Filter,
} from './pathJs.js';
import "./Js.sass"

export default function Js(props){
    const matrix = props.js_matrix.map( e =>(
        <dl>
            { 
                e.map((value, index) => (
                    (index === 0) ? 
                    <dt className="aside-dl-dt"><Link> <i className="fa-solid fa-caret-right"></i> {value}</Link></dt> : 
                    <dd className="aside-dl-dd"><Link to={`/js/${value.toLowerCase().replace(/\s/g, '-')}`}> <i className="fa-solid fa-circle"></i> {value}</Link></dd>
                ))
            }
        </dl>
    ))
return(
<>
 <main>
    <aside className="aside">
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
            <Route path='/date' element={<Date />} /> 
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

            <Route path='/json' element={<JSON />} /> 
            <Route path='/json' element={<JSON />} /> 
            <Route path='/json' element={<JSON />} /> 
        </Routes>
    </section>
</main>
</>
)
}