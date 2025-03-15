import { useEffect, useRef} from 'react';
import { Routes, Route , Link } from "react-router-dom";
import{
   Introduction , Mvc , Database , DatabaseQueryBuilder ,  DatabaseRouteResource , 
   Git , Mail , Middleware , Packages , Tinker , GitClone  , ReactVite ,  Footer 
} from "./pathLaravel.js";
import { useDispatch } from 'react-redux';
import { useCustoScrollYAdd ,useCustomScroolTo0 ,useCustomLaravelList} from "../../custom/pathCustoms";

export default function Laravel(props){
   const AsideRef = useRef(null);
   const dispatch = useDispatch();
   const [laravel_matrix] = useCustomLaravelList();


   useEffect(() => {
       AsideRef.current.scrollTop = localStorage.getItem("laravel_aside") || 0;
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
    
   const matrix = laravel_matrix.map(e =>{ 
      var keys_map;  
      if (Array.isArray(e)) { 
         let dt_title;
         keys_map = e.map((key,index) => {
            if(index === 0){
               dt_title = key.toLowerCase().replace(/_/g, '-');
              return(<dt className="aside-dl-dt" key={key}>
                        <Link to={`/laravel/${dt_title}/`} 
                           onClick={ useCustomScroolTo0 }
                        >
                           <i className="fa-solid fa-caret-right me-1"></i> {key.replace(/_/g, ' ')}
                        </Link>
                     </dt>)  
            }else{
                return(<dd className="aside-dl-dd" key={key}>
                           <a href={`/laravel/${dt_title}#${key}`} onClick={ useCustoScrollYAdd }>
                             <i className="fa-solid fa-circle"></i> {key.replace(/_/g, ' ')}
                           </a>
                        </dd>)
            } 
          });
      }else {
         keys_map = <dt className="aside-dl-simple" key={e}>
               <a href={`/laravel/${e.toLowerCase().replace(/_/g, '-')}`}
                  onClick={ useCustomScroolTo0 }
               >
                  <i className="fa-solid fa-caret-right me-1"></i> {e.replace(/_/g, ' ')} 
               </a>
            </dt>;
      }
      return keys_map
   });



   return (
<>
   <main onClick={ 
      (event)=>{ 
         props.clickMenuHeader(event, false); 
         // props.closeSearchPhone(); 
         dispatch({ type: 'FALSE_VISIBILTY_PROFILE' }); }}
      >
      <aside className="aside" onScroll={()=>{ localStorage.setItem("laravel_aside",AsideRef.current.scrollTop) }} ref={AsideRef}>
          <ul className="list-group m-0">
             {matrix}
          </ul>
      </aside>
      <section className="section-conetent"> 
         <Routes>
             <Route path='/'  element={<Introduction  />} />
             <Route path='/introduction'  element={<Introduction  />} />
             <Route path='/mvc'  element={<Mvc  />} />
             <Route path='/database'  element={<Database  />} />
             <Route path='/database-route-resource'  element={<DatabaseRouteResource   />} />                
             <Route path='/database-query-builder'  element={<DatabaseQueryBuilder  />} />                
             <Route path='/git'  element={<Git  />} />                
             <Route path='/mail'  element={<Mail  />} />                
             <Route path='/middleware'  element={<Middleware  />} />                
             <Route path='/packages'  element={<Packages  />} />                
             <Route path='/tinker'  element={<Tinker  />} />                
             <Route path='/clone-github'  element={<GitClone  />} />                
             <Route path='/react-vite'  element={<ReactVite  />} />                
         </Routes>
      </section>
   </main>
   <Footer 
        blockChildStyle={{width: "100%"}}
   />
</>
    )
}