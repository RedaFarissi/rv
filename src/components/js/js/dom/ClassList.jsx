import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function ClassList(){
    const codeExemple1 = { 
    code: `      <div id="result" class="alert alert-primary"></div>
      
     <script src="./index.js"></script>`,
    script:`var result = document.getElementById("result");
result.innerHTML = document.getElementById("result").classList + "<br>";
result.innerHTML += \`<b>\${typeof(document.getElementById("result").classList)}</b><br>\`;`
    }
    const codeExemple2 = { 
    code: `      <div id="styling-id" class="alert alert-primary"> Hello Word </div>
     <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:`var id = document.getElementById("styling-id")
var result = document.getElementById("result")
result.innerHTML = id.classList `
    }
    const codeExemple3 = { 
    code: `      <div id="styling-id" class="alert alert-primary"> </div>
      
     <script src="./index.js"></script>`,
    script:`var styling_id = document.getElementById("styling-id")
styling_id.classList.add("border", "border-primary")
styling_id.innerHTML = styling_id.classList`
    }
    const codeExemple4 = { 
    code: `      <div id="styling-id" class="alert alert-primary"> </div>
     <h2 id='result'></h2>
      
     <script src="./index.js"></script>`,
    script:`var styling_id = document.getElementById("styling-id");
  
styling_id.classList.add("border");
styling_id.classList.add("border-primary");
document.getElementById("result").innerHTML = styling_id.classList;`
    }
    const codeExemple5 = { 
    code: `      <div id="styling-id" class="alert alert-primary border"> </div>
      
     <script src="./index.js"></script>`,
    script:`var styling_id = document.getElementById("styling-id");

styling_id.classList.remove("border");
styling_id.classList.remove("alert-primary");
document.getElementById("styling-id").innerHTML = styling_id.classList;`
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript classList</h1>
    <article>
        <h2 className="title-h2">1- classList </h2>
        <p className="style_divv">
            <bdi><b>Element.classList</b></bdi> هي خاصية للقراءة فقط تقوم بإرجاع مجموعة <b>DOMTokenList</b> الحية لسمات فئة العنصر. يمكن بعد ذلك استخدام هذا لمعالجة قائمة الفصل.
            <CodeHighlighter code={`document.classList ;`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="classList" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="classList" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="alert alert-primary">
                alert alert-primary<br/><b>object</b>
            </div>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} language="html" is_html={true} title="classList" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="classList" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="alert alert-primary"> Hello Word </div>
            <h2>alert alert-primary</h2>
        </Result>
        <div className="mital">متال 3 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple3.code} language="html" is_html={true} title="classList" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="classList" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="alert alert-primary"> alert alert-primary border border-primary </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2- classList value </h2>
        <p className="style_divv">
            على الرغم من أن خاصية <b>classList</b> نفسها للقراءة فقط ، يمكنك تعديل <b>DOMTokenList</b> المقترنة بها باستخدام طرق <b><bdi>add()</bdi></b> ، <b><bdi>remove()</bdi></b> ،  <b><bdi>replace()</bdi></b> ، و <b><bdi>toggle()</bdi></b>.
            <CodeHighlighter code={`document.classList.add("className1", "className2", ... ) ;
document.classList.remove("className1", "className2", ... ) ;
document.classList.toggle("className1", "className2", ... ) ;
document.classList.replace("className1", "className2") ;`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple4.code} language="html" is_html={true} title="classList" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="classList" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="alert alert-primary">  </div>
            <h2>alert alert-primary border border-primary</h2>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple5.code} language="html" is_html={true} title="classList" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="classList" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div>alert  </div>
        </Result>
        <table  className="table table-bordered text-light mt-3">
            <thead className="text-center bg-secondary">
                <tr>
                    <th>  الوصف </th>
                    <th>  الإسم </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> يضيف فئة واحدًا أو أكثر إلى القائمة </td>
                    <td dir="ltr" className="ps-3"><bdi> add() </bdi></td>
                </tr>
                <tr>
                    <td> يعيد <b>true</b> إذا كانت القائمة تحتوي على فئة </td>
                    <td dir="ltr" className="ps-3"><bdi> contains() </bdi></td>
                </tr>
                <tr>
                    <td> تُرجع عدد فئات في القائمة </td>
                    <td dir="ltr" className="ps-3"><bdi> length </bdi></td>
                </tr>
                <tr>
                    <td> يزيل رمزًا مميزًا واحدًا أو أكثر من القائمة </td>
                    <td dir="ltr" className="ps-3"><bdi> remove() </bdi></td>
                </tr>
                <tr>
                    <td> يستبدل رمزًا مميزًا في القائمة </td>
                    <td dir="ltr" className="ps-3"><bdi> replace() </bdi></td>
                </tr>
            </tbody>
        </table>
    </article>
</section>
    )
}