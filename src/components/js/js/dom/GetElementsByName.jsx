export default function GetElementsByName(){
    // function val(){
    //     const name = document.getElementsByName("text")
    //     const resulta = document.getElementById("resulta")
    //     resulta.innerHTML = ` ${name[0].value} <br/>`
    //     resulta.innerHTML +=` ${name[0].outerHTML} <br/>`
    //     resulta.innerHTML +=` ${name[0].tagName} <br/>`
    //   }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript getElementsByName</h1>
    <article>
        <p className="style_divv mt-5">
            ترجع طريقة <bdi><b>getElementsByName()</b></bdi> مجموعة من العناصر باسم محدد.<br/>
            تقوم طريقة <bdi><b>getElementsByName()</b></bdi> بإرجاع قائمة <b>NodeList</b> مباشرة.
            {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">getElementsByName(<span style="color:orange">"name"</span>)</span></pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js71_getElementsByName.png' %}" className="img"/>
        <div className="styleee">  2  </div>
        <div className="mital">متال 2 :  </div>
        <img src="{% static 'js/js71_getElementsByName2.png' %}" className="img"/>
        <div className="styleee">  
            <input type="text" name="text"/>
            <button className="btn btn-light mb-3" onclick="val()"> value </button>
            <div id="resulta" className="border border-primary alert alert-success">  

            </div>
        </div>
    </article>
</section>
)
}