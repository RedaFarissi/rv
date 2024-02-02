import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Numbers(){
    const codeExemple1= { 
    code: `     <h2 id="num"></h2>
    
     <script src="./index.js"></script>`,
    script:`var num1, num2;
num1 = 9;
num2 = 9.5;
document.getElementById("num").innerHTML = \`\${num1} + \${num2} = \${num1+num2}\`;`
    }
    const codeExemple2= { 
    code: `     <h2 id="num"></h2>

     <script src="./index.js"></script>`,
    script:`var num1, num2;
num1 = 123e3;
num2 = 123e-3;
document.getElementById("num").innerHTML = \`\${num1} <br> \${num2}\`;`
    }
    const codeExemple3= { 
    code: `     <h2 id="num"></h2>

     <script src="./index.js"></script>`,
    script:`let x = 123;
document.getElementById("num").innerHTML = \`\${x.toString()} type is \${typeof x.toString()}\`;`
    }
    const codeExemple4= { 
    code: `     <h2 id="num"></h2>

     <script src="./index.js"></script>`,
    script:`document.getElementById("num").innerHTML = (123).toString();`
    }
    const codeExemple5= { 
    code: `     <h2 id="num"></h2>
    
     <script src="./index.js"></script>`,
    script:`let x = 32.236;

document.getElementById("num").innerHTML += x.toFixed(0) +"<br>";
document.getElementById("num").innerHTML += x.toFixed(2) +"<br>";
document.getElementById("num").innerHTML += x.toFixed(4) +"<br>";
document.getElementById("num").innerHTML += x.toFixed(6) +"<br>";
`
    }
    const codeExemple6= { 
    code: `     <h2 id="num"></h2>
    
     <script src="./index.js"></script>`,
    script:`let x = 32.236;

document.getElementById("num").innerHTML += x.toPrecision() +"<br>";
document.getElementById("num").innerHTML += x.toPrecision(2) +"<br>";
document.getElementById("num").innerHTML += x.toPrecision(4) +"<br>";
document.getElementById("num").innerHTML += x.toPrecision(6) +"<br>";`
    }
    const codeExemple7= { 
    code: `      <h2 id="num-int"></h2>
     <h2 id="num-float"></h2>
    
     <script src="./index.js"></script>`,
    script:`var str ="20.5"
var num = parseInt(str)
document.getElementById("num-int").innerHTML = num;

num = parseFloat(str)
document.getElementById("num-float").innerHTML = num;
`
    }
    const codeExemple8= { 
    code: `      <h2 id="num"></h2>

     <script src="./index.js"></script>`,
    script:`let num = 5.3333333333;
document.getElementById("num").innerHTML = num;
document.getElementById("num").innerHTML += "<br>" + num.toFixed(2);`
    }
    const codeExemple9= { 
    code: `     <h2 id="num"></h2>
    
     <script src="./index.js"></script>`,
    script:`let num = 5;
document.getElementById("num").innerHTML = num.toFixed(2);
`
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Numbers</h1>
    <article className="mt-5">
        <h2 className="title-h2">1. Numbers</h2>
        <p className="style_divv">
            يحتوي <b>JavaScript</b> على نوع واحد فقط من الأرقام. يمكن كتابة الأرقام مع الكسور العشرية أو بدونها.<br/>
            <CodeHighlighter code={`let str = 9; `} language="js" addClass="mt-3 mb-3" copie={true}  />  
            <CodeHighlighter code={`let str = 9.5;`} language="js" addClass="mt-3 mb-3" copie={true}  />  
            يمكن كتابة الأعداد الكبيرة جدًا أو الصغيرة جدًا باستخدام التدوين العلمي (الأس)
            <CodeHighlighter code={`let x = >123e3;`} language="js" addClass="mt-3 mb-3" copie={true}  />  
            <CodeHighlighter code={`let y = 123e-3;`} language="js" addClass="mt-3 mb-3" copie={true}  />  
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Numbers" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Numbers' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>9 + 9.5 = 18.5</h2>
        </Result> 
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Numbers" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Numbers' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>123000<br/>0.123</h2>
        </Result> 
        <ul>
            <li>الحد الأقصى لعدد الكسور العشرية هو 17.</li>
        </ul>
    </article>
    <article>
        <h2 className="title-h2">2. Method</h2>
        <h3 className="title-h3">1. <bdi> toString() Method</bdi></h3>
        <p className="style_divv">
            ترجع طريقة <bdi><b>toString()</b></bdi> رقمًا كسلسلة (<small>string</small>).<br/>
            <CodeHighlighter code={`let y = number.toString()`} language="js" addClass="mt-3 mb-3" copie={true}  />  
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Numbers" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Numbers' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>123 type is string</h2>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Numbers" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Numbers' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>123</h2>
        </Result>
        <h3 className="title-h3">2. <bdi> toFixed() Method </bdi></h3>
        <p className="style_divv">
            تُرجع الدالة <b><bdi>toFixed()</bdi></b> سلسلة (<small>string</small>) برقم مكتوب بعدد محدد من الكسور العشرية . <br/>
            <CodeHighlighter code={`let x = 32.236;
x.toFixed(0); 
x.toFixed(2); 
x.toFixed(4); 
x.toFixed(6);`} language="js" addClass="mt-3 mb-3" copie={true}  />  
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="Numbers" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Numbers' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> 32<br/>32.24<br/>32.2360<br/>32.236000 </h2>
        </Result>
        <h3 className="title-h3">3. <bdi> toPrecision() Method </bdi></h3>
        <p className="style_divv">
            تُرجع الدالة <bdi><b>toPrecision()</b></bdi> سلسلة (<small>string</small>) برقم مكتوب بطول محدد :<br/>
            <CodeHighlighter code={`let x = 32.236;
x.toPrecision(); 
x.toPrecision(2); 
x.toPrecision(4); 
x.toPrecision(6);`} language="js" addClass="mt-3 mb-3" copie={true}  />  
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple6.code} language="html" is_html={true} title="Numbers" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple6.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Numbers' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> 32.236<br/>32<br/>32.24<br/>32.2360 </h2>
        </Result>
        <h3 className="title-h3">4. <bdi> Converting Variables to Numbers </bdi></h3>
        <p className="style_divv">
            هناك 3 طرق جافا سكريبت يمكن استخدامها لتحويل المتغيرات إلى أرقام:
            <ul>
                <li>طريقة <bdi><b>parseInt()</b></bdi></li>
                <li>طريقة <bdi><b>parseFloat()</b></bdi></li>
                <li>طريقة <bdi><b>Number()</b></bdi></li>
            </ul>
            هذه الطرق ليست طرقًا للأرقام ، ولكنها طرق <b>JavaScript</b> عامة.
        </p>
        <div className="mital">متال 1:  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple7.code} language="html" is_html={true} title="Numbers" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple7.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Numbers' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> 20 </h2>
            <h2> 20.5 </h2>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3. <bdi>Number.toFixed()</bdi></h2>
        <p className="style_divv">
            تستخدم الخاصية <b>toFixed</b> لتحديد عدد الأرقام وراء الفاصلة 
            <CodeHighlighter code={`number.toFixed(number)`} language="js" addClass="mt-3 mb-3" copie={true}  />  
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple8.code} language="html" is_html={true} title="Numbers" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple8.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Numbers' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> 5.3333333333 </h2>
            <h2> 5.33 </h2>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple9.code} language="html" is_html={true} title="Numbers" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple9.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Numbers' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>5.00</h2>
        </Result> 
    </article>
</section>
    )
}