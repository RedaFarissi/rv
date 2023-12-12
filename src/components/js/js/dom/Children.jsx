import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Children(){
    // document.getElementById("HTMLCollection-result").style.display="none"
    //         let ressult_test = true
    //         document.getElementById("HTMLCollection-id").addEventListener("click", function(){
    //             if(ressult_test == true){
    //                 document.getElementById("HTMLCollection-result").style.display="block"
    //                 ressult_test = false
    //             }else{
    //                 document.getElementById("HTMLCollection-result").style.display="none"
    //                 ressult_test = true
    //             }
    //         });
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript children</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم خاصية الأطفال بإرجاع مجموعة من العناصر الفرعية لعنصر ما.<br/>
            تقوم خاصية <b>children</b> بإرجاع كائن <button id="HTMLCollection-id" style={{outline: "none", border: "none", backgroundColor:"rgb(24 24 24)", color:"brown"}}><b>HTMLCollection</b></button>.
            <div id="HTMLCollection-result" style={{paddingTop:"2px",marginTop:"6px", color:"rgba(0 0 0/85%)"}} className="alert bg-info"><small>
                مجموعة <b>HTMLCollection</b> هي مجموعة من عُقد <b>HTML</b>.<br/>
                مجموعة <b>HTMLCollection</b> هي قائمة تشبه مصفوفة من عناصر <b>HTML</b>.<br/>
                يمكن الوصول إلى العناصر الموجودة في مجموعة بواسطة فهرس يبدأ من 0.<br/>
                ترجع خاصية <b>length</b> عدد العناصر في مجموعة <b>HTML</b>.</small>
            </div>

            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">Element</span>.<span style="color:var(--js-color)">children</span></pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js58_children} className="img"/>
        <div className="styleee img">
            <h2>Heading</h2>
            <p>Paragraph</p>
            <div> H2<br/>P<br/>DIV<br/>SCRIPT</div>
        </div>
        <div className="mital">متال 2 :  </div>
        <img src={images.js58_children2} className="img"/>
        <div className="styleee img">
            <ol>
                <li>Lemon</li>
                <li>Banana</li>
                <li>Kiwi</li>
            </ol>
            <h2> Lemon <br/>Banana <br/>Kiwi </h2>
        </div>
    </article>
</section>
    )
}