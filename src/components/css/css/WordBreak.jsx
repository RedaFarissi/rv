import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function WordBreak(props){
  return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Word-Break  </h1>
    <article>
        <div className="style_divv mt-5">
            تُستخدم خاصية <b><bdi>word-break</bdi></b> لتحديد كيفية تطبيق الواصلة على الأماكن التي يتجاوز فيها النص مربع المحتوى الخاص به و تقبل القيم التالية :
            <ul>
                <li><b> normal </b>: القيمة الافتراضية. استخدم قواعد فاصل الأسطر الافتراضية </li>
                <li><b> break-all </b>: لمنع تجاوز السعة ، قد يتم كسر الكلمة عند أي حرف </li>
                <li><b> keep-all </b>: لا يجب استخدام فواصل الكلمات للنص الصيني / الياباني / الكوري (CJK). سلوك النص بخلاف CJK هو نفس سلوك القيمة "عادي"</li>
                <li><b> break-word </b>: لمنع الفائض ، قد يتم كسر الكلمة في نقاط عشوائية </li>
            </ul>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال : </div>
            <img src={images.css63_word_break} className="img"/>
            <div className="style-result">
              <h2>word-break: normal</h2>
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
              </p>
            </div>
        </div>
    </article>
  </section>
)
}