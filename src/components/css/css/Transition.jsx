import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Transition.css"

export default function Transition(props){
    const codeExemple1= { 
    head:`  
    <style> 
        #transition{  
            border:0.5px solid black;  
            background-color: orangered;
            width: 100px;
            height: 50px;
            transition: width 2s;
        }
        #transition:hover{ 
            width:300px;
        }
    </style>`,
    code:`      <div id="transition"></div>`
    }
    const codeExemple2= { 
    head:`  
    <style> 
        #transition{
            color :white;
            margin: auto;
            width: 30%;
            height: 30vh;
            background-color: blueviolet;
            font-size: large;
            transform: rotate(0deg);
            transition:  width 3s,height 3s,font-size 6s,transform  6s,color 6s;
        }
        #transition:hover{
            width: 40%;
            height: 40vh;
            font-size: xxx-large; 
            transform: rotate(360deg);
            color:magenta;
        }
    </style>`,
    code:`      <div id="transition"> Hello word </div>`
    }
    const codeExemple3= { 
    head:`  
    <style> 
        #transition{
            margin:auto;
            width: 50%;
            border: 2px solid black; 
            border-radius: 0px;
            background-image:linear-gradient(to left,white,white,white);
            transition:  width 5s,border 5s,border-radius 5s , background-image 5s;
        }
        #transition:focus{
            width: 80%;
            border: 6px solid darkgreen ;
            border-radius: 20px; 
            background-image:linear-gradient(to left,rgb(130,255,0),#808080,rgb(105,255,255));
        }
    </style>`,
    code:`      <input id="transition"  type="text" placeholder="click ici"/> `
    }
    const codeExemple4= { 
    head:`  
    <style> 
        .text-light{ color: white;}
        .div { 
            width: 100px;
            height: 100px; 
            background: red; 
            margin: 7px; 
            transition: width 2s;
        }
        .div:hover{ width: 300px; }
        .div1{ transition-timing-function: linear; }
        .div2{ transition-timing-function: ease; }
        .div3{ transition-timing-function: ease-in; }
        .div4{ transition-timing-function: ease-out; }
        .div5{ transition-timing-function: ease-in-out; }
    </style>`,
    code:`      <h1>The transition-timing-function Property</h1>
      <p>Hover over the div elements below, to see the different speed curves:</p>
      <div class="div div1 text-light">linear</div>
      <div class="div div2 text-light">ease</div>
      <div class="div div3 text-light">ease-in</div>
      <div class="div div4 text-light">ease-out</div>
      <div class="div div5 text-light">ease-in-out</div> `
    }
    const codeExemple5= { 
    head:`  
    <style> 
        #transition {  
            width: 100px;
            height: 100px;
            background: red;
            transition: width 3s;
            transition-delay: 2s;
        }
        #transition:hover {
            width: 300px;
        }
    </style>`,
    code:`      <h1>The transition-delay Property</h1>
      <p>Hover over the div element below, to see the transition effect:</p>
      <div id="transition"></div>
      <p><b>Note:</b> The transition effect has a 2 second delay before starting.</p>  `
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Transition </h1>
    <article>
        <h2 className="title-h2">1. الخاصية transition </h2>
        <p className="style_divv">
            تسمح لك الخاصية <b>transition</b> في لغة <b>CSS</b> بتغيير قيم الخصائص بسلاسة ، خلال مدة معينة .<br/>
            تستخدم مع الخاصية <b>focus</b> و الخصية <b>hover</b> .<br/>
            تستقبل الخاصية <b>transition</b> إسم الخاصية التي تريد تغييرها تم مدة التغير بتانية <bdi>(s)</bdi> .<br/>
            جميع الخصائص التي ترغب بإضافتها إلى الخاصية <b>transition</b> يجب أن تقوم بتحديد لها قيمة أولية تم بعد ذالك تغير الخصائص بستعمال الخاصية <b>hover</b> أو <b>focus</b> .
        </p>
        <div className="mital">متال  :  </div>
        <ul>
            <li>مرر الماوس فوق العنصر <b>div</b> أدناه لمشاهدة تأثير <b>transition</b> في لغة  <b>CSS</b> .</li>
            <li>في هاذا المتال الوقت المحدد لتنفيد الأوامر على خاصية ال <b>width</b> هو تانيتين .</li>
        </ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Transition" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Transition' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-transition-ex1"></div>
        </Result>       
        <div className="mital">متال 2 :  </div>
        <ul><li>مرر الماوس فوق العنصر <b>div</b> أدناه لمشاهدة تأثير <b>transition</b> في لغة  <b>CSS</b> .</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Transition" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Transition' styleAdd="d-flex justify-content-center align-items-center styleAdd-ex2" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-transition-ex2"> Hello word </div>
        </Result>
        <div className="mital">متال 3 :  </div>
        <ul><li>أنقر فوق العنصر <b>input</b> أدناه لمشاهدة تأثير <b>transition</b> في لغة  <b>CSS</b> .</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="CSS Transition" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Transition' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <input id="css-transition-ex3"  type="text" placeholder="click ici"/> 
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. الخاصية transition-timing-function </h2>
        <p className="style_divv">
            تحدد خاصية <b>transition-timing-function</b> منحنى السرعة لتأثير الانتقال .<br/>
            يمكن أن تحتوي خاصية دالة توقيت الانتقال على القيم التالية:
            <ul>
                <li><b>ease </b> : يحدد تأثير انتقال ببداية بطيئة ، ثم سريعة ، ثم تنتهي ببطء (قيمة أولية) </li>
                <li><b>linear </b>  يحدد تأثير انتقال بنفس السرعة من البداية إلى النهاية</li>
                <li><b>ease-in </b>  يحدد تأثير انتقال ببداية بطيئة</li>
                <li><b>ease-out </b>: يحدد تأثير انتقال بنهاية بطيئة</li>
                <li><b>ease-in-out </b> يحدد تأثير الانتقال مع بداية ونهاية بطيئين</li>
                <li><b>cubic-bezier(n,n,n,n)</b> يتيح لك تحديد القيم الخاصة بك في دالة cubic-bezier .</li>
            </ul>
        </p>
        <div className="mital">متال  :  </div>
        <ul><li>مرر الماوس فوق العناصر <b>div</b> أدناه لمشاهدة تأثير <b>transition-timing-function</b> في لغة  <b>CSS</b> .</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} head={codeExemple4.head} language="html" is_html={true} title="CSS Transition" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Transition' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>The transition-timing-function Property</h1>
            <p>Hover over the div elements below, to see the different speed curves:</p>
            <div className="css-transition-ex4-div text-light css-transition-ex4-div1">linear</div>
            <div className="css-transition-ex4-div text-light css-transition-ex4-div2">ease</div>
            <div className="css-transition-ex4-div text-light css-transition-ex4-div3">ease-in</div>
            <div className="css-transition-ex4-div text-light css-transition-ex4-div4">ease-out</div>
            <div className="css-transition-ex4-div text-light css-transition-ex4-div5">ease-in-out</div> 
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3. الخاصية transition-delay </h2>
        <p className="style_divv">
            تحدد الخاصية <b>transition-delay</b> وقت تأخيرًا (بالثواني) لتأثير الانتقال.<br/>
            المثال التالي به تأخير لمدة 2 ثوانٍ قبل البدء:
        </p>
        <div className="mital">متال  :  </div>
        <ul><li>مرر الماوس فوق العناصر <b>div</b> وإنتضر لمدة 2 ثوانٍ .</li></ul>
        <ul><li>مرر الماوس فوق العناصر <b>div</b> أدناه لمشاهدة تأثير <b>transition-timing-function</b> في لغة  <b>CSS</b> .</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} head={codeExemple5.head} language="html" is_html={true} title="CSS Transition" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Transition' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>The transition-delay Property</h1>
            <p>Hover over the div element below, to see the transition effect:</p>
            <div id="css-transition-ex5"></div>
            <p><b>Note:</b> The transition effect has a 2 second delay before starting.</p>     
        </Result> 
    </article>
</section>
    )
}