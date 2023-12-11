export default function Head(){
    // document.getElementById("reSulta").innerText = `<head>
    // <title> head JavaScript </title>
    // <meta charset="utf-8">
    // <meta name="viewport" content="width=device-width, initial-scale=1">
    // </head>`

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript head</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم خاصية <b>head</b> بإرجاع عنصر <kbd>&lt;head&gt;</kbd> للمستند.
            <div className="alert alert-warning my-3">
                <b>ملحوظة</b>
                إذا لم يكن هناك عنصر <kbd>&lt;head&gt;</kbd> ، فإن <b>HTML</b> تضيف عنصرًا فارغًا.<br/>
                إذا كان هناك أكثر من عنصر <kbd>&lt;head&gt;</kbd> ، فإن هذه الخاصية ترجع العنصر الأول.
            </div>
            {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">head</span></pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js73_head.png' %}" className="img"/>
        <div className="styleee img" id="reSulta">  </div>
        <div className="mital">متال 2 : </div>
        <img src="{% static 'js/js73_head2.png' %}" className="img"/>
        <div className="styleee "> TITLE<br/>META </div>
    </article>
</section>
    )
}