import { CodeHighlighter ,  Result , InteractivCss} from "../../path";
import { useState , useRef ,useEffect} from "react";
import images from "../imagesCss";
import "./AlignItems.css"

export default function AlignItems(props){
    const codeExemple1= { 
    head:`  
    <style> 
        #div {
            border: 2px solid black;
            height: 400px;
            display: flex;
            align-items: stretch;
        }
        #div div {
            width: 15%;
            height: 90px;
        }   
    </style>`,
    code:`      <div id="div">
        <div style="background-color: blue;"></div>
        <div style="background-color: green;"></div>
        <div style="background-color: violet;"></div>
        <div style="background-color: red;"></div>
      </div>`
    }
    const codeExemple2= {
        head:`  
    <style>
        #div {
            border: 2px solid black;
            height: 400px;
            display: flex;
            align-items: start;
        }
        #div div {
            width: 15%;
            height: 90px;
        }
    </style>`
    }
    const codeExemple3= {
        head:`  
    <style>
        #div {
            border: 2px solid black;
            height: 400px;
            display: flex;
            align-items: center;
        }
        #div div {
            width: 15%;
            height: 90px;
        }
    </style>`
    }
    const codeExemple4= {
        head:`  
    <style>
        #div {
            border: 2px solid black;
            height: 400px;
            display: flex;
            align-items: end;
        }
        #div div {
            width: 15%;
            height: 90px;
        }
    </style>`
    }

    const [selectedValue, setSelectedValue] = useState("start");
    const resultRef = useRef()
    const inputRef = useRef()
    const handleAlignItems = (event) => {
      const { value } = event.target;
      setSelectedValue(value);
      resultRef.current.style.alignItems = value
    };
    
    useEffect(() => {
      inputRef.current.click();
    }, []);

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Align-Items </h1>
    <article>
        <p className="style_divv">
            تستخدم الخاصية <b>align-items</b> مع الخصية <b>display</b> والقيمة <b>flex</b> وتحدد مكان وضع العناصر بنسبة للإرتفاع .<br/>
            تستقبل الخاصية <b>align-items</b>  القيم التالية :<br/>
            <ul dir="ltr">
                <li><b>align-items: stretch</b></li>
                <li><b>align-items: start</b></li>
                <li><b>align-items: center</b></li>
                <li><b>align-items: end</b></li>
            </ul>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. القيمة  stretch</h2>
        <p className="style_divv">
            قيمة إفتراضية . يتم شد العناصر لتناسب الحاوية    
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" title="CSS Align-Items" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Align-Items' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-align-items-ex1-div">
                <div style={{backgroundColor:"blue"}}></div>
                <div style={{backgroundColor:"green"}}></div>
                <div style={{backgroundColor:"violet"}}></div>
                <div style={{backgroundColor:"red"}}></div>
            </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2. القيمة  start </h2>
        <p className="style_divv">
            يتم وضع العناصر في بداية الحاوية على المستوى العمودي  .
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple2.head} language="html" title="CSS Align-Items" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Align-Items' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-align-items-ex2-div">
                <div style={{backgroundColor:"blue"}}></div>
                <div style={{backgroundColor:"green"}}></div>
                <div style={{backgroundColor:"violet"}}></div>
                <div style={{backgroundColor:"red"}}></div>
            </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">3. القيمة  center </h2>
        <p className="style_divv">
            يتم وضع العناصر في وسط الحاوية على المستوى العمودي .
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple3.head} language="html" title="CSS Align-Items" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Align-Items' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-align-items-ex3-div">
                <div style={{backgroundColor:"blue"}}></div>
                <div style={{backgroundColor:"green"}}></div>
                <div style={{backgroundColor:"violet"}}></div>
                <div style={{backgroundColor:"red"}}></div>
            </div>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">4. القيمة  end </h2>
        <p className="style_divv">
            يتم وضع العناصر في نهاية الحاوية على مستوى الأفقي .
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple4.head} language="html" title="CSS Align-Items" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Align-Items' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div id="css-align-items-ex4-div">
                <div style={{backgroundColor:"blue"}}></div>
                <div style={{backgroundColor:"green"}}></div>
                <div style={{backgroundColor:"violet"}}></div>
                <div style={{backgroundColor:"red"}}></div>
            </div>
        </Result>
        <h2 className="mital"> متال تفاعلي توضيحي  </h2>
        <InteractivCss 
          property="align-items" 
          value={selectedValue}
          textInResult={
            <div id="css-align-items-ex5-Result" ref={resultRef}>
                <div className="bg-danger border border-3 border-primary p-2">div1 </div>
                <div className="bg-danger border border-3 border-primary p-2">div2 </div>
                <div className="bg-danger border border-3 border-primary p-2">div3 </div>
            </div> 
          }
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef} onChange={handleAlignItems} checked={selectedValue === 'start'} value="start" /> &nbsp; start</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleAlignItems} checked={selectedValue === 'end'} value="end"/> &nbsp; end </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleAlignItems} checked={selectedValue === 'center'} value="center"/> &nbsp; center </li>
            </ul>
        </InteractivCss>
    </article>
</section>
    )
}