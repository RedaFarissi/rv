import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Apply(){
    const code1 = `apply(thisArg)
apply(thisArg, argsArray)`


    const codeExemple1= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:`const obj = {
  fullName() {
    return this.f_name + " " + this.l_name;
  }
};

const obj2 = { f_name: "Adam", l_name: "Taziyat" };

const r = document.getElementById("result");

r.innerHTML = obj.fullName.apply(obj2);`
    }
    const codeExemple2= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:`const obj = {
  fullName(index0,index1,index2) {
    return \`\${this.f_name} \${this.l_name}
    <ul>
      <li>\${index0}</li>
      <li>\${index1}</li>
      <li>\${index2}</li>
    </ul>\`;
  }
};

const obj2 = { f_name: "Reda", l_name: "Eskouni" };

const r = document.getElementById("result");

r.innerHTML = obj.fullName.apply(obj2,["06000000",27,"redaesskouni@gmail.com"]);
`
    }
    const codeExemple3= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:`var array = [5, 5, 5, 20];

function name_Function() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return "Sum all element array is : " + sum;
}

const result = document.getElementById("result");

result.innerHTML = name_Function.apply(null, array);`
    }
    const codeExemple4= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:`var obj_arr = [5, 5, 5, 20] 

var obj = { f_name:"Reda", l_name:"Eskouni" }

name_Function =function() { 

    let sum = 0;
 
    for(let i=0; i<arguments.length ; i++){
         sum += arguments[i]
    }

return \`Name : \${this.f_name} \${this.l_name} <br/>

Moyen : \${sum/arguments.length}<hr/>\`

}
document.getElementById('result').innerHTML = name_Function.apply(obj,obj_arr);`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Apply</h1>
    <article className="mt-5">
        <p className="style_divv pb-0">
            باستخدام الدالة <bdi><b>apply()</b></bdi>  يمكن استخدام <b>method</b> على كائنات مختلفة. <br/>
            الدالة <bdi><b>apply()</b></bdi> تشبه الدالة <bdi><b>call()</b></bdi> الفرق أن الدالة <bdi><b>apply()</b></bdi> تقبل مصفوفة ك <b>argument</b> ولا تقبل متغيرات . 
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Apply" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Apply' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Adam Taziyat</h2>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Apply" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Apply' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Reda Eskouni
                <ul>
                    <li>06000000</li>
                    <li>27</li>
                    <li>redaesskouni@gmail.com</li>
                </ul>
            </h2>
        </Result>
        <div className="mital">متال 3 :  </div>
        <ul><li> تستخدم arguments للإشارة إلى عناصر المصفوفة .</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Apply" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Apply' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Sum all element array is : 35</h2>
        </Result>
        <div className="mital">متال 4 :  </div>
        <ul><li> تستخدم arguments للإشارة إلى عناصر المصفوفة .</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Apply" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Apply' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Name : Reda Eskouni<br/>Moyen : 8.75<hr/></h2>
        </Result>
    </article>
</section>
    )
}