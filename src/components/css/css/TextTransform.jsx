import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./TextTransform.css"

export default function TextTransform(props){
    const codeExemple1= { 
     head:`  
       <style> 
           p{
                text-transform: capitalize;
                color: red;
           }    
       </style>`,
    code:`      <p> lorem ipsum dolor sit amet consectetur adipisicing elit. </p>`
    }
    const codeExemple2= { 
        head:`  
          <style> 
              #p1{
                   text-transform: uppercase;
                   color: red;
              }
              #p2{
                text-transform: lowercase;
                color: green;
                }    
          </style>`,
        code:`      <p id="p1"> lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      <p id="p2"> lorem ipsum dolor sit amet consectetur adipisicing elit. </p>`
       }
       
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Text-Transform </h1>
    <article>    
        <p className="style_divv mt-5">
            تتحكم خاصية <b><bdi>text-transform</bdi></b> في الكتابة بالأحرف الكبيرة للنص.
            وتقبل عدة قيم وهي كتالي :
            <ul>
                <li><b>none</b> : لا يوجد أحرف كبيرة. يتم عرض النص كما هو. قيمة فتراضية</li>
                <li><b>capitalize</b> : يحول الحرف الأول من كل كلمة إلى أحرف كبيرة</li>
                <li><b>uppercase</b> : يحول كل الأحرف إلى أحرف كبيرة</li>
                <li><b>lowercase</b> : يحول جميع الأحرف إلى أحرف صغيرة</li>
            </ul>
        </p>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" title="CSS Text-Transform" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Text-Transform' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <p id="css-text-transform-ex1-parag"> lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </Result>
        <div className="mital">متال 2 : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" title="CSS Text-Transform" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Text-Transform' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <p className="css-text-transform-ex2-parag1"> lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <p className="css-text-transform-ex2-parag2"> lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </Result>
    </article>
</section>
)
}