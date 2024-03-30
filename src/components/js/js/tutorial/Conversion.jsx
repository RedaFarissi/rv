import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useState, useEffect } from 'react';


export default function Conversion(){
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(() => {
        setCurrentDate(new Date()); 
    },[]); 

    const code1 = `let variable_name = new Date()
Number(variable_name)`

    const codeExemple1= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`document.getElementById("h2").innerHTML +=  Number("3.14") + "<br>";

document.getElementById("h2").innerHTML += Number(" ") +  "<br>";

document.getElementById("h2").innerHTML += Number("") +  "<br>";

document.getElementById("h2").innerHTML += Number("2e4") + "<br>";

document.getElementById("h2").innerHTML += Number("Hello") + "<br>";

document.getElementById("h2").innerHTML += Number("200 88") + "<br>";
`
    }
    const codeExemple2= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`document.getElementById("h2").innerHTML = parseFloat("3.14") + "<br>" +
parseFloat("24") + "<br>" +
parseFloat("9Hello ") + "<br>" +
parseFloat("Hello 9") + "<br>";`
    }
    const codeExemple3= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`let a = 123;
var d = document.getElementById("h2");

d.innerHTML += String(123) + "<br>";
d.innerHTML += String(a) + "<br>";
d.innerHTML += String(100 + 23)`
    }
    const codeExemple4= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`let a = 123;

var d = document.getElementById("h2");

d.innerHTML = a.toString() + "<br>";

d.innerHTML += (200).toString() + "<br>";

d.innerHTML += (200 + 3).toString();`
    }
    const codeExemple5= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`var d = document.getElementById("h2");
d.innerHTML = String(Date());`
    }
    const codeExemple6= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`a = new Date(); 
d = document.getElementById("h2");
d.innerHTML = Number(a);`
    }
    const codeExemple7= { 
    code: `     <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`d = document.getElementById("h2");
d.innerHTML += "true = " + Number(true)+ "<br/>";
d.innerHTML += "false = " + Number(false);`
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript Conversion</h1>
    <article className="mt-5">
        <p className="style_divv">
            يمكن تحويل متغيرات <b>JavaScript</b> إلى متغير جديد ونوع بيانات آخر عن طريق استخدام وظائف <b>JavaScript</b><br/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. تحويل الجمل إلى أرقام </h2>
        <p className="style_divv">
            يمكن تحويل السلاسل إلى أرقام عبر إستخدام  <b><bdi>Number()</bdi></b>.<br/>
            يتم تحويل السلاسل الفارغة إلى 0.
            أي شيء آخر يتحول إلى <b>NaN</b> <small><small>(ليس رقمًا)</small></small>.
            <CodeHighlighter code={`Number("string_number")`} language="js" addClass="mt-3 mb-3" copie={true} />
             يمكن استخدام الطريقة <b>parseFloat</b> 
            <CodeHighlighter code={`parseFloat("string_number")`} language="js" addClass="mt-3 mb-3" copie={true} />
            يمكن استخدام الطريقة <b>parseInt</b> أيضا و التي تقوم بإعادة عدد صحيح طبيعي 
            <CodeHighlighter code={`parseInt("string_number")`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>

        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Conversion" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Conversion' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> 3.14<br/>0<br/>0<br/>20000<br/>NaN<br/>NaN </h2>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Conversion" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Conversion' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> 3.14<br/>24<br/>9<br/>NaN </h2>
        </Result>
     </article>
    <article>
        <h2 className="title-h2">2. تحويل الأرقام إلى سلاسل</h2>
        <p className="style_divv">
            يمكن تحويل الأرقام إلى  سلاسل  عبر إستخدام  <b><bdi>String()</bdi></b>.<br/>
            يمكن استخدامه مع أي نوع من الأرقام أو القيم الحرفية أو المتغيرات أو التعبيرات .
            <CodeHighlighter code={`String("string_number")`} language="js" addClass="mt-3 mb-3" copie={true} />
            يمكن استخدام الطريقة <b>toString</b> 
        </p>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Conversion" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Conversion' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> 123<br/>123<br/>123 </h2>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Conversion" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Conversion' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> 123<br/>200<br/>203 </h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3. تحويل التواريخ إلى سلاسل</h2>
        <p className="style_divv">
            يمكن للأسلوب العام <b><bdi>String()</bdi></b> تحويل التواريخ إلى سلاسل.
            <CodeHighlighter code={`String(Date())`} language="js" addClass="mt-3 mb-3" copie={true} />
            يمكن استخدام الطريقة <b>toString</b>
            <CodeHighlighter code={`Date().toString()`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="Conversion" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Conversion' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Sat Dec 16 2023 03:20:36 GMT+0100 (GMT+01:00) </h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">4. تحويل التواريخ إلى أرقام</h2>
        <p className="style_divv">
            مكن استخدام الطريقة العامة <b><bdi>Number()</bdi></b> لتحويل التواريخ إلى أرقام.
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple6.code} language="html" is_html={true} title="Conversion" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple6.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Conversion' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> {Number(currentDate)} </h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">5. تحويل القيم المنطقية إلى أرقام</h2>
        <p className="style_divv">
            يمكن للطريقة العامة <b><bdi>String()</bdi></b> تحويل القيم المنطقية إلى سلاسل.
            <CodeHighlighter code={`String(true)`} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={`String(false)`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple7.code} language="html" is_html={true} title="Conversion" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple7.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title='Conversion' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>true = 1<br/>false = 0 </h2>
        </Result>
    </article>
</section>
    )
}