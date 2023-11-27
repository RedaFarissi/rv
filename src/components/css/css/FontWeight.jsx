import { CodeHighlighter ,  Result } from "../../path";
import images from "../imagesCss";
import "./FontWeight.css"
export default function FontWeight(props){
    
    const codeExemple2= { 
        css:`.font-weight-example {
  font-size: 24px;
}
.normal {
  font-weight: normal;
}
.bold {
  font-weight: bold;
}
.bolder {
  font-weight: bolder;
}
.lighter {
  font-weight: lighter;
}`,
    head:`  
    <link rel="stylesheet" href="./index.css">`,
        code:`      <h2>Font Weight Example</h2>
      <p class="font-weight-example normal">This is normal text.</p>
      <p class="font-weight-example bold">This is bold text.</p>
      <p class="font-weight-example bolder">This is bolder text.</p>
      <p class="font-weight-example lighter">This is lighter text.</p>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Font-Weight </h1>
    <article>
        <p className="style_divv mt-5">
        الخاصية <b>font-weight</b> في <b>CSS</b> تُحدِّد «وزن» (weight، أو السمك) الخط؛ والأوزان المتاحة للاستخدام في خطٍ ما تعتمد على نوع الخط المستخدم <b>font-family</b>، إذ إنَّ بعض الخطوط لا توفِّر إلا نسختين هما <b>normal</b> و <b>bold</b>.
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.css" code={codeExemple2.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" title="CSS Font-Weight" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Font-Weight' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <h2>Font Weight Example</h2>
            <p class="css-font-weight-ex1-example css-font-weight-ex1-normal">This is normal text.</p>
            <p class="css-font-weight-ex1-example css-font-weight-ex1-bold">This is bold text.</p>
            <p class="css-font-weight-ex1-example css-font-weight-ex1-bolder">This is bolder text.</p>
            <p class="css-font-weight-ex1-example css-font-weight-ex1-lighter">This is lighter text.</p>
        </Result>
        <h3>جميع القيم الممكنة للخاصية font-weight </h3>
        <div className="style_divv" >
            كلمات محجوزة <br/><br/>
            <ul dir="ltr"><li><b>font-weight: normal</b></li><li><b>font-weight: bold</b></li></ul>
            كلمات محجوزة نسبةً إلى العنصر الأب <br/><br/>
            <ul dir="ltr">
            <li><b>font-weight: lighter;</b></li>
            <li><b>font-weight: bolder;</b> </li>
            </ul>
            القيمة الرقمية<br/><br/>
            <ul dir="ltr">
             <li><b>font-weight: 100</b></li>
             <li><b>font-weight: 200</b></li>
             <li><b>font-weight: 300</b></li>
             <li><b>font-weight: 400</b></li>
             <li><b>font-weight: 500</b></li>
             <li><b>font-weight: 600</b></li>
             <li><b>font-weight: 700</b></li>
             <li><b>font-weight: 800</b></li>
             <li><b>font-weight: 900</b></li>
            </ul>
            القيم الأولية  <br/><br/>
            <ul dir="ltr">
             <li><b>font-weight: inherit</b></li>
             <li><b>font-weight: initial</b></li>
             <li><b>font-weight: unset</b></li>
            </ul>
        </div>
    </article>
</section>
)
}