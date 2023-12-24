import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function ScrollIntoView(){
    // function name_function(){
    //     // scroll top
    //     document.getElementById("dV2").scrollIntoView(true) //true default value
    // }
    // function name_function2(){
    //     // scroll bottom
    //     document.getElementById("dV2").scrollIntoView(false)
    // }
    // function name_function3(){
    //     // scroll behavior : smooth
    //     document.getElementById("dV2").scrollIntoView({behavior:"smooth"})
    // }
    const codeExemple1= { 
    code: `     

     <script src="./index.js"></script>`,
    script:``
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript scrollIntoView</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم طريقة <bdi><b>scrollIntoView()</b></bdi> بتمرير محدد إلى المنطقة المرئية من نافذة المتصفح.<br/>
            يتم الوصول إلى  <b>pageYOffset</b> باستخدام :<br/>
            <CodeHighlighter code={`element.scrollIntoView()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js44_scrollIntoView} className="img"/>
        <div className="styleee">
            <button onclick="name_function()"> TOP </button>
            <button onclick="name_function2()"> BOTTOM </button>
            <button onclick="name_function3()"> smooth </button>
            <div id="dV1"> 
                <div id="dV2">
                    div mark by id
                </div>
            </div>
        </div>
    </article>
</section>
    )
}