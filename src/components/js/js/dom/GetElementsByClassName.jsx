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
            {/* <div className="codeStudio alert bg-dark mt-3 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementsByClassName(<span style="color:orange">'class_elements'</span>)</span></pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js70_getElementsByClassName} className="img"/>
        <div className="styleee img">
            <h2>4</h2>
        </div>
        <div className="mital">متال 2 : </div>
        <img src={images.js70_getElementsByClassName2} className="img"/>
        <div className="styleee">
            <h2 className="h2"></h2>
            <h2 className="h2"></h2>
            <h2 className="h2"></h2>
        </div>
    </article>
</section>
    )
    }
        