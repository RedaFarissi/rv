import "./Arithmetic.css"

export default function Arithmetic(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Arithmetic</h1>
    <article>
        <p class="style_divv mt-5">
            تؤدي العوامل الحسابية العمليات الحسابية على الأرقام (المتغيرات أو الحرفية).<br/>
            <table dir="ltr">
                <tr><th> Operator  </th><th> Description </th></tr>
                <tr><td>+</td> <td>Addition : الزائد </td></tr>
                <tr><td>-</td> <td>Subtraction : الناقص </td></tr>
                <tr><td>*</td> <td>Multiplication : الضرب </td></tr>
                <tr><td>**</td><td> Exponentiation : الأس</td></tr>
                <tr><td>/</td> <td> Division : القسمة </td></tr>
                <tr><td>%</td> <td> Modulus (Remainder) - باقي القسمة الطبيعة </td></tr>
                <tr><td>++</td><td> Increment - زيادة</td></tr>
                <tr><td>--</td><td> Decrement - إنقاص </td> </tr>
            </table>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1. Addition</h2>
        <div class="mital"> متال :  </div>
        <img src="{% static 'js/js5_Arithmetic.png' %}" class="img"/>
        <div class="styleee img"><div id="adition"> 95 </div></div>
    </article>
    <article>
        <h2 className="title-h2">2. Subtraction</h2>
        <div class="mital"> متال :  </div>
        <img src="{% static 'js/js5_Arithmetic2.png' %}" class="img"/>
        <div class="styleee img"><div id="soustraction"> -85 </div></div>
    </article>
    <article>
        <h2 className="title-h2">3. Multiplication</h2>
        <div class="mital"> متال :  </div>
        <img src="{% static 'js/js5_Arithmetic3.png' %}" class="img"/>
        <div class="styleee img"><div id="multip"> 450 </div></div>
    </article>
    <article>
        <h2 className="title-h2">5. Division</h2>
        <div class="mital"> متال :  </div>
        <img src="{% static 'js/js5_Arithmetic4.png' %}" class="img"/>
        <div class="styleee img">  0.05555555555555555 </div>
        <h2 className="title-h2">5. Exponentiation</h2>
        <div class="mital"> متال :  </div>
        <img src="{% static 'js/js5_Arithmetic5.png' %}" class="img"/>
        <div class="styleee img"><div id="Expo"> 125 </div></div>
    </article>
    <article>
        <h2 className="title-h2">6. Modulus (Remainder)</h2>
        <div class="mital"> متال :  </div>
        <img src="{% static 'js/js5_Arithmetic6.png' %}" class="img"/>
        <div class="styleee img">2</div>
    </article>
    <article>
        <h2 className="title-h2">7. Increment</h2>
        <div class="mital"> متال :  </div>
        <img src="{% static 'js/js5_Arithmetic7.png' %}" class="img"/>
        <div class="styleee img"> 6  </div>
    </article>
    <article>
        <h2 className="title-h2">8. Decrement</h2>
        <div class="mital"> متال :  </div>
        <img src="{% static 'js/js5_Arithmetic8.png' %}" class="img"/>
        <div class="styleee img"> 4 </div>

    </article>
</section>
    )
}