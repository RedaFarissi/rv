import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function ContextProcessors(){
    return(
    <article  id="Context_Processors">
        <h2 className="title-h2"> Context Processors  </h2>
        <div>
        <p className="fs-3"> Use context processors to Share data in all template . </p>
        <h2>Exemple </h2>
        <p className="fs-4">
           in this case we create file <b>context_processors.py</b> in app <b>requests_app_test</b>
           and we add to settings      
        </p>
        <div className=" text-black">
        {/* <pre>TEMPLATES = [
        {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['templates'],
        'APP_DIRS': True,
        'OPTIONS': {
             'context_processors': [
                 'django.template.context_processors.debug',
                 'django.template.context_processors.request',
                 'django.contrib.auth.context_processors.auth',
                 'django.contrib.messages.context_processors.messages',
                 <span className="text-success">#app_name.file_name.function_name</span>
                 <b className="b">'requests_app_test.context_processors.requests_app',</b>
             ],
        },
        },
        ]</pre> */}
        </div>
        </div>
        <p className="fs-4">After that i can use data returned from function_name <small>(requests_app)</small> in any templates in my projects</p>
        <img src={images.django160} className="img"/>
        <p className="fs-4">Know i can use data retrned from <b>requests_app</b> in any templates in my project </p>
        <img src={images.django161} className="img"/>
   </article>
    )
}