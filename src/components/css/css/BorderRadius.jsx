import { useState , useRef ,useEffect} from "react";
import { CodeHighlighter ,  Result , InteractivCss} from "../../path";
import images from "../imagesCss";
import "./BorderRadius.css"


export default function BorderRadius(props){
  const [selectedValue, setSelectedValue] = useState("30px");
  const resultRef = useRef()
  const inputRef = useRef()
  const handleBordeRadius = (event) => {
    const { value } = event.target;
    setSelectedValue(value);
    resultRef.current.style.borderRadius = value
  };
  
  useEffect(() => {
    inputRef.current.click();
  }, []);
  
  const codeExemple= { 
    head:`  
   <style> 
       .img{
          border-radius: 50%;
        }    
   </style>`,
    code:`        <img src="./orange.jpg" width="40%" />
    <img src="./orange.jpg" width="40%" class="img"/>`
  }
  return(
    <section className="section-conetent">
  <h1 className="heading-style heading-style-css-color"> CSS Border-Radius </h1>
    <article>
        <p className="style_divv mt-5">
            تتيح لك خاصية <b>border-radius</b> تحديد الزوايا الدائرية لحدود العنصر. يتم تحديد الانحناء في كل زاوية بنصف قطر واحد أو اثنين من الانحناء مما يجعل من الممكن تحديد قوس لدائرة أو قوس من القطع الناقص.
           <br/> يمكنك إعطاء كل جانب من جوانب العنصر قيمة إنحناء . 
        </p>
        <div className="mital">متال 1 :</div>
        <CodeHighlighter file_name="index.html"code={codeExemple.code} head={codeExemple.head} language="html" is_html={true} title="CSS Border-Radius" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Border-Radius' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <img src={images.orange} width="40%"  />
            <img src={images.orange} width="40%" className="css-border-radius-ex2"/>
        </Result>
      </article>
      <article>
        <div className="mital">2. متال تفاعلي توضيحي  </div> 
        <InteractivCss 
          property="border-radius" 
          value={selectedValue}
          classParent="css-border-radius-ex1-parent"
          classChild="css-border-radius-ex1"  
          resultRef={resultRef}
          textInResult="border-radius"
        >
              <ul className="p-0">
                  <li><input type="checkbox" name="bo-sh6" ref={inputRef} onChange={handleBordeRadius} checked={selectedValue === '30px'} value="30px" /> &nbsp; 30px</li>
                  <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === '25% 10%'} value="25% 10%"/> &nbsp; 25% 10% </li>
                  <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === '10% 30% 50% 70%'} value="10% 30% 50% 70%"/> &nbsp; 10% 30% 50% 70% </li>
                  <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === '10% / 50%'} value="10% / 50%"/> &nbsp; 10% / 50%</li>
                  <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === '10px 100px'} value="10px 100px"/> &nbsp; 10px 100px </li>
                  <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === '50% 20% / 10% 40%'} value="50% 20% / 10% 40%"/> &nbsp; 50% 20% / 10% 40% </li>
                  <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === '50% 20% 10% 40%'} value="50% 20% 10% 40%"/> &nbsp; 50% 20%  10% 40% </li>
                  <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === '50%'} value="50%"/> &nbsp; 50% </li>
                  <li><input type="checkbox" name="bo-sh6" onChange={handleBordeRadius} checked={selectedValue === '90%'} value="90%"/> &nbsp; 90% </li>
              </ul>
        </InteractivCss>

    </article>
</section>
)
}
