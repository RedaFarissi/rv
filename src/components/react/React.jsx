import { Footer} from "./pathExemple";
import { useEffect, useRef } from "react";
import { Introduction , Component , Events , Lists , HandleImagesReact , Import, PropsChildren , Hooks , Packages ,Redux ,} from "./pathReact";
import { Routes, Route , Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useCustoScrollYAdd , useCustomScroolTo0 , useCustomReactList} from "../../custom/pathCustoms";


function React(props){      
      const dispatch = useDispatch();
      const AsideRef = useRef(null);
      const [react_matrix]  = useCustomReactList();
  
      useEffect(() => {
           AsideRef.current.scrollTop = localStorage.getItem("react_aside") || 0;
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
        
      const matrix = react_matrix.map(e =>{ 
          var keys_map;  
          if (Array.isArray(e)) { 
             let dt_title;
             keys_map = e.map((key,index) => {
                if(index === 0){
                   dt_title = key.toLowerCase().replace(/_/g, '-');
                  return(<dt className="aside-dl-dt" key={key}>
                            <Link to={`/react/${dt_title}/`} 
                              onClick={ useCustomScroolTo0 }
                            >
                               <i className="fa-solid fa-caret-right me-1"></i> {key.replace(/_/g, ' ')}
                            </Link>
                         </dt>)  
                }else{
                    return(<dd className="aside-dl-dd" key={key}>
                               <a href={`/react/${dt_title}#${key}`} onClick={ useCustoScrollYAdd }>
                                 <i className="fa-solid fa-circle"></i> {key.replace(/_/g, ' ')}
                               </a>
                            </dd>)
                } 
              });
            }else {
             keys_map = <dt className="aside-dl-simple" key={e}>
                  <a href={`/react/${e.toLowerCase().replace(/_/g, '-')}`} 
                      onClick={ useCustomScroolTo0 }
                  >
                      <i className="fa-solid fa-caret-right me-1"></i> {e.replace(/_/g, ' ')} 
                  </a>
                </dt>;
          }
          return keys_map
       });

    return(
  <>
  <main onClick={ 
    (event)=>{ 
        props.clickMenuHeader(event, false);  
        // props.closeSearchPhone(); 
        dispatch({ type: 'FALSE_VISIBILTY_PROFILE' }); }}
  >
    <aside  className="aside"  onScroll={()=>{ localStorage.setItem("react_aside",AsideRef.current.scrollTop) }} ref={AsideRef}> 
        <dl className="list-group m-0">
            {matrix}
        </dl>
    </aside>
    <section className="section-conetent">
       <Routes>
           <Route path='/'  element={<Introduction  />} />
           <Route path='/introduction'  element={<Introduction  />} />
           <Route path='/component'  element={<Component  />} />
           <Route path='/events'  element={<Events  />} />
           <Route path='/lists'  element={<Lists  />} />
           <Route path='/handle-images-react'  element={<HandleImagesReact  />} />
           <Route path='/import'  element={<Import  />} />
           <Route path='/props-children'  element={<PropsChildren  />} />
           <Route path='/hooks'  element={<Hooks  />} />
           <Route path='/packages'  element={<Packages  />} />
           <Route path='/redux'  element={<Redux  />} />
        </Routes>
    </section>
  </main>
  <Footer 
      blockChildStyle={{width: "100%"}}
  />
</>
  )
}


export default React;