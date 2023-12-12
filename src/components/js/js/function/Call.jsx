import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Call(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Call</h1>
    <article>
        <p className="style_divv mt-5">
            باستخدام الدالة  <bdi><b>call()</b></bdi>  يمكن استخدام <b>method</b> على كائنات مختلفة.<br/>
            يمكن استخدام الدالة  <bdi><b>call()</b></bdi> لاستدعاء method مع كائن مالك كوسيطة
            {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
        <pre><span style="color:gold">call()</span>
        <span style="color:gold">call(</span><span style="color:var(--html-color-tags)">thisArg</span><span style="color:gold">)</span>
        <span style="color:gold">call(</span><span style="color:var(--html-color-tags)">thisArg</span>, arg1,arg2 , …<span style="color:gold">)</span></pre>   
            </div> */}
        </p> 
        <div className="mital">متال 1 :  </div>
        <ul>
            <li> يستدعي هذا المثال طريقة fullName من خلال ال obj  الذي يحتوي على الدالة ، تم من خلال الدالة ِcall يستخدم ال obj2 الذي لا يحتوي على دالة ويقوم بإرجاع النتيجة مباشرة .</li></ul>
        <img src={images.js149_call} className="img"/>
        <div className="styleee">
            <div className="h2"> Aymane Razmi </div>
        </div>
        <div className="mital">متال 2 :  </div>
        <ul><li> يمكن أن يقبل التابع <bdi>call()</bdi> ال arguments </li></ul>
        <img src={images.js149_call2} className="img"/>
        <div className="styleee">
            <div className="h2"> Adil Toumi moroccain Sidi Slimane </div>
        </div>
        <div className="mital">متال 3 :  </div>
        <ul><li> يمكن أن تستخدم <bdi>call()</bdi> ال function   </li></ul>
        <img src={images.js149_call3} className="img"/>
        <div className="styleee">
            <div className="h2"> Rabab Thing 26 </div>
        </div>
    </article>
</section>
    )
}
