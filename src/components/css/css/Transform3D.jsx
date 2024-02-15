import {  InteractivCss } from "../../path";
import { useState , useRef ,useEffect} from "react";
import "./Transform3D.css"

export default function Transform3D(props){

  const [selectedValue1, setSelectedValue1] = useState("rotateX(0deg)");
  const resultRef1 = useRef()
  const inputRef1 = useRef()
  const handleTransform3D_1 = (event) => {
    const { value } = event.target;
    setSelectedValue1(value);
    resultRef1.current.style.transform = value
  };

  const [selectedValue2, setSelectedValue2] = useState("rotateX(0deg)");
  const resultRef2 = useRef()
  const inputRef2 = useRef()
  const handleTransform3D_2 = (event) => {
    const { value } = event.target;
    setSelectedValue2(value);
    resultRef2.current.style.transform = value
  };

  const [selectedValue3, setSelectedValue3] = useState("rotateY(0deg)");
  const resultRef3 = useRef()
  const inputRef3 = useRef()
  const handleTransform3D_3 = (event) => {
    const { value } = event.target;
    setSelectedValue3(value);
    resultRef3.current.style.transform = value
  };

  const [selectedValue4, setSelectedValue4] = useState("rotateY(0deg)");
  const resultRef4 = useRef()
  const inputRef4 = useRef()
  const handleTransform3D_4 = (event) => {
    const { value } = event.target;
    setSelectedValue4(value);
    resultRef4.current.style.transform = value
  };
 
  const [selectedValue5, setSelectedValue5] = useState("rotateZ(0deg)");
  const resultRef5 = useRef()
  const inputRef5 = useRef()
  const handleTransform3D_5 = (event) => {
    const { value } = event.target;
    setSelectedValue5(value);
    resultRef5.current.style.transform = value
  };

  const [selectedValue6, setSelectedValue6] = useState("translateZ(0px)");
  const resultRef6 = useRef()
  const inputRef6 = useRef()
  const handleTransform3D_6 = (event) => {
    const { value } = event.target;
    setSelectedValue6(value);
    resultRef6.current.style.transform = value
  };

  useEffect(() => {
    inputRef1.current.click();
    inputRef2.current.click();
    inputRef3.current.click();
    inputRef4.current.click();
    inputRef5.current.click();
    inputRef6.current.click();
  }, []);
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Transform-3D </h1>
    <article>
      <p className="style_divv mt-5">
          يدعم <b>{"CSS"}</b> أيضًا عمليات التحويل ثلاثية الأبعاد.<br/>
          ستتعرف في هذا الفصل على خاصية <b>transform</b> بشكل أعمق .<br/>
          باستخدام خاصية <bdi><b>transform</b></bdi> ، يمكنك استخدام طرق التحويل ثلاثية الأبعاد التالية:<br/>
          <ul>
              <li><bdi><b>rotateX()</b></bdi></li>
              <li><bdi><b>rotateY()</b></bdi></li>
              <li><bdi><b>rotateZ()</b></bdi></li>
          </ul>
      </p>
    </article>
    <article>
      <h2 className="title-h2"> 1-  الدالة <bdi>rotateX()</bdi></h2>
      <p className="style_divv">
          تحدد الوظيفة <bdi><b>rotateX()</b></bdi>  التحويل الذي يقوم بتدوير عنصر حول المحور الأفقي <bdi>(دون تشويهه)</bdi> . <br/>
      </p>
      <div className="mital"> متال توضيحي تفاعلي  : </div> 
      <ul>
        <li> في المتال أسفله لم نقم بستعمال الخاصية <b>perspective</b> على العنصر الأب  </li>
      </ul>
      <InteractivCss 
        property="transform" 
        value={selectedValue1}
        classParent="css-transform3d-ex1-parent"
        classChild="css-transform3d-ex1-child"  
        resultRef={resultRef1}
        textInResult="Hello Word"
      >
          <ul className="p-0">
              <li><input type="checkbox" name="bo-sh6" ref={inputRef1} onChange={handleTransform3D_1} checked={selectedValue1 === 'rotateX(0deg)'} value="rotateX(0deg)" /> &nbsp; rotateX(0deg)</li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_1} checked={selectedValue1 === 'rotateX(40deg)'} value="rotateX(40deg)"/> &nbsp; rotateX(40deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_1} checked={selectedValue1 === 'rotateX(80deg)'} value="rotateX(80deg)"/> &nbsp; rotateX(80deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_1} checked={selectedValue1 === 'rotateX(120deg)'} value="rotateX(120deg)"/> &nbsp; rotateX(120deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_1} checked={selectedValue1 === 'rotateX(160deg)'} value="rotateX(160deg)"/> &nbsp; rotateX(160deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_1} checked={selectedValue1 === 'rotateX(200deg)'} value="rotateX(200deg)"/> &nbsp; rotateX(200deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_1} checked={selectedValue1 === 'rotateX(240deg)'} value="rotateX(240deg)"/> &nbsp; rotateX(240deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_1} checked={selectedValue1 === 'rotateX(280deg)'} value="rotateX(280deg)"/> &nbsp; rotateX(280deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_1} checked={selectedValue1 === 'rotateX(320deg)'} value="rotateX(320deg)"/> &nbsp; rotateX(320deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_1} checked={selectedValue1 === 'rotateX(360deg)'} value="rotateX(360deg)"/> &nbsp; rotateX(360deg) </li>
          </ul>
      </InteractivCss>
      <div className="mital"> متال توضيحي تفاعلي  2 : </div>
      <ul>
        <li> في المتال أسفله قمنا بستعمال الخاصية <b>perspective</b> على العنصر الأب  </li>
      </ul>
      <InteractivCss 
        property="transform" 
        value={selectedValue2}
        classParent="css-transform3d-ex2-parent"
        classChild="css-transform3d-ex2-child"  
        resultRef={resultRef2}
        textInResult="Hello Word"
      >
          <ul className="p-0">
              <li><input type="checkbox" name="bo-sh6" ref={inputRef2} onChange={handleTransform3D_2} checked={selectedValue2 === 'rotateX(0deg)'} value="rotateX(0deg)" /> &nbsp; rotateX(0deg)</li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_2} checked={selectedValue2 === 'rotateX(40deg)'} value="rotateX(40deg)"/> &nbsp; rotateX(40deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_2} checked={selectedValue2 === 'rotateX(80deg)'} value="rotateX(80deg)"/> &nbsp; rotateX(80deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_2} checked={selectedValue2 === 'rotateX(120deg)'} value="rotateX(120deg)"/> &nbsp; rotateX(120deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_2} checked={selectedValue2 === 'rotateX(160deg)'} value="rotateX(160deg)"/> &nbsp; rotateX(160deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_2} checked={selectedValue2 === 'rotateX(200deg)'} value="rotateX(200deg)"/> &nbsp; rotateX(200deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_2} checked={selectedValue2 === 'rotateX(240deg)'} value="rotateX(240deg)"/> &nbsp; rotateX(240deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_2} checked={selectedValue2 === 'rotateX(280deg)'} value="rotateX(280deg)"/> &nbsp; rotateX(280deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_2} checked={selectedValue2 === 'rotateX(320deg)'} value="rotateX(320deg)"/> &nbsp; rotateX(320deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_2} checked={selectedValue2 === 'rotateX(360deg)'} value="rotateX(360deg)"/> &nbsp; rotateX(360deg) </li>
          </ul>
      </InteractivCss>
    </article>
    <article>
      <h2 className="title-h2"> 2-  الدالة <bdi>rotateY()</bdi></h2>
      <p className="style_divv">
          تحدد الوظيفة <bdi><b>rotateY()</b></bdi>  التحويل الذي يقوم بتدوير عنصر حول المحور العمودي  <bdi>(دون تشويهه)</bdi> . <br/>
      </p>
      <div className="mital"> متال توضيحي تفاعلي :  </div>
      <ul>
        <li> في المتال أسفله لم نقم بستعمال الخاصية <b>perspective</b> على العنصر الأب  </li>
      </ul>
      <InteractivCss 
        property="transform" 
        value={selectedValue3}
        classParent="css-transform3d-ex3-parent"
        classChild="css-transform3d-ex3-child"  
        resultRef={resultRef3}
        textInResult="Hello Word"
      >
          <ul className="p-0">
              <li><input type="checkbox" name="bo-sh6" ref={inputRef3} onChange={handleTransform3D_3} checked={selectedValue3 === 'rotateY(0deg)'} value="rotateY(0deg)" /> &nbsp; rotateY(0deg)</li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_3} checked={selectedValue3 === 'rotateY(40deg)'}  value="rotateY(40deg)"/> &nbsp; rotateY(40deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_3} checked={selectedValue3 === 'rotateY(80deg)'}  value="rotateY(80deg)"/> &nbsp; rotateY(80deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_3} checked={selectedValue3 === 'rotateY(120deg)'} value="rotateY(120deg)"/> &nbsp; rotateY(120deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_3} checked={selectedValue3 === 'rotateY(160deg)'} value="rotateY(160deg)"/> &nbsp; rotateY(160deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_3} checked={selectedValue3 === 'rotateY(200deg)'} value="rotateY(200deg)"/> &nbsp; rotateY(200deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_3} checked={selectedValue3 === 'rotateY(240deg)'} value="rotateY(240deg)"/> &nbsp; rotateY(240deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_3} checked={selectedValue3 === 'rotateY(280deg)'} value="rotateY(280deg)"/> &nbsp; rotateY(280deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_3} checked={selectedValue3 === 'rotateY(320deg)'} value="rotateY(320deg)"/> &nbsp; rotateY(320deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_3} checked={selectedValue3 === 'rotateY(360deg)'} value="rotateY(360deg)"/> &nbsp; rotateY(360deg) </li>
          </ul>
      </InteractivCss>
      <div className="mital"> متال توضيحي تفاعلي  2 :  </div>
      <ul>
        <li> في المتال أسفله قمنا بستعمال الخاصية <b>perspective</b> على العنصر الأب  </li>
      </ul>
      <InteractivCss 
        property="transform" 
        value={selectedValue4}
        classParent="css-transform3d-ex4-parent"
        classChild="css-transform3d-ex4-child"  
        resultRef={resultRef4}
        textInResult="Hello Word"
      >
          <ul className="p-0">
              <li><input type="checkbox" name="bo-sh6" ref={inputRef4} onChange={handleTransform3D_4} checked={selectedValue4 === 'rotateY(0deg)'} value="rotateY(0deg)" /> &nbsp; rotateY(0deg)</li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_4} checked={selectedValue4 === 'rotateY(40deg)'}  value="rotateY(40deg)"/> &nbsp; rotateY(40deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_4} checked={selectedValue4 === 'rotateY(80deg)'}  value="rotateY(80deg)"/> &nbsp; rotateY(80deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_4} checked={selectedValue4 === 'rotateY(120deg)'} value="rotateY(120deg)"/> &nbsp; rotateY(120deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_4} checked={selectedValue4 === 'rotateY(160deg)'} value="rotateY(160deg)"/> &nbsp; rotateY(160deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_4} checked={selectedValue4 === 'rotateY(200deg)'} value="rotateY(200deg)"/> &nbsp; rotateY(200deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_4} checked={selectedValue4 === 'rotateY(240deg)'} value="rotateY(240deg)"/> &nbsp; rotateY(240deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_4} checked={selectedValue4 === 'rotateY(280deg)'} value="rotateY(280deg)"/> &nbsp; rotateY(280deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_4} checked={selectedValue4 === 'rotateY(320deg)'} value="rotateY(320deg)"/> &nbsp; rotateY(320deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_4} checked={selectedValue4 === 'rotateY(360deg)'} value="rotateY(360deg)"/> &nbsp; rotateY(360deg) </li>
          </ul>
      </InteractivCss>
    </article>
    <article>
      <h3 className="mt-3"> 3-  الدالة <bdi>rotateZ()</bdi></h3>
      <p className="style_divv">
          تحدد الوظيفة <bdi><b>rotateZ()</b></bdi>  التحويل الذي يقوم بتدوير عنصر حول المحور <b>z</b> <bdi>(دون تشويهه)</bdi> . <br/>
      </p>
      <div className="mital"> متال توضيحي تفاعلي :  </div>
      <InteractivCss 
        property="transform" 
        value={selectedValue5}
        classParent="css-transform3d-ex5-parent"
        classChild="css-transform3d-ex5-child"  
        resultRef={resultRef5}
        textInResult="Hello Word"
      >
          <ul className="p-0">
              <li><input type="checkbox" name="bo-sh6" ref={inputRef5} onChange={handleTransform3D_5} checked={selectedValue5 === 'rotateZ(0deg)'} value="rotateZ(0deg)" /> &nbsp; rotateZ(0deg)</li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_5} checked={selectedValue5 === 'rotateZ(40deg)'}  value="rotateZ(40deg)"/> &nbsp; rotateZ(40deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_5} checked={selectedValue5 === 'rotateZ(80deg)'}  value="rotateZ(80deg)"/> &nbsp; rotateZ(80deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_5} checked={selectedValue5 === 'rotateZ(120deg)'} value="rotateZ(120deg)"/> &nbsp; rotateZ(120deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_5} checked={selectedValue5 === 'rotateZ(160deg)'} value="rotateZ(160deg)"/> &nbsp; rotateZ(160deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_5} checked={selectedValue5 === 'rotateZ(200deg)'} value="rotateZ(200deg)"/> &nbsp; rotateZ(200deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_5} checked={selectedValue5 === 'rotateZ(240deg)'} value="rotateZ(240deg)"/> &nbsp; rotateZ(240deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_5} checked={selectedValue5 === 'rotateZ(280deg)'} value="rotateZ(280deg)"/> &nbsp; rotateZ(280deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_5} checked={selectedValue5 === 'rotateZ(320deg)'} value="rotateZ(320deg)"/> &nbsp; rotateZ(320deg) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_5} checked={selectedValue5 === 'rotateZ(360deg)'} value="rotateZ(360deg)"/> &nbsp; rotateZ(360deg) </li>
          </ul>
      </InteractivCss>
    </article>
    <article>
      <h2 className="title-h2"> 4-  الدالة <bdi>translateZ()</bdi></h2>
      <p className="style_divv">
        أولاََّّ لإستخدام <kbd>transform : translateZ()</kbd> يجب إعطاء العنصر الأب القيمة <bdi><b>perspective</b></bdi> .<br/>
        تحدد الوظيفة <bdi><b>translateZ()</b></bdi>  التحويل الذي يقوم بتدوير عنصر حول المحور <b>z</b> <bdi>(دون تشويهه)</bdi> . <br/>
      </p>
      <div className="mital"> متال توضيحي تفاعلي :  </div>
      <InteractivCss 
        property="transform" 
        value={selectedValue6}
        classParent="css-transform3d-ex6-parent"
        classChild="css-transform3d-ex6-child"  
        resultRef={resultRef6}
        textInResult="Hello Word"
      >
          <ul className="p-0">
              <li><input type="checkbox" name="bo-sh6" ref={inputRef6} onChange={handleTransform3D_6} checked={selectedValue6 === 'translateZ(0px)'} value="translateZ(0px)" /> &nbsp; translateZ(0px)</li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_6} checked={selectedValue6 === 'translateZ(35px)'}  value="translateZ(35px)"/> &nbsp; translateZ(35px) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_6} checked={selectedValue6 === 'translateZ(-35px)'}  value="translateZ(-35px)"/> &nbsp; translateZ(-35px) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_6} checked={selectedValue6 === 'translateZ(-9.7rem)'} value="translateZ(-9.7rem)"/> &nbsp; translateZ(-9.7rem) </li>
              <li><input type="checkbox" name="bo-sh6" onChange={handleTransform3D_6} checked={selectedValue6 === 'translateZ(2.7rem)'} value="translateZ(2.7rem)"/> &nbsp; translateZ(2.7rem) </li>
          </ul>
      </InteractivCss>
    </article>
</section>
    )
  }