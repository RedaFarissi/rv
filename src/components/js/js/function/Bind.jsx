import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Bind(){
  
    const code1 = `bind(thisArg )
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, arg2, … ,  argN) `


const codeExemple1= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const person = {
    f_name: "Reda",
    l_name : "Eskouni",
    age : 25,
    fullName() {
        if(this.age > 20){
            return this.f_name + " " + this.l_name
        }
    }
};

var create_another_function = person.fullName

var result = document.getElementById("result")

result.innerHTML = create_another_function`
    }
    const codeExemple2= { 
    code: `       <div id="result"></div>
    
     <script src="./index.js"></script>`,
    script:`const person = {
    f_name: "Reda",
    l_name : "Eskouni",
    age : 25,
    fullName() {
        if(this.age > 20){
            return this.f_name + " " + this.l_name
        }
    }
};

var create_another_function = person.fullName

var result = document.getElementById("result")

result.innerHTML = create_another_function()`
    }
    const codeExemple3= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:`const person = {
    f_name: "Reda",
    l_name : "Eskouni",
    age : 25,
    fullName() {
        if(this.age > 20){
            return this.f_name + " " + this.l_name
        }
    }
};

const person2 = { F_Name: "Kamal", L_Name: "Toumi", Age: 32 };
const person3 = { F_Name: "Hamo", L_Name: "Zayani", Age: 42 };

var create_another_function = person.fullName.bind(person)

var result = document.getElementById("result").innerHTML = create_another_function() + "<br/>"`
    }
    const codeExemple4= { 
    code: `       <h2 id="result"></h2>
    
     <script src="./index.js"></script>`,
    script:`obj = function(age) {
    return \`\${this.f_name} \${this.l_name} \${age}\`
};

const person2 = { f_name: "Malak", l_name: "Elaamriwi" };

var result = document.getElementById("result").innerHTML = obj.bind(person2,23) + "<br/>";
var result = document.getElementById("result").innerHTML += obj.bind(person2,33)() + "<br/>";`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Bind</h1>
    <article>
        <p className="style_divv">
            باستخدام طريقة <bdi><b>bind()</b></bdi> ، يمكن للكائن استعارة طريقة من كائن آخر.<br/>
            ينشئ المثال أدناه كائنين (شخص وعضو).<br/>
            يستعير كائن العضو أسلوب الاسم الكامل من كائن الشخص
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        
        <div className="mital"> متال 1 :  </div>
        <ul><li> عند كتابة إسم object نقطة إسم الدالة بدون أقواس فإنك تقوم بنسخ الدالة فقط و لن تستطيع إستخدام المعلومات داخل ال object  </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Bind" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Bind' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div>fullName() {"{"} if(this.Age {">"} 20){"{"} return this.f_Name + " " + this.l_Name {"} }"}</div>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <ul>
            <li> يمكن الإستفادة من نسخة الدالة التي بداخل object و ذالك من خلال إسنادها إلى متغير وإضافة أقواس . </li>
            <li> سيحاول هذا المثال عرض اسم الشخص  ، لكنه سيعرض undefined بدلاً من ذلك . وذالك لأنه لا يستطيع الوصول إلى  F_Name و L_Name و Age لأنه دالة منفصلة </li>
        </ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Bind" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Bind' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div>undefined</div>
        </Result>
        <div className="mital"> متال 3 :  </div>
        <ul>
            <li> عند إستخدام الخاصية bind يمكن تمرير البيانات الخاصة ب object أخر شرط أن يحتوي العنصر على نفس key مع الدالة المستوردة .</li>    
        </ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="Bind" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Bind' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Reda Eskouni</h2>
        </Result>
        <div className="mital"> متال 4 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="Bind" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Bind' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>function () {"{"} [native code] {"}"}<br/>Malak Elaamriwi 33</h2>
        </Result>
    </article>
</section>
    )
}