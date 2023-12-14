import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Switch(){
    const code1= `switch(expression){
    case x: //JavaScript code break; 
    case y: //JavaScript code break; 
    case z: //JavaScript code break;            
    default : //JavaScript code break; 
}`
    const codeExemple1= { 
    code: `     
    
     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple2= { 
    code: `     
    
     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple3= { 
    code: `     
    
     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple4= { 
    code: `     
    
     <script src="./index.js"></script>`,
    script:``
    }
    const codeExemple5= { 
    code: `     
    
     <script src="./index.js"></script>`,
    script:``
    }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Switch</h1>
    <article>
        <p className="style_divv mt-5">
            يتم استخدام بيان التبديل لأداء إجراءات مختلفة بناءً على ظروف مختلفة.
            <CodeHighlighter code={code1} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js16_Switch} className="img"/>
        <div className="styleee">
            <h2>3</h2>
        </div>
        <div className="mital">متال 2 :  </div>
        <img src={images.js16_Switch2} className="img"/>
        <div className="styleee">
            <h2>is case 4</h2>
        </div>
        <div className="mital"> متال 3 : </div>
        <img src={images.js16_Switch3} className="img"/>
        <div className="styleee">
            <h2>Not Found</h2>
        </div>
    </article>
</section>
    )
}


