import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./WordBreak.css"
export default function WordBreak(props){
  const codeExemple= { 
    css:`#a,#b,#c,#d{ background-color: yellow; width: 350px;}
#a{word-break: normal;}
#b{word-break:break-all ;}
#c{word-break:keep-all ;}
#d{word-break:break-word ;}`,
    head:`  
    <link rel="stylesheet" href="./index.css">`,
    code:`      <h2>word-break: normal</h2>
    <p id="a">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.  
      http::exemple_/suscipit/obcaecati/Nostrum/dicta/amet/praesentium/eveniet.html
    </p>
    <h2>word-break:break-all</h2>
    <p id="b">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.  
      http::exemple_/suscipit/obcaecati/Nostrum/dicta/amet/praesentium/eveniet.html
    </p>
    <h2>word-break:keep-all </h2>
    <p id="c">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.  
      http::exemple_/suscipit/obcaecati/Nostrum/dicta/amet/praesentium/eveniet.html
    </p>
    <h2>word-break:break-word</h2>
    <p id="d">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.  
      http::exemple_/suscipit/obcaecati/Nostrum/dicta/amet/praesentium/eveniet.html
    </p>`
}
  return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Word-Break  </h1>
    <article>
        <p className="style_divv mt-5">
            تُستخدم خاصية <b><bdi>word-break</bdi></b> لتحديد كيفية تطبيق الواصلة على الأماكن التي يتجاوز فيها النص مربع المحتوى الخاص به و تقبل القيم التالية :
            <ul>
                <li><b> normal </b>: القيمة الافتراضية. استخدم قواعد فاصل الأسطر الافتراضية </li>
                <li><b> break-all </b>: لمنع تجاوز السعة ، قد يتم كسر الكلمة عند أي حرف </li>
                <li><b> keep-all </b>: لا يجب استخدام فواصل الكلمات للنص الصيني / الياباني / الكوري (CJK). سلوك النص بخلاف CJK هو نفس سلوك القيمة "عادي"</li>
                <li><b> break-word </b>: لمنع الفائض ، قد يتم كسر الكلمة في نقاط عشوائية </li>
            </ul>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <CodeHighlighter file_name="index.css" code={codeExemple.css} language="css" copie={true}/>
            <CodeHighlighter file_name="index.html" code={codeExemple.code} head={codeExemple.head} language="html" is_html={true} title="CSS Word-Break" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS Word-Break' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
              <h2>word-break: normal</h2>
              <p id="css-word-braek-ex1-a">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                http::exemple_/suscipit/obcaecati/Nostrum/dicta/amet/praesentium/eveniet.html
              </p>
              <h2>word-break:break-all</h2>
              <p id="css-word-braek-ex1-b">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                http::exemple_/suscipit/obcaecati/Nostrum/dicta/amet/praesentium/eveniet.html
              </p>
              <h2>word-break:keep-all </h2>
              <p id="css-word-braek-ex1-c">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                http::exemple_/suscipit/obcaecati/Nostrum/dicta/amet/praesentium/eveniet.html
              </p>
              <h2>word-break:break-word</h2>
              <p id="css-word-braek-ex1-d">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
                http::exemple_/suscipit/obcaecati/Nostrum/dicta/amet/praesentium/eveniet.html
              </p>
            </Result>
        </div>
    </article>
  </section>
)
}