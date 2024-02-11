import { Routes, Route , Link } from "react-router-dom";
import React, { useEffect, useRef} from 'react';
import {
    Introduction,Serializers,SelfKwargs,ApiViews,ClassGenericViews,Status,
    ConnectDjangoWithReact,Permissions,UserAuthentication,JWT_Tokens,
} from "./pathDjangoRest";


export default function DjangoRestFramework(props){
    const AsideRef = useRef(null);
    
    useEffect(() => {
       AsideRef.current.scrollTop = localStorage.getItem("django_aside") || 0;
    }, []); 
   
    const matrix = props.django_rest_framework_matrix.map(e =>{ 
        var keys_map;  
        if (Array.isArray(e)) { 
            let dt_title;
            keys_map = e.map((key,index) => {
                if(index === 0){
                dt_title = key.toLowerCase().replace(/_/g, '-');
                    return(<dt className="aside-dl-dt" key={key}>
                        
                                <Link to={`/django-rest-framework/${dt_title}/`}>
                                    <i className="fa-solid fa-caret-right"></i> {key.replace(/_/g, ' ')}
                                </Link>
                            </dt>)  
                }else{
                    return(<dd className="aside-dl-dd" key={key}>
                                <a href={`/django-rest-framework/${dt_title}#${key}`}>
                                    <i className="fa-solid fa-circle"></i> {key.replace(/_/g, ' ')}
                                </a>
                            </dd>)
                } 
            });
        }else {
            keys_map = <dt className="aside-dl-simple" key={e}><a href={`/django-rest-framework/${e.toLowerCase().replace(/_/g, '-')}`}><i className="fa-solid fa-caret-right"></i> {e.replace(/_/g, ' ')} </a></dt>;
        }
        return keys_map
    });

    return (
    <main>
        <aside className="aside" onScroll={()=>{ localStorage.setItem("django_aside",AsideRef.current.scrollTop) }} ref={AsideRef}>
            <ul className="list-group m-0">
               {matrix}
            </ul>
        </aside>
        <section className="section-conetent">
            <Routes>
                <Route path='/'  element={<Introduction  />} />
                <Route path='introduction'  element={<Introduction  />} />
                <Route path='serializers'  element={<Serializers  />} />
                <Route path='self-kwargs'  element={<SelfKwargs  />} />
                <Route path='apiview'  element={<ApiViews />} />
                <Route path='class-generic-views'  element={<ClassGenericViews  />} />
                <Route path='status'  element={<Status  />} />
                <Route path='connect-django-with-react'  element={<ConnectDjangoWithReact  />} />
                <Route path='permissions'  element={<Permissions  />} />
                <Route path='user-authentication'  element={<UserAuthentication  />} />
                <Route path='JWT_Tokens'  element={<JWT_Tokens  />} />                
            </Routes>
        </section>
    </main>
    )
}