import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function RemoveEventListener(){
    // const myDiv = document.getElementById("divvv");
    // myDiv.addEventListener("mousemove", myFunction);
    // function Remove() {
    //   myDiv.removeEventListener("mousemove", myFunction);
    // }
    // function myFunction() {
    //   document.getElementById("result").innerHTML = Math.random();
    // }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript removeEventListener</h1>
    <article>

        <p className="style_divv mt-5">
            تزيل طريقة <bdi>removeEventListener()</bdi> ال <b>event</b> من عنصر .<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">element</span>.<span style="color:gold">removeEventListener(</span>event<span style="color:gold">,</span>function_name<span style="color:gold">,</span>Capture<span style="color:gold">)</span></span></pre>
            </div> */}
        </p>

        <div className="mital">متال :  </div>
        <img src={images.js56_removeEventListener} className="img"/>
        <div className="styleee img" style={{cursor:"default"}}>
            <div id="divvv">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Neque fugiat laboriosam architecto officia voluptatem aut,
                reprehenderit placeat quae, alias quaerat recusandae iste? 
                Itaque animi earum nemo fugiat dicta, minus qui!<br/>
            <button onclick="Remove()" className="btn btn-primary" style={{margin:"20px"}}> Remove </button>
        </div>
        <div id="result"></div>
        
        </div>
    </article>
</section>
    )
}