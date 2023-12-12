import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function CreateElement(){
    // function myFunction() {
    //     var y = document.createElement("INPUT");
    //     y.setAttribute("type", "text");
    //     y.setAttribute("value", "Donald");
    //     document.getElementById("resulTa").appendChild(y);
    //   }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript createElement</h1>
    <article>
        <p className="style_divv mt-5">
            طريقة <bdi><b>createElement()</b></bdi> تنشئ عقدة عنصر <small><small><bdi>(element node)</bdi></small></small>.<br/>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--html-color-tags)">let</span> variable = <span style="color:var(--js-color)">document</span>.<span style="color:gold">createElement(<span style="color:orange">'type'</span>)</span></pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js65_createElement} className="img"/>
        <div className="styleee img">
            <h2>Heading Element 1</h2>
            <h2>Heading Element 2</h2>
        </div>
        <div className="mital">متال 2 :  </div>
        <img src={images.js65_createElement2} className="img"/>
        <div className="styleee img">
            <h2>Heading Element 1</h2>
            <div><img src={images.hajime}  style={{height: "250px",objectFit:"contain"}}/></div>
        </div>
        <div className="mital">متال 3 :  </div>
        <img src={images.js65_createElement3} className="img"/>
        <div className="styleee img">
            <button onclick="myFunction()" className="btn btn-primary mb-2">click</button>
            <div id="resulTa">
        
            </div>
        </div>
    </article>
</section>
    )
}