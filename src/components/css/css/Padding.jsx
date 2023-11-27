import { useState , useRef, useEffect} from "react";
import { CodeHighlighter , Result , InteractivCss} from "../../path";
import images from "../imagesCss";
import "./Padding.css"

export default function Padding(props){
    const codeExemple1= { 
    head:`  
    <style> 
         h2 {
           color: blue;
         }
         div {
           border: 1px solid black;
           padding: 20px 20px;
         } 
    </style>`,
    code:`    <h2>Title 1</h2>
    <div>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </div>`
    }

    
    const codeExemple2= { 
    head:`  
    <style> 
        h2 {
            color: blue;
            padding-top: 90px;
        }
        div {
            border: 1px solid black;
            padding-left: 25px;
            padding-right: 9px;
            padding-bottom: 76px;
            padding-top: 0px;
        } 
    </style>`,
    code:`    <h2>Title 1</h2>
    <div>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </div>`
    }
    const codeExemple3= { 
    head:`  
    <style> 
         div {
           border: 1px solid black;
           padding: 40px ;
         } 
    </style>`,
    code:`
    <div>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </div>
    <div>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </div>
    `
    }
       
    const [selectedValue, setSelectedValue] = useState("30px");
    const resultRef = useRef()
    const inputRef = useRef()
    const handlePadding = (event) => {
      const { value } = event.target;
      setSelectedValue(value);
      resultRef.current.style.padding = value
    };
    useEffect(() => {
        inputRef.current.click();
      }, []);
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Padding </h1>
    <article>
        <h2 className="title-h2"> 1 - الجوانب الداخلية -  padding </h2>
        <div className="style_divv mt-5">
            يتم استخدام الخاصية <b>padding</b> في لغة  <b>CSS</b> لإنشاء مساحة حول محتوى عنصر داخل <b>border</b> في عنصر محدد .<br/>
            مع <b>CSS</b>، لديك السيطرة الكاملة على <b>padding</b> . توجد خصائص لإعداد <b>padding</b> لكل جانب من عناصر (أعلى، يمين، أسفل، ويسارا).
        </div>
        <div className="sum_exemple_style">
            <div className="mital">متال :  </div>
            <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" title="CSS Padding" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS Padding' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <h2 className="css-padding-ex1-h2">Title 1</h2>
                <div className="css-padding-ex1-div">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                </div>
            </Result>
        </div>
        <ul>
            <li> في المتال أعلاه نلاحض أنه تم إعطاء قيمتين لل <b>padding</b> .</li>
            <li> القيمة الأولى تشمل <b>padding-top</b> و <b>padding-bottom</b> .</li>
            <li> القيمة التانية تخص <b>padding-left</b> و <b>padding-right</b>.</li>
        </ul>
    </article>
    <article>
        <h2 className="title-h2"> 2 - الجوانب الفردية -  padding </h2>
        <div className="style_divv">
            CSS له خصائص لتحديد <b>padding</b>  لكل جانب من العناصر :<br/>
            <ul>
                <li><b>padding-top</b></li>
                <li><b>padding-right</b></li>
                <li><b>padding-bottom</b></li>
                <li><b>padding-left</b></li>
            </ul>
        </div>
        <div className="mital">متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} head={codeExemple2.head} language="html" title="CSS Padding" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Padding' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h2 className="css-padding-ex2-h2">Title 1</h2>
            <div className="css-padding-ex2-div">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </div>
        </Result>
        
        <div className="mital">متال 2 :  </div>
        <ul><li>إذا كان للخاصية padding قيمة واحدة فجميع  لجوانب سوف تأخد تلك القيمة .</li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple3.code} head={codeExemple3.head} language="html" title="CSS Padding" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Padding' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="css-padding-ex3-div">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </div>
            <div className="css-padding-ex3-div">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </div>
        </Result>
    </article>
    <article>
        <div className="mital">3. متال تفاعلي توضيحي  </div> 
        <InteractivCss 
          property="padding" 
          value={selectedValue}
          classChild="css-padding-ex4"  
          resultRef={resultRef}
          textInResult="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere dolor exercitationem repellat dolore ."
        >
              <ul className="p-0">
                  <li><input type="checkbox" name="bo-sh6" ref={inputRef} onChange={handlePadding} checked={selectedValue === '30px'} value="30px" /> &nbsp; 30px</li>
                  <li><input type="checkbox" name="bo-sh6" onChange={handlePadding} checked={selectedValue === '1rem'} value="1rem"/> &nbsp; 1rem </li>
                  <li><input type="checkbox" name="bo-sh6" onChange={handlePadding} checked={selectedValue === '4% 0'} value="4% 0"/> &nbsp; 4% 0 </li>
                  <li><input type="checkbox" name="bo-sh6" onChange={handlePadding} checked={selectedValue === '0 4%'} value="0 4% "/> &nbsp; 0 4% </li>
                  <li><input type="checkbox" name="bo-sh6" onChange={handlePadding} checked={selectedValue === '10px 50px 20px'} value="10px 50px 20px"/> &nbsp; 10px 50px 20px</li>
                  <li><input type="checkbox" name="bo-sh6" onChange={handlePadding} checked={selectedValue === '10px 50px 30px 0'} value="10px 50px 30px 0"/> &nbsp; 10px 50px 30px 0 </li>
                  <li><input type="checkbox" name="bo-sh6" onChange={handlePadding} checked={selectedValue === '0px 60px'} value="0px 60px"/> &nbsp; 0px 60px </li>
                  <li><input type="checkbox" name="bo-sh6" onChange={handlePadding} checked={selectedValue === '0'} value="0"/> &nbsp; 0 </li>
              </ul>
        </InteractivCss>    
    </article>

</section>
    )
}