import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Selectors.css"

export default function Selectors(props){
    const codeExemple1= { 
    head:`  
    <style> 
        .selector_with_class {
            font-size: 60px;
            background-color: red;
            width: 50%;
            margin: auto;
            margin-top: 4px;
            text-align: center;
        }
    </style>`,
    code:`      <div class="selector_with_class">1</div>
      <div class="selector_with_class">2</div>
      <div class="selector_with_class">3</div>
      <div class="selector_with_class">4</div>
      <div class="selector_with_class">5</div>
      <div class="selector_with_class">6</div>`
    }
    const codeExemple2= { 
    head:`  
    <style> 
        .class1 .class2 {
            font-size: 60px;
            background-color: green;
            width: 50%;
            margin: auto;
            border: 2px solid black;
            margin-top: 4px;
            text-align: center;
        }
    </style>`,
    code:`      <div class="class1">
          <div class="class2">1</div>
          <div class="class2">2</div>
          <div class="class2">3</div>
          <div class="class2">4</div>
          <div class="class2">5</div>
      </div>`
    }
    const codeExemple3= { 
    head:`  
    <style> 
        #id_name{
            font-size: 35px; 
            background-color: green; 
            text-align: center;
            width: 50%; ; 
            margin: 20px auto; 
            border:2px solid black;
        }
    </style>`,
    code:`      <div id="id_name">This is some text that will be styled by the CSS code snippet.</div>`
    }
    const codeExemple4= { 
    head:`  
    <style> 
        *{
           background-color: red;
           color: white;
        }
    </style>`,
    code:`      <h2> Heading </h2>
    <p> Paragrapgh </p>`
    }
    const codeExemple5= { 
    head:`  
    <style> 
        header * {
            background-color: red;
            width: 50%;
            height: 90px;
            margin: 9px auto;
            border: 2px solid black;
        }
    </style>`,
    code:`      <header>
          <h2> This is (h2) in the Header</h2>
          <p> This is (p) inside the Header</p>
          <div> This is (div) inside the Header </div>
      </header>`
    }
    const codeExemple6= { 
    head:`  
    <style> 
        div {
            font-size: 40px;
            background-color: blueviolet;
            margin-bottom: 2px;
        }
      
        span {
            color: green;
            background-color: blue;
        }
    </style>`,
    code:`      <div><span>R</span>eda</div>
    <div>Eskouni</div>`
    }
    const codeExemple7= { 
    head:`  
    <style> 
        p.reda {
            font-size: 40px;
            background-color: brown;
        }
    </style>`,
    code:`      <div class="reda">
          <p>Reda Eskouni 1</p>
      </div>
      <p>Reda Eskouni 2</p>
      <p class="reda">Reda Eskouni 3</p>`
    }
    const codeExemple8= { 
    head:`  
    <style> 
        header, footer {
            background-color: red;
            margin-top: 20px;
            padding: 20px;
            color: blue;
            font-size: 50px;
        }
        .html, #css {
            font-size: 30px;
            background-color: yellow;
        }
    </style>`,
    code:`      <header> 
          <p class="html">HTML</p>
          <p is="css">CSS</p>
      </header>
      <footer>
          Footer
      </footer>`
    }
    const codeExemple9= { 
    head:`  
    <style> 
        div > p {
            background-color: gray;
            border: 4px solid red;
        }
    </style>`,
    code:`      <div>
          <h2> Hello world </h2>
          <p> Style. </p>
      </div>
        
      <div>  <span>  <p>No style.</p>  </span>  </div>`
    }
    const codeExemple10= { 
    head:`  
    <style> 
        div+p {
            background-color: gray;
            border: 4px solid red;
        }
    </style>`,
    code:`      <div>
           <p> p inside div. </p>
      </div>
      <p>p bottom div.</p>
      <p>p bottom p.</p>`
    }
    const codeExemple11= { 
    head:`  
    <style>  
        p ~ pre {
            background: darkorange; 
            color: white; 
            font-size: 25px;
        }
    </style>`,
    code:`      <div>div element.</div>            
      <pre> pre above element p.</pre>
  
      <p> The first paragraph.</p>
      <pre> pre under element p.</pre>
  
      <h2>Another list</h2>
      <pre> pre under element p. </pre>
  
      <div>div element.</div>
      <pre> pre under element p. </pre>`
    }
    const codeExemple12= { 
    head:`  
    <style> 
        [type] {
            width: 90%;
            height: 50px;
            background-color: yellow;
            outline: none;
            border: none;
            margin: 5px 5%;
        }
      
        [type]::placeholder {
            background-color: rgba(25, 200, 25, 40%);
            padding-left: 9px;
        }
    </style>`,
    code:`      <input type="email" name="email" id="email" placeholder="email"/>
      <input type="password" name="password" id="passworD" placeholder="password"/>`
    }
    const codeExemple13= { 
    head:`  
    <style> 
        [type="email"]{
            width:60%; height:50px; border-radius:50px;border:1px solid red;padding-left: 9px; 
        }
    </style>`,
    code:`      <input type="email" name="email"  placeholder="email"/><br/>
      <input type="password" name="password" placeholder="password"/>`
    }
    const codeExemple14= { 
    head:`  
    <style> 
        [placeholder~="Password"]{
            height:20px;border-radius:50px;padding-left:9px;background-color:gray;color:white;height:40px; margin-top: 20px
        }
    </style>`,
    code:`      <input type="text" placeholder="input Text"/><br/>
      <input type="password" placeholder="input Password"/>`
    }
    const codeExemple15= { 
    head:`  
    <style> 
        [class|=top] {  
            background: yellow;
        }
    </style>`,
    code:`      <h2>CSS [attribute|="value"] Selector</h2>
      <h1 class="top-header">Welcome</h1>
      <p class="top-text">Hello world!</p>
      <p class="topcontent">Are you learning CSS?</p>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Selectors </h1>
    <article>
        <h2 className="title-h2">1- CSS <bdi>.class</bdi>  Selectors</h2>
        <p className="style_divv">
            تحدد <b><bdi>.class</bdi></b>  العناصر ذات سمة فئة معينة. <br/>
            لتحديد عناصر بفئة معينة ، اكتب حرف نقطة (.) ، متبوعًا باسم <b>class</b>.<br/>
            يمكن أن تشير عناصر HTML أيضًا إلى أكثر من فئة واحدة (انظر إلى المثال 2 أدناه).
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Selectors" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Selectors' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-selector-ex1">1</div>
            <div className="css-selector-ex1">2</div>
            <div className="css-selector-ex1">3</div>
            <div className="css-selector-ex1">4</div>
            <div className="css-selector-ex1">5</div>
            <div className="css-selector-ex1">6</div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2- CSS <bdi>.class1 .class2</bdi>  Selectors</h2>
        <p className="style_divv"> 
            تحديد جميع العناصر التي لها <bdi><b>class2</b></bdi> داخل عنصر له <bdi><b>class1</b></bdi>.
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Selectors" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Selectors' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-selector-ex2-class1">
                <div className="css-selector-ex2-class2">1</div>
                <div className="css-selector-ex2-class2">2</div>
                <div className="css-selector-ex2-class2">3</div>
                <div className="css-selector-ex2-class2">4</div>
                <div className="css-selector-ex2-class2">5</div>
            </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3- CSS <bdi>#id</bdi>  Selectors</h2>
        <p className="style_divv"> 
            يقوم المحدد #id بتصميم العنصر بالمعرف المحدد.
        </p>
        <div className="mital">متال  :  </div>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="CSS Selectors" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Selectors' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-selector-ex3">This is some text that will be styled by the CSS code snippet.</div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">4- CSS <bdi>*</bdi> Selectors</h2>
        <p className="style_divv"> 
            يحدد المحدِّد * جميع العناصر.<br/>
            يمكن للمحدد * أيضًا تحديد جميع العناصر داخل عنصر آخر .
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} head={codeExemple4.head} language="html" is_html={true} title="CSS Selectors" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Selectors' styleAdd="css-selector-ex4-styleAdd" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2> Heading </h2>
            <p> Paragrapgh </p>
        </Result>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} head={codeExemple5.head} language="html" is_html={true} title="CSS Selectors" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Selectors' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-selector-ex5-header">
                <h2> This is (h2) in the Header</h2>
                <p> This is (p) inside the Header</p>
                <div> This is (div) inside the Header </div>
            </div>
        </Result>      
    </article>
    <article>
        <h2 className="title-h2">5- CSS element Selectors</h2>
        <p className="style_divv"> 
            يمكن تحديد جميع العناصر ذات إسم محدد بستخدام الإسم فقط
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple6.code} head={codeExemple6.head} language="html" is_html={true} title="CSS Selectors" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Selectors' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-selector-ex6-div"><span className="css-selector-ex6-span">R</span>eda</div>
            <div className="css-selector-ex6-div">Eskouni</div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">6- CSS element.class Selectors</h2>
        <p className="style_divv">
            محدد العنصر element.class يستخدم لتحديد العنصر المحدد بالفئة المحددة.
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple7.code} head={codeExemple7.head} language="html" is_html={true} title="CSS Selectors" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Selectors' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">    
            <p>Reda Eskouni 1</p>
            <p>Reda Eskouni 2</p>
            <p className="css-selector-ex7">Reda Eskouni 3</p>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">7- CSS <bdi>element,element</bdi> Selectors</h2>
        <p className="style_divv">
            لتصميم عدة عناصر بنفس النمط ، إفصل اسم كل عنصر بفاصلة.
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple8.code} head={codeExemple8.head} language="html" is_html={true} title="CSS Selectors" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Selectors' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">    
            <div className="css-selector-ex8-header"> 
                <p class="css-selector-ex8-html">HTML</p>
                <p is="css-selector-ex8-css">CSS</p>
            </div>
            <div className="css-selector-ex8-footer">
                Footer
            </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">8- CSS <bdi>element{">"}element</bdi> Selectors</h2>
        <p className="style_divv">
            يتم استخدام <bdi><b>elemen{"t>"}element</b></bdi> العناصر لتحديد عناصر ذات أصل معين.<br/>
            لم يتم تحديد العناصر التي ليست تابعة مباشرة للعنصر الأب .
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple9.code} head={codeExemple9.head} language="html" is_html={true} title="CSS Selectors" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Selectors' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">    
            <h2> Hello world </h2>
            <p className="css-selector-ex9-p"> Style. </p>
            <div>  <p>No style.</p> </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">9- CSS <bdi>element + element</bdi> Selectors</h2>
        <p className="style_divv">
            يتم استخدام <bdi><b>element1 + element2</b></bdi> لتحديد عنصر <b>element2</b> يقع مباشرة بعد عنصر  <b>element1</b>.
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple10.code} head={codeExemple10.head} language="html" is_html={true} title="CSS Selectors" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Selectors' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html"> 
            <p>p inside div.</p>
            <p className="css-selector-ex10">p bottom div.</p>
            <p>p bottom p.</p>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">10- CSS <bdi>element ~ element</bdi> Selectors</h2>
        <p className="style_divv">
            يتم استخدام  <bdi><b>element1 ~ element2</b></bdi> لتحديد جميع عانصر <b>element2</b> التي تقع مباشرة بعد العنصر  <b>element1</b>.
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple11.code} head={codeExemple11.head} language="html" is_html={true} title="CSS Selectors" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Selectors' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html"> 
            <div>div element.</div>            
            <pre> pre above element p.</pre>

            <p> The first paragraph.</p>
            <pre className="css-selector-ex11"> pre under element p.</pre>

            <h2>Another list</h2>
            <pre className="css-selector-ex11"> pre under element p. </pre>

            <div>div element.</div>
            <pre className="css-selector-ex11"> pre under element p. </pre>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">11- CSS <bdi>[attribute]</bdi> Selectors</h2>
        <p className="style_divv">
            يتم استخدام  محدد السمة <bdi>[attribute]</bdi>  لتحديد العناصر ذات السمة المحددة.
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple12.code} head={codeExemple12.head} language="html" is_html={true} title="CSS Selectors" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Selectors' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html"> 
            <input className="css-selector-ex12" type="email" focus placeholder="email"/>
            <input className="css-selector-ex12" type="password" placeholder="password"/>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">12- CSS <bdi>[attribute = value]</bdi> Selectors</h2>
        <p className="style_divv">
            يتم استخدام  محدد السمة <bdi>[attribute = value]</bdi>  لتحديد العناصر ذات السمة و القيمة المحددين.
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple13.code} head={codeExemple13.head} language="html" is_html={true} title="CSS Selectors" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Selectors' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html"> 
            <input type="email" name="email" className="css-selector-ex13"  placeholder="email"/><br/>
            <input type="password" name="password" placeholder="password"/>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">13- CSS <bdi>[attribute ~= value]</bdi> Selectors</h2>
        <p className="style_divv">
            يتم استخدام  محدد السمة <bdi>[attribute ~= value]</bdi>  لتحديد العناصر ذات قيمة السمة التي تحتوي على كلمة محددة.
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple14.code} head={codeExemple14.head} language="html" is_html={true} title="CSS Selectors" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Selectors' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html"> 
            <input type="text" placeholder="input Text"/><br/>
            <input type="password" className="css-selector-ex14" placeholder="input Password"/>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">14- CSS <bdi>[attribute|="value"]</bdi> Selectors</h2>
        <p className="style_divv">
            يتم استخدام محدد <bdi>[attribute|="value"]</bdi> لتحديد العناصر ذات السمة المحددة ، والتي يمكن أن تكون قيمتها بالضبط القيمة المحددة ، أو القيمة المحددة متبوعة بواصلة (-).<br/>
            ملاحظة: يجب أن تكون القيمة كلمة كاملة ، إما بمفردها ، مثل <bdi>className="top"</bdi>، أو متبوعة بواصلة (-) ، مثل <bdi>className="top-text"</bdi>
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple15.code} head={codeExemple15.head} language="html" is_html={true} title="CSS Selectors" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Selectors' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html"> 
            <h2>CSS [attribute|="value"] Selector</h2>
            <h1 className="css-selector-ex15">Welcome</h1>
            <p className="css-selector-ex15">Hello world!</p>
            <p>Are you learning CSS?</p>
        </Result>
    </article>
</section>
    )
}