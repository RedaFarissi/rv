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
            <CodeHighlighter code={codes[13].raw_filter[0]} file_name="project / product / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            
            <h2 className="title-h2" id="lookup_expr">3 - lookup_expr </h2>
            <h3 className="title-h3">1 - iexact</h3>
            <p className="style_divv">
               في Django، يتم استخدام تعبير البحث <bdi>__iexact</bdi> للمطابقة التامة غير الحساسة لحالة الأحرف في الاستعلام. غالبًا ما يتم استخدامه مع طريقة <bdi>filter()</bdi> في مجموعة استعلام لاسترداد الكائنات حيث يكون حقل معين مساويًا تمامًا لقيمة محددة، مع تجاهل حالة الأحرف.
            </p>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand>
               {">>>"} from product.models import *<br/>
               {">>>"} matching_products = Product.objects.filter(category__name__iexact="electronics")<br/>
               {">>>"} for product in matching_products:<br/>
               ...     print(f"category: {"{"}product.category{"}"}  name: {"{"}product.name{"}"} price: {"{"}product.price{"}"}.")<br/>
               ...<br/>
               category: Electronics  name: Laptop price: 999.99.<br/>
               category: Electronics  name: Smartphone price: 799.99.<br/>
            </CodeCommand>
            <h3 className="title-h3">2 - contains </h3>
            <p className="style_divv">يتم استخدام تعبير البحث <bdi>__contains</bdi> في Django لاختبار الاحتواء الحساس لحالة الأحرف في الاستعلام. يسمح لك باسترداد الكائنات حيث يحتوي حقل معين على قيمة محددة.</p>   
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand>
               {">>>"} from product.models import *<br/>
               {">>>"} keyword = "Laptop"<br/>
               {">>>"} matching_products = Product.objects.filter(name__contains=keyword)<br/>
               {">>>"} for product in matching_products :<br/>
               ...     print(f"category: {"{"}product.category{"}"}  name: {"{"}product.name{"}"} price: {"{"}product.price{"}"}.")<br/>
               ...<br/>
               category: Electronics  name: Laptop price: 999.99.<br/>
            </CodeCommand>
            <h3 className="title-h3">3 - gte <small>(greater than or equal to)</small></h3>
            <p className="style_divv">
               يتم استخدام تعبير البحث <bdi>__gte</bdi> في Django لتصفية الكائنات حيث يكون حقل معين أكبر من أو يساوي قيمة محددة. 
            </p>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand>
               {'>>>'} from product.models import *<br/>
               {'>>>'} min_price = 799.99<br/>
               {'>>>'} matching_products = Product.objects.filter(price__gte=min_price)<br/>
               {'>>>'} for product in matching_products :<br/>
               ...     print(f"category: {"{"}product.category{"}"}  name: {"{"}product.name{"}"} price: {"{"}product.price{"}"}.")<br/>
               ...<br/>
               category: Electronics  name: Laptop price: 999.99.<br/>
               category: Electronics  name: Smartphone price: 799.99.<br/>
            </CodeCommand>
            <h3 className="title-h3">4 - filter date </h3>
            <p className="style_divv">
               يمكن استخدام تعبير البحث __gte مع حقول التاريخ لتصفية الكائنات بناءً على تاريخ أكبر من أو يساوي قيمة محددة.
            </p>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand>
               {">>>"} from product.models import *<br/>
               {">>>"} from datetime import datetime, timedelta, timezone<br/>
               {">>>"}<br/>
               {">>>"} min_creation_date = datetime.now(timezone.utc) - timedelta(days=7)<br/>
               {">>>"}<br/>
               {">>>"} matching_products = Product.objects.filter(created__gte=min_creation_date)<br/>
               {">>>"}<br/>
               {">>>"} for product in matching_products:<br/>
               ...     print(f"{"{"}product.name{"}"}: Created on {"{"}product.created{"}"}")<br/>
               ...<br/>
               Laptop: Created on 2023-12-11 18:55:12.900183+00:00<br/>
               Python Programming Book: Created on 2023-12-11 18:56:43.463231+00:00<br/>
               Smartphone: Created on 2023-12-11 18:57:18.382484+00:00<br/>
               T-Shirt: Created on 2023-12-11 18:55:50.144167+00:00<br/>
            </CodeCommand>
            <h3 className="title-h3">5 - id__in </h3>
            <p className="style_divv">
               معرف البحث <bdi>__in</bdi> هو بحث ميداني يسمح لك بتصفية مجموعة استعلام من خلال قائمة قيم المفتاح الأساسي
            </p>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand>
               {">>>"} from product.models import *<br/>
               {">>>"}<br/>
               {">>>"} product_ids = [1, 2, 3]<br/>
               {">>>"}<br/>
               {">>>"} products = Product.objects.filter(id__in=product_ids)<br/>
               {">>>"}<br/>
               {">>>"} for product in products:<br/>
               ...     print(f"id : {"{"}product.id{"}"}  name : {"{"}product.name{"}"}")<br/>
               ...<br/>
               id : 1  name : Laptop<br/>
               id : 3  name : Python Programming Book<br/>
               id : 2  name : T-Shirt<br/>
            </CodeCommand>
          
            


            <h2 className="title-h2" id="Q_filter"> 4 - filter_using_Q </h2>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand>
               {">>>"} from product.models import *<br/>
               {">>>"} from django.db.models import Q<br/>
               {">>>"}<br/>
               {">>>"} query = Q(name__iexact="t-shirt") | Q(price__gte=800)<br/>
               {">>>"} products = Product.objects.filter(query)<br/>
               {">>>"} for i in products:<br/>
               ...     print(f"category: {"{"}i.category{"}"}  name: {"{"}i.name{"}"} price: {"{"}i.price{"}"}.")<br/>
               ...<br/>
               category: Electronics  name: Laptop price: 999.99.<br/>
               category: Clothing  name: T-Shirt price: 19.99.<br/>
            </CodeCommand>
            <h2 className="title-h2" id="select_related"> 5 - select_related </h2>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand preClass='overflow-x'>
               {">>>"} from product.models import *<br/>
               {">>>"} products = Product.objects.select_related('category').all()<br/>
               {">>>"} print(products.values())<br/>
               {"<"}QuerySet {"["} <br/>
               {"{"}'id': 1, 'user_id': 2, 'category_id': 1, 'name': 'Laptop', 'slug': 'laptop', 'image': '', 'description': 'Powerful laptop with high performance.', 'price': Decimal('999.99'), 'available': True, 'created': datetime.datetime(2023, 12, 11, 18, 55, 12, 900183, tzinfo=datetime.timezone.utc), 'updated': datetime.datetime(2023, 12, 11, 18, 55, 12, 900183, tzinfo=datetime.timezone.utc){"}"},<br/>
               {"{"}'id': 3, 'user_id': 2, 'category_id': 3, 'name': 'Python Programming Book', 'slug': 'python-programming-book', 'image': '', 'description': 'A comprehensive guide to Python programming.', 'price': Decimal('29.99'), 'available': True, 'created': datetime.datetime(2023, 12, 11, 18, 56, 43, 463231, tzinfo=datetime.timezone.utc), 'updated': datetime.datetime(2023, 12, 11, 18, 56, 43, 463231, tzinfo=datetime.timezone.utc){"}"},<br/>
               {"{"}'id': 4, 'user_id': 2, 'category_id': 1, 'name': 'Smartphone', 'slug': 'smartphone', 'image': '', 'description': 'High-end smartphone with advanced features.', 'price': Decimal('799.99'), 'available': True, 'created': datetime.datetime(2023, 12, 11, 18, 57, 18, 382484, tzinfo=datetime.timezone.utc), 'updated': datetime.datetime(2023, 12, 11, 18, 57, 18, 382484, tzinfo=datetime.timezone.utc){"}"},<br/> 
               {"{"}'id': 2, 'user_id': 2, 'category_id': 2, 'name': 'T-Shirt', 'slug': 't-shirt', 'image': '', 'description': 'Comfortable cotton T-shirt.', 'price': Decimal('19.99'), 'available': True, 'created': datetime.datetime(2023, 12, 11, 18, 55, 50, 144167, tzinfo=datetime.timezone.utc), 'updated': datetime.datetime(2023, 12, 11, 18, 55, 50, 144167, tzinfo=datetime.timezone.utc){"}"}{"]"}{">"}<br/>
            </CodeCommand>
       </article>
    )
}