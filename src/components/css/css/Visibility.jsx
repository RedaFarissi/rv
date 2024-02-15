import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";

export default function Visibility(props){
    const codeExemple= { 
        css:`.hidden{
    visibility: hidden;
}`,
    head:`  
    <link rel="stylesheet" href="./index.css">`,
        code:`      
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam deserunt natus voluptate tenetur provident eos assumenda incidunt asperiores? Eius magnam incidunt voluptatem officiis perspiciatis eum alias tempore consectetur, soluta aspernatur.
        </p>
        <p class="hidden">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam deserunt natus voluptate tenetur provident eos assumenda incidunt asperiores? Eius magnam incidunt voluptatem officiis perspiciatis eum alias tempore consectetur, soluta aspernatur.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam deserunt natus voluptate tenetur provident eos assumenda incidunt asperiores? Eius magnam incidunt voluptatem officiis perspiciatis eum alias tempore consectetur, soluta aspernatur.
        </p>
        `
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Visibility </h1>
    <article>
        <p class="style_divv mt-5">
            تحدد الخاصية <b>visibility</b>  ما إذا كان العنصر مرئيًا أم لا.<br/>
            تقبل الخاصية <b>visibility</b> قيمتين hidden و visibile.<br/>
            تشغل العناصر المخفية مساحة على الصفحة. استخدم الخاصية <b>display</b> لإخفاء وإزالة عنصر من تخطيط المستند .<br/>

        </p>
        <div class="mital">متال :  </div>
        <CodeHighlighter file_name="index.css" code={codeExemple.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple.code} head={codeExemple.head} language="html" is_html={true} title="CSS Height" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Height' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam deserunt natus voluptate tenetur provident eos assumenda incidunt asperiores? Eius magnam incidunt voluptatem officiis perspiciatis eum alias tempore consectetur, soluta aspernatur.</p>
            <p style={{visibility:"hidden"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam deserunt natus voluptate tenetur provident eos assumenda incidunt asperiores? Eius magnam incidunt voluptatem officiis perspiciatis eum alias tempore consectetur, soluta aspernatur.</p>
            <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam deserunt natus voluptate tenetur provident eos assumenda incidunt asperiores? Eius magnam incidunt voluptatem officiis perspiciatis eum alias tempore consectetur, soluta aspernatur.</p>
        </Result>
    </article>
</section>
)
}