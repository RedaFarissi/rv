import codes from "../../assests/codes/django/django"
import { Routes, Route , Link } from "react-router-dom";
import {
   Introduction,Virtualenv,FirstExemple,ModelFieldReference,StaticAndMediaFiles,AboutTemplates,
   AboutAdmin,AboutModels,UserAuthentication,DjangoEmail,DjangoPagination,DjangoSlug,ModelForm,
   Form,DjangoFilter,Exercise,Session,ContextProcessors,HowDjangoWork,UssingClassView,Ngrok,
} from "./pathDjango"

export default function Django(props){
   
   const arrays = codes.map(e =>{ 
      const keys = Object.keys(e) 
      var keys_map;
      if (keys.includes("title")) { 
         let dt_title;
         keys_map = keys.map((key,index) => {
             if(key === "title"){
               dt_title = e[key].toLowerCase().replace(/_/g, '-');
             
              return(<dt className="aside-dl-dt" key={key}>
                        <Link to={`/django/${dt_title}/`}>
                           <i className="fa-solid fa-caret-right"></i> {e[key].replace(/_/g, ' ')}
                        </Link>
                     </dt>)  
             }else{
                return(<dd className="aside-dl-dd" key={key}>
                           <a href={`/django/${dt_title}#${key}`}>
                             <i className="fa-solid fa-circle"></i> {key.replace(/_/g, ' ')}
                           </a>
                        </dd>)
             } 
          });
      }else {
         keys_map = <dt className="aside-dl-simple" key={keys[0]}><a href={`/django/${keys[0].toLowerCase().replace(/_/g, '-')}`}><i className="fa-solid fa-caret-right"></i> {keys[0].replace(/_/g, ' ')} </a></dt>;
      }
      return keys_map
   });

    return (
<main>
   <aside className="aside">
       <ul className="list-group m-0">
          {arrays}
       </ul>
   </aside>
   <section className="section-conetent ">
      <h1 className="heading-style heading-style-django-color"> Django </h1>   
      <Routes>
          <Route path='/' element={<Introduction  />} />
          <Route path='introduction' element={<Introduction  />} />
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
          <Route path='django-slug' element={<DjangoSlug  />} />
          <Route path='modelform' element={<ModelForm  />} /> {/* ModelForm path */}
          <Route path='form' element={<Form  />} />  {/* ModelForm path */}
          <Route path='django-filter' element={<DjangoFilter  />} />
          <Route path='exercise' element={<Exercise  />} />
          <Route path='session' element={<Session  />} />
          <Route path='context-processors' element={<ContextProcessors  />} />
          <Route path='how-django-work' element={<HowDjangoWork  />} />
          <Route path='ussing-class-view' element={<UssingClassView  />} />
          <Route path='ngrok' element={<Ngrok  />} />
      </Routes>
   </section>
</main>
   )
}