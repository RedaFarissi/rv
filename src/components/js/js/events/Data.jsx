import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Data(){
  // #resulta{  font-size: x-large;  color: green;}

  // function myFunction(event) {
  //   var r = document.getElementById("resulta")
  //   r.innerHTML = event.data;
  // }

  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript data</h1>
  <article>
      <p className="style_divv mt-5">
          تقوم خاصية <b>event.data</b> بإرجاع الحرف الذي تم إدراجه مع الحدث.<br/>
          هذه الخاصية للقراءة فقط.
          {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
              <pre><span style="color:var(--js-color)">event</span>.<span style="color:var(--js-color)">data</span></pre>  
          </div> */}
      </p>
      <div className="mital"> متال :  </div>
      <img src={images.js135_data} className="img"/>
      <div className="styleee">
          <p> Write something in the text field . </p>
          <input type="text"  oninput="myFunction(event)"/>
          <p>The inserted character: <b id="resulta"></b></p>
          <p><strong>Note:</strong> : This property is not fully supported, and can change before the final release.</p>
      </div>
  </article>
</section>
    )
}
