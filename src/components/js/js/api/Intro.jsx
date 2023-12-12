import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Intro(){
    // const result = document.getElementById("result");
    // function getLocation() {
    //   try {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    //   } catch {
    //     result.innerHTML = err;
    //   }
    // }
    // function showPosition(position) {
    //     result.innerHTML = "Latitude: " + position.coords.latitude + 
    //   "<br/>Longitude: " + position.coords.longitude;
    // }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript API introduction</h1>
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
        <h3>1- ما هي واجهة برمجة تطبيقات الويب <bdi>(API)</bdi> ?</h3>
        <p className="style_divv">    
            <b>API</b> وتعني  <b>Application Programming Interface</b> (واجهة برمجة التطبيقات).<br/>
            <bdi><b>Web API</b></bdi>   هو واجهة برمجة تطبيقات للويب .<br/>
            يمكن لواجهة برمجة تطبيقات المتصفح أن توسع وظائف متصفح الويب.<br/>
            يمكن لخادم <b>API</b> توسيع وظائف خادم zلويب.<br/>
        </p>
    </article>
    <article>
        <h3>2- المتصفحات و واجهة برمجة تطبيقات <bdi>API</bdi></h3>
        <p className="style_divv">
            تحتوي جميع المتصفحات على مجموعة من واجهات برمجة تطبيقات الويب المدمجة لدعم العمليات المعقدة ، وللمساعدة في الوصول إلى البيانات.<br/>
            على سبيل المثال ، يمكن لواجهة برمجة تطبيقات <bdi>(Geolocation API)</bdi> تحديد الموقع الجغرافي أن ترجع إحداثيات مكان المتصفح.
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js137_geolocation} className="img"/>
        <div className="styleee">
            <div id="h2">JavaScript Geolocation</div>
            <p>Click the button to get your coordinates.</p>
            <button onclick="getLocation()" className="btn btn-primary"> Try It </button>
            <p id="result" style={{marginTop:"12px"}}></p>
        </div> 
    </article>
    <article>
        <h3> 3-  واجهات برمجة تطبيقات الطرف الثالث <bdi><small><small>(Third Party APIs)</small></small></bdi></h3>
        <p className="style_divv">
            تقدم واجهة برمجة التطبيقات <bdi><b>(API)</b></bdi> معلومات عن برامج التطبيقات. يوفر أحد التطبيقات واجهة برمجة تطبيقات للمطورين للاتصال بتطبيقاتهم الخاصة. تقدم <bdi><b>Youtube API</b></bdi> معلومات الفيديو. تقدم واجهة برمجة تطبيقات خرائط <b>Google</b> معلومات تحديد الموقع الجغرافي. باستخدام واجهة برمجة التطبيقات ، يمكن لتطبيقك تلقي المعلومات المقدمة وتحسين كيفية أدائها للمستخدمين.
        </p>
    </article>
</section>
    )
}
 