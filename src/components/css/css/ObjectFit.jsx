import { CodeHighlighter ,  Result , InteractivCss} from "../../path";
import images from "../imagesCss";
import "./ObjectFit.css"
import { useState , useRef ,useEffect} from "react";

export default function ObjectFit(props){
    
    const codeExemple1= { 
    head:`  
    <style> 
        .img {
            box-sizing: border-box;
            border: 6px solid black;   
            width: 19%;
        }

        .h2 {
            border: 6px solid black;
            width: 19%;
        }
    </style>`,
    code:`     <img src={images.orange} class="img" style="object-fit: fill"/>
      <img src={images.orange} class="img" style="object-fit: contain"/>
      <img src={images.orange} class="img" style="object-fit: cover"/>
      <img src={images.orange} class="img" style="object-fit: none"/>
      <img src={images.orange} class="img" style="object-fit: scale-down"/>
      <h2 class="h2">fill</h2>
      <h2 class="h2">contain</h2>
      <h2 class="h2">cover</h2>
      <h2 class="h2">none</h2>
      <h2 class="h2">scale-down</h2>`
    }
    const [selectedValue, setSelectedValue] = useState("none");
    const resultRef = useRef()
    const inputRef = useRef()
    const handleObjectFit = (event) => {
      const { value } = event.target;
      setSelectedValue(value);
      resultRef.current.style.objectFit = value
    };
    
    useEffect(() => {
      inputRef.current.click();
    }, []);
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Object-Fit </h1>
    <article>
        <p class="style_divv mt-5">
            تحدد خاصية <b>Object-fit</b> كيفية تغيير حجم محتوى العنصر المستبدل ، مثل <kbd>&lt;img&gt;</kbd> أو <kbd>&lt;video&gt;</kbd> ، ليلائم حاويته . <br/>
            يمكنك تغيير محاذاة كائن محتوى العنصر الذي تم استبداله داخل مربع العنصر باستخدام خاصية <bdi><b>object-position</b></bdi> .
            وتستقبل الخاصية <b>Object-fit</b> القيم التالية :
            <ul dir="ltr">
                <li>object-fit : <b>fill</b> </li>
                <li>object-fit : <b>contain</b> </li>
                <li>object-fit : <b>cover</b> </li>
                <li>object-fit : <b>none</b> </li>
                <li>object-fit : <b>scale-down</b> </li>
            </ul>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. القيمة fill </h2>
        <p class="style_divv">
            يتم تغيير حجم المحتوى الذي تم استبداله لملء مربع محتوى العنصر. الكائن بأكمله سوف يملأ المربع بالكامل. إذا كانت نسبة العرض إلى الارتفاع للكائن لا تتطابق مع نسبة العرض إلى الارتفاع لصندوقه ، فسيتم تمديد الكائن ليلائمه.
        </p>
    </article>
    <article>
        <h2 className="title-h2">2. القيمة contain </h2>
        <p class="style_divv">
            يتم قياس المحتوى الذي تم استبداله للحفاظ على نسبة العرض إلى الارتفاع الخاصة به أثناء ملاءمته لمربع محتوى العنصر. تم صنع الكائن بأكمله لملء المربع ، مع الحفاظ على نسبة العرض إلى الارتفاع الخاصة به 
        </p>
    </article>
    <article>
        <h2 className="title-h2">3. القيمة cover</h2>
        <p class="style_divv">
            يتم تغيير حجم المحتوى الذي تم استبداله للحفاظ على نسبة العرض إلى الارتفاع الخاصة به أثناء ملء مربع محتوى العنصر بالكامل. إذا كانت نسبة العرض إلى الارتفاع للكائن لا تتطابق مع نسبة العرض إلى الارتفاع لمربعه ، فسيتم قص الكائن ليلائمه
        </p>
    </article>
    <article>
        <h2 className="title-h2">4. القيمة none </h2>
        <p class="style_divv">
            لن يتم تغيير حجم المحتوى المستبدل . <br/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">5. القيمة scale-down </h2>
        <p className="style_divv">
            يتم تحديد حجم المحتوى كما لو لم يتم تحديد أي شيء أو يحتوي عليه ، أيهما سينتج عنه حجم كائن ملموس أصغر.
        </p>
        <div className="mital"> متال  : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Object-Fit" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Object-Fit' styleAdd="styleAdd-ex1-result" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <div className="d-flex flex-wrap ">
                  <img src={images.orange} className="css-object-fit-ex1-img" style={{objectFit: "fill"}}/>
                  <img src={images.orange} className="css-object-fit-ex1-img" style={{objectFit: "contain"}}/>
                  <img src={images.orange} className="css-object-fit-ex1-img" style={{objectFit: "cover"}}/>
                  <img src={images.orange} className="css-object-fit-ex1-img" style={{objectFit: "none"}}/>
                  <img src={images.orange} className="css-object-fit-ex1-img" style={{objectFit: "scale-down"}}/>
                  <h2 class="css-object-fit-ex1-h2">fill</h2>
                  <h2 className="css-object-fit-ex1-h2">contain</h2>
                  <h2 className="css-object-fit-ex1-h2">cover</h2>
                  <h2 className="css-object-fit-ex1-h2">none</h2>
                  <h2 className="css-object-fit-ex1-h2">scale-down</h2>
            </div>
        </Result>
        <div className="mital"> متال توضيحي تفاعلي  : </div> 
        <InteractivCss 
          property="object-fit" 
          value={selectedValue}
          classParent="css-object-fit-ex2-parent"
          classChild="border border-3 border-dark"  
          textInResult={
            <img src={images.orange} className="css-object-fit-ex2-child" alt="orange" ref={resultRef}/>
         }
        >
            <ul className="p-0">
                <li><input type="checkbox" name="bo-sh6" ref={inputRef} onChange={handleObjectFit} checked={selectedValue === 'none'} value="none" /> &nbsp; none</li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleObjectFit} checked={selectedValue === 'contain'} value="contain"/> &nbsp; contain </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleObjectFit} checked={selectedValue === 'fill'} value="fill"/> &nbsp; fill </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleObjectFit} checked={selectedValue === 'cover'} value="cover"/> &nbsp; cover </li>
                <li><input type="checkbox" name="bo-sh6" onChange={handleObjectFit} checked={selectedValue === 'scale-down'} value="scale-down"/> &nbsp; scale-down </li>
            </ul>
        </InteractivCss>
    </article>
</section>
)
}