import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function DjangoPagination(){
    return(
    <article id="Django_Pagination">
        <h1 className="heading-style heading-style-django-color"> Django Pagination</h1> 
        <p className="style_divv mt-5">
            يشير ترقيم الصفحات في <b>Django</b> إلى عملية تقسيم مجموعة بيانات كبيرة إلى أجزاء أصغر وأكثر قابلية للإدارة يتم عرضها عبر صفحات ويب متعددة. تعتبر هذه التقنية ضرورية لتجربة المستخدم، خاصة عند التعامل مع مجموعات البيانات الكبيرة مثل قوائم المنتجات أو المقالات أو حسابات المستخدمين.
        </p>
        <ul><li>إنشاء تطبيق آخر بالاسم <b>app</b> </li></ul>
        <CodeCommand>python manage.py startapp userProfile</CodeCommand>
        <CodeHighlighter code={codes[10].Django_Pagination[0]} file_name="project / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[10].Django_Pagination[1]} file_name="project / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[10].Django_Pagination[2]} file_name="project / blog / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[10].Django_Pagination[3]} file_name="project / blog / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[10].Django_Pagination[4]} file_name="project / blog / models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[10].Django_Pagination[5]} file_name="project / blog / templates / blogs.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
        <CodeCommand>python manage.py makemigrations</CodeCommand>
        <CodeCommand>python manage.py migrate</CodeCommand>
        <CodeCommand>python manage.py shell</CodeCommand>
        <CodeCommand>
            {">>>"} from blog.models import *<br/>
            {">>>"} user = User.objects.all().first()<br/>
            {">>>"} Blog.objects.create(user=user , title="blog title 1" , article="article 1")<br/>
            {">>>"} Blog.objects.create(user=user , title="blog title 2" , article="article 2")<br/>
            {">>>"} Blog.objects.create(user=user , title="blog title 3" , article="article 3")<br/>
            {">>>"} Blog.objects.create(user=user , title="blog title 4" , article="article 4")<br/>
            {">>>"} Blog.objects.create(user=user , title="blog title 5" , article="article 5")<br/>
            {">>>"} Blog.objects.create(user=user , title="blog title 6" , article="article 6")<br/>
            {">>>"} Blog.objects.create(user=user , title="blog title 7" , article="article 7")<br/>
        </CodeCommand>
        <img src={images.django61} className="img"/>
    </article>
    )
}