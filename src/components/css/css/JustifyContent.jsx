import { CodeHighlighter ,  Result , InteractivCss } from "../../path";
import { useState , useRef ,useEffect} from "react";
import images from "../imagesCss";
import "./JustifyContent.css"

export default function JustifyContent(props){
    const codeExemple1= { 
    head:`  
    <style> 
        #div {
            border: 2px solid black;
            display: flex;
            justify-content: flex-start;
        }
        #div > div {
            padding:  30px 45px;
            font-size: 45px;
            border:4px solid brown;
        }   
    </style>`,
    code:`      <div id="div">
        <div style="background-color: blue;">1</div>
        <div style="background-color: green;">2</div>
        <div style="background-color: violet;">3</div>
      </div>`
    }
    const codeExemple2= { 
    head:`  
    <style> 
        #div {
            border: 2px solid black;
            display: flex;
            justify-content: flex-end;
        }
        #div > div {
            padding:  30px 45px;
            font-size: 45px;
            border:4px solid brown;
        }   
    </style>`
    }
    const codeExemple3= { 
    head:`  
    <style> 
        #div {
            border: 2px solid black;
            display: flex;
            justify-content: center;
        }
        #div > div {
            padding:  30px 45px;
            font-size: 45px;
            border:4px solid brown;
        }   
    </style>`
    }
    const codeExemple4= { 
    head:`  
    <style> 
        #div {
            border: 2px solid black;
            display: flex;
            justify-content: space-between;
        }
        #div > div {
            padding:  30px 45px;
            font-size: 45px;
            border:4px solid brown;
        }   
    </style>`
    }
    const codeExemple5= { 
    head:`  
    <style> 
        #div {
            border: 2px solid black;
            display: flex;
            justify-content: space-around;
        }
        #div > div {
            padding:  30px 45px;
            font-size: 45px;
            border:4px solid brown;
        }   
    </style>`
    }
    const codeExemple6= { 
    head:`  
    <style> 
        #div {
            border: 2px solid black;
            display: flex;
            justify-content: space-evenly;
        }
        #div > div {
            padding:  30px 45px;
            font-size: 45px;
            border:4px solid brown;
        }   
    </style>`
    }
    const [selectedValue, setSelectedValue] = useState("flex-start");
    const resultRef = useRef()
    const inputRef = useRef()
    const handleJustifyContent = (event) => {
      const { value } = event.target;
      setSelectedValue(value);
      resultRef.current.style.justifyContent = value
    };
    
    useEffect(() => {
      inputRef.current.click();
    }, []);
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Justify-Content </h1>
    <article>
        <p className="style_divv mt-5">
            تقوم الخاصية <b>justify-content</b> بمحاذاة عناصر الحاوية المرنة عندما لا تستخدم العناصر كل المساحة المتوفرة على المحور الرئيسي (أفقيًا) .<br/>
            تستخدم الخاصية <b>justify-content</b> مع الخاصية <b>display</b> و القيمة <b>flex</b> وتستقبل القيم التالية :
            <ul dir="ltr">
                <li><b>justify-content : flex-start</b></li>
                <li><b>justify-content : flex-end</b></li>
                <li><b>justify-content : center</b></li>
                <li><b>justify-content : space-between</b></li>
                <li><b>justify-content : space-around</b></li>
                <li><b>justify-content : space-evenly</b></li>
            </ul>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. القيمة flex-start</h2>
        <p className="style_divv">
            القيمة الافتراضية. يتم وضع العناصر في بداية الحاوية 
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" title="CSS Justify-Content" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Justify-Content' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-justify-content-ex1-div">
                <div style={{backgroundColor:"blue"}}>1</div>
                <div style={{backgroundColor:"green"}}>2</div>
                <div style={{backgroundColor:"violet"}}>3</div>
            </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. القيمة flex-end</h2>
        <p className="style_divv">
            يتم وضع العناصر في نهاية الحاوية
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple2.head} language="html" title="CSS Justify-Content" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Justify-Content' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-justify-content-ex2-div">
                <div style={{backgroundColor:"blue"}}>1</div>
                <div style={{backgroundColor:"green"}}>2</div>
                <div style={{backgroundColor:"violet"}}>3</div>
            </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3. القيمة center</h2>
        <p className="style_divv">
            يتم وضع العناصر في وسط الحاوية      
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple3.head} language="html" title="CSS Justify-Content" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Justify-Content' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-justify-content-ex3-div">
                <div style={{backgroundColor:"blue"}}>1</div>
                <div style={{backgroundColor:"green"}}>2</div>
                <div style={{backgroundColor:"violet"}}>3</div>
            </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">4. القيمة space-between</h2>
        <p className="style_divv">
            العناصر سيكون لها مسافة بينهما     
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple4.head} language="html" title="CSS Justify-Content" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Justify-Content' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-justify-content-ex4-div">
                <div style={{backgroundColor:"blue"}}>1</div>
                <div style={{backgroundColor:"green"}}>2</div>
                <div style={{backgroundColor:"violet"}}>3</div>
            </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">5. القيمة space-around</h2>
        <p className="style_divv">
            سيكون للعناصر مسافة قبلها وفيما بينها وبعدها    
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple5.head} language="html" title="CSS Justify-Content" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Justify-Content' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-justify-content-ex5-div">
                <div style={{backgroundColor:"blue"}}>1</div>
                <div style={{backgroundColor:"green"}}>2</div>
                <div style={{backgroundColor:"violet"}}>3</div>
            </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">6. القيمة space-evenly</h2>
        <p className="style_divv">
            سيكون للعناصر مساحة متساوية حولها    
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple6.head} language="html" title="CSS Justify-Content" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Justify-Content' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-justify-content-ex6-div">
                <div style={{backgroundColor:"blue"}}>1</div>
                <div style={{backgroundColor:"green"}}>2</div>
                <div style={{backgroundColor:"violet"}}>3</div>
            </div>
        </Result>
    </article>
    <article>
        <div   div className="mital"> متال توضيحي تفاعلي  : </div> 
        <InteractivCss 
          property="justify-content" 
          value={selectedValue}
          textInResult={
                        <div id="Result" ref={resultRef}>
                            <div style={{backgroundColor:"violet"}}></div>
    	                  	<div style={{backgroundColor:"green"}}></div>
    	                  	<div style={{backgroundColor:"brown"}}></div> 
                        </div>
                        }
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef} onChange={handleJustifyContent} checked={selectedValue === 'flex-start'} value="flex-start" /> &nbsp; flex-start</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleJustifyContent} checked={selectedValue === 'flex-end'} value="flex-end"/> &nbsp; flex-end </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleJustifyContent} checked={selectedValue === 'center'} value="center"/> &nbsp; center </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleJustifyContent} checked={selectedValue === 'space-between'} value="space-between"/> &nbsp; space-between</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleJustifyContent} checked={selectedValue === 'space-evenly'} value="space-evenly"/> &nbsp; space-evenly</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleJustifyContent} checked={selectedValue === 'space-around'} value="space-around"/> &nbsp; space-around</li>
            </ul>
        </InteractivCss>
    </article>
</section>
)
}