import { CodeHighlighter ,  Result , InteractivCss } from "../../path";
import images from "../imagesCss";
import { useState , useRef ,useEffect} from "react";
import "./Outline.css"

export default function Outline(props){
    const codeExemple1= { 
    head:`  
    <style> 
        #Paragragh {	
            border: 2px solid black;
            outline: #4CAF50 solid 10px;
            margin: auto;  
            padding: 20px;
            text-align: center;
            margin-top: 20px;
        }   
    </style>`,
    code:`      <p id="Paragragh">This element has a 2px black border and a green outline with a width of 10px.</p>`
    }
    const codeExemple2= { 
    head:`  
    <style> 
        .div{font-size: larger; border: 1px solid black; margin: 3px 25px}
        div.eX1 { outline-style: solid; outline-color: red; outline-width: thin;}
        div.eX2 { outline-style: solid; outline-color: red; outline-width: medium;}
        div.eX3 { outline-style: solid; outline-color: red; outline-width: thick;}
        div.eX4 { outline-style: solid; outline-color: red; outline-width: 20px;}
    </style>`,
    code:`      <div class="div eX1">A thin outline.</div><br/><br/>
    
      <div class="div eX2">A medium outline.</div><br/><br/>
    
      <div class="div eX3">A thick outline.</div><br/><br/>
    
      <div class="div eX4">A 20px thick outline.</div><br/><br/>`
    }
    const codeExemple3= { 
    head:`  
    <style> 
        .P {outline-color:red; outline-width:3.5px ;}

        .dotted {outline-style: dotted;}
        .dashed {outline-style: dashed;}
        .solid { outline-style: solid;}
        .double {outline-style: double;}
        .groove {outline-style: groove;}
        .ridge { outline-style: ridge;}
        .inset { outline-style: inset;}
        .outset {outline-style: outset;}
    </style>`,
    code:`      <p class="P dotted">A dotted outline</p>
      <p class="P dashed">A dashed outline</p>
      <p class="P solid">A solid outline</p>
      <p class="P double">A double outline</p>
      <p class="P groove">A groove outline. </p>
      <p class="P ridge">A ridge outline. </p>
      <p class="P inset">An inset outline.</p>
      <p class="P outset">An outset outline.</p>`
    }
    const codeExemple4= { 
    head:`  
    <style> 
        p{ border: 4px solid brown; font-size: larger; }
        .P1 { outline-color: green;  outline-width:6.5px; outline-style: solid;}
        .P2 { outline-color: black;  outline-width:6.5px; outline-style: solid;}
        .P3 { outline-color: yellow; outline-width:6.5px; outline-style: solid;}
    </style>`,
    code:`      <p class="P1">outline-color green</p>
      <p class="P2">outline-color black</p>
      <p class="P3">outline-color yellow</p>`
    }

    const codeExemple5= { 
    head:`  
    <style> 
        p {
            font-size: larger;
            margin: 30px;
            padding: 9px;
            background: yellow;
            border: 2px solid green;
            outline: 4px solid red;
            outline-offset: 16px;
        }
    </style>`,
    code:`      <p>outline-offset with 16px.</p>`
    }

    const [selectedValue, setSelectedValue] = useState("thin");
    const resultRef = useRef()
    const inputRef = useRef()
    const handleOutline = (event) => {
      const { value } = event.target;
      setSelectedValue(value);
      resultRef.current.style.outlineWidth = value
    };
    
    useEffect(() => {
      inputRef.current.click();
    }, []);


    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Outline </h1>
    <article>
        <h2 className="title-h2">1. الخاصية outline </h2>
        <p className="style_divv">
            تحدد الخاصية <b>outline</b>  خط مرسوم خارج <b>border</b>  العنصر وهي إختصار للخصائص التالية والتي سنتعلم حولها خلال هذا البرنامج تعليمي :
            <ul dir="ltr">
                <li><b>outline-width</b></li>
                <li><b>outline-style</b></li>
                <li><b>outline-color</b></li>
            </ul>
        </p>
        
        <div className="mital"> متال : </div>
        <ul><li> لا يهم ترتيب العناصر </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Outline" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Outline' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <p id="css-outline-ex1">This element has a 2px black border and a green outline with a width of 10px.</p>
        </Result>
        <div className="mital">رسم توضيحي   </div>
        <img src={images.css39_outline2} className="img"/>
    </article>    
    <article>
        <h2 className="title-h2">2. الخاصية outline-width </h2>
        <p className="style_divv">
            تحدد خاصية <b>outline-width</b> عرض الخط الخارجي ، ويمكن أن تحتوي على إحدى القيم التالية :
            <ul>
                <li><b>thin</b> (عادةً 1 بكسل) </li>
                <li><b>medium</b> متوسط ​​(عادةً 3 بكسل)</li>
                <li><b>thick</b> سميك (عادةً 5 بكسل)</li>
                <li>  حجم محدد (in px, pt, cm, em, ..) </li>
            </ul>
        </p>
        <InteractivCss 
          property="outline-width" 
          value={selectedValue}
          classParent="css-outline-width-classParent"
          classChild="css-outline-classChild"  
          resultRef={resultRef}
          textInResult="outline"
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef} onChange={handleOutline} checked={selectedValue === 'thin'} value="thin" /> &nbsp; thin</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleOutline} checked={selectedValue === 'medium'} value="medium"/> &nbsp; medium </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleOutline} checked={selectedValue === 'thick'} value="thick"/> &nbsp; thick </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleOutline} checked={selectedValue === '9px'} value="9px"/> &nbsp; 9px</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleOutline} checked={selectedValue === '1.2rem'} value="1.2rem"/> &nbsp; 1.2rem</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleOutline} checked={selectedValue === '22px'} value="22px"/> &nbsp; 22px</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleOutline} checked={selectedValue === '2rem'} value="2rem"/> &nbsp; 2rem</li>
            </ul>
        </InteractivCss>
        <div className="mital"> متال 2 : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Outline" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Outline' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div class="css-outline-ex2-div css-outline-ex2-1">A thin outline.</div><br/><br/>
            <div class="css-outline-ex2-div css-outline-ex2-2">A medium outline.</div><br/><br/>
            <div class="css-outline-ex2-div css-outline-ex2-3">A thick outline.</div><br/><br/>
            <div class="css-outline-ex2-div css-outline-ex2-4">A 20px thick outline.</div><br/><br/>
        </Result>        
    </article>
    <article>
        <h2 className="title-h2">3. الخاصية outline-style </h2>
        <p className="style_divv">
            تحدد الخاصية <b>outline-style</b> نمط المخطط التفصيلي ، ويمكن أن تحتوي على إحدى القيم التالية :
            <ul>
                <li><b>dotted</b> :  يحدد مخططًا منقطًا</li>
                <li><b>dashed</b> : يحدد مخططًا متقطعًا </li>
                <li><b>solid</b> : يحدد مخططًا متصل </li>
                <li><b>double</b> : يحدد مخططًا مزدوجًا</li>
                <li><b>groove</b> :  يحدد مخططًا مجوفًا ثلاثي الأبعاد </li>
                <li><b>ridge</b> : يحدد مخططًا ثلاثي الأبعاد ممتلئًا</li>
                <li><b>inset</b> : يحدد مخططًا داخليًا ثلاثي الأبعاد </li>
                <li><b>outset</b> :  تحدد مخططًا خارجيًا ثلاثي الأبعاد</li>
                <li><b>none</b> : عدم تحديد مخطط تفصيلي</li>
                <li><b>hidden</b> : يحدد مخططًا مخفيًا</li>
            </ul>
        </p>
        
        <div className="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} head={codeExemple3.head} language="html" is_html={true} title="CSS Outline" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Outline' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <p className="css-outline-ex3-P css-outline-ex3-dotted">A dotted outline</p>
        	<p className="css-outline-ex3-P css-outline-ex3-dashed">A dashed outline</p>
        	<p className="css-outline-ex3-P css-outline-ex3-solid">A solid outline</p>
        	<p className="css-outline-ex3-P css-outline-ex3-double">A double outline</p>
        	<p className="css-outline-ex3-P css-outline-ex3-groove">A groove outline. </p>
        	<p className="css-outline-ex3-P css-outline-ex3-ridge">A ridge outline. </p>
        	<p className="css-outline-ex3-P css-outline-ex3-inset">An inset outline.</p>
        	<p className="css-outline-ex3-P css-outline-ex3-outset">An outset outline.</p>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">4. الخاصية outline-color </h2>
        <p className="style_divv">
            تحدد الخاصية <b>outline-color</b> لون الخط الخارجي 
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple4.code} head={codeExemple4.head} language="html" is_html={true} title="CSS Outline" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Outline' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <p className="css-outline-ex4-p css-outline-ex4-P1">outline-color green</p>
            <p className="css-outline-ex4-p css-outline-ex4-P2">outline-color black</p>
            <p className="css-outline-ex4-p css-outline-ex4-P3">outline-color yellow</p>
        </Result>
        
    </article>
    <article>
        <h2 className="title-h2">5. الخاصية outline-offset </h2>
        <p className="style_divv">
            تسمخ الخاصية <b>outline-offset</b> بإنشاء فراغ بين الخط الخرجي <b>outline</b> و الحد  <b>border</b>
        </p>

        <div className="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple5.code} head={codeExemple5.head} language="html" is_html={true} title="CSS Outline" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Outline' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <p className="css-outline-ex5">outline-offset with 16px.</p>
        </Result>
    </article>

</section>
)
}