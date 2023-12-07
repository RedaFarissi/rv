import { CodeHighlighter , InteractivCss} from "../../path";
import { useState , useRef ,useEffect} from "react";
import "./FlexDirection.css"

export default function FlexDirection(props){
    const codeExemple1= { 
        css:`.box { 
    display: flex; 
    background-color: yellow;
    flex-direction: column; 
}
.box div {
    width: 40px;
    background-color: yellowgreen; 
    margin: 9px; 
    padding: 9px;
    font-size: 30px;
    border:2px solid blueviolet;
    outline:2px solid blue;
    outline-offset:6px;
}`,
    head:`  
        <link rel="stylesheet" href="./index.css">`,
        code:`      <div class="box" ref={resultRef} >
           <div> 1 </div> 
           <div> 2 </div>
           <div> 3 </div>  
      </div>`
    }
    const [selectedValue, setSelectedValue] = useState("column");
    const resultRef = useRef()
    const inputRef = useRef()
    const handleFlexDirection = (event) => {
      const { value } = event.target;
      setSelectedValue(value);
      resultRef.current.style.flexDirection = value
    };
    
    useEffect(() => {
      inputRef.current.click();
    }, []);

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Flex-Direction </h1>
    <article>
        <p className="style_divv mt-5">
            تحدد الخاصية <b>flex-direction</b> اتجاه العناصر المرنة. <br/>
            <b>ملاحظة : </b> إذا لم يكن العنصر يحتوي على  <b>display:flex</b>  ، فلن يكون للخاصية   <b>flex-direction</b> أي تأثير .
        </p>
        <div className="mital"> متال توضيحي تفاعلي  : </div> 
        <CodeHighlighter file_name="index.css" code={codeExemple1.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Height" addClass="mt-3 mb-3" copie={true}/>
        <InteractivCss 
          property="flex-direction" 
          value={selectedValue}  
          textInResult={
                        <div className="css-flex-direction-ex1-box" ref={resultRef}>
                          <div> 1 </div> 
                          <div> 2 </div>
                          <div> 3 </div>  
                        </div>
                    }
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef} onChange={handleFlexDirection} checked={selectedValue === 'column'} value="column" /> &nbsp; column</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleFlexDirection} checked={selectedValue === 'row'} value="row"/> &nbsp; row </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleFlexDirection} checked={selectedValue === 'row-reverse'} value="row-reverse"/> &nbsp; row-reverse </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleFlexDirection} checked={selectedValue === 'column-reverse'} value="column-reverse"/> &nbsp; column-reverse</li>
            </ul>
        </InteractivCss>
      </article>
</section>
    )
}