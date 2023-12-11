export default function ScrollTop(){
    // const scroller = document.querySelector("#dV1");
    // const output = document.querySelector("#h2");
    // function function_scroll(){
    //   output.textContent = `scrollTop: ${scroller.scrollTop}px`;
    // }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript scrollTop</h1>
    <article>
        <p className="style_divv mt-5">
            تحصل الخاصية <b>scrollTop</b> على عدد وحدات البكسل التي يتم تمرير محتوى العنصر فيها عموديًا أو تعينها.<br/>
            إن قيمة <b>scrollTop</b> الخاصة بالعنصر هي قياس المسافة من أعلى العنصر إلى أعلى محتوى مرئي له. عندما لا يُنشئ محتوى عنصر شريط تمرير رأسي ، تكون قيمة <b>scrollTop</b> الخاصة به هي 0.
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">element</span>.<span style="color:var(--js-color)">scrollTop</span></pre>
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js45_scrollTop.png' %}" className="img"/>
        <div className="styleee">
            <div id="dV1" style={{width: "50%", height:"150px", overflow: "auto", backgroundColor:"brown",padding: "20px"}} onscroll="function_scroll()"> 
                <div id="dV2" style={{ backgroundColor:"yellow", border: "2px solid black",margin:"500px 0px"}}>
                    div mark by id
                </div>
            </div>
            <h2 id="h2"> scrollTop: 0px </h2>
        </div>
    </article>
</section>
    )
    }