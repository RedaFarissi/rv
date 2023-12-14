import "./Arithmetic.css"
import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Arithmetic(){
    const codeExemple1= { 
    code: `     <div id="adition"></div>
    
     <script src="./index.js"></script>`,
    script:`var number1 = 5;
var number2 = 90;

document.getElementById("adition").innerHTML = number1 + number2;`
    }
    const codeExemple2= { 
    code: `     <div id="soustraction"></div>
    
     <script src="./index.js"></script>`,
    script:`var number1 = 5;
var number2 = 90;

document.getElementById("soustraction").innerHTML = number1 - number2;`
    }
    const codeExemple3= { 
    code: `     <div id="multip"></div>
    
     <script src="./index.js"></script>`,
    script:`var number1 = 5;
var number2 = 90;

document.getElementById("multip").innerHTML = number1 * number2;`
    }
    const codeExemple4= { 
    code: `     <div id="divition"></div>
    
     <script src="./index.js"></script>`,
    script:`var number1 = 5;
var number2 = 90;

document.getElementById("divition").innerHTML = number1 / number2;`
    }
    const codeExemple5= { 
    code: `     <div id="power"></div>
    
     <script src="./index.js"></script>`,
    script:`var number1 = 5;

document.getElementById("power").innerHTML = number1 ** 3`
    }
    const codeExemple6= { 
    code: `     <div id="mode"></div>
    
     <script src="./index.js"></script>`,
    script:`var number1 = 5;
var number2 = 92;

document.getElementById("mode").innerHTML = number2 % number1`
    }
    const codeExemple7= { 
    code: `     <div id=""></div>
    
     <script src="./index.js"></script>`,
    script:`var number1 = 5;

document.getElementById("power").innerHTML = number1++ `
    }
    const codeExemple8= { 
    code: `     <div id=""></div>
    
     <script src="./index.js"></script>`,
    script:`var number1 = 5;

document.getElementById("power").innerHTML = number1-- `
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Arithmetic</h1>
    <article>
        <p className="style_divv mt-5">
            تؤدي العوامل الحسابية العمليات الحسابية على الأرقام (المتغيرات أو الحرفية).<br/>
        </p>
        <table className="table" dir="ltr">
            <thead className="bg-secondary">
                <tr className="text-center fs-5"><th> Operator  </th><th> Description </th></tr>
            </thead>
            <tbody>
                <tr><td>+</td> <td>Addition : الزائد </td></tr>
                <tr><td>-</td> <td>Subtraction : الناقص </td></tr>
                <tr><td>*</td> <td>Multiplication : الضرب </td></tr>
                <tr><td>**</td><td> Exponentiation : الأس</td></tr>
                <tr><td>/</td> <td> Division : القسمة </td></tr>
                <tr><td>%</td> <td> Modulus (Remainder) - باقي القسمة الطبيعة </td></tr>
                <tr><td>++</td><td> Increment - زيادة</td></tr>
                <tr><td>--</td><td> Decrement - إنقاص </td> </tr>
            </tbody>
        </table>
    </article>
    <article>
        <h2 className="title-h2">1. Addition</h2>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Arithmetic" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arithmetic' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            95     
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. Subtraction</h2>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Arithmetic" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arithmetic' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            -85     
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3. Multiplication</h2>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Arithmetic" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arithmetic' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            450
        </Result>
    </article>
    <article>
        <h2 className="title-h2">5. Division</h2>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Arithmetic" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arithmetic' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            0.05555555555555555
        </Result>
    </article>
    <article>
        <h2 className="title-h2">5. Exponentiation</h2>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="Arithmetic" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arithmetic' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            125
        </Result>   
    </article>
    <article>
        <h2 className="title-h2">6. Modulus (Remainder)</h2>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple6.code} language="html" is_html={true} title="Arithmetic" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple6.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arithmetic' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            2
        </Result> 
    </article>
    <article>
        <h2 className="title-h2">7. Increment</h2>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple7.code} language="html" is_html={true} title="Arithmetic" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple7.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arithmetic' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            6
        </Result> 
    </article>
    <article>
        <h2 className="title-h2">8. Decrement</h2>
        <div className="mital"> متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple8.code} language="html" is_html={true} title="Arithmetic" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple8.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Arithmetic' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            4
        </Result> 
    </article>
</section>
    )
}