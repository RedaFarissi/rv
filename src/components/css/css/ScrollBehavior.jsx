import { InteractivCss} from "../../path";
import { useState , useRef ,useEffect} from "react";
import "./ScrollBehavior.css"
function Exemple(props) {
    return (
    <>
        <div className="d-flex justify-content-center">
            <a href="#css-scroll-behavior-ex-A" className="css-scroll-behavior-ex-link">A</a>
            <a href="#css-scroll-behavior-ex-B" className="css-scroll-behavior-ex-link">B</a>
            <a href="#css-scroll-behavior-ex-C" className="css-scroll-behavior-ex-link">C</a>
        </div>
        <div id="scroll_behavior" ref={props.resultRef} style={{height:"200px",width:"200px",margin:"auto",border:"2px solid black",overflow:"auto",marginBottom:"4vh"}}> 
            <div id="css-scroll-behavior-ex-A"> A  </div>
            <div id="css-scroll-behavior-ex-B"> B  </div>
            <div id="css-scroll-behavior-ex-C"> C </div>             
        </div>
    </>
    )
}


export default function ScrollBehavior(props){
    const [selectedValue, setSelectedValue] = useState("30px");
    const resultRef = useRef()
    const inputRef = useRef()
    const handleScrollBehavior = (event) => {
      const { value } = event.target;
      setSelectedValue(value);
      resultRef.current.style.scrollBehavior = value
    };
    
    useEffect(() => {
      inputRef.current.click();
    }, []);

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Scroll-Behavior </h1>
    <article>
        <p class="style_divv mt-5">
            تحدد الخاصية <b>scroll-behavior</b> ما إذا كان سيتم تحريك موضع التمرير بسلاسة ، بدلاً من الانتقال المستقيم ، عندما ينقر المستخدم على ارتباط داخل مربع قابل للتمرير.
        </p>
        <div className="mital"> متال توضيحي تفاعلي  : </div> 
        <InteractivCss 
            property="font-size" 
            value={selectedValue}
            classParent="css-font-size-ex3-parent"
            classChild="css-font-size-ex3"  
            textInResult={<Exemple resultRef={resultRef}/>}
        >
                <ul className="p-0">
                    <li><input type="checkbox" name="bo-sh6" ref={inputRef} onChange={handleScrollBehavior} checked={selectedValue === 'auto'} value="auto" /> &nbsp; auto</li>
                    <li><input type="checkbox" name="bo-sh6" onChange={handleScrollBehavior} checked={selectedValue === 'smooth'} value="smooth"/> &nbsp; smooth </li>
                </ul>
        </InteractivCss>
    </article>
</section>
)
}