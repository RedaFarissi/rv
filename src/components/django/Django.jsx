import { Routes, Route , Link } from "react-router-dom";
import {
   Introduction,Virtualenv,FirstExemple,ModelFieldReference,StaticAndMediaFiles,AboutTemplates,
   AboutAdmin,AboutModels,UserAuthentication,DjangoEmail,DjangoPagination,Form,ModelForm,
   DjangoFilter,Session,ContextProcessors,Footer,NgrokTest,
} from "./pathDjango";
import React, { useEffect, useRef } from 'react';
import { useCustoScrollYAdd , useCustomScroolTo0 } from "../../custom/pathCustoms";
import { useDispatch } from 'react-redux';

export default function Django(props){
   const AsideRef = useRef(null);
   const dispatch = useDispatch();
   
   useEffect(() => {
      AsideRef.current.scrollTop = localStorage.getItem("django_aside") || 0 ;
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

   const matrix = props.django_matrix.map(e =>{ 
      var keys_map;  
      if (Array.isArray(e)) { 
         let dt_title;
         keys_map = e.map((key,index) => {
               if(index === 0){
                     dt_title = key.toLowerCase().replace(/_/g, '-');
                     return(<dt className="aside-dl-dt" key={key}>
                           <Link to={`/django/${dt_title}/`} 
                              onClick={useCustomScroolTo0}
                           >
                              <i className="fa-solid fa-caret-right"></i> {key.replace(/_/g, ' ')}
                           </Link>
                        </dt>)  
               }else{
                     return(<dd className="aside-dl-dd" key={key}>
                           <a href={`/django/${dt_title}#${key}`} onClick={ useCustoScrollYAdd }>
                                <i className="fa-solid fa-circle"></i> {key.replace(/_/g, ' ')}
                              </a>
                           </dd>)
               } 
          });
      }else {
         keys_map = <dt className="aside-dl-simple" key={e}>
               <a href={`/django/${e.toLowerCase().replace(/_/g, '-')}`} 
                  onClick={useCustomScroolTo0}
               >
                     <i className="fa-solid fa-caret-right"></i> {e.replace(/_/g, ' ')} 
               </a>
         </dt>;
      }
      return keys_map
   });
   return (
<>
      <main onClick={ (event)=>{ 
                  props.clickMenuHeader(event, false);
                  props.closeSearchPhone(); 
                  dispatch({ type: 'FALSE_VISIBILTY_PROFILE' });
            }}
      >
         <aside className="aside" onScroll={()=>{ localStorage.setItem("django_aside",AsideRef.current.scrollTop) }} ref={AsideRef}>
             <ul className="list-group m-0">
                {matrix}
             </ul>
         </aside>
         <section className="section-conetent">
            <Routes>
               <Route path='/'  element={<Introduction  />} />
               <Route path='introduction'  element={<Introduction  />} />
               <Route path='virtualenv' element={<Virtualenv  />} />
               <Route path='first-exemple' element={<FirstExemple  />} />
               <Route path='model-field-reference' element={<ModelFieldReference  />} />
               <Route path='static-and-media-files' element={<StaticAndMediaFiles  />} />
               <Route path='about-templates' element={<AboutTemplates  />} />
               <Route path='about-admin' element={<AboutAdmin  />} />
               <Route path='about-models' element={<AboutModels  />} />
               <Route path='user-authentication' element={<UserAuthentication  />} />
               <Route path='django-email' element={<DjangoEmail  />} />
               <Route path='django-pagination' element={<DjangoPagination  />} />
               <Route path='form' element={<Form  />} />  
               <Route path='modelform' element={<ModelForm  />} /> 
               <Route path='django-filter' element={<DjangoFilter  />} />
               <Route path='session' element={<Session  />} />
               <Route path='context-processors' element={<ContextProcessors  />} />
               <Route path='ngrok-to-testing' element={<NgrokTest  />} />
            </Routes>
         </section>
      </main>
      <Footer 
           blockChildStyle={{width: "100%"}}
      />
</>
   )
}