export default function CreateTextNode(){
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript createTextNode</h1>
    <article>
        <p className="style_divv mt-5">
            يقوم أسلوب <bdi><b>createTextNode()</b></bdi> بإنشاء عقدة نصية.<br/>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:gold">createTextNode(</span>text<span style="color:gold">)</span></pre>
            </div> */}
            <div className="alert alert-info d-inline-block"> عقد = node</div>
        </p>
        <div className="alert alert-warning">
        <div className="h4 pb-2">عناصر <b>HTML</b> هي عقد  </div> 
        <ul>
            <li>جميع عناصر <b>HTML</b> عبارة عن عقد.<br/></li>
            <li>العناصر هي عقد. السمات هي العقد. النصوص هي عقد.</li>
            <li>تحتوي بعض العناصر على عقد أخرى.</li>
            <li>تحتوي بعض العناصر على عقد نصية.</li>
            <li>تحتوي بعض العناصر على عقد السمة.</li>
        </ul>
        </div>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js67_createTextNode.png' %}" className="img"/>
        <div className="styleee">
           <div className="h2">heading with createTextNode</div>
        </div>
    </article>
</section>
    )
}