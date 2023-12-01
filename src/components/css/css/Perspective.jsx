import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Perspective.css";

export default function Perspective(props){
  const codeExemple1= { 
    head:`  
    <style> 
        #parent-div1 , #parent-div2 { 
            margin:20px; 
            background-color:green;
        }
        #parent-div1 { 
            perspective:300px; 
            margin-bottom:90px;
        }
        #parent-div2 { 
          perspective:600px; 
        }
        .parent{
          width:400px;
          height:400px;
          background-color:red;
          font-size:130px;
          margin:auto; 
        }  
    </style>`,
  code:`      <div id="parent-div1">
      <div className="parent"> A </div> 
    </div>
    <div id="parent-div2">
      <div className="parent"> B </div> 
    </div>`}

    const codeExemple2= { 
      head:`  
    <style> 
        #parent-div1, #parent-div2 {
          margin: 100px;
          background-color: green;
        }
        #parent-div1 {
          perspective: 300px;
          margin-bottom: 90px;
        }
        #parent-div2 {
          perspective: 600px;
        }
        .parent {
          width: 400px;
          height: 400px;
          background-color: red;
          font-size: 130px;
          margin: auto;
        }
        #parent-div1 > div, #parent-div2 > div {
          transform: translateZ(50px);
        }  
    </style>`,
    code:`      <div id="parent-div1">
      <div class="parent"> A </div>
    </div>
          
    <div id="parent-div2">
      <div class="parent"> B </div>
    </div>`
    }
    const codeExemple3= { 
      head:`  
    <style> 
        .style { 
            background-color:red; height:300px; margin-bottom:9px;
        }
        .div1 {  perspective:300px;  perspective-origin: left;  }
        .div2{  perspective:300px;  perspective-origin: center;  }
        .div3{  perspective:300px;  perspective-origin: right;  }
        .div_a , .div_b , .div_c{ 
            background-color:green; 
            color:white;
            margin:auto; 
            font-size:35px;
            height:300px; 
            width:300px;
            transform: translateZ(-300px);
        }
    </style>`,
    code:`      <div class="style div1"> 
        <div class="div_a"> div1  </div>
      </div>
      <div class="style div2"> 
        <div class="div_b"> div2</div>
      </div>
      <div class="style div3"> 
        <div class="div_c"> div3 </div>
      </div>`
    }
    const codeExemple4= { 
      head:`  
    <style> 
        .style { 
          background-color:red; height:300px; margin-bottom:9px;
        }
        .div{  perspective:300px; perspective-origin: left;  }
        .div2{ perspective:300px; perspective-origin: center;  }
        .div3{ perspective:300px; perspective-origin: right;  }
        .div_a , .div_b , .div_c{ 
            background-color:green;color: white;
            margin:auto; font-size: 35px;
            height:300px; width:300px;
            transform: rotateX(45deg);
        } 
    </style>`,
    code:`      <div className="style div1"> 
        <div className="div_a"> div1  </div>
      </div>
      <div className="style div2"> 
        <div className="div_b"> div2</div>
      </div>
      <div className="style div3"> 
        <div className="div_c"> div3 </div>
      </div>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Perspective </h1>
    <article>
        <h2 className="title-h2">1- perspective </h2>
        <p className="style_divv">
            <br/>تُستخدم خاصية <b>perspective</b> لمنح عنصر ثلاثي الأبعاد . وتكون قيمتها الفتراضية <b>none</b> .<br/>
            تحدد خاصية <b>perspective</b> مدى بُعد الكائن عن المستخدم. لذلك ، ستؤدي القيمة الأقل إلى تأثير ثلاثي الأبعاد أكثر كثافة من القيمة الأعلى.<br/>
            عند تحديد خاصية المنظور لعنصر ما ، فإن عنصر الإبن هي التي تحصل على عرض المنظور ، وليس العنصر نفسه.<br/>
            تلميح: انظر أيضًا إلى خاصية أصل المنظور ، والتي تحدد الموضع الذي ينظر فيه المستخدم إلى الكائن ثلاثي الأبعاد.<br/>
            لفهم خاصية المنظور بشكل أفضل ، قم بعرض العرض التوضيحي.
        </p>
      
        <div className="mital"> متال : </div>
        <ul><li> لاحظ أن الخاصية <b>perspective</b> لا تغير أي شيء في التصميم أسفله </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" title="CSS Perspective" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Perspective' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-perspective-ex1-parent-div1">
              <div className="css-perspective-ex1-parent"> A </div> 
            </div>
            <div id="css-perspective-ex1-parent-div2">
              <div className="css-perspective-ex1-parent"> B </div> 
            </div>
        </Result>
      
        <div className="mital"> متال 2 : </div>
        <ul><li> لاحظ أن الخاصية <b>perspective</b>  تغير  التصميم بعد إستعمال الخاصية <kbd>transform : translateZ(50px)</kbd> </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" title="CSS Perspective" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Perspective' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-perspective-ex2-parent-div1">
              <div class="css-perspective-ex2-parent">A</div>
            </div>

            <div id="css-perspective-ex2-parent-div2">
              <div class="css-perspective-ex2-parent">B</div>
            </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2- perspective-origin</h2>
        <p className="style_divv">
            الخاصية <bdi><b>perspective-origin</b></bdi> توضح الزاوية التي ينضر المستعمل منها . وقيمتها الإفتراضية هي <kbd>perspective-origin:50% 50%</kbd> .<br/>
            تكتب الخاصية <bdi><b>perspective-origin</b></bdi> على شكل <kbd>perspective-origin : x y</kbd> .<br/>
            القيمة 50% 50%  وتعني أن الزاوية التي ينضر المستعمل هي من منتصف <b>x</b> و <b>y</b> . <br/>
            تقبل الخاصية <bdi><b>perspective-origin</b></bdi> القيمة بالنسبة المؤوية أو بالبيكسل أو بالإتجاهاة متل <bdi><b>left center</b></bdi> أو <bdi><b>left right</b></bdi> أو <bdi><b>center center</b></bdi> ... <br/>
            <ul className="mt-5">
              <li> يطلق على الخاصية <bdi><b>perspective-origin</b></bdi> إسم نقطقة التلاشي . وتعني اخر نقطة تنتهي عندها الرؤية .<br/></li>
            </ul>
        </p>

        <div className="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} head={codeExemple3.head} language="html" title="CSS Perspective" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Perspective' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-perspective-ex3-style css-perspective-ex3-div1"> 
              <div className="css-perspective-ex3-div_a"> div1  </div>
            </div>
            <div className="css-perspective-ex3-style css-perspective-ex3-div2"> 
              <div className="css-perspective-ex3-div_b"> div2</div>
            </div>
            <div className="css-perspective-ex3-style css-perspective-ex3-div3"> 
              <div className="css-perspective-ex3-div_c"> div3 </div>
            </div>
        </Result>
      
        <div className="mital"> متال 2 : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} head={codeExemple4.head} language="html" title="CSS Perspective" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Perspective' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-perspective-ex4-style css-perspective-ex4-div1"> 
              <div className="css-perspective-ex4-div_a"> div1  </div>
            </div>
            <div className="css-perspective-ex4-style css-perspective-ex4-div2"> 
              <div className="css-perspective-ex4-div_b"> div2</div>
            </div>
            <div className="css-perspective-ex4-style css-perspective-ex4-div3"> 
              <div className="css-perspective-ex4-div_c"> div3 </div>
            </div>
        </Result>
    </article>
</section>
    )
}