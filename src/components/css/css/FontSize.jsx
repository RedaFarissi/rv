import { CodeHighlighter ,  Result , InteractivCss} from "../../path";
import images from "../imagesCss";
import { useState , useRef ,useEffect} from "react";
import "./FontSize.css"

export default function FontSize(props){
    const codeExemple1= { 
        css:`.a {   font-size: xx-small; } 
.b {  font-size: x-small;  }  
.c { font-size: small;  }  
.d { font-size: medium;  }  
.e { font-size: large;  }
.f { font-size: x-large;  }
.g { font-size: xx-large;  }
.h { font-size: xxx-large;   }`,
        head:`  
    <link rel="stylesheet" href="./index.css">`,
        code:`      <div class="a">xx-small</div>
    <div class="b">x-small</div>
    <div class="c">small</div>
    <div class="d">medium</div>
    <div class="e">large</div>
    <div class="f">x-large</div>
    <div class="g">xx-large</div>
    <div class="h">xxx-large</div>`
    }
    const codeExemple2= { 
        css:`.parent{
    font-size: 36px;
}
.half{
    font-size: 50%;
}
.multiple{
    font-size: 200%;
}`,
        head:`  
    <link rel="stylesheet" href="./index.css">`,
        code:`      <div class="parent">
            <p> Default size: (36px)</p>
            <span class="half"> 50% (18px)</span>
            <span class="multiple"> 200% (72px)</span>
        </div>`
    }
    const [selectedValue, setSelectedValue] = useState("30px");
    const resultRef = useRef()
    const inputRef = useRef()
    const handleBordeRadius = (event) => {
      const { value } = event.target;
      setSelectedValue(value);
      resultRef.current.style.fontSize = value
    };
    
    useEffect(() => {
      inputRef.current.click();
    }, []);
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Font-Size </h1>
    <article>
        <p className="style_divv mt-5">
            <b>font-size</b> هو الخاصية <b>CSS</b> التي تتحكم في حجم الخط على صفحة ويب. هناك العديد من القيم المختلفة التي يمكنك استخدامها لتعريف الخاصية <b>font-size</b> . نلقي نظرة على المثال أدناه، والذي يتضمن قيم ووحدات مختلفة يمكنك استخدامها في <b>CSS</b>.<br/>تقدم هذه القيم أساليب مختلفة لتحديد حجم الخط على صفحة الويب الخاصة بك .
        </p>
        <div className="sum_exemple_style">
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.css" code={codeExemple1.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" title="CSS Font-Size" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Font-Size' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <div className="css-font-size-ex1-a">xx-small</div>
            <div className="css-font-size-ex1-b">x-small</div>
            <div className="css-font-size-ex1-c">small</div>
            <div className="css-font-size-ex1-d">medium</div>
            <div className="css-font-size-ex1-e">large</div>
            <div className="css-font-size-ex1-f">x-large</div>
            <div className="css-font-size-ex1-g">xx-large</div>
            <div className="css-font-size-ex1-h">xxx-large</div>
        </Result>
        </div>
        <ul>
            <li>لنفترض أن <kbd>&lt;div&gt;</kbd> الذي تم تعيينه إلى 36px  يحتوي على <kbd>&lt;p&gt;</kbd> وعنصرين <kbd>&lt;span&gt;</kbd>. يتم تعيين حجم الخط من <kbd>&lt;span&gt;</kbd>  إلى 50٪ و 200٪ على التوالي. ثم <kbd>&lt;span&gt;</kbd> بكسل 18  مع قيمة 50 ٪   و <kbd>&lt;span&gt;</kbd> مع قيمة 200 ٪ سيكون 72px. إليك كيف يبدو هذا الرمز في العمل:</li>
        </ul>
        <div className="mital">متال 2 :  </div>
        <CodeHighlighter file_name="index.css" code={codeExemple2.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" title="CSS Font-Size" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Font-Size' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <div className="css-font-size-ex2-parent">
                <p> Default size: (36px)</p>
                <span className="css-font-size-ex2-half"> 50% (18px)</span>
                <span className="css-font-size-ex2-multiple"> 200% (72px)</span>
            </div>
        </Result>
    </article>
    <article>
        <div className="mital"> متال توضيحي تفاعلي  : </div> 
        <InteractivCss 
          property="font-size" 
          value={selectedValue}
          classParent="css-font-size-ex3-parent"
          classChild="css-font-size-ex3"  
          resultRef={resultRef}
          textInResult="font-size"
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef} onChange={handleBordeRadius} checked={selectedValue === '25px'} value="25px" /> &nbsp; 25px</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === '15px'} value="15px"/> &nbsp; 15px </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === '28px'} value="28px"/> &nbsp; 28px </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === '22px'} value="22px"/> &nbsp; 22px</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === '2rem'} value="2rem"/> &nbsp; 2rem</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === '3rem'} value="3rem"/> &nbsp; 3rem</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === '2pc'} value="2pc"/> &nbsp; 2pc</li>
            </ul>
        </InteractivCss>
    </article>
</section>
)
}