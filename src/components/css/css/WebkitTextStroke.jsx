export default function WebkitTextStroke(props){
    return (
        <section className="section-conetent">
            <h1 className="heading-style heading-style-css-color"> CSS -Webkit-Text-Stroke </h1>
            <article>
                <p class="style_divv mt-5">
                    تحدد الخاصية  <bdi><b>-webkit-text-Stroke</b></bdi> عرض ولون حدود الحروف لأحرف النص. هذه خاصية اختصار للخصائص الطويلة <bdi><b>-webkit-text-stroke-width</b></bdi> و <bdi><b>-webkit-text-stroke-color</b></bdi>.
                </p>
                <div class="mital">متال  :  </div>
                <img src="{% static 'css/css66_webkit-text-storke.png' %}" class="img"/>
                <div class="style-result">
                    <p class="para"> Lorem ipsum dolor sit amet consectetur adipisicing elit.   </p>
                </div>
                <div class="mital">متال 2 :  </div>
                <img src="{% static 'css/css66_webkit-text-storke2.png' %}" class="img"/>
                <h4 style="color:green"> بعد تشغيل الكود </h4>
                <div class="styleee">
                    <p class="para2"> Lorem ipsum dolor sit amet consectetur adipisicing elit.   </p>
                </div>
            </article>
        </section>        
        )
}