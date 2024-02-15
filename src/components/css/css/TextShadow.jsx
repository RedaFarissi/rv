import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./TextShadow.css"

export default function TextShadow(props){
    const codeExemple= { 
        css:`h1{
    text-shadow: 2px 2px red;
    font-size: xxx-large;
    color: blue;
}
.paragragh1{ 
    font-size: larger; 
    text-shadow: 1px 1px rgba(0,255,200);
}

.box-paragragh2{
    background-color: black;
    color: white;
    padding: 20px;
    text-shadow: 1px 1px rgba(0,255,200);
}
.paragragh2{
    font-size: larger; 
    text-shadow: 4px 3px fuchsia;
}`,
    head:`  
    <link rel="stylesheet" href="./index.css">`,
    code:`         <h1>The overflow Property</h1>
      <p class="paragragh1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis assumenda molestias, reprehenderit nobis exercitationem magnam dolores sequi id labore nemo culpa ut illum eaque mollitia fugiat repellat esse facilis!</p>
    
      <hr/>
     
      <div class="box-paragragh2">
          <p class="paragragh2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis assumenda molestias, reprehenderit nobis exercitationem magnam dolores sequi id labore nemo culpa ut illum eaque mollitia fugiat repellat esse facilis!</p>
      </div>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Text-Shadow </h1>
    <article>
        <p className="style_divv mt-5">
            تضيف خاصية <b>text-shadow</b> الظل إلى النص.
            تقبل هذه الخاصية قائمة الظلال مفصولة بفواصل ليتم تطبيقها على النص.
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.css" code={codeExemple.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple.code} head={codeExemple.head} language="html" is_html={true} title="CSS Text-Shadow" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Text-Shadow' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <h1 className="css-text-shadow-ex1-h1">The overflow Property</h1>
            <p className="css-text-shadow-ex1-paragragh1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis assumenda molestias, reprehenderit nobis exercitationem magnam dolores sequi id labore nemo culpa ut illum eaque mollitia fugiat repellat esse facilis!</p>
            <hr/>
            <div className="css-text-shadow-ex1-box-paragragh2">
                <p className="css-text-shadow-ex1-paragragh2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum officiis assumenda molestias, reprehenderit nobis exercitationem magnam dolores sequi id labore nemo culpa ut illum eaque mollitia fugiat repellat esse facilis!</p>
            </div>
        </Result>        
    </article>
</section>
    )
}