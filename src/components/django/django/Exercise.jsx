import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function Exercise(){
    return(
   <>
         <h1 className="heading-style heading-style-django-color"> Django Exercise</h1> 
         <article id="Exercise">
            <div className="border-5 m-2">
               <ul>
                  <li><b> app name is core </b></li>
               </ul>
               <h2>1 - core/models.py</h2>
               <img src={images.django68} className="w-100 mt-3"/>
               <p><b>in core/model we create table in databse name book with fields</b></p>
               <ul>
                  <li className="h5"> <b>class <u>GenereChoices(models.TextChoices):</u> is the best way to create choices in django</b></li>
                  <li className="h5"> <b> to get value of field choices in templets use <kbd><span className="text-primary">get_</span>COLUMN_FIELD_NAME<span className="text-primary">_display</span></kbd> </b> </li>
               </ul>
               <h2>2 - add data to database using django admin.py page</h2>
               <p><b><b>this part for create many book directly in database </b></b></p>
               <img src={images.django70} className="w-100 mt-3"/>
               <p className="alert-danger"><b>when run server book craeted in database but you need to remove this code or every time you run the code the data add in database </b></p>
               <h2>3 - core/form.py  </h2>
               <p><b> craete form class </b></p>
               <img src={images.django72} className="w-100 mt-3"/>
               <h2>4 - core/views  </h2>
               <ul style={{fontSize:"120%"}}>
                  <li><b> we use <kbd>request.GET.get('column_name')</kbd> to get data from user </b></li>
                  <li><b> filter(<span className="text-success">name</span>__icontains=<span className="text-danger">name</span>)</b> :</li>
                  <ol>
                     <li><span className="text-success">name : is name column to filter on it </span> </li>
                     <li><span className="text-danger">name : is data get from user </span> </li>
                  </ol>
               </ul>
               <img src={images.django71} className="w-100 mt-3"/>
               <h2>5- core/temlates/index.html</h2>
               <img src={images.django69} className="w-100 mt-3"/>
            </div>
        </article>
   </>
    )
}
