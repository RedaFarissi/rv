import images from "../imagesHtml";
import { CodeHighlighter } from "../pathHtml";

export default function Subscript(){
    const code = `<sub> Text to be displayed at a lower level </sub>`
    
    return(
    <section className="section-conetent">
        <h1 className="heading-style-html"> HTML Subscript (sub) </h1>
        <article>
            <p className="style_divv mt-5">
                يُمثِّل العنصر <kbd>&lt;sub&gt;</kbd>  جزءًا من النص الذي يجب أن يُعرَض في مستوى أدنى (وغالبًا ما يكون أصغر) من المستوى الرئيسي للنص.
                مثال عن استخدام العنصر <kbd>&lt;sub&gt;</kbd> لكتابة الصيغة الكيميائية للماء H<sub>2</sub>O     
            </p>
            <CodeHighlighter  code={code} language="html"  addClass="mt-3 mb-3" copie={true}/>
            <div className="sum_exemple_style">
                <div className="mital">مثال : </div>
                <h4 className="green"> الكود </h4>
                <img src={images.html13_sub} alt="sub code" className="img"/>
                <h4 className="green">  بعد تشغيل الكود  </h4>
                <div className="style-result"> 
                    <h2>H<sub>2</sub>O</h2><hr/><h2> text <sub>sub</sub> </h2>
                </div>
            </div>
        </article>
    </section>
    )
}