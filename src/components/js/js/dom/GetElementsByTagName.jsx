export default function GetElementsByTagName(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript getElementsByTagName</h1>
    <article>
        <p className="style_divv mt-5">
            ترجع طريقة <bdi><b>getElementsByTagName()</b></bdi> مجموعة من كافة العناصر ذات اسم علامة محدد.<br/>
            تقوم طريقة <bdi><b>getElementsByTagName()</b></bdi> بإرجاع <b><span data-bs-toggle="collapse" data-bs-target="#id_name">HTMLCollection</span></b>.<br/>
            <div id="id_name" className="collapse alert bg-info text-dark my-2"> 
                مجموعة <b>HTMLCollection</b> هي مجموعة من عُقد <b>HTML</b>.<br/>
                مجموعة <b>HTMLCollection</b> هي قائمة تشبه مصفوفة من عناصر <b>HTML</b>.<br/>
                يمكن الوصول إلى العناصر الموجودة في مجموعة بواسطة فهرس يبدأ من 0.<br/>
                ترجع خاصية <b>length</b> عدد العناصر في مجموعة <b>HTML</b>.<br/>
            </div>
            خاصية <bdi><b>getElementsByTagName()</b></bdi> للقراءة فقط.<br/>
            {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementsByTagName(<span style="color:orange">"name"</span>)</span></pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js72_getElementsByTagName.png' %}" className="img"/>
        <div className="styleee">  
            <div>div 1</div>
            <div>div 2</div>
            <div>div 3</div>
            <div>div 4</div>
            <div className="h4">
                NUmbers div = 5
            </div>
        </div>
    </article>
</section>
    )
}