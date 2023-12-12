import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function PageY(){
  // function showCoords(event) {
  //   var x1 = event.pageX;
  //   var y1 = event.pageY;
  //   var coords = "X coords: " + x1 + ", Y coords: " + y1;
  //   document.getElementById("id_name").innerHTML = coords;
  // }
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript pageY</h1>
  <article>
    <p className="style_divv mt-5">
        ترجع الخاصية <b>pageY</b> الإحداثيات العمودية (وفقا للوثيقة) لمؤشر الماوس عند تشغيل حدث ماوس.<br/>
        المستند هو صفحة الويب.<br/>
        للحصول على الإحداثيات الأفقية (وفقا للوثيقة) لمؤشر الماوس، استخدم الخاصية <b>pageX</b>.<br/>
        هذه الخاصية للقراءة فقط.
        {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
            <pre><span style="color:var(--js-color)">event</span>.<span style="color:var(--js-color)">pageY</span></pre>
        </div> */}
    </p>
    <div className="sum_exemple_style">
        <div className="mital">متال :  </div>
        <img src={images.js103_pageX} className="img"/>
        <div className="styleee">
          <h2 onmousemove="showCoords(event)"> Move mouse in this heading to get the x (horizontal) and y (vertical) coordinates of the mouse pointer .</h2>
          <p> <strong>Tip:</strong>Try to click different places in the heading. </p>
          <p id="id_name"></p>
        </div>
    </div>
  </article>
</section>
  )
}
