import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function SetInterval(){
    // let id = document.getElementById("h2")
    // function function_name(){
    //     id.innerHTML += "hello "
    // }
    // let id2 = document.getElementById("h22")
    // let s=0 ; m=0 , h=0 ; 
    // setInterval( Clock ,1000)
    // function Clock(){
    //     if( s < 59)   s++;
    //     else{ m++;  s=0; if(m == 60){ m=0; h++; } }
    //     id2.innerHTML = ` ${h} : ${m} : ${s} `
    // }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript setInterval</h1>
    <article>
        <p className="style_divv mt-5">
            تستدعي طريقة <bdi><b>setInterval()</b></bdi> دالة في فترات زمنية محددة (بالمللي ثانية).<br/>
            تستمر طريقة <bdi><b>setInterval()</b></bdi> في استدعاء الوظيفة حتى يتم استدعاء <bdi>clearInterval()</bdi> أو تصبح النافذة
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:gold">setInterval(</span> Function_name <span style="color:gold">,</span> milliseconds<span style="color:gold">)</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js35_setInterval} className="img"/>
        <div className="styleee">
            <button onclick="setInterval( function_name ,1000)" style={{outline:"none",borderRadius:"2px",border:"1px solid black"}}> Cick Here </button>
            <h2 id='h2'>HELLO </h2>
        </div>
        <div className="mital"> متال 2 :  </div>
        <img src={images.js35_setInterval2} className="img"/>
        <div className="styleee">
            <h2 id='h22'> 0 : 0 : 0 </h2>
        </div>
    </article>
</section>
    )
}
