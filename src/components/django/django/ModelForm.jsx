import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter  } from "../../path";

export default function ModelForm(){
    return(
        <article id="ModelForm">
            <h1 className="heading-style"> Django forms.ModelForm</h1> 
            <p className="style_divv mt-5">
                في <b>Django</b>، <b>Forms.ModelForm</b> عبارة عن فئة مقدمة من إطار عمل <b>Django</b> لإنشاء <b>forms</b> استنادًا إلى <b>models</b>. تعد هذه الفئة جزءًا من نظام التعامل مع <b>form</b> الخاص بـ <b>Django</b>، والذي يسمح لك بإنشاء <b>HTML forms</b> بسهولة لجمع مدخلات المستخدم والتحقق من صحتها . <br/>
            </p>
            <CodeCommand>python manage.py startapp app</CodeCommand>
            <CodeHighlighter code={codes[12].ModelForm[0]} file_name="project / project / settings.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[12].ModelForm[1]} file_name="project / project / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[12].ModelForm[2]} file_name="project / app / urls.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[12].ModelForm[3]} file_name="project / app / models.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[12].ModelForm[4]} file_name="project / app / forms.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[12].ModelForm[5]} file_name="project / app / views.py" language="python" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[12].ModelForm[6]} file_name="project / app / templates / create_post.html" language="django" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <CodeHighlighter code={codes[12].ModelForm[7]} file_name="project / app / templates / post_list.html" language="django" number={false} addclassName="mt-3 mb-3" copie={true}/>
            <img src={images.django39} alt="django" className="img"/>
            <img src={images.django40} alt="django" className="img"/>
        </article>
    )
}