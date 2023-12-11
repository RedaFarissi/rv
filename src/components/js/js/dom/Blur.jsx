export default function Blur(){
    // const text = document.getElementById("text")
    // const btn = document.getElementById("bottona")
    // text.focus()
    // btn.addEventListener('click', function(){
    //   text.blur()
    // });
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript blur</h1>
    <article>
        <p className="style_divv mt-5">
            تزيل طريقة <bdi><b>blur()</b></bdi> التركيز من عنصر.
            {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">element</span>.<span style="color:gold">blur()</span></pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js82_blur.png' %}" className="img"/>
        <div className="styleee"> 
            <input type="email" id="text"/>
            <button id="bottona"> remove focus </button>
        </div>
    </article>
</section>
    )
}