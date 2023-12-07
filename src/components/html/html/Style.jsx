import { CodeHighlighter ,  Result} from "../../path";
import "./Style.css";

export default function Style(props){
  const code = `<style> 
  body{
    background-color: red;
    font-size: 20px;
  }

  h1{
    border-radius: 20px;
    color: green;
  }

  #id{
    border: none;
    border: green;
  }
</style>`
  const codeExemple = [`   
    <style>
          .heading{
              font-size: 60px;
              color : white;
              padding: 9px;
              width: max-content;
              border-style: inset;
              border-width: 9px;
          }
          .heading-1{
              background-color: red;
              border-color: red;
          }
          .heading-2{
              background-color: green;
              border-color: green;
          }
          .heading-3{
              background-color: rgb(0 0 230);
              border-color: rgb(0 0 230);
          }
    </style>`,
    `    <h2 class="heading heading-1">Reda Eskouni</h2>
    <h2 class="heading heading-2">Reda Eskouni</h2>
    <h2 class="heading heading-3">Reda Eskouni</h2>`
  ]
    return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-html-color">HTML Style </h1>
  <article>
    <p className="style_divv mt-5">
        يتم استخدام الوسم <kbd>&lt;style&gt;</kbd>  في <b>HTML</b>  داخل الوسم <kbd>&lt;head&gt;</kbd> لإضافة أنماط إلى عنصر، مثل اللون والخط والحجم والمزيد .<br/>
        يمكن إستعمال  <b>style</b>  كسمة ويمكن لجميع عناصر <b>HTML</b> تقريبا أن تأخد هذه السمة وكل ذالك ستتعلمه خلال البرنامج التعليمي الخاص بلغة التصميم <b>CSS</b> .<br/>
        إليك متالا على ذالك :
    </p>
    <CodeHighlighter  code={code} language="css"  addclassName="mt-3 mb-3" copie={true}/>
    <div className="sum_exemple_style">
    <div className="mital">مثال : </div>
    <CodeHighlighter file_name="index.html" code={codeExemple[1]} head={codeExemple[0]} language="html" is_html={true} title="Style" addClass="mt-3 mb-3" copie={true}/>
    <Result title='Style' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
        <h2 className="html-style-heading html-style-heading-1">Reda Eskouni</h2>
        <h2 className="html-style-heading html-style-heading-2">Reda Eskouni</h2>
        <h2 className="html-style-heading html-style-heading-3">Reda Eskouni</h2>
    </Result>
    </div>
  </article>
</section>
)
}