import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function ModelFieldReference(){
    return(
        <article id="Model_Field_Reference">  
            <h2 className="title-h2"> 4 - Model Field Reference </h2>
            <h3 className="title-h3" id="Definition">1 - تعريف </h3>
            <p className="style_divv">
               في Django يشير (Model Field Reference) إلى مجموعة من الأنواع المدمجة للحقول التي يمكنك استخدامها لتعريف البيانات في نموذج Django. تُستخدم حقول النموذج لتحديد نوع البيانات التي يمكن أن يحتوي عليها كل حقل في نموذج Django، وبالتالي، يساعد في تحديد هيكل ومظهر قاعدة البيانات.<br/><br/>
               ببساطة، حقول النموذج تعتبر "البنية الأساسية" لنموذج Django وتحدد كيف يجب تخزين وتمثيل مختلف أنواع البيانات مثل النصوص، والأرقام، والتواريخ، وغيرها. عند تحديد نموذج Django، يمكنك استخدام حقول النموذج لتحديد ما إذا كان الحقل سيكون نصيًا أو رقميًا أو تاريخيًا، وما إذا كان يجب أن يكون له قيمة افتراضية أو لا.<br/><br/>
               باستخدام هذه الحقول، يمكنك تعريف كيف يجب أن تبدو البيانات في قاعدة البيانات وكيف يمكن لتطبيق Django التفاعل معها. يُسهل مرجع حقول النموذج على المطورين تحديد نموذج بيانات Django الذي يعكس بنية البيانات التي يحتاجونها لتطبيقهم.<br/><br/>
               <span className="mb-3">Model Field Reference يعطيك :</span>
               <ol>
                  <li className="mb-2">
                     <span className="text-success">عنصر HTML (HTML Widget):</span> حقول النموذج في Django لا تحدد فقط كيفية تخزين البيانات في قاعدة البيانات ولكنها تؤثر أيضًا على كيفية تقديمها في النماذج. يتم ربط كل حقل نموذج بعنصر HTML افتراضي، وهو عنصر النموذج الذي يُستخدم لجمع الإدخال من المستخدمين. على سبيل المثال:
                     <ul>
                        <li> <b>CharField</b> :   يُمثل باستخدام عنصر إدخال نصي. </li>
                        <li> <b>DateField</b> :   يُمثل باستخدام عنصر اختيار التاريخ. </li>
                     </ul>
                     يمكنك تخصيص العناصر المستخدمة في النماذج إذا لم تكن القيم الافتراضية مناسبة لتطبيقك.
                  </li>
                  <li className="mb-2">
                     <span className="text-success">التحقق (Validation):</span> حقول النموذج في Django توفر التحقق المدمج للبيانات المُدخلة في النماذج. يتأكد ذلك من أن البيانات تفي بمعايير معينة قبل تخزينها في قاعدة البيانات. على سبيل المثال:
                     <ul>
                        <li> <b>CharField</b> : يمكنه فرض طول أقصى. </li>
                        <li> <b>EmailField</b> : يمكنه التحقق مما إذا كانت القيمة المُدخلة هي عنوان بريد إلكتروني صالح.</li>
                     </ul>
                     Django يقوم بهذه التحققات على الجانب الخادم وأيضًا على الجانب العميل (في المتصفح، باستخدام JavaScript).
                  </li>
                  <li className="mb-2">
                     <span className="text-success">معالجة حجم قاعدة البيانات (Database Size Handling):</span> يؤثر كل حقل نموذج على كيفية تخزين البيانات في قاعدة البيانات، مما يؤثر على حجم قاعدة البيانات وكفاءتها:

                     CharField قد يستخدم VARCHAR في قاعدة البيانات.
                     IntegerField قد يستخدم INTEGER.
                     DateField قد يستخدم DATE.
                     اختيار أنواع الحقول المناسبة يمكن أن يؤثر على حجم قاعدة البيانات وأدائها. على سبيل المثال، استخدام CharField(max_length=100) سيخصص مساحة أكبر في قاعدة البيانات من CharField(max_length=20).
                  </li>
               </ol>     
            </p>
            <h3 className="title-h3" id="Fields">2 - الحقول Fields </h3>
            <h5 className="title-h5">1 - CharField </h5> 
            <p className="style_divv">
               يستخدم CharField عمومًا لتخزين سلاسل صغيرة مثل الاسم الأول واسم العائلة وما إلى ذلك.<br/>
               max_length: هو الحد الأقصى لطول الأحرف المسموح استخدامها.
               <CodeHighlighter code={`column_name = models.CharField(max_length = 200,**options)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5">2 - TextField </h5>
            <p className="style_divv">
               يستخدم TextField بشكل عام لتخزين السلاسل الكبيرة (نص).
               <CodeHighlighter code={`column_name = models.TextField(**options)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>       
            <h5 className="title-h5"> 3 - IntegerField </h5>
            <p className="style_divv">
               يستخدم IntegerField بشكل عام لتخزين الأعداد الصحيحة .              
               <CodeHighlighter code={`column_name = models.IntegerField(default=default_Number)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5"> 4 - PositiveIntegerField </h5>
            <p className="style_divv">
               يشبه IntegerField، ولكنه يسمح فقط بالقيم الموجبة.
               <CodeHighlighter code={`column_name = models.PositiveIntegerField()`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5">5 -  BigIntegerField </h5>
            <p className="style_divv">
               يستخدم BigIntegerField لتخزين القيم الصحيحة الكبيرة.
               <CodeHighlighter code={`column_name = models.BigIntegerField()`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5">6 - DateTimeField </h5>
            <p className="style_divv">
               يمثل DateTimeField التاريخ والوقت. 
               <CodeHighlighter code={`column_name = models.DateTimeField()`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
               لجعله يحفظ البيانات تلقائيا
               <CodeHighlighter code={`column_name = models.DateTimeField(("Date"), auto_now_add = True)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5">7 -  EmailField </h5>
            <p className="style_divv">
               مصمم خصيصًا لتخزين عناوين البريد الإلكتروني.
               <CodeHighlighter code={`column_name = models.EmailField(max_length=Number)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5"> 8 - BooleanField </h5>
            <p className="style_divv">
               يخزن BooleanField قيم True  أو False.
               <CodeHighlighter code={`column_name = models.BooleanField(default=False)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5">9 - DecimalField </h5>
            <p className="style_divv">
               يستخدم DecimalField لتخزين الأرقام العشرية.
               <CodeHighlighter code={`column_name = models.DecimalField(max_digits=10, decimal_places=2)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5">10 - URLField </h5>
            <p className="style_divv">
               مصمم خصيصًا لتخزين عناوين URL.
               <CodeHighlighter code={`column_name = models.URLField()`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h5 className="title-h5">11 - FileField </h5>
            <p className="style_divv">
               يستخدم لتحميل الملفات (مثل الصور والمستندات وما إلى ذلك).
               <CodeHighlighter code={`column_name = models.FileField(upload_to="folder_to_upload_in_media")`} language="python" addclassName="mt-3 mb-3" copie={true}/>                
               لتحميل الملف تحتاج إلى استخدام  <a className="text-light" href="#Media_files">media</a>
            </p>
            <h5 className="title-h5">12 - ImageField </h5>
            <p className="style_divv">
               يستخدم ImageField للتعامل مع تحميلات الصور.
               <CodeHighlighter code={`column_name = models.ImageField(upload_to='folder_to_upload_in_media/')`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
               لتحميل الملف تحتاج إلى استخدام  <a className="text-light" href="#Media_files">media</a>
            </p>
            <h5 className="title-h5">13 - SlugField </h5>
            <p className="style_divv">
               يُستخدم لتخزين تسمية قصيرة تحتوي فقط على أحرف أو أرقام أو واصلات أو شرطات سفلية.
               <CodeHighlighter code={`column_name = models.SlugField(unique=True)`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <h3 className="title-h3" id="Relations"> 3 - Relations </h3>
            <p className="style_divv">
               في Django، عند تحديد النماذج، يتم إنشاء العلاقات بينها باستخدام الحقول التي تمثل أنواعًا مختلفة من العلاقات. حقول العلاقة الأساسية الثلاثة التي يوفرها Django هي:
            </p>
            <h5 className="title-h5">1 - OneToOneField </h5>
            <p className="style_divv">
               OneToOneField هو حقل يُستخدم لإنشاء علاقة واحد إلى واحد بين نموذجين. يُستخدم عندما يكون لكل مثيل من مثيلات نموذج واحد تمامًا مرتبط مع مثيل واحد من نموذج آخر، والعكس صحيح. <br/><br/>
               مثل العلاقات بين المستخدم والملف الشخصي، يمكن للمستخدم أن يكون له ملف شخصي واحد، والملف الشخصي له مستخدم واحد.
               <CodeHighlighter code={`column_name = models.OneToOneField(ClassModelsToRelation, on_delete=models.CASCADE, related_name='name_to_get_related_data')`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <CodeHighlighter code={codes[3].Relations[0]} file_name="models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            
            <h5 className="title-h5">2 - Foreginkey </h5>
            <p className="style_divv">
               ForeignKey هو حقل يُستخدم لإنشاء علاقة كثير إلى واحد بين نموذجين. يُستخدم عندما يكون لدى نموذج علاقة مع نموذج آخر، ويمكن ربط كل مثيل من مثيلات النموذج المتعلق بعدة مثيلات من نموذج المصدر، ولكن يتم ربط كل مثيل من مثيلات النموذج المصدر بمثيل واحد فقط من النموذج المتعلق.<br/><br/>
               مثل العلاقات بين المستخدم والمنشور، يمكن للمستخدم إنشاء العديد من المنشورات، ولكن يتم التحكم في النشر من قبل مستخدم واحد.
               <CodeHighlighter code={`column_name = models.Foreginkey(ClassModelsToRelation, on_delete=models.CASCADE, related_name='name_to_get_related_data')`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <CodeHighlighter code={codes[3].Relations[1]} file_name="models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            
            <h5 className="title-h5">3 - ManyToManyField </h5>
            <p className="style_divv">
               ManyToManyField هو حقل يُستخدم لإنشاء علاقة كثير إلى كثير بين نموذجين. يُستخدم عندما يكون لكل مثيل من مثيلات نموذج واحد قد تم ارتباطه بمثيلات متعددة من نموذج آخر، والعكس صحيح.<br/><br/>
               مثل العلاقات بين المستخدم والمجموعات، يمكن للمستخدم إنشاء العديد من المجموعات ويمكن أن تضم المجموعات العديد من المستخدمين.
               <CodeHighlighter code={`column_name = models.ManyToManyField(ClassModelsToRelation,related_name='name_to_get_related_data')`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <CodeHighlighter code={codes[3].Relations[2]} file_name="models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <h3 className="title-h3" id="Parameter"> 4 - Parameter</h3>
            <h5 className="title-h5">1 - choices</h5>
            <p className="style_divv">
               لإنشاء خيار، تحتاج إلى (tuple) يتم فرضها من خلال التحقق من صحة النموذج وستكون أداة النموذج الافتراضية عبارة عن مربع تحديد يحتوي على هذه الاختيارات بدلاً من حقل النص القياسي.            
               <CodeHighlighter code={`choices=(  ("Key1", "value1"),    ("Key2", "value2"),   )`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <CodeHighlighter code={codes[3].Parameter[0]} file_name="models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <h5 className="title-h5">2 - blank</h5>
            <p className="style_divv"> 
               لإخبار جانغو إذا كان الحقل إجباري أو إختياري .<br/><br/>
               <ul>
                  <li><b>blank=True</b> :  لإخبار django أن هذا العمود إختياري</li>
                  <li><b>blank=False</b> : لإخبار django أن هذا العمود إجباري  (قيمة الافتراضية)</li>
               </ul>
               <CodeHighlighter code="blank=True" language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p>
            <CodeHighlighter code={codes[3].Parameter[1]} file_name="models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <h5 className="title-h5">3 - related_name</h5>
            <p className="style_divv">
               يستخدم Django الخاصية related_name في حقل ForeignKey أو OneToOneField لتحديد اسم العلاقة العكسية من النموذج المتعلق إلى النموذج الذي يعرّف المفتاح الخارجي. يتيح لك ذلك تحديد اسم أكثر إيضاحاً أو فهمًا للعلاقة العكسية.<br/><br/>
               في نماذج Django، عند إنشاء حقل ForeignKey أو OneToOneField، يقوم Django تلقائيًا بإنشاء علاقة عكسية من النموذج المتعلق إلى النموذج الذي يعرّف المفتاح الخارجي. يتم إنشاء هذه العلاقة العكسية كمدير يتيح لك الوصول إلى الكائنات المتعلقة بسهولة.<br/><br/>
               بشكل افتراضي، يقوم Django بتوليد اسم لهذه العلاقة العكسية استنادًا إلى اسم النموذج الذي يعرّف ForeignKey أو OneToOneField. ومع ذلك، في بعض الحالات، قد ترغب في توفير اسم مخصص وأكثر وضوحًا للعلاقة العكسية، وهنا يأتي دور related_name.
               <CodeHighlighter code={`related_name="name_to_get_related_data"`} language="python" addclassName="mt-3 mb-3" copie={true}/> 
            </p> 
            <CodeHighlighter code={codes[3].Parameter[2]} file_name="project / helloapp / models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <div className="mital">مثال 1 : </div>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand>
               {">>>"}from helloapp.models import Author , Book<br/>
               {">>>"}<span className="text-success">#create two authors in database</span><br/>
               {">>>"}author1 = Author(name="reda eskouni") <br/>
               {">>>"}author2 = Author(name="Name 2")<br/>
               {">>>"}<span className="text-success">#save authors created</span><br/>
               {">>>"}author1.save()<br/>
               {">>>"}author2.save()<br/>
               {">>>"}<span className="text-success">#list all authors created</span><br/>
               {">>>"}for author in Author.objects.all():<br/>
               {">>>"}...&nbsp;&nbsp;&nbsp;&nbsp;print(author.name)<br/>
               {">>>"}...<br/>
               reda eskouni<br/>
               Name 2<br/>
               {">>>"}<span className="text-success">#Create 4 books and saved it</span><br/>
               {">>>"}book1 = Book.objects.create(title="My Book 1", author=author1) <br/>
               {">>>"}book2 = Book.objects.create(title="My Book 2", author=author1) <br/>
               {">>>"}book3 = Book.objects.create(title="My Book 3", author=author2) <br/>
               {">>>"}book4 = Book.objects.create(title="My Book 4", author=author1) <br/>
               {">>>"}<span className="text-success">#list all books created</span><br/>
               {">>>"}for book in Book.objects.all():<br/>
               {">>>"}...&nbsp;&nbsp;&nbsp;&nbsp;print(f"book title is : {"{"}book.title{"}"} and author is {"{"}book.author{"}"}"))<br/>
               {">>>"}...<br/>
               book title is : My Book 1 and author is reda eskouni <br/>
               book title is : My Book 2 and author is reda eskouni <br/>
               book title is : My Book 3 and author is Name 2 <br/>
               book title is : My Book 4 and author is reda eskouni <br/>
               {">>>"}<br/>
               {">>>"}<span className="text-success">#use related_name='books' created in models </span><br/>
               {">>>"}all_books_for_author1 = author1.books.all()<br/>
               {">>>"}for i in all_books_for_author1:<br/>
               {">>>"}...&nbsp;&nbsp;&nbsp;&nbsp;print(f"{"{"}author1.name{"}"} created {"=>"}  {"{"}i.title{"}"}")<br/>
               {">>>"}...<br/>
               reda eskouni created {"=>"}  My Book 1<br/>
               reda eskouni created {"=>"}  My Book 2<br/>
               reda eskouni created {"=>"}  My Book 4<br/>
            </CodeCommand>
            <ul><li>لنفترض أن البيانات بالفعل في قاعدة البيانات</li></ul>
            <CodeCommand>python manage.py shell</CodeCommand>
            <CodeCommand>
               {">>>"}from helloapp.models import Author , Book<br/>
               {">>>"}<span className="text-success">#get the autor you want all his book</span><br/>
               {">>>"}author = Author.objects.get(id=1) <br/>
               {">>>"}all_books_for_author1 = author.books.all()<br/>
               {">>>"}...<br/>
               {">>>"}for i in all_books_for_author1:<br/>
               {">>>"}...&nbsp;&nbsp;&nbsp;&nbsp;print(f"{"{"}author.name{"}"} created {"=>"}  {"{"}i.title{"}"}")<br/>
               {">>>"}...<br/>
               reda eskouni created {"=>"}  My Book 1<br/>
               reda eskouni created {"=>"}  My Book 2<br/>
               reda eskouni created {"=>"}  My Book 4<br/>
            </CodeCommand>
            <div className="mital">مثال 2 : </div>
            <CodeHighlighter code={codes[3].Parameter[3]} file_name="project / helloapp / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[3].Parameter[4]} file_name="project / helloapp / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <CodeHighlighter code={codes[3].Parameter[5]} file_name="project / helloapp / templates /author_books.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/> 
            <Result title='author_books'  route="http://localhost:8000/helloapp/authors/1/books/">
               <h2>Author : reda eskouni</h2>
               <div className="text-light mb-2" style={{backgroundColor:"red",fontSize:"26px"}}>My Book 1</div>
               <div className="text-light mb-2" style={{backgroundColor:"red",fontSize:"26px"}}>My Book 2</div>
               <div className="text-light mb-2" style={{backgroundColor:"red",fontSize:"26px"}}>My Book 4</div>
            </Result> 
      </article>
    )
}
