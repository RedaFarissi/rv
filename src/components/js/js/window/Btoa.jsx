import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Btoa(){
    // function buton(){
    //     let id = document.getElementById("h2")
    //     let text = atob(document.getElementById("text").value);
    //     id.innerHTML = "<span style='color:blue'>" + text + "</span>";
    // }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript btoa</h1>
    <article>

        <p className="style_divv mt-5">
            تقوم طريقة <bdi><b>btoa</b></bdi> بتشفير سلسلة بنضام <bdi>64-bit</bdi>.
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">window</span>.<span style="color:gold">btoa(<span style="color:orange">"string"</span>)</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js32_btoa} className="img"/>
        <div className="styleee img"> <h2> EçZÉ(ºx </h2> </div>
        <div className="mital"> متال 2 :  </div>
        <img src={images.js32_btoa2} className="img"/>
        <div className="styleee">    
            <input type="text" id="text"/>
            <button onclick="buton()"> OK </button>
            <h2 id="h2"></h2>
        </div>
        <ul><li> لفك تشفير إستعمل <bdi><b>atob()</b></bdi> </li></ul>
    </article>
</section>
    )
}