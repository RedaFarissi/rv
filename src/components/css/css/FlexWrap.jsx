
import { CodeHighlighter ,  Result , InteractivCss} from "../../path";
import { useState , useRef ,useEffect} from "react";
import images from "../imagesCss";
import "./FlexWrap.css"

export default function FlexWrap(props){
    const codeExemple1= { 
    head:`  
    <style> 
        .h2{ 
            font-size: xx-large; 
            direction:rtl; 
        }
        #div{ 
            display: flex;  
            width:100%; 
            flex-wrap: wrap;
        }
        #div2{ 
            display: flex;  
            width:100%;
        }
        #div div , #div2 div{ 
            width: 30%; 
            margin:1.5%; 
            height:90px; 
            font-size: xx-large; 
            text-align: center; 
            line-height: 90px;
        }    
    </style>`,
    code:`      <h2 class="h2"><bdi> With flex-wrap </bdi> .</h2>
      <div id="div" style="border: 2px solid black;"> 
          <div style="background-color:red">1</div>
          <div style="background-color:green">2</div>
          <div style="background-color:pink">3</div>
          <div style="background-color:yellow">4</div>
          <div style="background-color:rgb(200,0,100)">5</div>
          <div style="background-color:darkorange">6</div>
          <div style="background-color:gray">7</div>
          <div style="background-color:aqua">8</div>
      </div>
      <h2 class="h2"><bdi> Without flex-wrap </bdi></h2>
      <div id="div2" style="border:2px solid black;"> 
          <div style="background-color:red;">A</div>
          <div style="background-color:green;">B</div>
          <div style="background-color:pink;">C</div>
          <div style="background-color:yellow;">D</div>
          <div style="background-color:rgb(200,0,100);">E</div>
          <div style="background-color:darkorange;">F</div>
          <div style="background-color:gray;">G</div>
          <div style="background-color:aqua;">H</div>
      </div>`
    }
    const [selectedValue1, setSelectedValue1] = useState("nowrap");
    const resultRef1 = useRef()
    const inputRef1 = useRef()
    const handleFlexWrap1 = (event) => {
      const { value } = event.target;
      setSelectedValue1(value);
      resultRef1.current.style.flexWrap = value
    };
    

    const [selectedValue2, setSelectedValue2] = useState("flex-start");
    const resultRef2 = useRef()
    const inputRef2 = useRef()
    const handleFlexWrap2 = (event) => {
      const { value } = event.target;
      setSelectedValue2(value);
      resultRef2.current.style.alignContent = value
    };

    useEffect(() => {
      inputRef1.current.click();
      inputRef2.current.click();
    }, []);
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Flex-Wrap </h1>
    <article className="mt-5">
        <p class="style_divv">
            تستعمل الخاصية <b>flex-wrap</b> مع العناصر التي تحمل الخاصية <b>display : flex</b> وذالك من أجل جعل العناصر الأبناء يعدون تلقائيا إلى السطر .<br/>
            تستقبل الخاصية <b>flex-wrap</b> القيم التالية :
            <ul dir="ltr">
                <li><b>flex-wrap : wrap;</b></li>
                <li><b>flex-wrap : nowrap;</b></li>
                <li><b>flex-wrap : wrap-reverse;</b></li>
            </ul>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. الخاصية flex-wrap </h2>
        <div class="sum_exemple_style">
            <div class="mital">متال : </div>
            <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Height" addClass="mt-3 mb-3" copie={true}/>
            <Result title='CSS Height' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <h2 class="css-flex-wrap-ex1-h2"><bdi> With flex-wrap </bdi> .</h2>
            	<div id="css-flex-wrap-ex1-div" style={{border:"2px solid black"}}> 
            		<div style={{backgroundColor:"red"}}>1</div>
            		<div style={{backgroundColor:"green"}}>2</div>
            		<div style={{backgroundColor:"pink"}}>3</div>
            		<div style={{backgroundColor:"yellow"}}>4</div>
            		<div style={{backgroundColor:"rgb(200,0,100)"}}>5</div>
            		<div style={{backgroundColor:"darkorange"}}>6</div>
            		<div style={{backgroundColor:"gray"}}>7</div>
            		<div style={{backgroundColor:"aqua"}}>8</div>
            	</div>
            	<h2 class="css-flex-wrap-ex1-h2"><bdi> Without flex-wrap </bdi></h2>
            	<div id="css-flex-wrap-ex1-div2" style={{border:"2px solid black"}}> 
            		<div style={{backgroundColor:"red"}}>A</div>
            		<div style={{backgroundColor:"green"}}>B</div>
            		<div style={{backgroundColor:"pink"}}>C</div>
            		<div style={{backgroundColor:"yellow"}}>D</div>
            		<div style={{backgroundColor:"rgb(200,0,100)"}}>E</div>
            		<div style={{backgroundColor:"darkorange"}}>F</div>
            		<div style={{backgroundColor:"gray"}}>G</div>
            		<div style={{backgroundColor:"aqua"}}>H</div>
            	</div>
            </Result>
        </div>
        <div className="mital"> متال توضيحي تفاعلي  : </div> 
        <InteractivCss 
          property="flex-wrap" 
          value={selectedValue1}  
          textInResult={
                    <div id="css-flex-wrap-ex2-Rseult" ref={resultRef1}>
                        <div style={{backgroundColor: "green"}}>1</div>
                        <div style={{backgroundColor: "crimson"}}>2</div>
                        <div style={{backgroundColor: "blue"}}>3</div>
                        <div style={{backgroundColor: "gray"}}>4</div>
                        <div style={{backgroundColor: "red"}}>5</div>
                    </div>
                    }
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef1} onChange={handleFlexWrap1} checked={selectedValue1 === 'nowrap'} value="nowrap"/> &nbsp; nowrap </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleFlexWrap1} checked={selectedValue1 === 'wrap'} value="wrap" /> &nbsp; wrap</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleFlexWrap1} checked={selectedValue1 === 'wrap-reverse'} value="wrap-reverse"/> &nbsp; wrap-reverse </li>
            </ul>
        </InteractivCss>
       
        <ul><li>لاحض أنه يتم إضافة فراغ بين العناصر الأبناء تلقائيا </li></ul>
    </article>
    <article>
        <h2 className="title-h2">2.  الخاصية flex-content</h2>
        <p class="style_divv">
            تعدل خاصية <b>align-content</b> سلوك الخاصية <b>flex-wrap</b>. وذالك بإزالة الفراغات بين العناصر .<br/>
        </p>
        <div className="mital"> متال توضيحي تفاعلي  : </div> 
        <InteractivCss 
          property="align-content" 
          value={selectedValue2}            
          textInResult={
                    <div id="Rseult2" ref={resultRef2}>
                        <div style={{backgroundColor: "green"}}>1</div>
                        <div style={{backgroundColor: "crimson"}}>2</div>
                        <div style={{backgroundColor: "blue"}}>3</div>
                    </div>
                    }
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef2} onChange={handleFlexWrap2} checked={selectedValue2 === 'flex-start'} value="flex-start"/> &nbsp; flex-start </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleFlexWrap2} checked={selectedValue2 === 'center'} value="center" /> &nbsp; center</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleFlexWrap2} checked={selectedValue2 === 'flex-end'} value="flex-end"/> &nbsp; flex-end </li>
            </ul>
        </InteractivCss>
    </article>
</section>
)
}