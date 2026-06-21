import { useDispatch } from 'react-redux';
import { CodeHighlighter , CodeCommand ,  Result} from "../../path";
import images from "../imagesTypeScript"

export default function Never(props){
    return(
<section>
    <h1 className="heading-style">TypeScript never</h1>
    <article className="mt-5">        
       <p className="style_divv">
        
            <CodeHighlighter code={``} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1 -</h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={``} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">2 - </h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={``} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">3 -  </h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={``} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">4 -  </h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={``} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>

</section>  
    )
}


// <CodeHighlighter file_name="reda.html"code={`dd`} language="html" is_html={true} title="Reda eskouni" addClass="mt-3 mb-3" copie={true}  number={false}/>
// <CodeHighlighter file_name="reda.js"code={`codeExemple1.script`} language="js" addClass="mt-3 mb-3" copie={true}  number={false}/>
// <Result title='Reda Eskouni' logo={images.typescriptLogo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">           </Result>
// <div className="mital">متال 2 :  </div>
// <CodeCommand></CodeCommand>