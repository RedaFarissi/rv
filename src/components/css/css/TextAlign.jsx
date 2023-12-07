

import { CodeHighlighter ,  Result , InteractivCss } from "../../path";
import { useState , useRef , useEffect } from "react";
import images from "../imagesCss";
import "./TextAlign.css"


export default function TextAlign(props){
    const codeExemple1= { 
        css:`#h2 { text-align: center; color: red;}
p.date {text-align: right;}
p.main {text-align: justify;}`,
    head:`  
    <link rel="stylesheet" href="./index.css">`,
    code:`      <h2 id="h2">CSS text-align Example</h2>
    <p class="date">May, 2014</p>
    <p class="main">
      In my younger and more vulnerable years my father gave me some
      advice that I've been turning over in my mind ever since. 
      'Whenever you feel like criticizing anyone,' he told me, 
      'just remember that all the people in this world haven't had the advantages that you've had.'
    </p>
    <p>
      <b>Note:</b> Resize the browser window to see how the value "justify" works.
    </p>`
    }
    const [selectedValue, setSelectedValue] = useState("30px");
    const resultRef = useRef()
    const inputRef = useRef()
    const handleBordeRadius = (event) => {
      const { value } = event.target;
      setSelectedValue(value);
      resultRef.current.style.textAlign = value
    };
    
    useEffect(() => {
      inputRef.current.click();
    }, []);
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Text-Align </h1>
    <article>
        <p className="style_divv mt-5">
            تحدد خاصية <b>text-align</b>   المحاذاة الأفقية للنص في العنصر . بحيت يمكنك التحكم في العناصر فالخاصية <b>text-align</b> تمكنك من تحديد أين تريد عرض العنصر يمين أو اليسار أو وسط الصفحة
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.css" code={codeExemple1.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Text-Align" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Text-Align' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <h2 id="css-text-align-ex1-h2">CSS text-align Example</h2>
            <p className="css-text-align-ex1-date">May, 2014</p>
            <p className="css-text-align-ex1-main">
              In my younger and more vulnerable years my father gave me some
              advice that I've been turning over in my mind ever since. 
              'Whenever you feel like criticizing anyone,' he told me, 
              'just remember that all the people in this world haven't had the advantages that you've had.'
            </p>
            <p>
              <b>Note:</b> Resize the browser window to see how the value "justify" works.
            </p>
        </Result>        
    </article>
    <article>
        <div className="mital"> متال توضيحي تفاعلي  : </div> 
        <InteractivCss 
          property="text-align" 
          value={selectedValue}
          classParent="css-text-align-ex2-parent"
          classChild="css-text-align-ex2"  
          resultRef={resultRef}
          textInResult="text-align"
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef} onChange={handleBordeRadius} checked={selectedValue === 'left'} value="left" /> &nbsp; left</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === 'right'} value="right"/> &nbsp; right </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === 'center'} value="center"/> &nbsp; center </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === 'justify'} value="justify"/> &nbsp; justify</li>
            </ul>
        </InteractivCss>
    </article>
</section>
)
}

