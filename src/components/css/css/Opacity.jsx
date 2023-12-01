import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Opacity.css"
export default function Opacity(props){
    const codeExemple= { 
        head:`  
        <style> 
            h1{
                color: red;
            }
            div {
              background: rgb(76, 175, 80);
              padding: 10px;
            }
            
            div.first {
              background: rgba(76, 175, 80, 0.1);
            }
            
            div.second {
              background: rgba(76, 175, 80, 0.3);
            }
            
            div.third {
              background: rgba(76, 175, 80, 0.6);
            }  
        </style>`,
        code:`       <h1>Transparent Boxes</h1>
       <h2> Using the opacity property </h2>
       <div style="opacity: 0.1"><p> 10% opacity </p></div>
       <div style="opacity: 0.3"><p> 30% opacity </p></div>
       <div style="opacity: 0.6"><p> 60% opacity </p></div>
       <div><p> 100% opacity </p></div>
       <h2> Using RGBA color values </h2>
       <div class="first"><p> 10% opacity </p></div>
       <div class="second"><p> 30% opacity </p></div>
       <div class="third"><p> 60% opacity </p></div>
       <div><p> 100% opacity </p></div>`
        }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Opacity </h1>
    <article>
        <p className="style_divv mt-5">
            تحدد خاصية العتامة مستوى التعتيم للعنصر.<br/>
            يصف مستوى العتامة مستوى الشفافية ، حيث 1 غير شفاف على الإطلاق ، و 0.5 يمكن رؤية 50٪ من خلاله ، و 0 شفاف تمامًا .
        </p>

        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple.code} head={codeExemple.head} language="html" title="CSS Opacity" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Opacity' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1 style={{color:"red"}}>Transparent Boxes</h1>
            <h2>Using the opacity property</h2>
            <div className="css-opacity-ex1 css-opacity-ex1-1"><p> 10% opacity </p></div>
            <div className="css-opacity-ex1 css-opacity-ex1-3"><p> 30% opacity </p></div>
            <div className="css-opacity-ex1 css-opacity-ex1-6"><p> 60% opacity </p></div>
            <div className="css-opacity-ex1 css-opacity-ex1-10"><p> 100% opacity </p></div>
            <h2>Using RGBA color values</h2>
            <div className="css-opacity-ex1 css-opacity-ex1-1"><p> 10% opacity </p></div>
            <div className="css-opacity-ex1 css-opacity-ex1-3"><p> 30% opacity </p></div>
            <div className="css-opacity-ex1 css-opacity-ex1-6"><p> 60% opacity </p></div>
            <div className="css-opacity-ex1 css-opacity-ex1-10"><p> 100% opacity </p></div>
        </Result>

        <div className="mital"> متال 2 :  </div>
        <div style={{textAlign:"center"}} dir="ltr">
            <img src={images.img_forest} alt="forest" className="w-100 css-opacity-ex2-10"/>
            <h4 className="css-opacity-ex2-test">opacity : 1 </h4>
            <img src={images.img_forest} alt="forest" className="w-100 css-opacity-ex2-6"/>
            <h4 className="css-opacity-ex2-test">opacity : 0.6 </h4>
            <img src={images.img_forest} alt="forest" className="w-100 css-opacity-ex2-3"/>
            <h4 className="css-opacity-ex2-test">opacity : 0.3 </h4>
        </div>
        <br style={{clear:"both"}}/>
    </article>
</section>
)
}