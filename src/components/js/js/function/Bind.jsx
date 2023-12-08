export default function Bind(){
    // const person = {
    //     F_Name: "Reda",
    //     L_Name : "Eskouni",
    //     Age     : 25,
    //     fullName() {
    //       if(this.Age > 20){
    //         return this.F_Name + " " + this.L_Name; 
    //       }
    //     }
    //   };
    //   const person2 = { F_Name: "Kamal", L_Name : "Toumi", Age : 32 }
    //   const person3 = { F_Name: "Hamo", L_Name : "Zayani", Age : 42 }
      
    //   var create_another_function = person.fullName
    //   var result = document.getElementById("result")
    //   result.innerHTML = create_another_function
    //   var resulta = document.getElementById("resulta")
      
    //   var another_function = person.fullName.bind(person)
    //   resulta.innerHTML = another_function() + "<br/>"
  
    //   another_function = person.fullName.bind(person2)
    //   resulta.innerHTML += another_function() + "<br/>"
  
    //   another_function = person.fullName.bind(person3)
    //   resulta.innerHTML += another_function() + "<br/>"
    //   console.log("Adil Toumi")
  

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Bind</h1>
    <article>
        <p className="style_divv">
            باستخدام طريقة <bdi><b>bind()</b></bdi> ، يمكن للكائن استعارة طريقة من كائن آخر.<br/>
            ينشئ المثال أدناه كائنين (شخص وعضو).<br/>
            يستعير كائن العضو أسلوب الاسم الكامل من كائن الشخص
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:gold;">bind(</span>thisArg <span style="color:gold;">)</span>
        <span style="color:gold;">bind(</span>thisArg, arg1<span style="color:gold;">)</span>
        <span style="color:gold;">bind(</span>thisArg, arg1, arg2<span style="color:gold;">)</span>
        <span style="color:gold;">bind(</span>thisArg, arg1, arg2, … ,  argN<span style="color:gold;">)</span> </pre>
        </div> */}
        </p>
        
        <div className="mital"> متال :  </div>
        <ul><li> عند كتابة إسم object نقطة إسم الدالة بدون أقواس فإنك تقوم بنسخ الدالة فقط و لن تستطيع إستخدام المعلومات داخل ال object  </li></ul>
        <img src="{% static 'js/js147_bind2.png' %}" className="img"/>
        <div className="styleee">
          <div id="result"></div>
        </div>
        <div className="mital"> متال 2 :  </div>
        <ul>
            <li> يمكن الإستفادة من نسخة الدالة التي بداخل object و ذالك من خلال إسنادها إلى متغير وإضافة أقواس . </li>
            <li> سيحاول هذا المثال عرض اسم الشخص  ، لكنه سيعرض undefined بدلاً من ذلك . وذالك لأنه لا يستطيع الوصول إلى  F_Name و L_Name و Age لأنه دالة منفصلة </li>
        </ul>
        <img src="{% static 'js/js147_bind.png' %}" className="img"/>
        <div className="styleee">
            <p>undefined</p>
        </div>
        <div className="mital"> متال 3 :  </div>
        <ul>
            <li> عند إستخدام الخاصية bind يمكن تمرير البيانات الخاصة ب object أخر شرط أن يحتوي العنصر على نفس key مع الدالة المستوردة .</li>    
        </ul>
        <img src="{% static 'js/js147_bind3.png' %}" className="img"/>
        <div className="styleee">
            <div id="resulta"></div>
        </div>
        <div className="mital"> متال 4 :  </div>
        <ul>
            <li> يمكن إستدعاء نسخة الدالة بواسطة أقواس أخر الدالة أو من خلال إسنادها إلى متغير أخر كالأمتلة السابقة . </li>    
        </ul>
        <img src="{% static 'js/js147_bind4.png' %}" className="img"/>
        <img src="{% static 'js/js147_bind5.png' %}" className="img"/>
        <div className="mital"> متال 5 :  </div>
        <img src="{% static 'js/js147_bind6.png' %}" className="img"/>
        <div className="styleee">
            <div className="h2"> function () {"{"} [native code] {"}"}<br/>Rabab Thing 26 </div>
        </div>
    </article>
</section>
    )
}