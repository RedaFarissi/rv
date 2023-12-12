import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Confirm(){
    // function name_function() {
    //     let id =  document.getElementById("h222")
    //     let text;
    //     if (confirm("Press a button!") == true) {
    //       text = "<span style='color:green'>You pressed OK</span>";
    //     }else{
    //       text = "<span style='color:red'>You canceled</span>";
    //     }
    //     id.innerHTML = text;
    // }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript confirm</h1>
    <article>
        <p className="style_divv mt-5">
            تعرض طريقة <bdi><b>confirm()</b></bdi> مربع حوار به رسالة وزر موافق وزر إلغاء.<br/>
            تُرجع طريقة <bdi><b>confirm()</b></bdi> إلى القيمة <b>true</b> إذا نقر المستخدم على "موافق" ، وإلا فسيكون ذلك خطأ .<br/>
            {/* <div className="codeStudio alert bg-dark pb-0 mt-3" dir="ltr">
                <pre><span style="color:gold;">confirm(<span style="color:orange;">"message"</span>)</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js30_confirm} className="img"/>
        <div className="styleee">
            <button onclick="name_function()"> Click Here </button>
            <h2 id="h222"></h2>
        </div>
    </article>
</section>
    )
}