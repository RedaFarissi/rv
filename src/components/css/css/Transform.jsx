import { CodeHighlighter ,  Result , InteractivCss } from "../../path";
import images from "../imagesCss";
import "./Transform.css"
import { useState , useRef ,useEffect} from "react";

export default function Transform(props){
    const codeExemple1= { 
    head:`  
    <style> 
        #header {
          width: 50%;
          height: 30vh;
          background-color: palevioletred;
          transform: translateX(50%);
        }
    </style>`,
    code:`      <header id="header"></header>`
    }
    const codeExemple2= { 
    head:`  
    <style> 
        #header {
          width: 20%;
          height: 50vh;
          background-color: palevioletred;
          transform: translateY(50%);
        }
    </style>`,
    code:`      <header id="header"></header>`
    }
    const codeExemple3= { 
    head:`  
    <style> 
        .box{ 
            background-color: red;
            width:200px;  
            height:200px; 
            border:3px solid black; 
            margin: 100px auto;
            padding: 7px; 
            box-sizing: border-box; 
        }
        .box_contain1{ 
            background-color:yellow; 
            width:180px; 
            height:180px; 
            transform:translate(20px , 20px); 
        }
    </style>`,
    code:`      <h1>The transform : translate </h1>
    <div class="box">
      <div class="box_contain1"></div>
    </div>`
    }
    const codeExemple4= { 
      head:`  
      <style> 
          .box{ 
            background-color: red; 
            width:200px;  
            height:200px; 
            border:3px solid black; 
            margin: 100px auto; 
            padding: 7px;
            box-sizing: border-box; 
          }
          .box_contain2{  
            background-color: yellow;  
            width: 180px;  
            height:180px; 
            transform : translate(20px , -20px);
          }
      </style>`,
      code:`      <h1>The transform : translate </h1>
      <div class="box">
        <div class="box_contain2"></div>
      </div>`
      }

    const codeExemple9= { 
    head:`  
    <style> 
      .box2{ 
        background-color:red; width:320px;  height:160px;
        border:3px solid black; margin:100px auto;padding: 7px; box-sizing:border-box;
      }
      .box_contain3{ 
        background-color:yellow; width:300px; height:140px;
      }
      .a2{ transform : skewX(30deg); }
      .b2{ transform: skewX(-30deg);}
    </style>`,
    code:`      <h1>The transform : skewX </h1>
      <div class="box2">
        <div class="box_contain3 a2"> content </div>
      </div>
      <div class="box2">
        <div class="box_contain3 b2"> content </div>
      </div> `
    }

  const codeExemple10= { 
    head:`  
    <style> 
        .BOX_DIV{ 
          background-color:red; width:320px;  height:160px; border:3px solid black; margin:100px auto; padding:7px; box-sizing:border-box;
        }
        .BOX_contain{ background-color: yellow; width: 300px; height:140px; }
        .a3{ transform : skewY(-20deg); }
        .b3{ transform: skewY(20deg); }
    </style>`,
    code:`      <h1>The transform : skewY </h1>
    <div class="BOX_DIV">
      <div class="BOX_contain a3"> 
        content
      </div>
    </div>
    <div class="BOX_DIV">
      <div class="BOX_contain b3">
        content  
      </div>
    </div> `
  }
  const codeExemple11= { 
    head:`  
    <style> 
        .div {
          width: 300px;
          height: 100px;
          background-color: yellow;
          border: 1px solid black;
          margin: auto;
        }

        .div-skew {
          transform: skew(20deg, 10deg);
          margin-bottom: 90px;
        }
    </style>`,
    code:`      <h1>The transform : skew </h1>
    <p>The skew() method skews the element to a specific angle.</p>
    <div className="div">This a normal div element.</div>
    <div className="div div-skew">This div element is skewed 20 degrees along the X-axis, and 10 degrees along the Y-axis.</div>   `
  }
    const [selectedValue1, setSelectedValue1] = useState("none");
    const resultRef1 = useRef()
    const inputRef1 = useRef()
    const handleTransform1 = (event) => {
      const { value } = event.target;
      setSelectedValue1(value);
      resultRef1.current.style.transform = value
    };

    const [selectedValue2, setSelectedValue2] = useState("none");
    const resultRef2 = useRef()
    const inputRef2 = useRef()
    const handleTransform2 = (event) => {
      const { value } = event.target;
      setSelectedValue2(value);
      resultRef2.current.style.transform = value
    };
    
    const [selectedValue3, setSelectedValue3] = useState("none");
    const resultRef3 = useRef()
    const inputRef3 = useRef()
    const handleTransform3 = (event) => {
      const { value } = event.target;
      setSelectedValue3(value);
      resultRef3.current.style.transform = value
    };

    const [selectedValue4, setSelectedValue4] = useState("none");
    const resultRef4 = useRef()
    const inputRef4 = useRef()
    const handleTransform4 = (event) => {
      const { value } = event.target;
      setSelectedValue4(value);
      resultRef4.current.style.transform = value
    };

    useEffect(() => {
      inputRef1.current.click();
      inputRef2.current.click();
      inputRef3.current.click();
      inputRef4.current.click();
    }, []);
  return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Transform </h1>
    <article className="mt-5">
        <h2 className="title-h2"> 1. transform </h2>
        <p className="style_divv">
            تطبق خاصية <b>transform</b>  تحويلًا ثنائي الأبعاد أو ثلاثي الأبعاد على عنصر .<br/>
            تتيح لك هذه الخاصية تدوير العناصر وقياسها ونقلها وإمالتها وما إلى ذلك
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. الدالة translate </h2>
        <p className="style_divv">
            من خلال إعطاء الخاصية <b>transform</b> الدالة <b>translate</b> يمكنك التحكم في مكان وضع عنصر <b>HTML</b> في صفحتك .<br/>
            تقبل القيمة <b>translate</b> تلات قيم وهي كتالي :
            <ul>
                <li><b>translateX</b> : <bdi> تستعمل لتحكم بمكان عرض موقعك من ناحية ال <b>width</b> وتستقبل قيمة واحدة </bdi>.</li>
                <li><b>translateY</b> : <bdi> تستعمل لتحكم بمكان عرض موقعك من ناحية ال <b>height</b> وتستقبل قيمة واحدة </bdi>.</li>
                <li><b>translate</b>:  <bdi> تستعمل لتحكم بمكان عرض موقعك من ناحية ال <b>width</b> و <b>height</b> وتستقبل قيمتين .</bdi>.</li>
            </ul>
        </p>
        <h3  className="title-h3">1.  الدالة translateX</h3>
        <div className="mital">متال  :  </div>
        <ul><li>لاحض أنه من خلال القيمة <b>translateX</b> يمكن التحكم بمكان عرض العنصر على مستوى العرض  .</li></ul> 
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Transform" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Transform' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-transform-ex1-header"></div>
        </Result>
        <h3 className="title-h3">2.  الدالة translateY</h3>
        <div className="mital"> متال  :  </div>
        <ul><li>لاحض أنه من خلال الدالة <b>translateY</b> يمكن التحكم بمكان عرض العنصر على مستوى الطول . </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Transform" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Transform' styleAdd='css-transform-ex2-styleAdd'  logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-transform-ex2-header"></div>
        </Result>
        <h3 className="title-h3">3.  الدالة translate </h3>
        <div className="mital"> متال 1 :  </div>
        <ul><li>لاحض أنه من خلال الدالة <b>translate</b>  يمكن التحكم بمكان عرض العنصر على مستوى الطول و العرض . </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="CSS Transform" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Transform' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
          <h1>The transform : translate </h1>
          <div className="css-transform-ex3-box">
            <div className="css-transform-ex3-box_contain1"></div>
          </div>
        </Result>
        <div className="mital"> متال 2 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} head={codeExemple4.head} language="html" is_html={true} title="CSS Transform" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Transform' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>The transform : translate </h1>
            <div className="css-transform-ex4-box">
              <div className="css-transform-ex4-box_contain2"></div>
            </div>
        </Result>        
    </article>
    <article>
        <h2 className="title-h2">3. الدالة scale</h2>
        <h5  className="mt-2">1. الدالة  scale </h5>
        <p className="style_divv">
            تقوم الدالة  <b>scale</b> بتحكم في حجم العنصر .<br/>
            القيمة الإفتراضية للدالة  <b>scale</b> هي <kbd>transform :scale(1,1)</kbd>  على صيغة <bdi><b>scale(x,y)</b></bdi>.<br/>
            تمتل القيمة <b>x</b> من الدالة   <bdi><b>scale(x,y)</b></bdi> الدالة <bdi><b>scaleX()</b></bdi> .<br/>
            تمتل القيمة <b>y</b> من الدالة   <bdi><b>scale(x,y)</b></bdi> الدالة <bdi><b>scaleY()</b></bdi> .<br/>
            <ul>
              <li> عند إعطاء القيمة <b>x</b> أو <b>y</b> قيمة أكبر من 1 سيتم زيادة حجم العنصر . </li>
              <li> القيمة 2 تعني مضاعفة الحجم أي <b>200%</b> . </li>
              <li> عند إعطاء القيمة <b>x</b> أو <b>y</b> قيمة أصغر من 1 سيتم تقليص  حجم العنصر . </li>
              <li> القيمة 0.5 تعني مضاعفة الحجم أي <b>50%</b> .</li>
            </ul>
        </p>
        <div className="mital"> متال توضيحي تفاعلي  : </div> 
        <InteractivCss 
          property="transform" 
          value={selectedValue1}
          classParent="css-transform3d-parent"
          classChild="css-transform3d-child"  
          resultRef={resultRef1}
          textInResult="Hello Word"
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef1} onChange={handleTransform1} checked={selectedValue1 === 'none'} value="none" /> &nbsp; none</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform1} checked={selectedValue1 === 'scale(1.1,1.1)'} value="scale(1.1,1.1)"/> &nbsp; scale(1.1,1.1) </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform1} checked={selectedValue1 === 'scale(1.5,1.5)'} value="scale(1.5,1.5)"/> &nbsp; scale(1.5,1.5) </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform1} checked={selectedValue1 === 'scale(2,2)'} value="scale(2,2)"/> &nbsp; scale(2,2)</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform1} checked={selectedValue1 === 'scale(2.5,2)'} value="scale(2.5,2)"/> &nbsp; scale(2.5,2)</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform1} checked={selectedValue1 === 'scale(0.5,2)'} value="scale(0.5,2)"/> &nbsp; scale(0.5,2)</li>
            </ul>
        </InteractivCss>

       
        <h5 className="mt-2">3. الدالة  scaleX </h5>
        <p className="style_divv">
            تستخدم الخاصية <b>scaleX</b> بتحكم بحجم العنصر  على مستوى العرض فقط .<br/>
        </p>
        <div className="mital"> متال توضيحي تفاعلي  : </div> 
        <InteractivCss 
          property="transform" 
          value={selectedValue2}
          classParent="css-transform-ex6-parent"
          classChild="css-transform-ex6"  
          resultRef={resultRef2}
          textInResult="Hello Word"
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef2} onChange={handleTransform2} checked={selectedValue2 === 'none'} value="none" /> &nbsp; none</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform2} checked={selectedValue2 === 'scaleX(1.2)'} value="scaleX(1.2)"/> &nbsp; scaleX(1.2) </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform2} checked={selectedValue2 === 'scaleX(1.5)'} value="scaleX(1.5)"/> &nbsp; scaleX(1.5) </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform2} checked={selectedValue2 === 'scaleX(2)'} value="scaleX(2)"/> &nbsp; scaleX(2)</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform2} checked={selectedValue2 === 'scaleX(2.5)'} value="scaleX(2.5)"/> &nbsp; scaleX(2.5)</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform2} checked={selectedValue2 === 'scaleX(0.5)'} value="scaleX(0.5)"/> &nbsp; scaleX(0.5)</li>
            </ul>
        </InteractivCss>

        <h5  className="mt-2">2. الدالة  scaleY </h5>
        <p className="style_divv">
            تستخدم الخاصية <b>scaleY</b> بتحكم بحجم العنصر  على مستوى الطول فقط .<br/>
        </p>
        <div className="mital"> متال توضيحي تفاعلي  : </div> 
        <InteractivCss 
          property="transform" 
          value={selectedValue3}
          classParent="css-transform-ex7-parent"
          classChild="css-transform-ex7"  
          resultRef={resultRef3}
          textInResult="Hello Word"
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef3} onChange={handleTransform3} checked={selectedValue3 === 'none'} value="none" /> &nbsp; none</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3} checked={selectedValue3 === 'scaleY(1.1)'} value="scaleY(1.1)"/> &nbsp; scaleY(1.1) </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3} checked={selectedValue3 === 'scaleY(1.5)'} value="scaleY(1.5)"/> &nbsp; scaleY(1.5) </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3} checked={selectedValue3 === 'scaleY(2)'} value="scaleY(2)"/> &nbsp; scaleY(2)</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3} checked={selectedValue3 === 'scaleY(2.1)'} value="scaleY(2.1)"/> &nbsp; scaleY(2.1)</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3} checked={selectedValue3 === 'scaleY(0.5)'} value="scaleY(0.5)"/> &nbsp; scaleY(0.5)</li>
            </ul>
        </InteractivCss>
    </article>
    <article>
        <h2 className="title-h2">4- الدالة rotate </h2>
        <p className="style_divv">
          تحدد الدالة <bdi><b>rotate()</b></bdi>  التحويل الذي يحرك عنصرًا حول نقطة ثابتة (محددة بواسطة خاصية تحويل الأصل) دون تشويهه (أي تطبيق دوران مستوي). إنه دوران حول هذه النقطة. بشكل افتراضي ، هذا الأصل يتوافق مع مركز العنصر.
        </p>
        <div className="mital"> متال توضيحي تفاعلي  : </div> 
        <InteractivCss 
          property="transform" 
          value={selectedValue4}
          classParent="css-transform-ex8-parent"
          classChild="css-transform-ex8"  
          resultRef={resultRef4}
          textInResult="Hello Word"
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef4} onChange={handleTransform4} checked={selectedValue4 === 'rotate(0deg)'} value="rotate(0deg)" /> &nbsp; rotate(0deg)</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform4} checked={selectedValue4 === 'rotate(10deg)'} value="rotate(10deg)"/> &nbsp; rotate(10deg) </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform4} checked={selectedValue4 === 'rotate(40deg)'} value="rotate(40deg)"/> &nbsp; rotate(40deg) </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform4} checked={selectedValue4 === 'rotate(80deg)'} value="rotate(80deg)"/> &nbsp; rotate(80deg) </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform4} checked={selectedValue4 === 'rotate(120deg)'} value="rotate(120deg)"/> &nbsp; rotate(120deg) </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform4} checked={selectedValue4 === 'rotate(160deg)'} value="rotate(160deg)"/> &nbsp; rotate(160deg) </li>              
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform4} checked={selectedValue4 === 'rotate(200deg)'} value="rotate(200deg)"/> &nbsp; rotate(200deg) </li>              
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform4} checked={selectedValue4 === 'rotate(240deg)'} value="rotate(240deg)"/> &nbsp; rotate(240deg) </li>              
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform4} checked={selectedValue4 === 'rotate(280deg)'} value="rotate(280deg)"/> &nbsp; rotate(280deg) </li>              
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform4} checked={selectedValue4 === 'rotate(320deg)'} value="rotate(320deg)"/> &nbsp; rotate(320deg) </li>              
                <li><input type="checkbox" name="bo-sh6" onChange={handleTransform4} checked={selectedValue4 === 'rotate(360deg)'} value="rotate(360deg)"/> &nbsp; rotate(360deg) </li>              
            </ul>
        </InteractivCss>
    </article>
    <article>
        <h2 className="title-h2">5. الدالة skew </h2>
        <p className="style_divv">
          تحدد دالة الانحراف <bdi><b>skew()</b></bdi>  في لغة CSS التحويل الذي يؤدي إلى انحراف عنصر على المستوى ثنائي الأبعاد . <br/>
          تقوم طريقة <bdi><b>skew()</b></bdi> بإمالة عنصر على طول المحور <b>X</b> و <b>Y</b> بالزوايا المعطاة.<br/>
        </p>
        <h3 className="title-h3">1. skewX </h3>
        <div className="mital"> متال  : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple9.code} head={codeExemple9.head} language="html" is_html={true} title="CSS Transform" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Transform' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
          <h1>The transform : skewX </h1>
          <div className="css-transform-ex9-box2">
            <div className="css-transform-ex9-box_contain3 css-transform-ex9-a2"> content </div>
          </div>
          <div className="css-transform-ex9-box2">
            <div className="css-transform-ex9-box_contain3 css-transform-ex9-b2"> content </div>
          </div>      
        </Result>
        
        <h3 className="title-h3">2. skewY</h3>
        <div className="mital"> متال  : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple10.code} head={codeExemple10.head} language="html" is_html={true} title="CSS Transform" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Transform' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
          <h1>The transform : skewY </h1>
          <div className="css-transform-ex10-BOX_DIV">
            <div className="css-transform-ex10-BOX_contain css-transform-ex10-a3"> 
              content
            </div>
          </div>
          <div className="css-transform-ex10-BOX_DIV">
            <div className="css-transform-ex10-BOX_contain css-transform-ex10-b3">
              content  
            </div>
          </div>     
        </Result>
        <h3 className="title-h3">3. skew</h3>
        <div className="mital">متال :</div>
        <ul><li>المثال التالي يحرف العنصر <kbd>&lt;div&gt;</kbd> بمقدار 20 درجة على طول المحور X ، و 10 درجات على طول المحور Y:</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple11.code} head={codeExemple11.head} language="html" is_html={true} title="CSS Transform" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Transform' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
          <h1>The transform : skew </h1>
          <p>The skew() method skews the element to a specific angle.</p>
          <div className="css-transform-ex11-div">This a normal div element.</div>
          <div className="css-transform-ex11-div css-transform-ex11-div-skew">This div element is skewed 20 degrees along the X-axis, and 10 degrees along the Y-axis.</div>   
        </Result>
    </article>
</section>
  )
}