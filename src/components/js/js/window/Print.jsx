import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Print(){
    const codeExemple1= { 
    code: `     

     <script src="./index.js"></script>`,
    script:``
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript print</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم طريقة <b><bdi>print()</bdi></b> بطباعة محتويات النافذة الحالية.<br/>
            تفتح طريقة <b><bdi>print()</bdi></b> مربع حوار الطباعة ، مما يتيح للمستخدم تحديد خيارات الطباعة المفضلة.
            <CodeHighlighter code={`window.print()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js52_print} className="img"/>
        <div className="styleee">       
            <h2 id="h2">  <button onclick="window.print()" style={{border:"1px solid black",outline:"none",borderRadius:"2px",padding:"3px 9px"}}> Print page </button> </h2>
        </div>
    </article>
</section>
    )
}