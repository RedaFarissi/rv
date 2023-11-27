import { CodeHighlighter ,  ReSelectorssult} from "../../path";
import images from "../imagesCss";

export default function Selectors(props){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Selectors </h1>
    <article>
        <details dir="ltr"> 
            <summary style={{color:"deeppink"}}> All lesson titles </summary>
            <a href="#CssClassSelectors"> Css class Selectors</a><br/>
            <a href="#CssClassinClassSelectors"> Css class in class Selectors </a><br/>
            <a href="#CssIdSelectors"> Css id Selectors </a><br/>
            <a href="#CssAllElementSelectors"> Css All Element Selectors </a><br/>
            <a href="#CssElementSelectors"> Css Element Selectors </a><br/>
            <a href="#CssElementClassSelectors"> Css Element class Selectors </a><br/>
            <a href="#CssMoreThanOneElementSelectors"> Css More Than One Element Selectors  </a><br/>
            <a href="#ItemsOfSpecificOrigin"> Items Of Specific Origin   </a><br/>
            <a href="#CSSElementLocatedImmediatelyAfterAnElement"> CSS Element located immediately after an Element  </a><br/>
            <a href="#CSSAllElementLocatedImmediatelyAfterAnElement"> CSS All Element located immediately after an Element  </a><br/>
            <a href="#CssAttributeSelectors"> Css Attribute Selectors </a><br/>
            <a href="#CssAttributeWithValueSelectors"> Css Attribute with Value Selectors  </a><br/>
            <a href="#selectItemsWithAnAttributeValueThatContainASpecificWord"> select Items with an Attribute Value that contain a Specific Word  </a><br/>
            <a href="#">   </a><br/>
        </details>
    </article>
<h2  id="title-h2">1- CSS <bdi>.class</bdi>  Selectors</h2>
<div className="style_divv">
    تحدد <b><bdi>.class</bdi></b>  العناصر ذات سمة فئة معينة. <br/>
    لتحديد عناصر بفئة معينة ، اكتب حرف نقطة (.) ، متبوعًا باسم <b>class</b>.<br/>
    يمكن أن تشير عناصر HTML أيضًا إلى أكثر من فئة واحدة (انظر إلى المثال 2 أدناه).
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css52_Selectors} className="img"/>
    <img src={images.css52_Selectors_2} className="img"/>
</div>
<h3 id="CssClassinClassSelectors">2- CSS <bdi>.class1 .class2</bdi>  Selectors</h3>
<div className="style_divv"> 
    تحديد جميع العناصر التي لها <bdi><b>class2</b></bdi> داخل عنصر له <bdi><b>class1</b></bdi>.
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css52_Selectors2} className="img"/>
    <img src={images.css52_Selectors2_2} className="img"/>
</div>
<h3 id="CssIdSelectors">3- CSS <bdi>#id</bdi>  Selectors</h3>
<div className="style_divv"> 
    يقوم المحدد #id بتصميم العنصر بالمعرف المحدد.
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css52_Selectors3} className="img"/>
    <img src={images.css52_Selectors3_2} className="img"/>
</div>
<h3 id="CssAllElementSelectors">4- CSS <bdi>*</bdi> Selectors</h3>
<div className="style_divv"> 
    يحدد المحدِّد * جميع العناصر.<br/>
    يمكن للمحدد * أيضًا تحديد جميع العناصر داخل عنصر آخر .
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css52_Selectors4} className="img"/>
    <img src={images.css52_Selectors4_2} className="img"/>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال 2 :  </div>
    <img src={images.css52_Selectors5} className="img"/>
    <img src={images.css52_Selectors5_2} className="img"/>
</div>

<h3 id="CssElementSelectors">5- CSS element Selectors</h3>
<div className="style_divv"> 
    يمكن تحديد جميع العناصر ذات إسم محدد بستخدام الإسم فقط
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css52_Selectors6} className="img"/>
    <img src={images.css52_Selectors6_2} className="img"/>
</div>
<h3 id="CssElementClassSelectors">6- CSS element.class Selectors</h3>
<div className="style_divv">
    محدد العنصر element.class يستخدم لتحديد العنصر المحدد بالفئة المحددة.
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css52_Selectors7} className="img"/>
    <img src={images.css52_Selectors7_2} className="img"/>
</div>
<h3 id="CssMoreThanOneElementSelectors">7- CSS <bdi>element,element</bdi> Selectors</h3>
<div className="style_divv">
    لتصميم عدة عناصر بنفس النمط ، إفصل اسم كل عنصر بفاصلة.
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css52_Selectors8} className="img"/>
    <img src={images.css52_Selectors8_2} className="img"/>
</div>
<h3 id="ItemsOfSpecificOrigin">8- CSS <bdi>element{">"}element</bdi> Selectors</h3>
<div className="style_divv">
    يتم استخدام <bdi><b>elemen{"t>"}element</b></bdi> العناصر لتحديد عناصر ذات أصل معين.<br/>
    لم يتم تحديد العناصر التي ليست تابعة مباشرة للعنصر الأب .
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css52_Selectors9} className="img"/>
    <img src={images.css52_Selectors9_2} className="img"/>
</div>
<h3 id="CSSElementLocatedImmediatelyAfterAnElement">9- CSS <bdi>element + element</bdi> Selectors</h3>
<div className="style_divv">
    يتم استخدام <bdi><b>element1 + element2</b></bdi> لتحديد عنصر <b>element2</b> يقع مباشرة بعد عنصر  <b>element1</b>.
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css52_Selectors10} className="img"/>
    <img src={images.css52_Selectors10_2} className="img"/>
</div>

<h3 id="CSSAllElementLocatedImmediatelyAfterAnElement">10- CSS <bdi>element ~ element</bdi> Selectors</h3>
<div className="style_divv">
    يتم استخدام  <bdi><b>element1 ~ element2</b></bdi> لتحديد جميع عانصر <b>element2</b> التي تقع مباشرة بعد العنصر  <b>element1</b>.
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css52_Selectors11} className="img"/>
    <img src={images.css52_Selectors11_2} className="img"/>
</div>

<h3 id="CssAttributeSelectors">11- CSS <bdi>[attribute]</bdi> Selectors</h3>
<div className="style_divv">
    يتم استخدام  محدد السمة <bdi>[attribute]</bdi>  لتحديد العناصر ذات السمة المحددة.
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css52_Selectors12} className="img"/>
    <div className="style-result img">
       <input type="email" name="email" id="emaiL" placeholder="email"/>
        <input type="password" name="password" id="passworD" placeholder="password"/>
    </div>
</div>
<style>    {`[type="email"]{width:60%; height:50px; border-radius:50px;border:1px solid red;padding-left: 9px; }`} </style>
<h3 id="CssAttributeWithValueSelectors">12- CSS <bdi>[attribute = value]</bdi> Selectors</h3>
<div className="style_divv">
    يتم استخدام  محدد السمة <bdi>[attribute = value]</bdi>  لتحديد العناصر ذات السمة و القيمة المحددين.
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css52_Selectors13} className="img"/>
    <div className="style-result img">
        <input type="email" name="email"  placeholder="email"/><br/>
        <input type="password" name="password" placeholder="password"/>
    </div>
</div>
<style> {`a[target=_blank] { background-color: yellow;}`} </style>
<div className="sum_exemple_style">
    <div className="mital">متال 2 :  </div>
    <img src={images.css52_Selectors13_2} alt="exemple 2" className="img"/>
    <div className="style-result img">
        <div className="h2">CSS [attribute="value"] Selector</div>
        <a href="https://www.google.com/" target="_blank"> Google </a> 
    </div>
</div>

<style>{`[placeholder~="Password"]{height:20px;border-radius:50px;padding-left:9px;background-color:gray;color:white;}`}</style>
<h3 id="selectItemsWithAnAttributeValueThatContainASpecificWord">13- CSS <bdi>[attribute ~= value]</bdi> Selectors</h3>
<div className="style_divv">
    يتم استخدام  محدد السمة <bdi>[attribute ~= value]</bdi>  لتحديد العناصر ذات قيمة السمة التي تحتوي على كلمة محددة.
</div>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css52_Selectors14} className="img"/>
    <div className="style-result img">
        <input type="text" placeholder = "input Text"/><br/>
        <input type="password" placeholder = "input Password"/>
    </div>
</div>

<h3>14- CSS <bdi>[attribute|="value"]</bdi> Selectors</h3>
<div className="style_divv">
    يتم استخدام محدد <bdi>[attribute|="value"]</bdi> لتحديد العناصر ذات السمة المحددة ، والتي يمكن أن تكون قيمتها بالضبط القيمة المحددة ، أو القيمة المحددة متبوعة بواصلة (-).<br/>
    ملاحظة: يجب أن تكون القيمة كلمة كاملة ، إما بمفردها ، مثل <bdi>className="top"</bdi>، أو متبوعة بواصلة (-) ، مثل <bdi>className="top-text"</bdi>
</div>
<style> {`[class|=top] {  background: yellow;}`} </style>
<div className="sum_exemple_style">
    <div className="mital">متال  :  </div>
    <img src={images.css52_Selectors15} className="img"/>
    <div className="style-result img">
        <div className="h2">CSS [attribute|="value"] Selector</div>
        <h1 className="top-header">Welcome</h1>
        <p className="top-text">Hello world!</p>
        <p className="topcontent">Are you learning CSS?</p>
    </div>
</div>
</section>
    )
}