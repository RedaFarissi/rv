import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function GetElementsByClassName(){
    // const h2 = document.getElementsByClassName("h2")
    // for(let i=0 ; i<h2.length ; i++){
    //   if(i < 2)
    //     h2[i].style = "background-color:brown;font-size:23px"
    //   else
    //     h2[i].style = "background-color:yellow;font-size:23px"
    //   h2[i].innerHTML = i
    // }
    const codeExemple1= { 
    code: `     <div class="class_name"> </div>
     <div class="class_name"> </div>
     <div class="class_name"> </div>
     <div class="class_name"> </div>
    
     <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result");
result.innerHTML = document.getElementsByClassName("class_name").length;`
    }
    const codeExemple2= { 
    code: `      <h2 class="h2"></h2>
     <h2 class="h2"></h2>
     <h2 class="h2"></h2>
     <h2 class="h2"></h2>
     <h2 class="h2"></h2>
      
     <script src="./index.js"></script>`,
    script:`const h2 = document.getElementsByClassName("h2");

for (let i = 0; i < h2.length; i++) {
  if (i < 2) {
    h2[i].style = "background-color: brown; font-size: 23px";
  } else {
    h2[i].style = "background-color: yellow; font-size: 23px";
  }
  h2[i].innerHTML = i;
}`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript getElementsByClassName</h1>
    <article>
        <p className="style_divv mt-5">
            ترجع طريقة <bdi><b>getElementsByClassName()</b></bdi> مجموعة من العناصر باسم (أسماء) فئة محددة.<br/>
            تقوم طريقة <bdi><b>getElementsByClassNam()</b></bdi> بإرجاع <b><span data-bs-toggle="collapse" data-bs-target="#id_name"> HTMLCollection</span></b><br/>
            <div id="id_name" className="collapse alert bg-info text-dark my-2"> 
                مجموعة <b>HTMLCollection</b> هي مجموعة من عُقد <b>HTML</b>.<br/>
                مجموعة <b>HTMLCollection</b> هي قائمة تشبه مصفوفة من عناصر <b>HTML</b>.<br/>
                يمكن الوصول إلى العناصر الموجودة في مجموعة بواسطة فهرس يبدأ من 0.<br/>
                ترجع خاصية <b>length</b> عدد العناصر في مجموعة <b>HTML</b>.<br/>
            </div>
            خاصية <bdi><b>getElementsByClassName()</b></bdi> للقراءة فقط.<br/>
            <CodeHighlighter code={`document.getElementsByClassName('class_elements')`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="getElementsByClassName" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="getElementsByClassName" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>4</h2>
        </Result>
        <div className="mital">متال 2 : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="getElementsByClassName" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="getElementsByClassName" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2 style={{backgroundColor: "brown", fontSize: "23px"}} class="h2">0</h2>
            <h2 style={{backgroundColor: "brown", fontSize: "23px"}} class="h2">1</h2>
            <h2 style={{backgroundColor: "yellow", fontSize: "23px"}} class="h2">2</h2>
            <h2 style={{backgroundColor: "yellow", fontSize: "23px"}} class="h2">3</h2>
            <h2 style={{backgroundColor: "yellow", fontSize: "23px"}} class="h2">4</h2>
        </Result>
    </article>
</section>
    )
    }
        