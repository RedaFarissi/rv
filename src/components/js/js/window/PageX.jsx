import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function PageX(){
  // function showCoords(event) {
  //   var x1 = event.pageX;
  //   var y1 = event.pageY;
  //   var coords = "X coords: " + x1 + ", Y coords: " + y1;
  //   document.getElementById("id_name").innerHTML = coords;
  // }
  const codeExemple1= { 
    code: `     

     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple2= { 
    code: `     

     <script src="./index.js"></script>`,
    script:``
    }

  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript pageX</h1>
  <article>
    <div className="style_divv mt-5">
        ترجع الخاصية <b>pageX</b> الإحداثيات الأفقية (وفقا للوثيقة) لمؤشر الماوس عند تشغيل حدث ماوس.<br/>
        المستند هو صفحة الويب.<br/>
        للحصول على الإحداثيات الرأسية (وفقا للوثيقة) لمؤشر الماوس، استخدم الخاصية <b>pageY</b>.<br/>
        هذه الخاصية للقراءة فقط.
        <CodeHighlighter code={`event.pageX`} language="js" addClass="mt-3 mb-3" copie={true} />
    </div>
    <div className="mital">متال :  </div>
    <img src={images.js103_pageX} className="img"/>
    <div className="styleee">
      <h2 onmousemove="showCoords(event)"> Move mouse in this heading to get the x (horizontal) and y (vertical) coordinates of the mouse pointer .</h2>
      <p> <strong>Tip:</strong>Try to click different places in the heading. </p>
      <p id="id_name"></p>
    </div>
  </article>
</section>
  )
}