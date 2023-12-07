
import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Display.css"



export default function Display(props){
  const codeExemple= { 
    css:`p {color: red;}
p.ex1 {display: none;}
p.ex2 {display: inline;}
p.ex3 {display: block;}
p.ex4 {display: inline-block;}`,
head:`  
    <link rel="stylesheet" href="./index.css">`,
    code:`        <h2>The display Property</h2>
        <h2>display: none:</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <p class="ex1">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
        </div>
        <h2>display: inline:</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <p class="ex2">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
        </div>
        <h2>display: block:</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          <p class="ex3">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
        </div>
        <h2>display: inline-block:</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
          <p class="ex4">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
        </div>`
}
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Display </h1>
    <article>

    <p className="style_divv mt-5"> 
        تحدد خاصية <b>display</b> سلوك العرض (نوع العرض) للعنصر.<br/>
        في <b>HTML</b> ، يتم أخذ قيمة خاصية العرض الافتراضية من مواصفات <b>HTML</b> أو من ورقة الأنماط الافتراضية للمستعرض / المستخدم .
    </p>
    <div className="mital">متال :  </div>
    <CodeHighlighter file_name="index.css" code={codeExemple.css} language="css" copie={true}/>
    <CodeHighlighter file_name="index.html" code={codeExemple.code} head={codeExemple.head} language="html" is_html={true} title="CSS Display" addClass="mt-3 mb-3" copie={true}/>
    <Result title='CSS Display' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
        <h2>The display Property</h2>
        <h2>display: none:</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <p className="css-height-ex1-p css-height-ex1-1">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
        </div>
        <h2>display: inline:</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <p className="css-height-ex1-p css-height-ex1-2">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
        </div>
        <h2>display: block:</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          <p className="css-height-ex1-p css-height-ex1-3">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
        </div>
        <h2>display: inline-block:</h2>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
          <p className="css-height-ex1-p css-height-ex1-4">HELLO WORLD!</p> Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.
        </div>
    </Result>
    </article>
</section> 
    )
}