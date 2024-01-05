import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onscroll(){
    // #DIV{ margin: auto;width: 70%;background-color:red;height: 450px;border: 4px solid black;overflow: scroll;  }
    // #child{ margin: auto;width: 70%;background-color:green;min-height: 900px;border: 0.9px solid white;  }
    // #Parent{ margin: auto; width: 70%; background-color:red; height: 450px; border: 4px solid black; overflow: scroll;}
    // #Child{ margin: auto; width: 70%; background-color:green; min-height: 900px; border: 0.9px solid white;}


    // function function_name(){
    //     alert("you scrolled div")
    //   }
    //   function function_name2(){
    //     var Parent = document.getElementById("Parent")
    //     var result = document.getElementById("result")
    //     result.innerHTML = (Parent.scrollTop).toFixed(2)
    //   }
    const code1 = `// Code HTML 
<element onscroll="//script">`
    const code2 = `// Code JavaScript 
object.onscroll = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("scroll", function_name )`
    const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:``
    }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onscroll</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onscroll</b> عندما يتم تمرير شريط التمرير لعنصر ما.<br/>
            استخدم خاصية <bdi><b>CSS overflow</b></bdi>  لإنشاء شريط تمرير لعنصر.
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
            
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js129_onscroll} className="img"/>
        <div className="styleee">
            <div id="DIV" onscroll="function_name()">
                <div id="child">
                    Div box
                </div>
            </div> 
        </div>
        <div className="mital"> متال :  </div>
        <img src={images.js129_onscroll2} className="img"/>
        <div className="styleee">
            <div id="Parent" onscroll="function_name2()">
                <div id="Child">
                   Div box
                </div>
            </div> 
            <b id="result"></b>
        </div>
    </article>
</section>
    )
}