import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./TextIndent.css"

export default function TextIndent(props){
    const codeExemple= { 
        css:`#a{ 
    text-indent:20px; 
} 
#b{ 
    text-indent:55px; 
}
#c{ 
    text-indent:35%; 
}`,
    head:`  
        <link rel="stylesheet" href="./index.css">`,
    code:`    <p id="a">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
    </p>
    <hr/>
    <p id="b">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
    </p>
    <hr/>
    <p id="c">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
    </p>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Text-Indent </h1>
    <article>
        <p class="style_divv mt-5">
            تحدد الخاصية <b>text-indent</b> المسافة البادئة للسطر الأول في كتلة نصية.
        </p>
        <div class="mital">متال : </div>
        <CodeHighlighter file_name="index.css" code={codeExemple.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple.code} head={codeExemple.head} language="html" is_html={true} title="CSS Height" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Height' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <p id="css-text-indent-ex1-a">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
            </p>
            <hr/>
            <p id="css-text-indent-ex1-b">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
            </p>
            <hr/>
            <p id="css-text-indent-ex1-c">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam semper diam at erat pulvinar, at pulvinar felis blandit.
            </p>
        </Result>
    </article>
</section>
    )
}
