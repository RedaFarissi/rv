import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Conversion(){
    const codeExemple1= { 
    code: `     
    
     <script src="./index.js"></script>`,
    script:``
    }

    // var date = new Date()
    // let a = 123;
    // var d = document.getElementsByClassName("string_date")
    // d[0].innerHTML = String(Date())   
    // d[1].innerHTML = Date().toString()   
    // d[2].innerHTML = Number(date)
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Conversion</h1>
    <article>
        <p className="style_divv mt-5">
            يمكن تحويل متغيرات <b>JavaScript</b> إلى متغير جديد ونوع بيانات آخر عن طريق استخدام وظائف <b>JavaScript</b><br/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. تحويل الجمل إلى أرقام </h2>
        <p className="style_divv">
            يمكن تحويل السلاسل إلى أرقام عبر إستخدام  <b><bdi>Number()</bdi></b>.<br/>
            يتم تحويل السلاسل الفارغة إلى 0.
            أي شيء آخر يتحول إلى <b>NaN</b> <small><small>(ليس رقمًا)</small></small>.
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
                <pre><span style="color:lime">Number(</span><span style="color:orange">"string_number"</span><span style="color:lime">)</span></pre>
            </div> */}
            يمكن استخدام الطريقة <b>parseFloat</b> 
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
                <pre><span style="color:gold">parseFloat(</span><span style="color:orange">"string_number"</span><span style="color: gold;">)</span></pre>  
            </div> */}
            يمكن استخدام الطريقة <b>parseInt</b> أيضا و التي تقوم بإعادة عدد صحيح طبيعي 
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
                 <pre><span style="color:gold">parseInt(</span><span style="color:orange">"string_number"</span><span style="color: gold;">)</span></pre>   
            </div> */}
        </p>

        <div className="mital"> متال :  </div>
        <img src={images.js24_Conversion} className="img"/>
        <div className="styleee img"><h2>3.14<br/>0<br/>0<br/>20000<br/>NaN<br/>NaN</h2></div>
        <div className="mital"> متال 2 :  </div>
        <img src={images.js24_Conversion2} className="img"/>
        <div className="styleee img"><h2>3.14<br/>24<br/>9<br/>NaN</h2></div>
        <div className="mital"> متال 3 :  </div>
        <img src={images.js24_Conversion3} className="img"/>
        <div className="styleee img"><h2>3<br/>24<br/>92</h2></div>
    </article>
    <article>
        <h2 className="title-h2">2. تحويل الأرقام إلى سلاسل</h2>
        <p className="style_divv">
            يمكن تحويل الأرقام إلى  سلاسل  عبر إستخدام  <b><bdi>String()</bdi></b>.<br/>
            يمكن استخدامه مع أي نوع من الأرقام أو القيم الحرفية أو المتغيرات أو التعبيرات .
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
                <pre><span style="color:lime">String(</span><span style="color:orange">"string_number"</span><span style="color:lime">)</span></pre>
            </div> */}
            يمكن استخدام الطريقة <b>toString</b> 
        </p>
        <div className="mital"> متال 1 :  </div>
        <img src={images.js24_Conversion4} className="img"/>
        <div className="styleee img"><h2>123<br/>123<br/>123</h2></div>
        <div className="mital"> متال 2 :  </div>
        <img src={images.js24_Conversion5} className="img"/>
        <div className="styleee img"><h2>123<br/>200<br/>203</h2></div>
    </article>
    <article>
        <h2 className="title-h2">3. تحويل التواريخ إلى سلاسل</h2>
        <p className="style_divv">
            يمكن للأسلوب العام <b><bdi>String()</bdi></b> تحويل التواريخ إلى سلاسل.
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
                <pre><span style="color:lime">String(Date())</span></pre>
            </div> */}
            يمكن استخدام الطريقة <b>toString</b>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
                <pre><span style="color:lime">Date()</span>.<span style="color:gold;">toString()</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال 1 :  </div>
        <img src={images.js24_Conversion6} className="img"/>
        <div className="styleee img"><h2 className="string_date"></h2></div>
        <div className="mital"> متال 2 :  </div>
        <img src={images.js24_Conversion7} className="img"/>
        <div className="styleee img"><h2 className="string_date"></h2></div>
    </article>
    <article>
        <h2 className="title-h2">4. تحويل التواريخ إلى أرقام</h2>
        <p className="style_divv">
            مكن استخدام الطريقة العامة <b><bdi>Number()</bdi></b> لتحويل التواريخ إلى أرقام.
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">let</span> variable_name = <span style="color:var(--html-color-tags)">new</span> <span style="color:lime"><bdi>Date()</bdi></span>
        <span style="color:lime">Number(</span>variable_name<span style="color:lime">)</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال  :  </div>
        <img src={images.js24_Conversion8} className="img"/>
        <div className="styleee img"><h2 className="string_date"></h2></div>
    </article>
    <article>
        <h2 className="title-h2">5. تحويل القيم المنطقية إلى أرقام</h2>
        <p className="style_divv">
            يمكن للطريقة العامة <b><bdi>String()</bdi></b> تحويل القيم المنطقية إلى سلاسل.
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:9px;padding-bottom:0pt;">
            <pre><span style="color:lime">String(</span><span style="color:var(--html-color-tags)">true</span><span style="color:lime">)</span>
        <span style="color:lime">String(</span><span style="color:var(--html-color-tags)">false</span><span style="color:lime">)</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال  :  </div>
        <img src={images.js24_Conversion9} className="img"/>
        <div className="styleee img"><h2>true = 1<br/>false = 0</h2></div>
    </article>
</section>
    )
}