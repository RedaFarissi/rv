export default function SetAttribute(){
    // const res = document.getElementById("result")
    // const div = document.createElement("div");
    // div.setAttribute("class","reda")
    // res.appendChild(div)
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript setAttribute</h1>
    <article>
        {/* .reda{ backgroundColor: "red",width: "90%", height: "200px"} */}
        <p className="style_divv mt-5">
            يعين الأسلوب <bdi><b>setAttribute()</b></bdi> قيمة جديدة للسمة.<br/>
            إذا كانت السمة غير موجودة ، يتم إنشاؤها أولاً.
            {/* <div className="alert bg-dark pb-0 mt-3">
                <pre> <span style="color:var(--js-color)">element</span>.<span style="color:gold">setAttribute(<span style="color:white;">name</span>, <span style="color:white;">value</span>)</span></pre></div>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js146_setAttribute.png' %}" className="img"/>
        <div className="styleee">
            <div id="result">  
                <h2> Heading </h2>
            </div>
        </div>
    </article>
</section>
    )
}
       