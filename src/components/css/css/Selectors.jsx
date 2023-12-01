import { CodeHighlighter ,  ReSelectorssult} from "../../path";
import images from "../imagesCss";
// import "./Selectors.css"

export default function Selectors(props){
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
            <img src={images.css52_Selectors} className="img"/>
            <img src={images.css52_Selectors_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">2- CSS <bdi>.class1 .class2</bdi>  Selectors</h2>
        <p className="style_divv"> 
            تحديد جميع العناصر التي لها <bdi><b>class2</b></bdi> داخل عنصر له <bdi><b>class1</b></bdi>.
        </p>
            <div className="mital">متال  :  </div>
            <img src={images.css52_Selectors2} className="img"/>
            <img src={images.css52_Selectors2_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">3- CSS <bdi>#id</bdi>  Selectors</h2>
        <p className="style_divv"> 
            يقوم المحدد #id بتصميم العنصر بالمعرف المحدد.
        </p>
            <div className="mital">متال  :  </div>
            <img src={images.css52_Selectors3} className="img"/>
            <img src={images.css52_Selectors3_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">4- CSS <bdi>*</bdi> Selectors</h2>
        <p className="style_divv"> 
            يحدد المحدِّد * جميع العناصر.<br/>
            يمكن للمحدد * أيضًا تحديد جميع العناصر داخل عنصر آخر .
        </p>
            <div className="mital">متال  :  </div>
            <img src={images.css52_Selectors4} className="img"/>
            <img src={images.css52_Selectors4_2} className="img"/>
            <div className="mital">متال 2 :  </div>
            <img src={images.css52_Selectors5} className="img"/>
            <img src={images.css52_Selectors5_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">5- CSS element Selectors</h2>
        <p className="style_divv"> 
            يمكن تحديد جميع العناصر ذات إسم محدد بستخدام الإسم فقط
        </p>
            <div className="mital">متال  :  </div>
            <img src={images.css52_Selectors6} className="img"/>
            <img src={images.css52_Selectors6_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">6- CSS element.class Selectors</h2>
        <p className="style_divv">
            محدد العنصر element.class يستخدم لتحديد العنصر المحدد بالفئة المحددة.
        </p>
            <div className="mital">متال  :  </div>
            <img src={images.css52_Selectors7} className="img"/>
            <img src={images.css52_Selectors7_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">7- CSS <bdi>element,element</bdi> Selectors</h2>
        <p className="style_divv">
            لتصميم عدة عناصر بنفس النمط ، إفصل اسم كل عنصر بفاصلة.
        </p>
            <div className="mital">متال  :  </div>
            <img src={images.css52_Selectors8} className="img"/>
            <img src={images.css52_Selectors8_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">8- CSS <bdi>element{">"}element</bdi> Selectors</h2>
        <p className="style_divv">
            يتم استخدام <bdi><b>elemen{"t>"}element</b></bdi> العناصر لتحديد عناصر ذات أصل معين.<br/>
            لم يتم تحديد العناصر التي ليست تابعة مباشرة للعنصر الأب .
        </p>
            <div className="mital">متال  :  </div>
            <img src={images.css52_Selectors9} className="img"/>
            <img src={images.css52_Selectors9_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">9- CSS <bdi>element + element</bdi> Selectors</h2>
        <p className="style_divv">
            يتم استخدام <bdi><b>element1 + element2</b></bdi> لتحديد عنصر <b>element2</b> يقع مباشرة بعد عنصر  <b>element1</b>.
        </p>
            <div className="mital">متال  :  </div>
            <img src={images.css52_Selectors10} className="img"/>
            <img src={images.css52_Selectors10_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">10- CSS <bdi>element ~ element</bdi> Selectors</h2>
        <p className="style_divv">
            يتم استخدام  <bdi><b>element1 ~ element2</b></bdi> لتحديد جميع عانصر <b>element2</b> التي تقع مباشرة بعد العنصر  <b>element1</b>.
        </p>
            <div className="mital">متال  :  </div>
            <img src={images.css52_Selectors11} className="img"/>
            <img src={images.css52_Selectors11_2} className="img"/>
    </article>
    <article>
        <h2 className="title-h2">11- CSS <bdi>[attribute]</bdi> Selectors</h2>
        <p className="style_divv">
            يتم استخدام  محدد السمة <bdi>[attribute]</bdi>  لتحديد العناصر ذات السمة المحددة.
        </p>
            <div className="mital">متال  :  </div>
            <img src={images.css52_Selectors12} className="img"/>
            <div className="style-result img">
               <input type="email" name="email" id="email" placeholder="email"/>
                <input type="password" name="password" id="passworD" placeholder="password"/>
            </div>
    </article>
    <article>
        <h2 className="title-h2">12- CSS <bdi>[attribute = value]</bdi> Selectors</h2>
        <p className="style_divv">
            يتم استخدام  محدد السمة <bdi>[attribute = value]</bdi>  لتحديد العناصر ذات السمة و القيمة المحددين.
        </p>
            <div className="mital">متال  :  </div>
            <img src={images.css52_Selectors13} className="img"/>
            <div className="style-result img">
                <input type="email" name="email"  placeholder="email"/><br/>
                <input type="password" name="password" placeholder="password"/>
            </div>
            <div className="mital">متال 2 :  </div>
            <img src={images.css52_Selectors13_2} alt="exemple 2" className="img"/>
            <div className="style-result img">
                <div className="h2">CSS [attribute="value"] Selector</div>
                <a href="https://www.google.com/" target="_blank"> Google </a> 
            </div>
    </article>
    <article>
        <h2 className="title-h2">13- CSS <bdi>[attribute ~= value]</bdi> Selectors</h2>
        <p className="style_divv">
            يتم استخدام  محدد السمة <bdi>[attribute ~= value]</bdi>  لتحديد العناصر ذات قيمة السمة التي تحتوي على كلمة محددة.
        </p>
            <div className="mital">متال  :  </div>
            <img src={images.css52_Selectors14} className="img"/>
            <div className="style-result img">
                <input type="text" placeholder = "input Text"/><br/>
                <input type="password" placeholder = "input Password"/>
            </div>
    </article>
    <article>
        <h2 className="title-h2">14- CSS <bdi>[attribute|="value"]</bdi> Selectors</h2>
        <p className="style_divv">
            يتم استخدام محدد <bdi>[attribute|="value"]</bdi> لتحديد العناصر ذات السمة المحددة ، والتي يمكن أن تكون قيمتها بالضبط القيمة المحددة ، أو القيمة المحددة متبوعة بواصلة (-).<br/>
            ملاحظة: يجب أن تكون القيمة كلمة كاملة ، إما بمفردها ، مثل <bdi>className="top"</bdi>، أو متبوعة بواصلة (-) ، مثل <bdi>className="top-text"</bdi>
        </p>
            <div className="mital">متال  :  </div>
            <img src={images.css52_Selectors15} className="img"/>
            <div className="style-result img">
                <div className="h2">CSS [attribute|="value"] Selector</div>
                <h1 className="top-header">Welcome</h1>
                <p className="top-text">Hello world!</p>
                <p className="topcontent">Are you learning CSS?</p>
            </div>
    </article>
</section>
    )
}