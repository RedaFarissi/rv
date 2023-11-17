import images from "../images";
import { CodeHighlighter } from "../pathHtml";

export default function BiDirectionalIsolation(){
    const code = `<bdi> content  </bdi>`
    
    return(
<section className="section-conetent">
    <h1 className="heading-style-html"> HTML Bi-Directional Isolation (bdi)</h1>
    <article>
        <p className="style_divv mt-5">
            <b>BDI</b> تعني العزلة ثنائية الاتجاه.<br/>
            تعزل العلامة <kbd>&lt;bdi&gt;</kbd> جزءًا من النص يمكن تنسيقه في اتجاه مختلف عن النص الآخر خارجه.
            يكون هذا العنصر مفيدًا عند تضمين محتوى من إنشاء المستخدم مع اتجاه نص غير معروف.
            <CodeHighlighter code={code} language="html" addclassName="mt-3 mb-3" copie={true}/>
        </p>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <h4 className="green"> الكود </h4>
            <img src={images.html26_bdi} alt={images.html26_bdi} className="img"/>
            <h4 className="green"> بعد تشغيل الكود </h4>
            <div className="style-result">
                <b>
                    <div>User <bdi>hrefs</bdi>: 60 points</div>
                    <div>User <bdi>jdoe</bdi>: 80 points</div>
                    <div>User <bdi>إيان</bdi>: 90 points</div>
                </b>
            </div>
        </div>
    </article>
</section>
)
}