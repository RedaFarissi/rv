export default function GetElementById(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript getElementById</h1>
    <article>
        <p className="style_divv mt-5">
            ترجع طريقة <bdi><b>getElementById()</b></bdi> عنصرًا بقيمة محددة.<br/>
            ترجع طريقة <bdi><b>getElementById()</b></bdi> فارغة <small>null</small> إذا لم يكن العنصر موجودًا.<br/>
            تعد طريقة <bdi><b>getElementById()</b></bdi> واحدة من أكثر الطرق شيوعًا في <bdi><b>HTML DOM</b></bdi>. يتم استخدامه تقريبًا في كل مرة تريد فيها قراءة عنصر <b>HTML</b> أو تحريره.<br/>
            <div className="alert alert-warning my-2">
                <div className="h4">  ملحوظة </div>
                <ul>
                    <li> يجب أن يكون أي معرّف فريدًا . </li>
                    <li> في حالة وجود عنصرين أو أكثر بنفس المعرف ، تُرجع الدالة <bdi><b>getElementById()</b></bdi> العنصر الأول. ولاكن ذالك سيشكل </li>
                </ul>
            </div>
            {/* <div className="codeStudio alert bg-dark mt-3 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementById(<span style="color:orange">'id_element'</span>)</span></pre>
            </div> */}
        </p>
        
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js69_getElementById.png' %}" className="img"/>
        <div className="styleee">
          <div  className="h2" id="id1"> heading with id1 </div>
          <div  id= "id2"> div with id2</div>
          <input id="id3" type="text" value="input with id3"/>
          <div> id1<br/>div with id2<br/>input with id3<br/>alert alert-primary   </div>
        </div>
    </article>
</section>
    )
}