import images from "../imagesCss";
import { CodeHighlighter ,  Result , InteractivCss} from "../../path";
import { useState , useRef ,useEffect} from "react";
import "./Animation.css"

export default function Animation(props){
    const codeExemple1= { 
    head:`  
    <style> 
        #css-animation-ex2 {
            width: 200px;
            height: 200px;
            background-color: black;
            animation-name: reda;
            animation-duration: 9s;
            animation-iteration-count: infinite;
        }

        @keyframes reda {
            from {
                background-color: black;
            }
            to {
                background-color: green;
            }
        }    
    </style>`,
    code:`       <div id="css-animation-ex2">  </div>`
    }
    const codeExemple2= { 
    head:`  
    <style> 
        #css-animation-ex3{
            margin: auto;
            width: 200px;
            height: 200px;
            background-color: black; 
            border: 5px solid blue;
            animation-name : name_function;
            animation-duration : 9s; 
            animation-iteration-count: infinite;
        }
        @keyframes name_function {
            0%{  background-color: black;}
            25%{ background-color: blue;}
            50%{ background-color: darkgreen;}
            75%{ background-color: yellow;}
            100%{background-color: darkorange}
        }
    </style>`,
    code:`       <div id="css-animation-ex3">  </div>`
    }

    const codeExemple3= { 
    head:`  
    <style> 
        #css-animation-ex4{
            margin: auto;width: 
            200px;
            height: 200px;
            background-color: black; 
            border: 5px solid blue;
            animation-name : name_function2;
            animation-duration : 9s; 
            animation-iteration-count: infinite;
        }
        @keyframes name_function2 {
            0%{  background-color: black;}
            25%{ background-color: blue;}
            50%{ background-color: darkgreen;}
            75%{ background-color: yellow;}
            100%{background-color: darkorange}
        }
    </style>`,
    code:`       <div id="css-animation-ex4">  </div>`
    }
    const codeExemple4= { 
    head:`  
    <style> 
        #css-animation-ex5{
            margin: auto;height:9vh;background-color: black;border: 5px solid blue;font-size: x-large;
            animation-name : name_function3;
            animation-duration : 6s; 
            animation-delay : 3s;
            animation-iteration-count: infinite; 
        }
        @keyframes name_function3 {
            0% { border-radius:50% 9px;background-color: magenta;color: gray;width: 25%;}
            25%{ border-radius:9px;background-color: black;color:aqua;width: 47%;}
            50%{ border-radius:20px 20px 5% 20px;background-color: blueviolet ;color:orange;width: 70%;}
            75%{ border-radius:9px;background-color: white ;color:blue;width: 47%;}
            100%{border-radius:50% 9px;background-color: rgb(235,120,90);color:greenyellow;width: 25%;}
        }
    </style>`,
    code:`       `
    }
    const codeExemple5= { 
    head:`  
    <style> 
        .css-animation-ex6-box{
            height:50vh;
            padding:0;
            position:relative;   
        }
        #css-animation-ex6{
            width: 15%;
            height: 15vh;
            background-color: red;
            border: 5px solid blue;
            position:absolute;
            animation-name : name_function4;
            animation-duration : 6s; 
            animation-iteration-count : 2; 
        }
        @keyframes name_function4 {
            0%  {  top:0%;   left:0%;  }
            25% {  top:0%;   left:85%; }
            50% {  top: calc(34vh + 9px);  left:85%; }
            75% {  top: calc(34vh + 9px);  left:0%;}
            100%{  top:0%;   left:0%;  }
        }
    </style>`,
    code:`       <div class="css-animation-ex6-box"> 
          <div id="css-animation-ex6">  </div>
      </div>`
    }

    
    const codeExemple6= { 
    head:`  
    <style> 
        .css-animation-ex8-box{ border: 6px solid black; }
        .css-animation-ex8 {
            width: 20%;
            height:70px;
            text-align: center;
            border:2px solid green;
            background: red;
            color:white;
            font-weight: bold;
            font-size: xx-large;
            animation: mymove 5s infinite;
        }
        @keyframes mymove { 
            from{ margin-left: 0%;  }
            to{   margin-left: 80%; }
        }
    </style>`,
    code:`       <div className="css-animation-ex8-box">
            <div class="css-animation-ex8" style="animation-timing-function: linear;">  linear </div>
            <div class="css-animation-ex8" style="animation-timing-function: ease;"> ease </div>
            <div class="css-animation-ex8" style="animation-timing-function: ease-in;"> ease-in </div>
            <div class="css-animation-ex8" style="animation-timing-function: ease-out;"> ease-out </div>
            <div class="css-animation-ex8" style="animation-timing-function: ease-in-out;"> ease-in-out </div>
       </div>`
    }
    
    const [selectedValue, setSelectedValue] = useState("normal");
    const resultRef = useRef()
    const inputRef = useRef()
    const handleAnimation = (event) => {
      const { value } = event.target;
      setSelectedValue(value);
      resultRef.current.style.animationDirection = value
    };


    const [selectedValue2, setSelectedValue2] = useState("running");
    const resultRef2 = useRef()
    const inputRef2 = useRef()
    const handleAnimation2 = (event) => {
      const { value } = event.target;
      setSelectedValue2(value);
      resultRef2.current.style.animationPlayState = value
    };
    
    const [selectedValue3, setSelectedValue3] = useState("none");
    const resultRef3 = useRef()
    const inputRef3 = useRef()
    const handleAnimation3 = (event) => {
      const { value } = event.target;
      setSelectedValue3(value);
      resultRef3.current.style.animationFillMode = value
    };

    useEffect(() => {
      inputRef.current.click();
      inputRef2.current.click();
      inputRef3.current.click();
    }, []);
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Animation </h1>
    <article className="mt-5">
        <p class="style_divv">
            يسمح <b>CSS</b> بالرسوم المتحركة لعناصر <b>HTML</b> دون استخدام <b>JavaScript</b> أو <b>Flash</b> وذالك بستعمال الخاصية <b>animation</b> . <br/>
            تتيح الخاصية <b>animation</b> تغيير العنصر تدريجيًا من نمط إلى آخر.<br/>
            يمكنك تغيير أي عدد تريده من خصائص <b>CSS</b> ، بقدر ما تريد.<br/>
            لاستخدام الرسوم المتحركة لـ <b>CSS</b> ، يجب عليك أولاً تحديد بعض الإطارات الرئيسية للخاصية <b>animation</b> .
            تحتوي الإطارات الرئيسية على الأنماط التي سيتوفر عليها العنصر في أوقات معينة .<br/>
            ستتعرف في هذا الفصل على الخصائص التالية:
            <ul dir="ltr">
                <li><bdi><b>@keyframes </b></bdi>.</li>
                <li><b>animation-name </b>.</li>
                <li><b>animation-duration </b>.</li>
                <li><b>animation-delay </b>.</li>
                <li><b>animation-iteration-count </b>.</li>
                <li><b>animation-direction </b>.</li>
                <li><b>animation-timing-function </b>.</li>
                <li><b> animation-play-state </b></li>
                <li><b>animation-fill-mode </b>.</li>
                <li><b>animation </b>.</li>
            </ul>
        </p>
        <div class="mital"> متال :</div>
        <div dir="ltr" id="css-animation-ex1-box">
            <div id="css-animation-ex1"> a </div>
        </div>
    </article>
    <article>
        <h2 className="title-h2">1. الدالة @keyframes  </h2>
        <p class="style_divv">
            تستخدم الدالة <bdi><b>@keyframes</b></bdi> كدالة لإعطاء تعليمات وخصائص <b>CSS</b> ويكون ذالك بعد تحديد الخاصية <b>animation-name</b> والخاصية <b>animation-duration</b> على الأقل .<br/>
            يجب إعطاء نفس الإسم الذي قمة بتحديده داخل الخاصية <b>animation-name</b> لدالة <bdi><b>@keyframes</b></bdi>  .<br/>
            من أجل إعطاء خصائص <b>CSS</b> لدالة <bdi><b>@keyframes</b></bdi> توجد طريقتين :
            <ul>
                <li>الطريفة الأولى  بستعمال <b>form</b> و <b>to</b> . أنضر المتال 1 </li>
                <li> الطريفة التانية  بستعمال النسبة المئوية  . أنضر المتال 2 </li>
            </ul>
        </p>
        <div class="mital"> متال 1 :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Animation" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Animation' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-animation-ex2">  </div>
        </Result>
        <div class="mital"> متال 2 :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Animation" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Animation' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-animation-ex3">  </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. الخاصية animation-name و الخاصية animation-duration </h2>
        <p class="style_divv">
            <ul><li> تستخدم الخاصية <b>animation-name</b> من أجل إعطاء إسم لدالة <bdi><b>@keyframes</b></bdi> وهي خاصية أساسية لستعمال التحريك بستعمال <b>animation</b> يمكنك تحديد إسم بنفسك .<br/><br/></li></ul>
            <ul><li> تستخدم الخاصية <b>animation-duration</b> من أجل تحديد المدة الذي سيتم تنفيد التحريك على العنصر وهي خاصية أساسية لستعمال التحريك بستعمال <b>animation</b> يمكنك تحديد المدة بستعمال التواني .<br/>
        </li></ul> 
        </p>
        <div class="mital"> متال :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="CSS Animation" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Animation' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-animation-ex4">  </div>
        </Result>
        
    </article>
    <article>
        <h2 className="title-h2">3. الخاصية animation-delay </h2>
        <p class="style_divv">
            تحدد الخاصية <b>Animation-delay</b> (تأجيل الحركة) تأخيرًا لبدء الرسم المتحرك. تحدد مدة الإنتضار بتانية وذالك بكتابة  <b>s</b> بعد عدد تواني .<br/>
            المثال أسفله له تأخير لمدة 3 تواني قبل بدء تحريك 
        </p>
        <div class="mital"> متال :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} head={codeExemple4.head} language="html" is_html={true} title="CSS Animation" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Animation' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-animation-ex5">  </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">4. الخاصية animation-iteration-count</h2>
        <p class="style_divv">
            تستخدم الخاصية <b>animation-iteration-count</b>  من أجل تحديد عدد مرات تكرار التحريك .<br/>
            تستقبل الخاصية  رقم صحيح طبيعي والذي يمتل عدد مرات التكرار أو القيمة <b>infinite</b> والتي تستعمل من أجل التكرار المستمر .<br/><br/>
            <b> ملاحضة : </b>  جميع الأمتلة السبقة تم إضافة لها الخاصية <b>animation-iteration-count</b> مع القيمة <b>infinite</b> وذالك خصيصا من أجلك لمشاهدة تأتير الخاصية <b>animation</b> بوضوح .
        </p>
        <div class="mital"> متال :</div>
        <ul><li>عند تحديت الصفحة  سيتم تنفيد التحريك مرتين فقط لأننا قمنا بإعطاء الخاصية <b>animation-iteration-count</b> القيمة 2 </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} head={codeExemple5.head} language="html" is_html={true} title="CSS Animation" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Animation' styleAdd="css-animation-ex6-styleAdd" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-animation-ex6">  </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">5. الخاصية animation-direction </h2>
        <p class="style_divv">
            تحدد خاصية <b>animation-direction</b> ما إذا كان يجب تشغيل الرسم المتحرك للأمام أو للخلف أو في دورات بديلة .<br/>
            تقبل الخاصية <b>animation-direction</b> القيم التالية :
            <ul dir="ltr">
                <li> animation-direction: <b>normal</b></li>
                <li> animation-direction: <b>alternate</b></li>
                <li> animation-direction: <b>reverse</b></li>
                <li> animation-direction: <b>alternate-reverse</b></li>
            </ul>
        </p>
        <div className="mital"> متال توضيحي تفاعلي  : </div> 
        <InteractivCss 
          property="animation-direction" 
          value={selectedValue}
          classParent="css-animation-ex7-parent"
          classChild="css-animation-ex7"  
          resultRef={resultRef}
          textInResult=""
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef} onChange={handleAnimation} checked={selectedValue === 'normal'} value="normal" /> &nbsp; normal</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleAnimation} checked={selectedValue === 'alternate'} value="alternate"/> &nbsp; alternate </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleAnimation} checked={selectedValue === 'reverse'} value="reverse"/> &nbsp; reverse </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleAnimation} checked={selectedValue === 'alternate-reverse'} value="alternate-reverse"/> &nbsp; alternate-reverse</li>
            </ul>
        </InteractivCss>
    </article>
    <article>
        <h2 className="title-h2">6. الخاصية animation-timing-function  </h2>
        <p class="style_divv">
            تحدد الخاصية <b>animation-timing-function</b>  كيفية تقدم الحركة خلال مدة كل دورة . تقبل الخاصية القيم التالي :<br/><br/>
            <ul dir="ltr">
                <li> animation-timing-function : <b>linear</b></li>
                <li> animation-timing-function : <b>ease</b></li>
                <li> animation-timing-function : <b>ease-in</b></li>
                <li> animation-timing-function : <b>ease-out</b></li>
                <li> animation-timing-function : <b>ease-in-out</b></li>
            </ul>
        </p>
        <div class="mital"> متال :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple6.code} head={codeExemple6.head} language="html" is_html={true} title="CSS Animation" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Animation' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-animation-ex8-box" >
               <div class="css-animation-ex8" style={{animationTimingFunction:"linear"}}>  linear </div>
               <div class="css-animation-ex8" style={{animationTimingFunction:"ease"}}> ease </div>
               <div class="css-animation-ex8" style={{animationTimingFunction:"ease-in"}}> ease-in </div>
               <div class="css-animation-ex8" style={{animationTimingFunction:"ease-out"}}> ease-out </div>
               <div class="css-animation-ex8" style={{animationTimingFunction:"ease-in-out"}}> ease-in-out </div>
            </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">7. الخاصية animation-play-state </h2>
        <p class="style_divv">
            تحدد خاصية <b>animation-play-state</b> ما إذا كانت الرسوم المتحركة قيد التشغيل أو متوقفة مؤقتًا .  تستقبل الخاصية <b>animation-play-state</b> قيمتين وهي كالتالي :<br/>
            <ul>
                <li> <b>paused</b> : تستخدم لإقاف التحريك .</li>
                <li> <b>running</b> : تستخدم لإعادة تشغيل التحريك  .</li>
            </ul>
            <b>ملاحظة</b>: استخدم هذه الخاصية في <b>JavaScript</b> لإيقاف رسم متحرك مؤقتًا في منتصف الدورة.
        </p>
        <div className="mital"> متال توضيحي تفاعلي  : </div> 
        <InteractivCss 
          property="animation-play-state" 
          value={selectedValue2}
          classParent="css-animation-ex9-parent"
          classChild="css-animation-ex9"  
          resultRef={resultRef2}
          textInResult=""
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef2} onChange={handleAnimation2} checked={selectedValue2 === 'running'} value="running" /> &nbsp; running</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleAnimation2} checked={selectedValue2 === 'paused'} value="paused"/> &nbsp; paused </li>
            </ul>
        </InteractivCss>
    </article>
    <article>
        <h2 className="title-h2">8. الخاصية animation-fill-mode </h2>
        <p class="style_divv">
            تحدد الخاصية <b>animation-fill-mode</b>  مكان إستقرار عنصر <b>HTML</b> عندما ينتهي تأتير <b>animation</b> .<br/>
            لا تؤثر الرسوم المتحركة لـ <b>CSS</b> على العنصر قبل تشغيل أول إطار رئيسي أو بعد تشغيل آخر إطار رئيسي .<br/><br/>
            تقبل الخاصية <b>animation-direction</b> القيم التالية :
            <ul dir="ltr">
                <li> animation-fill-mode : <b>none</b></li>
                <li> animation-fill-mode : <b>forwards</b></li>
                <li> animation-fill-mode : <b>backwards</b></li>
                <li> animation-fill-mode : <b>both</b></li>
            </ul>
        </p>
        <div class="mital"> متال :</div>
        <ul>
            <li>قم بنقر على الأزرار أسفله لتغيير قيمة الخاصية <b>animation-fill-mode</b> للفهم بشكل أفضل </li>
        </ul>
        <InteractivCss 
          property="animation-fill-mode" 
          value={selectedValue3}
          classParent="css-animation-ex10-parent"
          classChild="css-animation-ex10"  
          resultRef={resultRef3}
          textInResult=""
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef3} onChange={handleAnimation3} checked={selectedValue3 === 'none'} value="none" /> &nbsp; none</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleAnimation3} checked={selectedValue3 === 'forwards'} value="forwards"/> &nbsp; forwards </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleAnimation3} checked={selectedValue3 === 'backwards'} value="backwards"/> &nbsp; backwards </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleAnimation3} checked={selectedValue3 === 'both'} value="both"/> &nbsp; both </li>
            </ul>
        </InteractivCss>
    </article>
</section>
    )
}