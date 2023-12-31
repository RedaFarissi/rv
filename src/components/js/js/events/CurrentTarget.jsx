import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function EventCurrentTarget(){
    // #parent{ background-color: yellow;padding:9px;}

    // function function_name(event){
    //     window.alert(
    //     "you press in tag name "+ event.currentTarget.tagName +
    //     " with id "+ event.currentTarget.id
    //     )
    // }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript event.currentTarget</h1>
    <article>
        <p className="style_divv mt-5">
            ترجع خاصية الحدث <b>currentTarget</b> العنصر الذي قامت مستمعات الحدث الخاصة به بتشغيل الحدث. العنصر الأب .<br/>
            هذا مفيد بشكل خاص أثناء الالتقاط والفقاعات <small><bdi>(capturing and bubbling)</bdi></small><br/>
            تشير الخاصية <b>currentTarget</b> دائمًا إلى العنصر الذي قام مستمع الحدث الخاص به بتشغيل الحدث ، على عكس خاصية <b>target</b> ، التي تُرجع العنصر الذي أطلق الحدث.<br/>
            <CodeHighlighter code={`event.currentTarget`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js148_currentTarget} className="img"/>
        <div className="styleee">       
            <div id="parent" onclick="function_name(event)" >
                <p id="paragraph"> this  is paragraph click </p>
                <h2 id="h2"> heading click </h2>
                <button id="btn"> click </button>
            </div>
        </div>
    </article>
</section>
    )
}