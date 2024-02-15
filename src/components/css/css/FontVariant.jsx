import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./FontVariant.css"

export default function FontVariant(props){
    const codeExemple= { 
        css:`#p1 {
    font-size: xx-large;
    font-variant: unicase;
}
        
#p2 {
    font-size: xx-large;
    font-variant: all-petite-caps;
}`,
    head:`  
    <link rel="stylesheet" href="./index.css">`,
    code:`      <p id="p1">This is a paragraph with the font variant set to unicase.</p>
      <p id="p2">This is a paragraph with the font variant set to all-petite-caps.</p>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style"> CSS Font-Variant </h1>
    <article className="mt-5">
        <div className="style_divv">
            تحدد الخاصية <b>font-variant</b> ما إذا كان يجب عرض النص بخط أحرف صغيرة أم لا. <br/>
            في <b>small-caps</b> ، يتم تحويل جميع الأحرف الصغيرة إلى أحرف كبيرة. ومع ذلك ، تظهر الأحرف الكبيرة المحولة بحجم خط أصغر من الأحرف الكبيرة الأصلية في النص.
        </div>
        <ul><li> توجد قيم أخرى للعنصر  <b>font-variant</b> متل <b>unicase</b> و <b>all-petite-caps</b> . </li></ul>
        <div className="sum_exemple_style">
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.css" code={codeExemple.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple.code} head={codeExemple.head} language="html" is_html={true} title="CSS Font-Variant" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Font-Variant' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <p className="css-font-size-ex1-p1">This is a paragraph with the font variant set to unicase.</p>
            <p className="css-font-size-ex1-p2">This is a paragraph with the font variant set to all-petite-caps.</p>
        </Result>     
        </div>
        <ul><li>توجد خاصية جميلة في لغة CSS وهي  font-family يمكنك من خلالها إختيار عدة أشكال لشكل عند النقر ستدهب إلى <a href="https://fonts.google.com/" target="_blanck">fonts google</a> بحيت يمكنك من إختيار أي خط تريده تم كل ما عليك فعله نسخ الروابط ووضعهم داخل الموقع الخاص بك . </li></ul>
        <div className="mital">متال :  </div>
        <img src={images.css9_font_family} className="img"/>
    </article>
</section>
)
}    