import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";
import { useState } from "react";

export default function AboutModels(){

      const [getAbsoluteUrl1, setGetAbsoluteUrl1] = useState({
        route: "",
        title_route:"index",
        title: "",
        author:"",
        visibility: false
      });
     const [getAbsoluteUrl2, setGetAbsoluteUrl2] = useState({
        id: "",
        route: "categories/",
        title_route:"categories",
        title: "",
        author:"",
        visibility: false
     });

   return(
   <>
      <h1 className="heading-style" id='about_models'> Django models</h1> 
      <article className="mt-5">
            <h2 className="title-h2 mt-5" id="get_absolute_url">1 - <bdi>get_absolute_url()</bdi> </h2>
            <p className="style_divv">
               <b>get_absolute_url</b> هي طريقة في نماذج <b>Django</b> تقوم بإرجاع عنوان <b>URL</b> للوصول إلى كائن معين، مما يسمح بربط هذا الكائن بسهولة في القوالب وطرق العرض. من خلال تحديد <b>get_absolute_url</b> في <b>models.py</b>، يمكنك إنشاء عنوان <b>URL</b> للوصول إلى هذا الكائن دون بذل جهد كبير.<br/><br/>
               تُستخدم هذه الطريقة عادةً مع نظام توجيه <b>URL</b> الخاص بـ <b>Django</b> لتحديد أنماط <b>URL</b> التي تطابق عناوين <b>URL</b> التي يتم إرجاعها بواسطة <b>get_absolute_url</b>.
            </p>
            <div className="mital">مثال 1 : </div>
            <h3 className="title-h3">إنشاء app بالاسم testing</h3>
            <CodeCommand>python manage.py startapp testing</CodeCommand>
            <CodeHighlighter code={codes[7].get_absolute_url[0]} file_name="projet / project / settings.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[1]} file_name="projet / project / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[2]} file_name="projet / testing / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[3]} file_name="projet / testing / views.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[4]} file_name="projet / testing / models.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[5]} file_name="projet / templates / index.html" language="django" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[6]} file_name="projet / templates / home_detail.html" language="django" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>python manage.py makemigrations</CodeCommand>
            <CodeCommand>python manage.py migrate</CodeCommand>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand>
               {">>>"} from testing.models import Author, Book<br/>
               {">>>"} <br/>
               {">>>"} author1 = Author.objects.create(name="author 1", age=30)<br/>
               {">>>"} author2 = Author.objects.create(name="author 2", age=35)<br/>
               {">>>"} <br/>
               {">>>"} Book.objects.create(title="Book 1 by Author 1", author=author1)<br/>
               {">>>"} Book.objects.create(title="Book 2 by Author 1", author=author1)<br/>
               {">>>"} Book.objects.create(title="Book 3 by Author 1", author=author1)<br/>
               {">>>"} <br/>
               {">>>"} Book.objects.create(title="Book 1 by Author 2", author=author2)<br/>
               {">>>"} Book.objects.create(title="Book 2 by Author 2", author=author2)<br/>
               {">>>"} Book.objects.create(title="Book 3 by Author 2", author=author2)<br/>
            </CodeCommand>
            <Result title={getAbsoluteUrl1.title_route} route={`http://localhost:8000/testing/${getAbsoluteUrl1.route}`}>
               {(getAbsoluteUrl1.visibility)?(
                  <>
                     <h2>home_detail</h2>
                     <table className="table table-dark table-bordered text-light">
                        <thead>
                           <tr>
                              <th className="mb-0"> title </th>
                              <th className="mb-0"> author </th>
                           </tr>
                        </thead>    
                        <tbody className="mt-0">
                           <tr>
                              <td> {getAbsoluteUrl1.title} </td>
                              <td> {getAbsoluteUrl1.author} </td>
                           </tr>
                        </tbody>
                     </table>
                  </>
               ):(
                  <table className="table table-dark table-bordered text-light">
                     <thead>
                        <tr>
                           <th className="mb-0"> Title </th>
                        </tr>
                     </thead>    
                     <tbody className="mt-0">
                        <tr><td onClick={()=>{ setGetAbsoluteUrl1({title_route:"detail",route:"book-1-by-author-1/",title:"Book 1 by Author 1",author:"author 1",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>Book 1 by Author 1</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl1({title_route:"detail",route:"book-2-by-author-1/",title:"Book 2 by Author 1",author:"author 1",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>Book 2 by Author 1</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl1({title_route:"detail",route:"book-3-by-author-1/",title:"Book 3 by Author 1",author:"author 1",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>Book 3 by Author 1</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl1({title_route:"detail",route:"book-1-by-author-2/",title:"Book 1 by Author 2",author:"author 2",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>Book 1 by Author 2</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl1({title_route:"detail",route:"book-2-by-author-2/",title:"Book 2 by Author 2",author:"author 2",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>Book 2 by Author 2</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl1({title_route:"detail",route:"book-3-by-author-2/",title:"Book 3 by Author 2",author:"author 2",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>Book 3 by Author 2</u></td></tr>
                     </tbody>
                  </table>
               )}
            </Result>  
            <div className="mital"> مثال 2 : </div>
            <h3 className="title-h3">إنشاء app بالاسم shop</h3>
            <CodeCommand>python manage.py startapp shop</CodeCommand>
            <CodeHighlighter code={codes[7].get_absolute_url[7]}  file_name="projet / project / settings.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[8]}  file_name="projet / project / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[9]}  file_name="projet / shop / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[10]} file_name="projet / shop / views.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[11]} file_name="projet / shop / models.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[12]} file_name="projet / templates / home_detail.html" language="django" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].get_absolute_url[13]} file_name="projet / templates / home_detail.html" language="django" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>python manage.py makemigrations</CodeCommand>
            <CodeCommand>python manage.py migrate</CodeCommand>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand>
               {">>>"} from shop.models import Category<br/>
               {">>>"} Category.objects.create(name="category 1", slug="category-1")<br/>
               {">>>"} Category.objects.create(name="category 2", slug="category-2")<br/>
               {">>>"} Category.objects.create(name="category 3", slug="category-3")<br/>
               {">>>"} Category.objects.create(name="category 4", slug="category-4")<br/>
               {">>>"} Category.objects.create(name="category 5", slug="category-5")<br/>
               {">>>"} Category.objects.create(name="category 6", slug="category-6")<br/>
            </CodeCommand>
            <Result title={getAbsoluteUrl2.title_route} route={`http://localhost:8000/${getAbsoluteUrl2.route}`}>
               {(getAbsoluteUrl2.visibility)?(
                  <>
                     <h2> Category {getAbsoluteUrl2.id} </h2>
                     <table className="table table-dark table-bordered text-light">
                        <thead>
                           <tr>
                              <th className="mb-0"> category </th>
                           </tr>
                        </thead>    
                        <tbody className="mt-0">
                           <tr>
                              <td> {getAbsoluteUrl2.title} </td>
                           </tr>
                        </tbody>
                     </table>
                  </>
               ):(
                  <table className="table table-dark table-bordered text-light">
                     <thead>
                        <tr>
                           <th className="mb-0"> categories </th>
                        </tr>
                     </thead>    
                     <tbody className="mt-0">
                        <tr><td onClick={()=>{ setGetAbsoluteUrl2({id:"1",title_route:"category 1",route:"category/category-1/",title:"category 1",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>category 1</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl2({id:"2",title_route:"category 2",route:"category/category-2/",title:"category 2",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>category 2</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl2({id:"3",title_route:"category 3",route:"category/category-3/",title:"category 3",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>category 3</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl2({id:"4",title_route:"category 4",route:"category/category-4/",title:"category 4",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>category 4</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl2({id:"5",title_route:"category 5",route:"category/category-5/",title:"category 5",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>category 5</u></td></tr>
                        <tr><td onClick={()=>{ setGetAbsoluteUrl2({id:"6",title_route:"category 6",route:"category/category-6/",title:"category 6",visibility:true}) }}><u className="text-primary cursor-pointer" style={{textDecoration:"underline"}}>category 6</u></td></tr>
                     </tbody>
                  </table>
               )}
            </Result> 
         </article>
         <article id="create_a_database_backup">
            <h2  className="title-h2"> 2 - إنشاء نسخة احتياطية لقاعدة البيانات </h2>
            <p className="style_divv">
               إن إنشاء نسخة احتياطية لقاعدة البيانات يشير إلى إنشاء نسخة من الحالة الحالية لقاعدة البيانات.<br/><br/>
               عندما تقوم بإنشاء نسخة من قاعدة البيانات، ستحتوي القاعدة البيانات الجديدة على نسخة دقيقة من القاعدة البيانات الأصلية، بما في ذلك جميع الجداول، والفهارس، والإجراءات المخزنة، والعروض، والمشغلات، وما إلى ذلك. ستكون البيانات في القاعدة البيانات الجديدة هي نفس البيانات في القاعدة البيانات الأصلية في وقت إنشاء النسخة.<br/><br/>
               بعد إنشاء نسخة من قاعدة البيانات، يمكنك تعديل البيانات في القاعدة البيانات الجديدة دون التأثير على القاعدة البيانات الأصلية. يمكن أن يكون ذلك مفيدًا لاختبار الميزات الجديدة أو إجراء تغييرات على هيكل قاعدة البيانات دون التعرض لخطر التلف في البيانات الأصلية.
            </p>
            <CodeCommand>python manage.py dumpdata {">"} backup.json</CodeCommand>
            <ul>
               <li>تشغيل الأمر في دليل مشروع <b>Django</b> الخاص بك سيقوم بإنشاء نسخة احتياطية لقاعدة البيانات الخاصة بك بأكملها، بما في ذلك جميع البيانات من جميع التطبيقات داخل مشروعك.</li>
            </ul>
         </article>
         <article id="restore_the_data_from_the_backup">
            <h2 className="title-h2"> 3 -استعادة البيانات من النسخة الاحتياطية </h2>
            <CodeCommand>python manage.py loaddata backup.json</CodeCommand>
         </article>
         <article id="remove_all_from_db_models">
            <h2 className="title-h2"> 4 - إزالة جميع الأعمدة والصفوف من تطبيق معين في قاعدة البيانات</h2>
            <h3 className="title-h3"> 1 - افتح Django shell </h3>
            <CodeCommand>python manage.py shell</CodeCommand>
            <h3 className="title-h3"> 2 -داخل الصدفة، قم باستيراد نماذج التطبيق الذي تريد مسحه</h3>
            <CodeCommand>{">>>"}from myapp.models import *</CodeCommand>
            <h3 className="title-h3"> 3 - قم بتشغيل الأمر التالي لحذف كافة الصفوف في جداول النماذج</h3>
            <CodeCommand>{">>>"}MyModelCLASS.objects.all().delete()</CodeCommand>
         </article>
         <article id="annotate">  
            <h2 className="title-h2">5 - annotate</h2>
            <p className="style_divv">
               في <b>Django</b>، يقوم نظام الربط الكائني <b>(ORM)</b> تلقائيًا بتستخلص العلاقة بين النماذج استنادًا إلى تعاريف الحقول والعلاقات الرئيسية الخارجية التي قمت بتعريفها في ملف <b>models.py</b> <br/><br/>
               في نموذج <b>Like</b> الخاص بك، قمت بتعريف حقل مفتاح خارجي يسمى <b>product</b> والذي يشير إلى نموذج <b>Product</b>. يستخدم <b>Django</b> هذه العلاقة لفهم الاتصال بين نموذج <b>Like</b> ونموذج <b>Product</b>.<br/><br/>
               في حالتي، يحتوي نموذج <b>Like</b> على حقل <b>ForeignKey</b> يسمى <b>product</b> والذي يشير إلى نموذج <b>Product</b>. عند تحديد <b>'like'</b> داخل <bdi><b>Count()</b></bdi> ، يفهم <b>Django</b> أنه يحتاج إلى حساب حالات <b>Like</b> المتعلقة بكل <b>Product</b> استنادًا إلى العلاقة بمفتاح الخارجي <b>product</b>. لذا، يحل <b>Django</b> تلقائيًا العلاقة بين نموذج <b>Product</b> ونموذج <b>Like</b> من خلال تعريف حقل مفتاح خارجي ويستخدمها لحساب الإعجابات المتعلقة بكل منتج.
            </p>         
            <div className="mital">مثال 1 : </div>
            <CodeHighlighter code={codes[7].annotate[0]} file_name="models.py" language="py" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].annotate[1]} file_name="views.py" language="python" addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].annotate[2]} file_name="index.html" language="django" addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django194} className="img"/>
            <div className="mital">مثال 2 : </div>
            <ul>
               <li> أنشئ مشروعًا جديدًا  (لقد أطلقت عليه اسم project)</li>
               <li>وأضف إعدادات <bdi>media/</bdi> و <bdi>static/</bdi> واستخدم <b>templates</b> العام</li>
               <li>إنشاء <b>app</b> بالاسم <b>book</b></li>
               <li> وأضف التطبيق الخاص بك في <b>INSTALLED_APPS</b> </li>
            </ul>
            <CodeHighlighter code={codes[7].annotate[3]} file_name="" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].annotate[4]} file_name="" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].annotate[5]} file_name="" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].annotate[6]} file_name="" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[7].annotate[7]} file_name="" language="django" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand> python manage.py makemigrations</CodeCommand>   
            <CodeCommand> python manage.py migrate</CodeCommand>   
            <CodeCommand> python manage.py shell</CodeCommand>   
            <CodeCommand>   
               {">>>"} from book.models import Author , Book<br/>
               {">>>"} author1 = Author.objects.create(name="author1")<br/>
               {">>>"} author2 = Author.objects.create(name="author2")<br/>
               {">>>"} author3 = Author.objects.create(name="author3")<br/>
               {">>>"}<br/>
               {">>>"} Book.objects.create(title="A" , author=author1 , number_page=90 )<br/>
               {">>>"} Book.objects.create(title="B" , author=author2 , number_page=29 )<br/>
               {">>>"} Book.objects.create(title="C" , author=author3 , number_page=239 )<br/>
               {">>>"} Book.objects.create(title="AA" , author=author1 , number_page=39 )<br/>
               {">>>"} Book.objects.create(title="BB" , author=author2 , number_page=39 )<br/>
               {">>>"} Book.objects.create(title="CC" , author=author3 , number_page=239 )<br/>
            </CodeCommand>
            <Result title='annotate' route="http://localhost:8000/">
               <h2> All Books </h2>
               <table className="css-border-collapse-ex1 css-border-collapse-ex1-table2">
                  <tr><th className="text-dark css-border-collapse-ex1 p-3">Title</th><th className="text-dark css-border-collapse-ex1 p-3">Author</th><th className="text-dark css-border-collapse-ex1 p-3">Number Page</th></tr>
                  <tr> <td className="text-dark css-border-collapse-ex1 px-3 py-2">A</td> <td className="text-dark css-border-collapse-ex1 px-3 py-2">author1</td><td className="text-dark css-border-collapse-ex1 p-2">90</td></tr>
                  <tr> <td className="text-dark css-border-collapse-ex1 px-3 py-2">B</td> <td className="text-dark css-border-collapse-ex1 px-3 py-2">author2</td><td className="text-dark css-border-collapse-ex1 p-2">29</td></tr>
                  <tr> <td className="text-dark css-border-collapse-ex1 px-3 py-2">C</td> <td className="text-dark css-border-collapse-ex1 px-3 py-2">author3</td><td className="text-dark css-border-collapse-ex1 p-2">239</td></tr>
                  <tr> <td className="text-dark css-border-collapse-ex1 px-3 py-2">AA</td><td className="text-dark css-border-collapse-ex1 px-3 py-2">author1</td><td className="text-dark css-border-collapse-ex1 p-2">39</td></tr>
                  <tr> <td className="text-dark css-border-collapse-ex1 px-3 py-2">BB</td><td className="text-dark css-border-collapse-ex1 px-3 py-2">author2</td><td className="text-dark css-border-collapse-ex1 p-2">39</td></tr>
                  <tr> <td className="text-dark css-border-collapse-ex1 px-3 py-2">CC</td><td className="text-dark css-border-collapse-ex1 px-3 py-2">author3</td><td className="text-dark css-border-collapse-ex1 p-2">239</td></tr>
               </table>
               <h2> annotate </h2>
               <table className="css-border-collapse-ex1 css-border-collapse-ex1-table2 mb-3">
                  <tr><th className="text-dark css-border-collapse-ex1 p-3">Authors</th> <th className="text-dark css-border-collapse-ex1 p-3">Number of books</th></tr>
                  <tr><td className="text-dark css-border-collapse-ex1 px-3 py-2">author1</td> <td className="text-dark css-border-collapse-ex1 px-3 py-2">2</td></tr>
                  <tr><td className="text-dark css-border-collapse-ex1 px-3 py-2">author2</td> <td className="text-dark css-border-collapse-ex1 px-3 py-2">2</td></tr>
                  <tr><td className="text-dark css-border-collapse-ex1 px-3 py-2">author3</td> <td className="text-dark css-border-collapse-ex1 px-3 py-2">2</td></tr>
               </table>
               <table className="css-border-collapse-ex1 css-border-collapse-ex1-table2 mb-3">
                  <tr><th className="text-dark css-border-collapse-ex1 p-3">Authors</th> <th className="text-dark css-border-collapse-ex1 p-3">Sum pages in all books for each author</th></tr>
                  <tr><td className="text-dark css-border-collapse-ex1 px-3 py-2">author1</td> <td className="text-dark css-border-collapse-ex1 px-3 py-2">129</td></tr>
                  <tr><td className="text-dark css-border-collapse-ex1 px-3 py-2">author2</td> <td className="text-dark css-border-collapse-ex1 px-3 py-2" >68</td></tr>
                  <tr><td className="text-dark css-border-collapse-ex1 px-3 py-2">author3</td> <td className="text-dark css-border-collapse-ex1 px-3 py-2">478</td></tr>
               </table>
               <table className="css-border-collapse-ex1 css-border-collapse-ex1-table2">
                  <tr><th className="text-dark css-border-collapse-ex1 p-3">Authors</th> <th className="text-dark css-border-collapse-ex1 p-3">Avg pages in all books for each author</th></tr>
                  <tr><td className="text-dark css-border-collapse-ex1 px-3 py-2">author1</td> <td className="text-dark css-border-collapse-ex1 px-3 py-2">64.5</td></tr>
                  <tr><td className="text-dark css-border-collapse-ex1 px-3 py-2">author2</td> <td className="text-dark css-border-collapse-ex1 px-3 py-2">34.0</td></tr>
                  <tr><td className="text-dark css-border-collapse-ex1 px-3 py-2">author3</td> <td className="text-dark css-border-collapse-ex1 px-3 py-2">239.0</td></tr>
               </table>
            </Result>  
      </article>
   </>
   )
}