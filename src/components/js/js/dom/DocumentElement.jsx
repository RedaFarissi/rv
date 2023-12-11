export default function DocumentElement(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript documentElement</h1>
    <article>
        <div className="style_divv mt-5">
            تقوم خاصية <b>documentElement</b> بإرجاع عنصر مستند (ككائن عنصر).<br/>
            المستند للقراءة فقط.<br/>
            بالنسبة إلى مستندات <b>HTML</b> ، يكون الكائن الذي تم إرجاعه هو عنصر <kbd>&lt;html&gt;</kbd> .<br/>
            <div className="alert alert-warning">
                <b>ملحوظة</b><br/>
                الفرق بين <b>document.body</b> و 
                <b>document.documentElement</b><br/>
                يُرجع <b>document.body</b> عنصر <kbd>&lt;body&gt;</kbd><br/>
                تُرجع <b>document.documentElement</b> عنصر <kbd>&lt;html&gt;</kbd>.<br/>
                أنظر أيضا:<br/>
                خاصية نص المستند<br/>
                كائن <b>HTML DOM HTML</b><br/>
                علامة <b>HTML</b> <kbd>&lt;html&gt;</kbd>
            </div>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- return html document  --&gt;</span>
        <span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">documentElement</span></pre>  
            </div> */}
        </div>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js120_documentElement.png' %}" className="img"/>
        <img src="{% static 'js/js120_documentElement2.png' %}" className="img"/>
    </article>
</section>
    )
}