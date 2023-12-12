import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Ondrag(){

    // #drag1{ width:170px; height:170px; border-radius:50%; }
    // .div{ width:200px; height:200px; border:2px solid black; border-radius:50%; }
    // .center{display: flex; justify-content: center; align-items: center;}

    // function allowDrop(ev) {
    //     ev.preventDefault();
    //   }
  
    //   function drag(ev) {
    //     ev.dataTransfer.setData("text", ev.target.id);
    //   }
  
    //   function drop(ev) {
    //     ev.preventDefault();
    //     var data = ev.dataTransfer.getData("text");
    //     ev.target.appendChild(document.getElementById(data));
    //   }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript ondrag</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>ondrag</b> عندما يتم سحب عنصر أو تحديد نص.<br/>
            يعد السحب والإفلات ميزة شائعة جدًا في <b>HTML5</b> <br/>
            ملاحظة لجعل عنصر ما قابلاً للسحب ، استخدم سمة <b><code>draggable="true"</code></b> العامة القابلة للسحب.<br/>
            تلميح الروابط والصور قابلة للسحب بشكل افتراضي ، ولا تحتاج إلى خاصية السحب.<br/>
            هناك العديد من الأحداث التي يتم استخدامها ويمكن أن تحدث في المراحل المختلفة لعملية السحب والإفلات <br/><br/>

            يتم تشغيل الأحداث على الهدف القابل للسحب (عنصر المصدر)<br/>
            <ul>
                <li><b>ondragstart</b> - يحدث عندما يبدأ المستخدم في سحب عنصر </li>
                <li><b>ondrag</b> - يحدث عند سحب عنصر </li>
                <li><b>ondragend</b> - يحدث عندما ينتهي المستخدم من سحب العنصر </li>
            </ul>
            تم إطلاق الأحداث على هدف الإسقاط<br/>
            <ul>
                <li><b>ondragenter</b> - يحدث عندما يدخل العنصر المسحوب في هدف الإسقاط </li>
                <li><b>ondragover</b> - يحدث عندما يكون العنصر المسحوب فوق هدف الإسقاط </li>
                <li><b>ondragleave</b> - يحدث عندما يترك العنصر المسحوب هدف الإسقاط </li>
                <li><b>ondrop</b> - يحدث عندما يتم إسقاط العنصر المسحوب على هدف الإسقاط </li>
            </ul>

            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">ondrag</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">ondrag</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"drag"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </p>

        {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><div style="color:green">//javaScript functions </div>
        <span style="color:var(--html-color-tags)">function</span> <span style="color:gold">allowDrop(</span><span style="color:var(--js-color)">event</span><span style="color:gold">)</span>{
            <span style="color:var(--js-color)">event</span>.<span style="color:gold">preventDefault()</span>
        }

        <span style="color:var(--html-color-tags)">function</span> <span style="color:gold">drag(</span><span style="color:var(--js-color)">event</span><span style="color:gold">)</span>{
            <span style="color:var(--js-color)">event</span>.<span style="color:var(--js-color)">dataTransfer</span>.<span style="color:gold">setData(</span><span style="color:orange;">"text"</span> , <span style="color:var(--js-color)">event</span>.<span style="color:var(--js-color)">target</span>.<span style="color:var(--js-color)">id</span><span style="color:gold">)</span>
        }

        <span style="color:var(--html-color-tags)">function</span> <span style="color:gold">drop(</span><span style="color:var(--js-color)">event</span><span style="color:gold">)</span>{
            <span style="color:var(--js-color)">event</span>.<span style="color:gold">preventDefault()</span>
            <span style="color:var(--html-color-tags)">var</span> data = <span style="color:var(--js-color)">event</span>.<span style="color:var(--js-color)">dataTransfer</span>.<span style="color:gold">getData(</span><span style="color:orange;">"text"</span><span style="color:gold">)</span>
            <span style="color:var(--js-color)">event</span>.<span style="color:gold">appendChild(</span> <span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementById(</span>data<span style="color:gold">)</span><span style="color:gold">)</span>
        }</pre>  
        </div> */}

            <div className="mital"> متال :  </div>
            <img src={images.js115_ondrag} className="img"/>
            <div className="styleee">   
                <div className="d-flex justify-content-around flex-wrap">
                    <div ondrop="drop(event)" ondragover="allowDrop(event)" className="div center"></div>
                    <div ondrop="drop(event)" ondragover="allowDrop(event)" className="div center">
                    <img id="drag1" src="./js/hajime.jpg" draggable="true" ondragstart="drag(event)"/>
                    </div>
                </div> 
            </div>
    </article>
</section>
    )
}
