import { CodeHighlighter ,  Result} from "../../path";

export default function BiDirectionalIsolation(props){
    const code = `<bdi> content  </bdi>`
    const codeExemple = `   <bdi>
        <div>User <bdi>hrefs</bdi>: 60 points</div>
        <div>User <bdi>jdoe</bdi>: 80 points</div>
        <div>User <bdi>إيان</bdi>: 90 points</div>
    </bdi>`    
    return(
<section className="section-conetent">
    <h1 className="heading-style"> HTML Bi-Directional Isolation (bdi)</h1>
    <article  className="mt-5">
        <p className="style_divv mt-5">
            <b>BDI</b> تعني العزلة ثنائية الاتجاه.<br/>
            تعزل العلامة <kbd>&lt;bdi&gt;</kbd> جزءًا من النص يمكن تنسيقه في اتجاه مختلف عن النص الآخر خارجه.
            يكون هذا العنصر مفيدًا عند تضمين محتوى من إنشاء المستخدم مع اتجاه نص غير معروف.
        </p>
        <CodeHighlighter code={code} language="html" addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <CodeHighlighter file_name="index.html" code={codeExemple} language="html" is_html={true} title="Bi Directional Isolation" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Bi Directional Isolation' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <bdi>
                    <div>User <bdi>hrefs</bdi>: 60 points</div>
                    <div>User <bdi>jdoe</bdi>: 80 points</div>
                    <div>User <bdi>إيان</bdi>: 90 points</div>
                </bdi>
            </Result>        
        </div>
    </article>
</section>
)
}