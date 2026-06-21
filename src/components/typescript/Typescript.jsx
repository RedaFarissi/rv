import { useDispatch } from 'react-redux';
import { Routes, Route , Link } from "react-router-dom";
import { useEffect, useRef } from "react";

import {  Footer} from "../path";
import { useCustomScroolTo0  , useCustomTypescriptList } from "../../custom/pathCustoms";
import { 
    String , Any , Array , Boolean , Enum , Introduction ,  Never , Null , Number , Object , Tuple , Undefined , Void
} from './pathTypeScript.js';


export default function Typescript(props){
    const dispatch = useDispatch();
    const AsideRef = useRef(null);
    const [typescript_matrix]  = useCustomTypescriptList();
      
      
    useEffect(() => {
           AsideRef.current.scrollTop = localStorage.getItem("typescript_aside") || 0;
    }, []);
      
    // Scroll to the element with the hash on page load or when the hash changes
    useEffect(() => {
        if (window.location.hash) {
          const element = document.getElementById(window.location.hash.substring(1)); // Remove the '#' from the hash
          if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 140;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
          }
        }
    }, [window.location.hash]); // Run the effect when the hash changes
        
    const matrix = typescript_matrix.map( e =>(
        <dl>
            { 
                e.map((value, index) => (
                    (index === 0) ? 
                        <dt className="aside-dl-dt"> 
                            <i className="fa-solid fa-caret-right me-1"></i> {value}
                        </dt>:
                        <dd className="aside-dl-dd">
                            <Link to={`/typescript/${value.toLowerCase().replace(/\s/g, '-')}`} 
                                onClick={useCustomScroolTo0}
                            > 
                                <i className="fa-solid fa-circle"></i> {value}
                            </Link>
                        </dd>
                ))
            }
        </dl>
    ));

    return(
  <>
<main onClick={ 
    (event)=>{ 
        props.clickMenuHeader(event, false);  
        dispatch({ type: 'FALSE_VISIBILTY_PROFILE' }); }}
>
    <aside  className="aside"  onScroll={()=>{ localStorage.setItem("typescript_aside",AsideRef.current.scrollTop) }} ref={AsideRef}> 
        <dl className="list-group m-0">
            {matrix}
        </dl>
    </aside>
    <section className="section-conetent">
       <Routes>
            <Route path='/' element={<Introduction />} />
            <Route path='/introduction' element={<Introduction />} /> 
            <Route path='/string' element={<String />} /> 
            <Route path='/number' element={<Number />} /> 
            <Route path='/boolean' element={<Boolean />} /> 
            <Route path='/array' element={<Array />} /> 
            <Route path='/tuple' element={<Tuple />} /> 
            <Route path='/enum' element={<Enum />} /> 
            <Route path='/any' element={<Any />} /> 
            <Route path='/void' element={<Void />} /> 
            <Route path='/null' element={<Null />} /> 
            <Route path='/undefined' element={<Undefined />} /> 
            <Route path='/never' element={<Never />} /> 
            <Route path='/object' element={<Object />} />   
        </Routes>
    </section>
</main>
<Footer 
      blockChildStyle={{width: "100%"}}
/>
</>
)   
}