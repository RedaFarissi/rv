import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Remove(){
  // function myFunction() {
  //   const element = document.getElementById("paragraph");
  //   element.remove();
  // }
  // var arr = []
  // for(let i=0 ; i<=20 ;i++ ){
  //   arr[i] = document.createElement("div")
  //   arr[i].setAttribute("class","reda")
  //   arr[i].addEventListener("click",()=>{ arr[i].remove() });
  //   document.getElementById("result").appendChild(arr[i])
  //   document.querySelectorAll(".reda")[i].innerHTML = i
  // }
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript remove</h1>
  <article>
    <p className="style_divv mt-5">
        تزيل طريقة <bdi><b>remove()</b></bdi> عنصرًا (أو node) من المستند.
       {/* <div className="alert bg-dark pb-0 mt-3">
            <pre> <span style="color:var(--js-color)">element</span>.<span style="color:gold">remove()</span></pre></div>
        </div> */}
    </p>
    <div className="mital"> متال 1 :  </div>
    <img src={images.js145_remove} className="img"/>
    <div className="styleee">
        <h1>The Element Object</h1>
        <h2>The remove() Method</h2>
        <p id="paragraph"> Click "Remove button", and this paragraph willbe removed from the DOM. </p>
        <button onclick="myFunction()">Remove</button>
    </div>
    <div className="mital"> متال 2 :  </div>
    <img src={images.js145_remove2} className="img"/>
    <div className="styleee">
        <h2> Headding </h2>
        <p> click element to remove </p>
        <div id="result"></div>
    </div>
  </article>
</section>
  )
}