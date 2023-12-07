import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Resize.css"

export default function Resize(props){
    const codeExemple1= { 
    head:`  
    <style> 
        #div-resize {
            border: 2px solid; 
            padding: 20px;
            width: 70%;
            resize: both;
            overflow: auto;
            max-width: 100%;
            max-height:49vh 
        }
    </style>`,
    code:`      <h1>The resize Property</h1>
      <div id="div-resize">
          <p>Let the user resize both the height and the width of this div element.</p>
          <p>To resize: Click and drag the bottom right corner of this div element.</p>
      </div>`
    }
    const codeExemple2= { 
    head:`  
    <style> 
        #horizontal { 
            border: 2px solid;
            padding: 20px;
            width: 70%; 
            resize: horizontal;
            overflow: auto;
            max-width: 100% ;
        }
    </style>`,
    code:`      <h1>The resize Property</h1>
      <div id="horizontal">
          <p>Let the user resize only the width of this div element.</p>
          <p>To resize: Click and drag the bottom right corner of this div element.</p>
      </div>`
    }
    const codeExemple3= { 
    head:`  
    <style> 
        #vertical {
            border: 2px solid;
            padding: 20px; 
            width: 70%;
            resize: vertical;
            overflow: auto;
            max-height:55vh;
        }
    </style>`,
    code:`      <h1>The resize Property</h1>
      <div id="vertical">
          <p>Let the user resize only the height of this div element.</p>
          <p>To resize: Click and drag the bottom right corner of this div element.</p>
      </div> `
    }

    const codeExemple4= { 
    head:`  
    <style> 
        #textarea{ resize: none;}
    </style>`,
    code:`      <h1>The resize Property</h1>
      <textarea id="textarea">  </textarea>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Resize </h1>
    <article>
        <p className="style_divv mt-5">
            تُستخدم الخاصية <b>resize</b> في لغة  <b>CSS</b> لتغيير حجم العنصر وفقًا لمتطلبات المستخدم .  <br/>
            لا تنطبق خاصية تغيير الحجم على العناصر التي تحمل  <b>inline</b> أو  <b>block</b>  حيث <bdi>overflow ="visible"</bdi> .
            لذا ، تأكد من ضبط الخاصية <b>overflow</b> على "scroll" أو "auto" أو "hidden" .<br/>
            تقبل الخاصية <b>resize</b> أربع قيم وهي كالتالي :
            <ul>
                <li> <b>both</b> : من خلال هذه القيمة يمكن السماح للمستعمل بتغيير حجم العناصر من ناحية الطول والعرض.</li>
                <li> <b>horizontal</b> من خلال هذه القيمة يمكن السماح للمستعمل بتغيير حجم العناصر من ناحية العرض فقط.</li>
                <li> <b>vertical</b> : من خلال هذه القيمة يمكن السماح للمستعمل بتغيير حجم العناصر  من ناحية الطول فقط</li>
                <li> <b>none</b> : المستخدم غير قادر على تغيير حجم العنصر. إنها قيمة افتراضية </li>
            </ul>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. القيمة both </h2>
        <div className="mital">متال  :  </div>
        <ul><li>  يمكنك الضعط على (border) من الجهة اليمنى السفلية وتغيير طول و عرض العنصر  . </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Resize" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Resize' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>The resize Property</h1>
            <div id="css-resize-ex1-div-resize">
                <p>Let the user resize both the height and the width of this div element.</p>
                <p>To resize: Click and drag the bottom right corner of this div element.</p>
            </div>    
        </Result>        
    </article>
    <article>
        <h2 className="title-h2">2. القيمة horizontal </h2>
        <div className="mital">متال  :  </div>
        <ul><li>  يمكنك الضعط على (border) من الجهة اليمنى السفلية وتغيير عرض العنصر . </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Resize" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Resize' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>The resize Property</h1>
            <div id="css-resize-ex2-horizontal">
                <p>Let the user resize only the width of this div element.</p>
                <p>To resize: Click and drag the bottom right corner of this div element.</p>
            </div>  
        </Result>    
    </article>
    <article>
        <h2 className="title-h2">3. القيمة vertical </h2>
        <div className="mital">متال  :  </div>
        <ul><li>  يمكنك الضعط على (border) من الجهة اليمنى السفلية وتغيير طول العنصر  . </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="CSS Resize" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Resize' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>The resize Property</h1>
            <div id="css-resize-ex3-vertical">
                <p>Let the user resize only the height of this div element.</p>
                <p>To resize: Click and drag the bottom right corner of this div element.</p>
            </div> 
        </Result>
    </article>
    <article>
        <h2 className="title-h2">4. القيمة none </h2>
        <p className="style_divv">
            قيمة إفتراضية لأغلب العناصر <b>HTML</b> .<br/>
            يمكن إستعماله أيضا لجعل العناصر التي  لها حجم متغير تابت متل <kbd>textarea</kbd>
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} head={codeExemple4.head} language="html" is_html={true} title="CSS Resize" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Resize' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>The resize Property</h1>
            <textarea id="css-resize-ex4-textarea">  </textarea>        
        </Result>
    </article>
</section>
    )
}
