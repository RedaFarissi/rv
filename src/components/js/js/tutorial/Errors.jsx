import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Errors(){
    // function division(a,b){
    //     try{
    //         if( b == 0){throw "Error 404"};
    //         document.getElementById("h2").innerHTML = "Reda"
    //     }catch(err){
    //         alert(err) 
    //     }
    // }
    // function OK(value){
    //     try{
    //         if( Boolean(Number(value)) ){
    //             if(value > 25){
    //                 throw "<span style='color:red'>too low</span>"
    //             }else if(value < 25){
    //                 throw "<span style='color:red'>too high</span>"
    //             }else{
    //                 document.getElementById("h22").innerHTML = "true"
    //             }
    //         }else if( Boolean(String(value)) ){
    //             throw "<span style='color:red'>this is STRING input 25</span>"
    //         }
    //     }catch(err){
    //         document.getElementById("h22").innerHTML = err
    //     }
        
    // }
    // function OK2(value){
    //     try{
    //         if( Boolean(Number(value)) ){
    //             if(value > 25){
    //                 throw "<span style='color:red'>too low</span>"
    //             }else if(value < 25){
    //                 throw "<span style='color:red'>too high</span>"
    //             }else{
    //                 document.getElementById("h22").innerHTML = "true"
    //             }
    //         }else if( Boolean(String(value)) ){
    //             throw "<span style='color:red'>this is STRING input 25</span>"
    //         }
    //     }catch(err){
    //         document.getElementById("h23").innerHTML = err
    //     }finally{
    //         document.getElementById("input_2").value = ""
    //     }
    // }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Errors</h1>
    <article>
        <p className="style_divv mt-5">
            لتفادي اللأخطء في لغة البرمجة <b>JavaScriptn</b> نستعمل <b>try</b> و <b>catch</b> و <b>finally</b> تم <b>throw</b>.<br/>
            تحدد عبارة <b>try</b> مجموعة تعليمات برمجية ليتم تشغيلها (لتجربتها).<br/>
            تحدد تعليمة <b>catch</b> كتلة رمز للتعامل مع أي خطأ.<br/>
            تحدد العبارة <b>finally</b> مقطع رمز ليتم تشغيله بغض النظر عن النتيجة.<br/>
            العبارة <b>throw</b> تحدد خطأ مخصص.<br/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. try and catch</h2>
        <p className="style_divv">
            تسمح لك عبارة <b>try</b> بتحديد كتلة من التعليمات البرمجية ليتم اختبارها بحثًا عن أخطاء أثناء تنفيذها.<br/>
            تسمح لك تعليمة <b>catch</b> بتعريف كتلة التعليمات البرمجية المراد تنفيذها ، في حالة حدوث خطأ في كتلة <b>try</b>.<br/>

            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:12px;padding-bottom:0pt;">
        <pre><span style="color:var(--violet-color)">try</span>{
            <span style="color:green">//Block of code to try</span>
        }<span style="color:var(--violet-color)">catch(</span>err<span style="color:var(--violet-color)">)</span>{
            <span style="color:green">//Block of code to handle errors</span>
        }</pre>
            </div> */}
        </p>
        <h4 className="mital">متال :  </h4>
        <img src={images.js26_Errors} className="img"/>
        <div className="styleee">
            <h2> document.e is not a function </h2>
        </div>
    </article>
    <article>  
        <h2 className="title-h2">2. throw </h2>
        <p className="style_divv">
            عند حدوث خطأ ، ستتوقف <b>JavaScript</b> بشكل طبيعي وتنشئ رسالة خطأ.<br/>
            المصطلح التقني <b>throw</b> يسمح بإنشاء خطئ الخاص بك وتحديد محتوى رسالة الخطئ 
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:12px;padding-bottom:0pt;">
        <pre><span style="color:var(--violet-color)">throw</span> <span style="color:orange">"STRING"</span>; 
        <span style="color:var(--violet-color)">throw</span> <span style="color:var(--arr-num-color)">25</span>;</pre>        
            </div> */}
        </p>
        <h4 className="mital">متال :  </h4>
        <ul><li>عند تنفيد الأمر البرمجي <b>throw</b> يتم تجاوز باقي الكود داخل <b>try</b> تم يتم الذهاب مباشرة إلى <b>catch</b></li></ul>
        <img src={images.js26_Errors2} className="img"/>
        <div className="styleee">
            <h2 id="h2"></h2><button id="button" onclick="division(9,0)">Click here</button>
        </div>
        <h4 className="mital">متال :  </h4>
        <img src={images.js26_Errors3} className="img"/>
        <div className="styleee">
            <input type="text" placeholder="input 25" id="input"/>
            <button  onclick="OK(document.getElementById('input').value)">OK</button><h2 id="h22"></h2>
        </div>
    </article>
    <article>  
        <h2 className="title-h2">3. finally</h2>
        <p className="style_divv">
            تتيح لك العبارة <b>final</b> تنفيذ التعليمات البرمجية ، بعد المحاولة والإمساك ، بغض النظر عن النتيجة
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top:12px;padding-bottom:0pt;">
            <pre><span style="color:var(--violet-color)">try</span>{
            <span style="color:green">//Block of code to try</span>
        }<span style="color:var(--violet-color)">catch(</span>err<span style="color:var(--violet-color)">)</span>{
            <span style="color:green">//Block of code to handle errors</span>
        }<span style="color:var(--violet-color)">finally</span>{
            <span style="color:green">//code block to be executed</span>
        }</pre>
            </div> */}
        </p>
        <h4 className="mital">متال :  </h4>
        <img src={images.js26_Errors4} className="img"/>
        <div className="styleee">
            <input type="text" placeholder="input 25" id="input_2"/>
            <button  onclick="OK2(document.getElementById('input_2').value)">OK</button><h2 id="h23"></h2>
        </div>
    </article>
</section>
    )
}