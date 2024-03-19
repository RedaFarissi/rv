import { useEffect, useRef} from 'react';
import { Routes, Route , Link } from "react-router-dom";
import{ 
   Mvc , Database , DatabaseQueryBuilder , DatabaseRouteResource , 
   Git , Mail , Middleware , Packages , Tinker 
} from "./pathLaravel.js" 

export default function Laravel(props){
    const AsideRef = useRef(null);
    useEffect(() => {
       AsideRef.current.scrollTop = localStorage.getItem("laravel_aside") || 0;
    }, []); 
    
    const matrix = props.laravel_matrix.map(e =>{ 
      var keys_map;
      let dt_title;
      keys_map = e.map((key,index) => {
         if(index === 0){
            dt_title = key.toLowerCase().replace(/_/g, '-');
           return(<dt className="aside-dl-dt" key={key}>
                     <Link to={`/laravel/${dt_title}/`}>
                        <i className="fa-solid fa-caret-right"></i> {key.replace(/_/g, ' ')}
                     </Link>
                  </dt>)  
         }else{
             return( <dd className="aside-dl-dd" key={key}>
                        <a href={`/laravel/${dt_title}#${key}`}>
                             <i className="fa-solid fa-circle"></i> {key.replace(/_/g, ' ')}
                        </a>
                     </dd>)
         } 
      });
      return keys_map
   });


   return (
<main>
   <aside className="aside" onScroll={()=>{ localStorage.setItem("laravel_aside",AsideRef.current.scrollTop) }} ref={AsideRef}>
       <ul className="list-group m-0">
          {matrix}
       </ul>
   </aside>
   <section className="section-conetent"> 
      <Routes>
          <Route path='/'  element={<Mvc  />} />
          <Route path='/mvc'  element={<Mvc  />} />
          <Route path='/database'  element={<Database  />} />
          <Route path='/database-route-resource'  element={<DatabaseRouteResource   />} />                
          <Route path='/database-query-builder'  element={<DatabaseQueryBuilder  />} />                
          <Route path='/git'  element={<Git  />} />                
          <Route path='/mail'  element={<Mail  />} />                
          <Route path='/middleware'  element={<Middleware  />} />                
          <Route path='/packages'  element={<Packages  />} />                
          <Route path='/tinker'  element={<Tinker  />} />                
      </Routes>
   </section>
</main>
    )
}