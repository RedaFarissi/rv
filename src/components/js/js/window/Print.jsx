export default function Print(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript print</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم طريقة <b><bdi>print()</bdi></b> بطباعة محتويات النافذة الحالية.<br/>
            تفتح طريقة <b><bdi>print()</bdi></b> مربع حوار الطباعة ، مما يتيح للمستخدم تحديد خيارات الطباعة المفضلة.
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">window</span>.<span style="color:gold">print()</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js52_print.png' %}" className="img"/>
        <div className="styleee">       
            <h2 id="h2">  <button onclick="window.print()" style={{border:"1px solid black",outline:"none",borderRadius:"2px",padding:"3px 9px"}}> Print page </button> </h2>
        </div>
    </article>
</section>
    )
}