import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./LetterSpacing.css"
export default function LetterSpacing(props){
  const codeExemple= { 
    css:`.normal   { letter-spacing: normal; }
.em-wide  { letter-spacing: 0.4em; }
.em-wider { letter-spacing: 1em; }
.em-tight { letter-spacing: -0.05em; }
.px-wide  { letter-spacing: 6px; }`,
head:`  
    <link rel="stylesheet" href="./index.css">`,
    code:`      <p class="normal">This is the normal letter-spacing.</p>
      <p class="em-wide">This is the wide letter-spacing.</p>
      <p class="em-wider">This is the very wide letter-spacing.</p>
      <p class="em-tight">This is the tight letter-spacing.</p>
      <p class="px-wide">This is the 6px letter-spacing.</p>`
}
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Letter-Spacing </h1>
    <article>
      <p className="style_divv mt-5">
          تعيّن الخاصية <b>letter-spacing</b> في لغة <b>CSS</b>  سلوك التباعد الأفقي بين أحرف النص. تُضاف هذه القيمة إلى التباعد الطبيعي بين الأحرف أثناء عرض النص. تؤدي القيم الموجبة لتباعد الأحرف إلى انتشار الأحرف بعيدًا عن بعضها البعض ، بينما تعمل القيم السالبة لتباعد الأحرف على تقريب الأحرف من بعضها.
      </p>
      <div className="mital">متال :  </div>
      <CodeHighlighter file_name="index.css" code={codeExemple.css} language="css" copie={true}/>
      <CodeHighlighter file_name="index.html" code={codeExemple.code} head={codeExemple.head} language="html" title="CSS Height" addClass="mt-3 mb-3" copie={true}/>
      <Result title='CSS Height' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
          <p class="css-letter-spacing-ex1-normal">This is the normal letter-spacing.</p>
          <p className="css-letter-spacing-ex1-em-wide">This is the wide letter-spacing.</p>
          <p className="css-letter-spacing-ex1-em-wider">This is the very wide letter-spacing.</p>          
          <p className="css-letter-spacing-ex1-em-tight">This is the tight letter-spacing.</p>
          <p className="css-letter-spacing-ex1-px-wide">This is the 6px letter-spacing.</p>
      </Result>
    </article>
</section>
)
}