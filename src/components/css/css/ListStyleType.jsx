import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./ListStyleType.css"

export default function ListStyleType(props){
    const codeExemple1= { 
    head:`  
    <style> 
        .li {font-size: xx-large;}
        .ol .li , .ul .li {list-style-type: circle;}  
    </style>`,
    code:`     <ol>
        <li>HTML</li>
        <li>CSS</li>
        <li>Js</li>
    </ol>
    <hr/>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Js</li>
    </ul>`
    }
    const codeExemple2= { 
    head:`  
        <style> 
            .a {list-style-type: circle;}
            .b {list-style-type: square;}
            .c {list-style-type: upper-roman;}
            .d {list-style-type: lower-alpha;}
            .e {list-style-type: none;}
        </style>`,
    code:`      <ol class="a">  <li>HTML</li>  <li>CSS</li>  <li>Js</li>  </ol><hr/>
      <ol class="b">  <li>HTML</li>  <li>CSS</li>  <li>Js</li>  </ol><hr/>
      <ul class="c">  <li>HTML</li>  <li>CSS</li>  <li>Js</li>  </ul><hr/>
      <ul class="d">  <li>HTML</li>  <li>CSS</li>  <li>Js</li>  </ul><hr/>
      <ul class="e">  <li>HTML</li>  <li>CSS</li>  <li>Js</li>  </ul>`
    }
    return(
    <section className="section-conetent">
        <h1 className="heading-style"> CSS List-Style-Type </h1>
        <article>
            <p className="style_divv mt-5">
                تستعمل الخاصية <b>list-style-type</b>  لتحديد نوع نمط القائمة في القائمة  . وتستقبل قيم كتيرة من بينها  التالية :<br/>
                <ul>
                    <li><b>circle</b> : تستخدم لإنشاء دائرة .</li>
                    <li><b>square</b> : تستخدم لإنشاء مربع .</li>
                    <li><b>upper-roman</b> :  تستخدم لإنشاء أحرف صغيرة .</li>
                    <li><b>lower-alpha</b> : تستخدم لإنشاء أحرف كبيرة .</li>
                    <li><b>none</b> : تستخدم لإزالة نمط القائمة .</li>
                </ul>
            </p>
            <div className="mital"> متال 1 : </div>
            <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS List-Style-Type" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS List-Style-Type' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <ol className="css-list-style-type-ex1-ol">
                    <li className="css-list-style-type-ex1-li">HTML</li>
                    <li className="css-list-style-type-ex1-li">CSS</li>
                    <li className="css-list-style-type-ex1-li">Js</li>
                </ol>
                <hr/>
                <ul className="css-list-style-type-ex1-ul p-0">
                    <li className="css-list-style-type-ex1-li">HTML</li>
                    <li className="css-list-style-type-ex1-li">CSS</li>
                    <li className="css-list-style-type-ex1-li">Js</li>
                </ul>
            </Result>
            
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS List-Style-Type" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS List-Style-Type' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <ol className="css-list-style-type-ex2-a">      <li>HTML</li>  <li>CSS</li>  <li>Js</li>  </ol><hr/>
                <ol className="css-list-style-type-ex2-b">      <li>HTML</li>  <li>CSS</li>  <li>Js</li>  </ol><hr/>
                <ul className="css-list-style-type-ex2-c p-0">  <li>HTML</li>  <li>CSS</li>  <li>Js</li>  </ul><hr/>
                <ul className="css-list-style-type-ex2-d p-0">  <li>HTML</li>  <li>CSS</li>  <li>Js</li>  </ul><hr/>
                <ul className="css-list-style-type-ex2-e p-0">  <li>HTML</li>  <li>CSS</li>  <li>Js</li>  </ul> 
            </Result>
        </article>
    </section>
    )
}