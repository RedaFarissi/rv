export default function Booleans(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Booleans</h1>
    <article>
        <h2 className="title-h2">1. <bdi> true - false</bdi></h2>
        <div className="style_divv">
            تمثل <b>JavaScript Boolean</b> إحدى قيمتين: <b>true</b> أو <b>false</b>.<br/>
            في كثير من الأحيان ، في البرمجة ، ستحتاج إلى نوع بيانات لا يمكن أن يحتوي إلا على قيمة واحدة من قيمتين ، مثل :
            <ul dir="ltr">
                <li>TRUE / FALSE</li>
            </ul>
        </div>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js12_Booleans.png' %}" className="img"/>
        <div className="styleee img">
            <h2>false</h2>
            <h2>true</h2>
        </div>

        <h2 className="title-h2">2. <bdi>The Boolean() Function</bdi></h2>
        <div className="style_divv">
            يمكنك استخدام الدالة <bdi><b>Boolean()</b></bdi> لمعرفة ما إذا كان التعبير (أو المتغير) صحيحًا
        </div>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js12_Booleans2.png' %}" className="img"/>
        <div className="styleee img">
            <h2>true</h2>
        </div>
    </article>
</section>
    )
}