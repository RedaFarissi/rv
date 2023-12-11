import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter } from "../../path";

export default function DjangoFilter(){
    return(
        <article id="Django_Filter">
            <h1 className="heading-style heading-style-django-color"> Django Filter</h1> 
            <p className="style_divv mt-5">
               في Django، يتم استخدام filters لتضييق نطاق نتائج الاستعلام عند استرداد البيانات من قاعدة البيانات. يتم تطبيق عوامل التصفية على مجموعات الاستعلام، وهي تمثيلات لاستعلامات قاعدة البيانات. تُستخدم المرشحات عادةً مع النماذج وطرق العرض.<br/><br/>
               يوفر Django مجموعة متنوعة من الطرق لتصفية مجموعات الاستعلامات، مما يسمح لك بالتعبير عن الاستعلامات المعقدة لاسترداد البيانات من قاعدة البيانات. 
            </p>
            <h2 className="title-h2" id="models_Objecjs_filter"> 1 - <bdi>objects.filter()</bdi> </h2>
            <CodeHighlighter code={codes[13].models_Objecjs_filter[0]} file_name="project / setting.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[13].models_Objecjs_filter[1]} file_name="project / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[13].models_Objecjs_filter[2]} file_name="project / product / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[13].models_Objecjs_filter[3]} file_name="project / product / models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[13].models_Objecjs_filter[4]} file_name="project / product / admin.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[13].models_Objecjs_filter[5]} file_name="project / product / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[13].models_Objecjs_filter[6]} file_name="project / product / templates / product_list.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeCommand>python manage.py makemigrations</CodeCommand>
            <CodeCommand>python manage.py migrate</CodeCommand>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand>
               {">>>"} from product.models import Category, Product, Size<br/>
               {">>>"} from django.contrib.auth.models import User<br/>
               {">>>"}<br/>
               {">>>"} category1 = Category.objects.create(name='Electronics', slug='electronics')<br/>
               {">>>"} category2 = Category.objects.create(name='Clothing', slug='clothing')<br/>
               {">>>"} category3 = Category.objects.create(name='Books', slug='books')<br/>
               {">>>"} category4 = Category.objects.create(name='Home Appliances', slug='home-appliances')<br/>
               {">>>"}<br/>
               {">>>"} size1 = Size.objects.create(name='Small')<br/>
               {">>>"} size2 = Size.objects.create(name='Medium')<br/>
               {">>>"} size3 = Size.objects.create(name='Large')<br/>
               {">>>"}<br/>
               {">>>"} user = User.objects.create_user(username='adil', password='adil')<br/>
               {">>>"}<br/>
               {">>>"} product1 = Product.objects.create(<br/>
               ...     user=user,<br/>
               ...     category=category1,<br/>
               ...     name='Laptop',<br/>
               ...     slug='laptop',<br/>
               ...     description='Powerful laptop with high performance.',<br/>
               ...     price=999.99,<br/>
               ... )<br/>
               {">>>"} product1.sizes.add(size1, size2)  # Add sizes to the product<br/>
               {">>>"}<br/>
               {">>>"} product2 = Product.objects.create(<br/>
               ...     user=user,<br/>
               ...     category=category2,<br/>
               ...     name='T-Shirt',<br/>
               ...     slug='t-shirt',<br/>
               ...     description='Comfortable cotton T-shirt.',<br/>
               ...     price=19.99,<br/>
               ... )<br/>
               {">>>"} product2.sizes.add(size2, size3)<br/>
               {">>>"}<br/>
               {">>>"} product3 = Product.objects.create(<br/>
               ...     user=user,<br/>
               ...     category=category3,<br/>
               ...     name='Python Programming Book',<br/>
               ...     slug='python-programming-book',<br/>
               ...     description='A comprehensive guide to Python programming.',<br/>
               ...     price=29.99,<br/>
               ... )<br/>
               {">>>"} product3.sizes.add(size1, size3)<br/>
               {">>>"}<br/>
               {">>>"} product4 = Product.objects.create(<br/>
               ...     user=user,<br/>
               ...     category=category1,<br/>
               ...     name='Smartphone',<br/>
               ...     slug='smartphone',<br/>
               ...     description='High-end smartphone with advanced features.',<br/>
               ...     price=799.99,<br/>
               ... )<br/>
               {">>>"} product4.sizes.add(size2)<br/>
            </CodeCommand>
            <img src={images.django13} className="img"/>
            <img src={images.django14} className="img"/>


            <h2 className="title-h2" id="raw_filter"> 2 - raw filter  </h2>
            <CodeHighlighter code={codes[13].row_filter[0]} file_name="project / product / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            
            <h2 className="title-h2" id="lookup_expr">3 - lookup_expr </h2>
            <div className="alert">
               <h3 className="title-h3">1 - iexact</h3>
               <div className="mt-2">
                  <p dir="rtl"><b>مطابقة تامة غير حساسة لحالة الأحرف. إذا كانت القيمة المقدمة للمقارنة لا شيء ، فسيتم تفسيرها على أنها SQL NULL</b></p>   
                  <div className="mb-2">
                     SELECT ... WHERE name ILIKE 'beatles blog';<br/>
                     SELECT ... WHERE name IS NULL;
                  </div>
               </div>
               <h3 className="title-h3">2 - contains </h3>
               <div className="mt-2">
                  <p dir="rtl"><b>اختبار احتواء حساس لحالة الأحرف</b></p>   
                  <div className="mb-2">
                     SELECT ... WHERE name ILIKE 'beatles blog';<br/>
                     SELECT ... WHERE name IS NULL;

                  </div>
               </div>   
               <h3 className="title-h3">3 - gte <small>(greater than or equal to)</small></h3>
               <p> <b className="text-success">__gte</b> is a lookup expression used in Django queryset filtering to specify a "greater than or equal to" comparison between a field and a value. It is used to filter objects where the value of the specified field is greater than or equal to the given value. </p>
               <h3 className="title-h3">4 - filter number</h3>
               <img src={images.django107} className="img"/>
               <div className="bg-dark  pb-0">
                  <pre>will return 50 51 ...</pre>
               </div> 
               <h3 className="title-h3">5 - filter date </h3>
               <img src={images.django108} className="w-100 mt-3"/>
               <h3 className="title-h3">6 - id__in </h3>
               <img src={images.django186} className="w-100 mt-3"/>
            </div> 


            <h2 className="title-h2" id="Q_filter"> 4 - filter_using_Q </h2>
            <CodeHighlighter code={codes[13].Q_filter[0]} file_name="project / product / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
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

       </article>
    )
}