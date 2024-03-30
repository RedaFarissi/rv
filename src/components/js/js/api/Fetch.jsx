import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Fetch(){
    const code1 = `fetch(lien_api).then( variable => { return variable.json() }).then(data =>{
    console.log(data)
})`
    const code2 = `fetch(lien_api).then( variable => { return variable.text() }).then(data =>{
    console.log(data)
})`
    const code3 = `fetch(lien_api).then( function(variable) { return variable.json() } ).then(data =>{
    console.log(data)
})`
    const code4 = `async function function_name(){
    const variable = await fetch(lien_api)
    const data = await  variable.json()
}
function_name()`
    const codeExemple1= { 
    code: `      <h2> fetch API </h2>
     <div id='result'></div>
    
     <script src="./index.js"></script>`,
    script:`fetch("https://ipapi.co/8.8.8.8/json/")
.then(variable => variable.json())
.then(data => {
  document.getElementById("result").innerHTML = typeof data;
});`
    }
    const codeExemple2= { 
    code: `     <div id="main"></div>
    
     <script src="./index.js"></script>`,
    script:`async function api() {
    const response = await fetch("https://breakingbadapi.com/api/characters/");
    const data = await response.json();
    getData(data);
}

api();

function getData(data) {
    for (let i in data) {
        document.getElementById("main").innerHTML += \`
            <div class="box">
              <h2>\${data[i].char_id}. \${data[i].name}</h2>
              <img class="img_person" src="\${data[i].img}"/>
            </div>
        \`;
    }
}    `
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style">JavaScript fetch</h1>
    <article>
        <p className="style_divv mt-5">
            تسمح واجهة <bdi><b>Fetch API</b></bdi> لمتصفح الويب بإجراء طلبات <b>HTTP</b> لخوادم الويب.<br/>
            لا حاجة ل <b>XMLHttpRequest</b> بعد الآن .<br/>
             <b className="d-block mt-3" style={{textShadow:"0.9px 0.9px red"}}> الطريقة الأولى : </b>
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <b style={{textShadow:"0.9px 0.9px red"}}> الطريقة التانية : </b>
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
            <b style={{textShadow:"0.9px 0.9px red"}}> الطريقة الثالثة و الأحدت : </b>
            <CodeHighlighter code={code4} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="Geolocation" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js" addClass="mt-3 mb-3" copie={true}  number={false}/>
        <Result title="Geolocation" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2>fetch API</h2>
        </Result>
        <div className="mital"> متال 2 : </div>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} language="html" is_html={true} title="Geolocation" addClass="mt-3 mb-3" copie={true}  number={false}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
</section>
    )
}