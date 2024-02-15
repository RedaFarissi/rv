import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./FontStyle.css"

export default function FontStyle(props){
    const codeExemple2= { 
        css:`p{ font-size: 22px;}
p-1 {  font-style: normal;  }
p-2 {  font-style: italic;  }
p-3 {  font-style: oblique;  }
p-4 {  font-style: inherit;  }`,
        head:`  
    <link rel="stylesheet" href="./index.css">`,
        code:`      <p class="p-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
      <p class="p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
      <p class="p-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
      <p class="p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Font-Style </h1>
    <article className="mt-5">
        <p className="style_divv">
            الخاصية <b>font-style</b> في <b>CSS</b> تُحدِّد إن كان يجب أن يكون شكل الخط عاديًا (normal) أو مائلًا (italic) أو منحرفًا (oblique). وسيختار المتصفح النسخة الأنسب من نوع الخط <b>font-family</b>.<br/>
            يكون للخط المائل بعض سمات الكتابة اليدوية، ويستهلك عادةً مسافة أفقية أقل من الخط العادي، بينما الخط المنحرف (oblique) يُمثِّل نسخةً منحرفة بزاوية معيّنة من الخط العادي؛ وعند عدم توافر نسخة مائلة مخصصة من الخط، فسيكون شكل الخط المائل والمنحرف سواءً.
            <ul>
                <li><b>normal</b> : تحديد النسخة العادية من الخط </li>
                <li><b>italic</b> : اختيار نسخة مُصنَّفة على أنها مائلة (italic)، وإن لم تتوافر نسخة مائلة، فستستخدم النسخة المنحرفة من الخط <b>oblique</b>، وإن لم تتوفر كلا النسختين، فسيحاكى الخط المائل من المتصفح.</li>
                <li><b>oblique</b> : اختيار نسخة مُصنَّفة على أنها منحرفة (oblique)، وإن لم تتوافر نسخة منحرفة، فستستخدم النسخة المائلة من الخط <b>italic</b> ، وإن لم تتوفر كلا النسختين، فسيحاكى الخط المائل من المتصفح</li>
            </ul>
        </p>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.css" code={codeExemple2.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple2.code} head={codeExemple2.head} language="html" is_html={true} title="CSS Font-Style" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Font-Style' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <p className="css-font-style-ex1-p-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <p className="css-font-style-ex1-p-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <p className="css-font-style-ex1-p-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
            <p className="css-font-style-ex1-p-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
        </Result>
    </article>    
</section>
    )
}