import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function UssingClassView(){
    return(
        <article id="Ussing_Class_View">
            <div className="m-2">
      
            <h1> Using Class View </h1>
            <ul>
               <li>Project Name is : <b>project_name</b></li>
               <li>app name is : <b>helloapp</b> </li>
            </ul>
            <a href="https://ccbv.co.uk/" target="_blank" className="h3"> https://ccbv.co.uk/ </a>
            <div className="display-5" style={{fontWeight:"900"}}>class-based  views</div>   
            <br id="Push_data_from_urls_directly"/><br/><br/>
            <h2>1 - Push data from urls.py directly without views.py</h2>
            <p><b> to push data directly from <span className="text-success">helloapp/urls.py</span> direct without use <span className="text-danger">helloapp/views.py</span> you need to use: </b></p>
            <div className=" mt-2 pb-0 "/>
            {/* <pre>
            from django.urls import path
            <b>from django.views.generic import TemplateView </b>

            urlpatterns = [
                path(<span className="o">'home/'</span>, <span className="text-success">TemplateView</span>.<span className="g">as_view(</span>
                        <span className="b">template_name</span>=<span className="o">'home.html'</span>, 
                        <span className="b">extra_context</span>={<span className="o">'title'</span>:<span className="o">'Custom Title'</span> }
                     <span className="g">)</span>
                ),
            ]</pre> */}
            <img src={images.django79} className="mt-2 w-100"/>
            <img src={images.django80} className="mt-2 w-100"/>
            </div>
         
            <br id="use_basic_class-based_views"/><br/><br/>
            <h2>2 - use basic class-based views  </h2>
            <img src={images.django86} className="mt-2 w-100" />
            <img src={images.django87} className="mt-2 w-100" />
            <h3> in project_name/helloapp/templates/helloapp/ you need to create html in this path  </h3>
            <img src={images.django88} className="mt-2 w-100" />
            <h3>result</h3>
            <img src={images.django85} className="mt-2 w-100" />
            <h3 className="h4 text-danger"> to get data in temples use </h3>
            <img src={images.django89} className="mt-2 w-100" />
            <h3 className="h4 text-danger"> result  </h3>
            <img src={images.django90} className="mt-2 w-100" />
            <h3 className="h4 text-danger"> or you can use name of html file </h3>
            <img src={images.django91} className="mt-2 w-100" />
            <br id="get_context_data-and-template_name"/><br/><br/>
            <h2>3 - use <b>get_context_data</b> and <b>template_name</b> attribute </h2>
            <img src={images.django82} className="mt-2 w-100" />
            <img src={images.django83} className="mt-2 w-100" />
            <img src={images.django84} className="mt-2 w-100" />
            <img src={images.django81} className="mt-2 w-100" />
            <br id="context_object_name-attribute"/><br/><br/>
            <h2>4 - context_object_name  <small>(attribute)</small> </h2>
            <p><b>
               we use attribute context_object_name to specifies the name of the variable holding queryset in Django's generic views 
            </b></p>
            <img src={images.django92} className="mt-2 w-100" />
            <img src={images.django93} className="mt-2 w-100" />
            <br id="ordering"/><br/><br/>
            <h2>5 - ordering  <small>(attribute)</small> </h2>
            <p><b> we use attribute ordering to order by Specific field if we use - the equal </b></p>
            <img src={images.django94} className="mt-2 w-100" />
            <img src={images.django95} className="mt-2 w-100" />
            <br id="queryset"/><br/><br/>
            <h2>6 - queryset  <small>(attribute)</small> </h2>
            <p><b> we use attribute queryset to Specific data return from database . we can filter on it or </b></p>
            <img src={images.django96} className="mt-2 w-100" />
            <div className="display-5" style={{fontWeight:"900"}}>Form handling with class-based views</div>
            <div className="display-5" style={{fontWeight:"900"}}>Using_mixins_with_class-based_views</div>
            <br id="get_queryset"/><br/><br/>
            <h2>7 - get_queryset  <small>(attribute)</small> </h2>
            <img src={images.django97} className="img"/>
      </article>
    )
}