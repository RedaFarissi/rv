export default function LoopWhile(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Loop While</h1>
    <article>
        <h2 className="title-h2">1.  while Loop</h2>
        <p className="style_divv">
            تتكرر حلقة <b>while</b> خلال كتلة من التعليمات البرمجية طالما أن الشرط المحدد صحيح. <br/>
            يبدأ تنفيد الكود بعد التحقق من الشرط 
        {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--violet-color);">while</span> (<span style="color:var(--js-color)">condition</span>) {
          <span style="color:green">//code block to be executed</span>
        }</pre>
        </div> */}
        </p>
        <div className="mital">متال 1 :  </div>
        <ul>
          <li>في المثال التالي ، سيتم تشغيل الكود الموجود في الحلقة ، مرارًا وتكرارًا ، طالما أن المتغير (i) أقل من 5</li>
          <li>يتم التحقق من الشرط في كل مرة </li>
          <li>عند عدم تحقق الشرط يتم تجاوز الحلقة <b>while</b></li>
          <li>في كل مرة يتم تنفيد الكود داخل الحلقة يتم إضافة واحد إلى العداد <b>i</b></li>
        </ul>
        <img src="{% static 'js/js22_While.png' %}" className="img"/>
        <div className="styleee">
            <h2> Hello Hello Hello Hello Hello </h2>
        </div>
        <div className="mital">متال 2 :  </div>
        <ul><li>الفرق بين المتالين  أن الأول يتم إضافة 1 لقيمة العداد i في كل مرة أما المتال الحالي يتم إضافة 3  للعداد في كل مرة</li></ul>
        <img src="{% static 'js/js22_While2.png' %}" className="img"/>
        <div className="styleee">
            <h2> Hello Hello  </h2>
        </div>
        <div className="mital">متال 3 :  </div>
        <ul><li>في المتال التالي يتم عرض قيمة i في كل مرة يتم إضافة 1 إلى i</li></ul>
        <img src="{% static 'js/js22_While3.png' %}" className="img"/>
        <div className="styleee">
            <h2> i = 0<br/>i = 1<br/>i = 2<br/>i = 3<br/>i = 4<br/>i = 5<br/>i = 6<br/>i = 7<br/>i = 8<br/>i = 9<br/>i = 10  </h2>
        </div>
        <div className="mital">متال 4 :  </div>
        <ul><li>في المتال التالي يتم عرض قيمة i في كل مرة يتم إضافة 1 إلى i</li></ul>
        <img src="{% static 'js/js22_While4.png' %}" className="img"/>
        <div className="styleee">
            <h2> fb - wh - ins - tele - </h2>
        </div>
    </article>
    <article>
        <h2 className="title-h2">2. do while Loop</h2>
        <p className="style_divv">
          حلقة <bdi><b>do while</b></bdi> هي نوع مختلف من حلقة <b>while</b>. ستنفذ هذه الحلقة كتلة الكود مرة واحدة ، قبل التحقق مما إذا كان الشرط صحيحًا ، ثم ستكرر الحلقة طالما أن الشرط صحيح.
          {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--violet-color);">do</span>{
          <span style="color:green">//code block to be executed</span>
        }<span style="color:var(--violet-color);">while</span> (<span style="color:var(--js-color)">condition</span>) ; </pre>
        </div> */}
        </p>
        <div className="mital">متال  :  </div>
        <ul><li> مع أن الشرط ليس صحيح يتم تنفيد الكود مرة واحدة </li></ul>
        <img src="{% static 'js/js22_While5.png' %}" className="img"/>
        <div className="styleee">
            <h2> Reda </h2>
        </div>
    </article>
 </section>
    )
}