import images from "../../imagesJs"
import { CodeHighlighter ,  Result , ResultConsole} from "../../../path";

export default function StringSearch(){
    const codeExemple1= { 
    code: `       <script src="./index.js"></script>`,
    script:`let str = "Please locate where 'locate' occurs!";

console.log(str.indexOf("locate")); 
console.log(str.indexOf("'locate'"));`
    }
    const codeExemple2= { 
    code: `       <script src="./index.js"></script>`,
    script:`let str = "Please locate where 'locate' occurs!";
let str2 = str.lastIndexOf("locate");
  
console.log(str2);`
    }
    const codeExemple3= { 
    code: `       <script src="./index.js"></script>`,
    script:`let str = "Please locate where 'locate' occurs!";
console.log(str.search("locate"));`
    }
    const codeExemple4= { 
    code: `     <h2 id="test1"> </h2>
     <h2 id="test2"> </h2>
     
     <script src="./index.js"></script>`,
    script:`let text1 = "reda Eskouni El";
let text2 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

document.getElementById("test1").innerHTML = text1.match(/E/g);
document.getElementById("test2").innerHTML = text2.match(/i/g);`
    }
    const codeExemple5= { 
    code: `       <script src="./index.js"></script>`,
    script:`let str = "Reda Eskouni";

let test = str.includes("Reda");

console.log(test);`
    }
    const codeExemple6= { 
    code: `       <script src="./index.js"></script>`,
    script:`let str = "Reda Eskouni";

console.log(str.startsWith("Reda")); 

console.log(str.startsWith("Reda", 2));

console.log(str.startsWith("Eskouni", 5));`
    }
    const codeExemple7= { 
    code: `       <h2 id="test"></h2>
    
     <script src="./index.js"></script>`,
    script:`let str = "Reda Eskouni";

str.startsWith("Reda", 8);
document.getElementById("test").innerHTML = str.endsWith("Eskouni");`
    }
    return(
    <section className="section-conetent">
        <h1 className="heading-style">JavaScript String Search</h1>
        <details className="mt-5">
            <summary className='text-danger'> جميع العناوين  </summary>
            <ul dir="ltr" >
                <li><a className="text-light text-decoration-none" href="#indexOf"> indexOf </a></li>
                <li><a className="text-light text-decoration-none" href="#lastIndexOf"> lastIndexOf </a></li>
                <li><a className="text-light text-decoration-none" href="#search"> search </a></li>
                <li><a className="text-light text-decoration-none" href="#match"> match </a></li>
                <li><a className="text-light text-decoration-none" href="#includes"> includes </a></li>
                <li><a className="text-light text-decoration-none" href="#startsWith"> startsWith </a></li>
                <li><a className="text-light text-decoration-none" href="#endsWith"> endsWith </a></li>
            </ul>
        </details>
        <article>
            <h2 className="title-h2 mt-4" id="indexOf">1. <bdi>JavaScript String indexOf()</bdi></h2>
            <p className="style_divv">
               الدالة <b><bdi>indexOf()</bdi></b> ترجع فهرس <bdi>(index)</bdi> التواجد الأول لنص محدد في <b>string</b>  .<br/>
                <CodeHighlighter code={`let str = "Please locate where 'locate' occurs!";
str.indexOf("locate");`} language="js" addClass="mt-3 mb-3" copie={true}  />  
            </p>
            <div className="mital">متال  :  </div>
            <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="String Search" addClass="mt-3 mb-3" copie={true}  number={true}/>  
            <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
            <ResultConsole title='String Search' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success">7</span>
                    <span>index.js : 3</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success">20</span>
                    <span>index.js : 4</span>
                </div>
            </ResultConsole>
        </article>
        <article>
            <h2 className="title-h2" id="lastIndexOf">2. <bdi>JavaScript String lastIndexOf()</bdi></h2>
            <p className="style_divv">
                الدالة <b><bdi>lastIndexOf()</bdi></b> ترجع فهرس <bdi>(index)</bdi> التواجد الأخير لنص محدد في <b>string</b> .<br/>
                <CodeHighlighter code={`let str = "Please locate where 'locate' occurs!";
str.lastIndexOf("locate");`} language="js" addClass="mt-3 mb-3" copie={true}  />  
            </p>
            <div className="mital">متال :  </div>
            <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="String Search" addClass="mt-3 mb-3" copie={true}  number={true}/>  
            <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
            <ResultConsole title='String Search' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success">21</span>
                    <span>index.js : 4</span>
                </div>
            </ResultConsole>
            <ul>
                <li>  يحسب <b>JavaScript</b> المواضع من الصفر. <br/></li>
                <li>  0 هو الموضع الأول في السلسلة ، 1 هو الموضع الثاني ، 2 هو الموضع الثالث ...<br/></li>
            </ul>
        </article>
        <article>
            <h2 className="title-h2" id="search">3. <bdi>JavaScript String search()</bdi></h2>
            <p className="style_divv">
                تبحث الدالة <b><bdi>search()</bdi></b> في سلسلة عن قيمة محددة وتعيد موضع المطابقة .<br/>
                <CodeHighlighter code={`let str = "Please locate where 'locate' occurs!";
str.search("locate");`} language="js" addClass="mt-3 mb-3" copie={true}  />  
            </p>
            <div className="mital">متال :  </div>
            <CodeHighlighter file_name="index.html"code={codeExemple3.code} language="html" is_html={true} title="String Search" addClass="mt-3 mb-3" copie={true}  number={true}/>  
            <CodeHighlighter file_name="index.js"code={codeExemple3.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
            <ResultConsole title='String Search' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success">7</span>
                    <span>index.js : 2</span>
                </div>
            </ResultConsole>
        </article>
        <article>
            <h2 className="title-h2" id="match">4. <bdi>JavaScript String match()</bdi></h2>
            <p className="style_divv">
                تبحث طريقة <bdi><b>match()</b></bdi> في سلسلة عن تطابق مقابل تعبير عادي ، وتعيد التطابقات ، ككائن <b>Array</b>.<br/>
                تستعمل الدالة <bdi><b>match()</b></bdi> مع <b>regular</b>
                <CodeHighlighter code={`let str = "Please locate where 'locate' occurs!";
str.match(/ain/g);`} language="js" addClass="mt-3 mb-3" copie={true}  />  
            </p>
            <div className="mital">متال :  </div>
            <CodeHighlighter file_name="index.html"code={codeExemple4.code} language="html" is_html={true} title="String Search" addClass="mt-3 mb-3" copie={true}  number={true}/>  
            <CodeHighlighter file_name="index.js"code={codeExemple4.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
            <Result title='String Search' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <h2>E,E</h2>
                <h2>i,i,i,i,i,i,i</h2>
            </Result>
            <ul><li>ستتعلم عن <b>regular</b> في دروس قادمة .</li></ul>
        </article>
        <article>
            <h2 className="title-h2" id="includes">5. <bdi>JavaScript String includes()</bdi></h2>
            <p className="style_divv">
                طريقة <b><bdi>include()</bdi></b> ترجع  <b>true</b> إذا كانت <b>string</b> تحتوي على قيمة محددة .<br/>
                <CodeHighlighter code={`let str = "Reda Eskouni";
str.includes("Reda");`} language="js" addClass="mt-3 mb-3" copie={true}  />  
            </p>
            <div className="mital">متال  :  </div>
            <CodeHighlighter file_name="index.html"code={codeExemple5.code} language="html" is_html={true} title="String Search" addClass="mt-3 mb-3" copie={true}  number={true}/>  
            <CodeHighlighter file_name="index.js"code={codeExemple5.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
            <ResultConsole title='String Search' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-success">true</span>
                    <span>index.js : 5</span>
                </div>
            </ResultConsole>
        </article>
        <article>
            <h2 className="title-h2" id="startsWith">6. <bdi>JavaScript String startsWith()</bdi></h2>
            <p className="style_divv">
                تعيد الدالة  <b><bdi>startWith()</bdi></b> true إذا <u>بدأت</u>  سلسلة نصية (string) بقيمة محددة ، وإلا فهي false .<br/>
                <CodeHighlighter code={`let str = "Reda Eskouni";
str.startsWith("Reda");     //true`} language="js" addClass="mt-3 mb-3" copie={true}  />  
                <CodeHighlighter code={`let str = "Reda Eskouni";
str.startsWith("Eskouni",5);   //true`} language="js" addClass="mt-3 mb-3" copie={true}  />  
                <CodeHighlighter code={`let str = "Reda Eskouni";
str.startsWith("Eskouni");   //false`} language="js" addClass="mt-3 mb-3" copie={true}  />  
            </p>
            <div className="mital">متال :  </div>
            <CodeHighlighter file_name="index.html"code={codeExemple6.code} language="html" is_html={true} title="String Search" addClass="mt-3 mb-3" copie={true}  number={true}/>  
            <CodeHighlighter file_name="index.js"code={codeExemple6.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
            <ResultConsole title='String Search' logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-primary">true</span>
                    <span>index.js : 3</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-primary">false</span>
                    <span>index.js : 5</span>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <span className="text-primary">true</span>
                    <span>index.js : 7</span>
                </div>
            </ResultConsole>
        </article>
        <article>   
            <h2 className="title-h2" id="endsWith">7. <bdi>JavaScript String endsWith()</bdi> </h2>
            <p className="style_divv">
                تعيد الدالة  <b><bdi>endsWith()</bdi></b> true إذا <u>إنتهى</u>  سلسلة نصية (string) بقيمة محددة ، وإلا فهي false .<br/>
            </p>
            <div className="mital">متال :  </div>
            <CodeHighlighter file_name="index.html"code={codeExemple7.code} language="html" is_html={true} title="String Search" addClass="mt-3 mb-3" copie={true}  number={true}/>  
            <CodeHighlighter file_name="index.js"code={codeExemple7.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
            <Result title='String Search' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <h2> true </h2>
            </Result>
        </article>
    </section>
    
    )   
}   