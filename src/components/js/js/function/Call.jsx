import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Call(){
    const code1 = `call()
call(thisArg)
call(thisArg, arg1,arg2 , …)`


    const codeExemple1= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const obj = {                                        
  fullName() {                                     
    return this.f_name + " " + this.l_name;  
  }                                              
}

const obj3 = {f_name: "Reda", l_name:"Eskouni"}
const obj2 = {f_name: "Inass", l_name: "Lamrai"}

document.getElementById("h2").innerHTML = obj.fullName.call(obj3);`
    }
    const codeExemple2= { 
    code: `       <h2 id="h2"></h2>
    
     <script src="./index.js"></script>`,
    script:`const obj = {                                        
  fullName(country,city) {                                     
    return this.f_name + " " + this.l_name + " "  + country + " " + city;         
  }                                              
}

const obj3 = {f_name: "Reda", l_name:"Eskouni"}
const obj2 = {f_name: "Inass", l_name: "Lamrai"}

document.getElementById("h2").innerHTML = obj.fullName.call(obj3,"moroccain","Sidi Slimane");`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Call</h1>
    <article className="mt-5">
        <p className="style_divv">
            باستخدام الدالة  <bdi><b>call()</b></bdi>  يمكن استخدام <b>method</b> على كائنات مختلفة.<br/>
            يمكن استخدام الدالة  <bdi><b>call()</b></bdi> لاستدعاء method مع كائن مالك كوسيطة
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
        </p> 
        <div className="mital">متال 1 :  </div>
        <ul><li> يستدعي هذا المثال طريقة fullName من خلال ال obj  الذي يحتوي على الدالة ، تم من خلال الدالة ِcall يستخدم ال obj2 الذي لا يحتوي على دالة ويقوم بإرجاع النتيجة مباشرة .</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="Call" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Call' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Reda Eskouni</h2>
        </Result>
        <div className="mital">متال 2 :  </div>
        <ul><li> يمكن أن يقبل التابع <bdi>call()</bdi> ال arguments </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="Call" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title='Call' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>Reda Eskouni moroccain Sidi Slimane</h2>
        </Result>
    </article>
</section>
    )
}
