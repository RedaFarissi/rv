import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function LocalStorage(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript localStorage</h1>
    <article>
        <p className="style_divv mt-5">
            يسمح لك كائن <b>localStorage</b> بحفظ أزواج المفتاح / القيمة في المتصفح.<br/>
            يخزن كائن التخزين المحلي البيانات بدون تاريخ انتهاء الصلاحية.<br/>
            لا يتم حذف البيانات عند إغلاق المتصفح ، وتكون متاحة للجلسات المستقبلية.<br/>
            لحفظ البيانات في <b>localStorage</b> إستخدم :
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">localStorage</span>.<span style="color:gold">setItem(</span><span style="color:orange">"key"</span>, value<span style="color:gold">)</span></pre> */}
            لقراءة البيانات من <b>localStorage</b>  إستخدم :
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">localStorage</span>.<span style="color:gold">getItem(</span><span style="color:orange">"key"</span><span style="color:gold">)</span></pre>
            </div> */}
            لإزالة البيانات من <b>localStorage</b>  إستخدم :
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">localStorage</span>.<span style="color:gold">removeItem(</span><span style="color:orange">"key"</span><span style="color:gold">)</span></pre>
            </div> */}
            لإزالة الكل البيانات المخزنة داخل <b>localStorage</b>  إستخدم :
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">localStorage</span>.<span style="color:gold">clear()</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src={images.js48_localStorage} className="img"/>
        <div className="styleee">       
            <h2>true</h2>
        </div>
        <div className="mital"> متال 2 :  </div>
        <img src={images.js48_localStorage2} className="img"/>
        <div className="styleee">       
            <h2>Reda Eskouni <br/> <span>null</span></h2>
        </div>
    </article>
</section>
    )
}
