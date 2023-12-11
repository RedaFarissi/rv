import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function ModelForm(){
    return(
        <article id="ModelForm">
            <h1 className="heading-style heading-style-django-color"> Django forms.ModelForm</h1> 
            <p className="style_divv mt-5">
                في Django، Forms.ModelForm عبارة عن فئة مقدمة من إطار عمل Django لإنشاء forms استنادًا إلى models. تعد هذه الفئة جزءًا من نظام التعامل مع form الخاص بـ Django، والذي يسمح لك بإنشاء HTML forms بسهولة لجمع مدخلات المستخدم والتحقق من صحتها . <br/>
            </p>
            <CodeCommand>python manage.py startapp app</CodeCommand>
            <CodeHighlighter code={codes[12].ModelForm[0]} file_name="project / settings.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[12].ModelForm[1]} file_name="project / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[12].ModelForm[2]} file_name="project / app / urls.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[12].ModelForm[3]} file_name="project / app / models.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[12].ModelForm[4]} file_name="project / app / forms.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[12].ModelForm[5]} file_name="project / app / views.py" language="python" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[12].ModelForm[6]} file_name="project / app / templates / create_post.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[12].ModelForm[7]} file_name="project / app / templates / post_list.html" language="django" number={true} addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django39} className="img"/>
            <img src={images.django40} className="img"/>
        </article>
    )
}