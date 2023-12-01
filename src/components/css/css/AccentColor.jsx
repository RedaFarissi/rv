import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./AccentColor.css"

export default function AccentColor(props){
    const codeExemple1= { 
    head:`  
    <style> 
        .accent-red{ 
            accent-color:red; 
        }
        .accent-green{ 
            accent-color:green; 
        }
        .hr{ height: 20px; background-color: black; margin: 35px 0;}
    </style>`,
    code:`      checkbox <input type="checkbox" checked /><br/><hr/>
      radio <input type="radio" checked />  <br/><hr/>
      range <input type="range" />  <br/><hr/>
      progress <progress/>
      
      <div class="hr"> </div>
      
      checkbox <input type="checkbox" class="accent-red" checked/><br/><hr/>
      radio <input type="radio" class="accent-red" checked/>  <br/><hr/>
      range <input type="range" class="accent-red" />  <br/><hr/>
      progress <progress class="accent-red" />
  
      <div class="hr"> </div>
      
      checkbox <input type="checkbox" class="accent-green" checked/><br/><hr/>
      radio <input type="radio" class="accent-green" checked/>  <br/><hr/>
      range <input type="range" class="accent-green" />  <br/><hr/>
      progress <progress class="accent-green"/>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Accent-Color </h1>
    <article>
        <p className="style_divv mt-5">
            تعيّن خاصية <b>accent-color</b>  تمييز لون عناصر واجهة المستخدم التي تم إنشاؤها بواسطة بعض العناصر متل :
            <ul dir="ltr">
                <li><kbd><bdi>&lt;input type="checkbox"&gt;</bdi></kbd></li>
                <li><kbd><bdi>&lt;input type="radio"&gt;</bdi></kbd></li>
                <li><kbd><bdi>&lt;input type="range"&gt;</bdi></kbd></li>
                <li><kbd><bdi>&lt;progress&gt;</bdi></kbd></li>
            </ul>
        </p>
        <div className="mital"> متال : </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" title="CSS Accent-Color" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Accent-Color' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            checkbox <input type="checkbox" checked /><br/><hr/>
            radio <input type="radio" checked />  <br/><hr/>
            range <input type="range" />  <br/><hr/>
            progress <progress/>
            
            <div className="css-accent-color-hr"> </div>
            
            checkbox <input type="checkbox" className="css-accent-color-accent-red" checked/><br/><hr/>
            radio <input type="radio" className="css-accent-color-accent-red" checked/>  <br/><hr/>
            range <input type="range" className="css-accent-color-accent-red" />  <br/><hr/>
            progress <progress className="css-accent-color-accent-red" />

            <div className="css-accent-color-hr"> </div>
            
            checkbox <input type="checkbox" className="css-accent-color-accent-green" checked/><br/><hr/>
            radio <input type="radio" className="css-accent-color-accent-green" checked/>  <br/><hr/>
            range <input type="range" className="css-accent-color-accent-green" />  <br/><hr/>
            progress <progress className="css-accent-color-accent-green"/>
        </Result>
    </article>
</section>
)
}