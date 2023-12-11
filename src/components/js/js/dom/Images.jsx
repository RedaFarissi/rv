export default function Images(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript images</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم خاصية <b>images</b> بإرجاع مجموعة من جميع عناصر <kbd>&lt;img&gt;</kbd> في المستند.<br/>
            تقوم خاصية الصور بإرجاع مجموعة <b><span data-bs-toggle="collapse" data-bs-target="#id_name">HTMLCollection</span></b>.<br/>
            <div id="id_name" className="collapse alert bg-info text-dark my-2"> 
                مجموعة <b>HTMLCollection</b> هي مجموعة من عُقد <b>HTML</b>.<br/>
                مجموعة <b>HTMLCollection</b> هي قائمة تشبه مصفوفة من عناصر <b>HTML</b>.<br/>
                يمكن الوصول إلى العناصر الموجودة في مجموعة بواسطة فهرس يبدأ من 0.<br/>
                ترجع خاصية <b>length</b> عدد العناصر في مجموعة <b>HTML</b>.<br/>
            </div>
            {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">images</span></pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js74_images.png' %}" className="img"/>
        <div className="styleee img" id="reSulta"> 
            <img src="{% static 'js/hajime.jpg" className="w-25" style={{height:"200px"}}/>
            <img src="{% static 'js/hajime2.jpg" className="w-25" style={{height:"200px"}}/>
            <div className="mt-2"> length = 2 </div>
        </div>
    </article>
</section>
    )
}