import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function PageX(){
  function showCoords(event) {
    var x = event.pageX;
    var y = event.pageY;

    var coords = "X coords: " + x + "<br/>Y coords: " + y;
    document.getElementById("id_name").innerHTML = coords;
  }

  const codeExemple1= { 
    code: `     <h2 class="bg-danger" onmousemove="showCoords(event)">
         Move mouse in this heading to get the x (horizontal)
         and y (vertical) coordinates of the mouse pointer
     </h2>
     <h2 id="id_name"></h2>

     <script src="./index.js"></script>`,
    script:`function showCoords (event) {
    var x = event.pageX;
    var y = event.pageY;

    var coords = "X coords: " + x + "<br/>Y coords: " + y;
    document.getElementById("id_name").innerHTML = coords;
}`
    }

  return(
<section className="section-conetent">
  <h1 className="heading-style">JavaScript pageX</h1>
  <article className="mt-5">
    <div className="style_divv">
        ترجع الخاصية <b>pageX</b> الإحداثيات الأفقية (وفقا للوثيقة) لمؤشر الماوس عند تشغيل حدث ماوس.<br/>
        المستند هو صفحة الويب.<br/>
        للحصول على الإحداثيات الرأسية (وفقا للوثيقة) لمؤشر الماوس، استخدم الخاصية <b>pageY</b>.<br/>
        هذه الخاصية للقراءة فقط.
        <CodeHighlighter code={`event.pageX`} language="js" addClass="mt-3 mb-3" copie={true} />
        <CodeHighlighter code={`event.pageY`} language="js" addClass="mt-3 mb-3" copie={true} />
    </div>
    <div className="mital">متال :  </div>
    <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="pageX" addClass="mt-3 mb-3" copie={true}  number={false}/>  
    <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
    <Result title='pageX' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
      <h2 className="bg-danger" onMouseMove={(event)=>{showCoords(event)}}>
          Move mouse in this heading to get the x (horizontal)
          and y (vertical) coordinates of the mouse pointer
      </h2>
      <h2 id="id_name">  </h2>
    </Result>
  </article>
</section>
  )
}