import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Map(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Map</h1>
    <article>
        <p className="style_divv mt-5">
            تُنشئ <bdi><b>map()</b></bdi> مصفوفة جديدة من استدعاء دالة لكل عنصر مصفوفة.<br/>
            تعتبر الدالة <bdi><b>map()</b></bdi> من 
            <button className="text-danger border-0" data-bs-toggle="collapse" data-bs-target="#id_name"> Higher Order Functions </button><br/>
            <div id="id_name" className="collapse bg-primary p-3 mt-2 mb-2"> 
                <b>Higher Order Functions</b> هي دالة تستقبل ك <b>parametre</b> دالة تانية   .<br/>
                هاده الدالة التانية تستقبل أيضا <b>parametre</b> . 🙄
            </div>
            لا يغير <bdi><b>map()</b></bdi> المصفوفة الأصلية.<br/>
            تستدعي <bdi><b>map()</b></bdi> دالة مرة واحدة لكل عنصر في المصفوفة.<br/>
            لا ينفذ <bdi><b>map()</b></bdi> الوظيفة للعناصر الفارغة.<br/>
            الدالة داخل الدالة <b>map</b> يجب أن تحتوي <small>parametre</small> واحد على الأقل . و يمتل  عنصر المصفوفة في كل مرة .<br/>
            {/* <div className="alert bg-dark pb-0 mt-3">
        <pre> <span style="color:var(--js-color)">array</span>.<span style="color:gold">map(</span><span style="color:var(--html-color-tags)">function</span><span style="color:gold">(</span><span style="color:var(--js-color)">element</span> , <span style="color:var(--js-color)">index</span> , <span style="color:var(--js-color)">array</span><span style="color:gold">)</span>, thisValue<span style="color:gold">)</span></pre></div>
            </div> */}
        </p>
        <div className="mital"> الطريقة 1 :  </div>
        <ul><li> في المتال أسفله  </li></ul>
        <img src={images.js143_map} className="img"/>
        <div className="styleee">
            4<br/> 16<br/> 36<br/> 64<br/> 100
        </div>
        <div className="mital"> الطريقة 2 :  </div>
        <img src={images.js143_map2} className="img"/>
        <div className="styleee">
            4<br/> 16<br/> 36<br/> 64<br/> 100
        </div>
        <div className="mital"> الطريقة 3 :  </div>
        <img src={images.js143_map3} className="img"/>
        <div className="styleee">
            4<br/> 16<br/> 36<br/> 64<br/> 100
        </div>
    </article>
</section>
    )
}