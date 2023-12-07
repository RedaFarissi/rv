import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./InvalidAndValid.css"


export default function InvalidAndValid(props){
    const codeExemple1= { 
    head:`  
    <style> 
        #invalid-email:invalid{ 
            border: 2px solid red; 
            outline: none;
        }
    </style>`,
    code:`      <h4>input email (without any style) </h4>
      <input type="email" />
      <h4>input email (with invalid any style) </h4>
      <input type="email" id="invalid-email" />`
    }
    const codeExemple2= { 
    head:`
    <style>
        .input {
            width: 50%;
            border-radius: 6px;
            height: 44px;
            outline: none;
        }
        #Email:invalid{ border: 2px solid red; }
        #Email:valid  { border: 2px solid green; }
        #email:invalid{ border: 2px solid darkred; color: white; background-color: red; }
        #email:valid  { border: 2px solid green; background-color: greenyellow; }
    </style>`,
    code:`       <input type="email"  id="Email" className="input"/><br/><br/>
    <input type="email" id="email" className="input"/><br/>        `
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Invalid And Valid </h1>
    <article>
        <h2 className="title-h2">1. الخاصية  invalid </h2>
        <p className="style_divv">
            تستعمل  <b>invalid</b>  مع عناصر ال <b>input</b>  وتسمح بإعطاء خصائص <b>CSS</b> إلى عناصر الإدخال عند إدخال نوع خاطئ أو إدخال عدد أحرف أقل مما تحديده داخل السمة <b>min</b> أو إدخال عدد أكتر مما تم تحديده داخل السمة <b>max</b> . <br/>
        </p>
        <div className="mital"> متال : </div>
        <ul>
            <li> عند إزالة القيمة داخل عنصر <b>input</b> سيتم إزالة الخصائص التي داخل <b>invalid</b>   </li>
            <li> سيتم إزالة الخصائص التي داخل <b>invalid</b> عند إدخال <b>email</b>  </li>
        </ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Invalid" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Invalid' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h4>input email (without any style) </h4>
            <input type="email" />
            <h4>input email (with invalid any style) </h4>
            <input type="email" id="css-invalid-ex1" />
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. الخاصية  valid </h2>
        <p  className="style_divv">
            تستعمل  <b>valid</b>  مع عناصر ال <b>input</b>  وتسمح بإعطاء خصائص <b>CSS</b> عند إدخال البيانات بشكل صحيح . <br/>
        </p>
        <div className="mital"> متال  : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Invalid & Valid" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Invalid & Valid' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <input type="email"  id="css-invalid-ex2-Email" className="css-invalid-ex2-input"/><br/><br/>
          	<input type="email" id="css-invalid-ex2-email" className="css-invalid-ex2-input"/><br/>            
        </Result>
    </article>
 </section>
    )
}