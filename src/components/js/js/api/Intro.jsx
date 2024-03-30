import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Intro(){
    const codeExemple1= { 
        code: `      <h2>JavaScript Geolocation</h2>
     <p>Click the button to get your coordinates.</p>
     <button onclick="getLocation()">Try It</button>
     
     <p id="result"></p>
       
     <script src="./index.js"></script>`,
    script:`const result = document.getElementById("result");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch (err) {
    result.innerHTML = err
  }
}

function showPosition(position) {
  result.innerHTML = \`Latitude: \${position.coords.latitude}  <br/>Longitude:  \${position.coords.longitude}\`;
}`
    }

    function getLocation() {
      try {
        navigator.geolocation.getCurrentPosition(showPosition);
      } catch (err) {
        document.getElementById("result").innerHTML = err
      }
    }
    
    function showPosition(position) {
        document.getElementById("result").innerHTML = `Latitude: ${position.coords.latitude}  <br/>Longitude:  ${position.coords.longitude}`;
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript API introduction</h1>
    <article>
        <p className="style_divv mt-5"> 
            واجهة برمجة تطبيقات الويب هي حلم المطور.<br/>
            <ul>
                <li> من خلال API يمكن توسيع وظائف المتصفح </li>
                <li> يمكنه تبسيط الوظائف المعقدة بشكل كبير </li>
                <li> يمكن أن يوفر بناء الجملة السهل للكود المعقد </li>
            </ul>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1- ما هي واجهة برمجة تطبيقات الويب <bdi>(API)</bdi> ?</h2>
        <p className="style_divv">    
            <b>API</b> وتعني  <b>Application Programming Interface</b> (واجهة برمجة التطبيقات).<br/>
            <bdi><b>Web API</b></bdi>   هو واجهة برمجة تطبيقات للويب .<br/>
            يمكن لواجهة برمجة تطبيقات المتصفح أن توسع وظائف متصفح الويب.<br/>
            يمكن لخادم <b>API</b> توسيع وظائف خادم zلويب.<br/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">2- المتصفحات و واجهة برمجة تطبيقات <bdi>API</bdi></h2>
        <p className="style_divv">
            تحتوي جميع المتصفحات على مجموعة من واجهات برمجة تطبيقات الويب المدمجة لدعم العمليات المعقدة ، وللمساعدة في الوصول إلى البيانات.<br/>
            على سبيل المثال ، يمكن لواجهة برمجة تطبيقات <bdi>(Geolocation API)</bdi> تحديد الموقع الجغرافي أن ترجع إحداثيات مكان المتصفح.
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="Geolocation" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js" addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="Geolocation" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>JavaScript Geolocation</h2>
            <p>Click the button to get your coordinates.</p>
            <button onClick={getLocation}>Try It</button>
            <p id="result"></p>
        </Result>
    </article>
    <article>
        <h2 className="title-h2"> 3-  واجهات برمجة تطبيقات الطرف الثالث <bdi><small><small>(Third Party APIs)</small></small></bdi></h2>
        <p className="style_divv">
            تقدم واجهة برمجة التطبيقات <bdi><b>(API)</b></bdi> معلومات عن برامج التطبيقات. يوفر أحد التطبيقات واجهة برمجة تطبيقات للمطورين للاتصال بتطبيقاتهم الخاصة. تقدم <bdi><b>Youtube API</b></bdi> معلومات الفيديو. تقدم واجهة برمجة تطبيقات خرائط <b>Google</b> معلومات تحديد الموقع الجغرافي. باستخدام واجهة برمجة التطبيقات ، يمكن لتطبيقك تلقي المعلومات المقدمة وتحسين كيفية أدائها للمستخدمين.
        </p>
    </article>
</section>
    )
}
 