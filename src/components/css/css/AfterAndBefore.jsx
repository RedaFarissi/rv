import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./AfterAndBefore.css"

export default function AfterAndBefore(props){
    const codeExemple1= { 
    head:`  
    <style> 
        h1{
            color: red;
        }
        h1::after {
            content: "Eskouni";
            color: blue;
            text-decoration: underline ;
            text-decoration-color: red;
            font-size: 110%;
        }   
    </style>`,
    code:`      <h1>Reda</h1>`
    }
    const codeExemple2= { 
    head:`  
    <style> 
        h1{
            color: red;
        }
        h1::before {
            content: "Eskouni";
            color: blue;
            text-decoration: underline ;
            text-decoration-color: red;
            font-size: 110%;
        }   
    </style>`,
    code:`      <h1>Reda</h1>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS After And Before </h1>
    <article>
        <h2 className="title-h2">1. المحدد after </h2>
        <p className="style_divv">
            يُدرج المُحدِّد <b>after</b> شيئًا ما بعد محتوى كل عنصر (عناصر) محدد.
            استخدم الخاصية <b>content</b> لتحديد المحتوى المراد إدراجه.<br/>
            استخدم : : قبل المحدد <b>after</b>  لإدراج شيء بعد المحتوى يمكنك إستعمال ال <b>id</b> أو <b>class</b> أو عبر إسم العنصر قم بتحديد بنفسك .
        </p>
        <div className="mital">متال : </div>
        <ul><li>   لاحظ في المتال أسفله أن الخاصية <b>color</b> تم تحديدها داخل كل العنصر وذالك بعض إضافة المحدد <b>after</b> . </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" title="CSS After" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS After' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1 className="css-after-before-ex1">Reda</h1>
        </Result>
    </article>

    <article>
        <h2 className="title-h2">2. المحدد before </h2>
        <p className="style_divv">
            يُدرج المُحدِّد <b>before</b> شيئًا ما قبل محتوى كل عنصر (عناصر) محدد.
            استخدم الخاصية <b>content</b> لتحديد المحتوى المراد إدراجه.<br/>
            استخدم : : قبل المحدد <b>before</b>  لإدراج شيء قبل المحتوى يمكنك إستعمال ال <b>id</b> أو <b>class</b> أو عبر إسم العنصر قم بتحديد بنفسك .
        </p>
        <div className="mital">متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" title="CSS Before" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Before' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1 className="css-after-before-ex2">Reda</h1>
        </Result>
    </article>
</section>
    )
}