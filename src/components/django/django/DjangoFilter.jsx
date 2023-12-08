import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function DjangoFilter(){
    return(
        <article id="Django_Filter">
            <h1> Django Filter </h1>
            <ul>
               <li><b> project django {"=>"} project</b></li>
               <li><b> app django {"=>"} app </b></li>
            </ul>
            <br id="models_Objecjs_filter"/><br/><br/>
            <h2> 1 - use objects.filter() </h2>
               <h2><a href="https://www.youtube.com/watch?v=niH01K8fFYQ" target="_blank">Youtube easy vidio</a></h2>

            <br id="filter_from_dataBase_directly"/><br/><br/>
            <h2> 2 - filter from dataBase directly </h2>
            <div> 
                <h2><a href="https://docs.djangoproject.com/en/4.1/topics/db/sql/">Toturial</a></h2>  
            </div>

            <br id="filter_using_Q"/><br/><br/>
            <h2> 3 - filter_using_Q </h2>
            <h3> exemple 1 </h3>
            <div> 
               <p><b><b className="text-danger">Q()</b> : is a Django object that allows you to build complex queries for filtering database records. It provides a way to perform OR operations between different filters.</b></p>
               <img src={images.django104} className="img"/>
            </div>
            <h3> exemple 2 (filter from difrent models class )</h3>
            <div> 
               <p><b>To filter using the <b className="text-danger">Q()</b> object across two related models, you can use the <b className="text-danger">__</b> <b className="text-success">syntax</b> in Django to traverse <b className="text-success">relationships</b>.</b></p>
               <img src={images.django105} className="img"/>
               <div className="  mt-3"><pre>
               from django.db.models import <b className="text-danger">Q</b>

               produits = Produit.objects.filter(<b className="text-danger">Q(</b>name__icontains='phone'<b className="text-danger">)</b> | <b className="text-danger">Q(</b>category<b className="text-success">__</b>name__icontains='electronics'<b className="text-danger">)</b>)</pre>
               </div>
               <img src={images.django106} className="img"/>
            </div>

            <br id="lookup_expr"/><br/>
            <h2>4 - lookup_expr </h2>
            <div className="alert">
               <h3>1 - iexact</h3>
               <div className="mt-2">
                  <p dir="rtl"><b>مطابقة تامة غير حساسة لحالة الأحرف. إذا كانت القيمة المقدمة للمقارنة لا شيء ، فسيتم تفسيرها على أنها SQL NULL</b></p>   
                  <div className="mb-2">
                     SELECT ... WHERE name ILIKE 'beatles blog';<br/>
                     SELECT ... WHERE name IS NULL;
                  </div>
               </div>
               <h3>2 - contains </h3>
               <div className="mt-2">
                  <p dir="rtl"><b>اختبار احتواء حساس لحالة الأحرف</b></p>   
                  <div className="mb-2">
                     SELECT ... WHERE name ILIKE 'beatles blog';<br/>
                     SELECT ... WHERE name IS NULL;

                  </div>
               </div>   
               <h3>3 - gte <small>(greater than or equal to)</small></h3>
               <p> <b className="text-success">__gte</b> is a lookup expression used in Django queryset filtering to specify a "greater than or equal to" comparison between a field and a value. It is used to filter objects where the value of the specified field is greater than or equal to the given value. </p>
               <h3>4 - filter number</h3>
               <img src={images.django107} className="img"/>
               <div className="bg-dark  pb-0">
                  <pre>will return 50 51 ...</pre>
               </div> 
               <h3>5 - filter date </h3>
               <img src={images.django108} className="w-100 mt-3"/>
               <h3>6 - id__in </h3>
               <img src={images.django186} className="w-100 mt-3"/>
            </div> 
       </article>
    )
}