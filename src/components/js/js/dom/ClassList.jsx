import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function ClassList(){
        const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:``
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
        <div className="mital">متال :  </div>
        <img src={images.js62_classList} className="img"/>
        <div className="styleee">
                alert alert-primary <br/>
                <b>object</b>
        </div>
        <div className="mital">متال 2 :  </div>
        <img src={images.js62_classList2} className="img"/>
        <img src={images.js62_classList2_2} className="img"/>
        <div className="mital">متال 3 :  </div>
        <img src={images.js62_classList5} className="img"/>
        <div className="styleee">
            alert alert-primary border border-primary
        </div>
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
        <img src={images.js62_classList3} className="img"/>
        <div className="styleee">
            alert alert-primary border border-primary
        </div>
        <div className="mital">متال 2 :  </div>
        <img src={images.js62_classList4} className="img"/>
        <div className="styleee">
            alert 
        </div>
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