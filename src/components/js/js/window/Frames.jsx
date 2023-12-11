export default function Frames(){
    // const frames = window.frames;
    // function name_function() {
    //     frames[0].location = "https://academy.codershiyar.com/student/#";
    // }
    // for (let i = 0; i < frames.length; i++) {
    //     frames[i].document.body.style.background = "red";
    // }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript frames</h1>
    <article>
        <p className="style_divv mt-5">
            تقوم خاصية <b>frames</b> بإرجاع مصفوفة تحتوي على كافة كائنات النافذة في النافذة.<br/>
            خاصية الإطارات للقراءة فقط.<br/>
            يمكن الوصول إلى النوافذ عن طريق أرقام الفهرس. الفهرس الأول هو 0.<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">window</span>.<span>frames</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js37_frames.png' %}" className="img"/>
        <div className="styleee">
            <button onclick="name_function()">Try it</button>
            <br/><br/>
            <iframe src="https://academy.codershiyar.com" style={{width:"100%",height:"300px",border:"2px solid black"}}></iframe>
            <iframe src="https://academy.codershiyar.com" style={{width:"100%",height:"300px",border:"2px solid black"}}></iframe>
        </div>
        <div className="mital"> متال 2 : </div>
        <img src="{% static 'js/js37_frames.png' %}" className="img"/>
        <div className="styleee">
            <iframe style={{width:"100%",height:"70px"}}></iframe>
            <iframe style={{width:"100%",height:"70px"}}></iframe>
            <iframe style={{width:"100%",height:"70px"}}></iframe>
        </div>
    </article>
    </section>
    )
}