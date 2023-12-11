export default function Ontoggle(){
    // #DIV{background-color: red; color: white; min-height: 200px; border:2px solid brown; font-size: 35px;}

    // function function_name() {
    //     alert("The ontoggle event occured");
    //   }
  
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript ontoggle</h1>
    <article>
        <div className="style_divv mt-5">
            يقع حدث <b>ontoggle</b> عندما يفتح المستخدم أو يغلق عنصر <kbd>&lt;details&gt;</kbd>.<br/>
            يحدد عنصر <kbd>&lt;details&gt;</kbd> التفاصيل الإضافية التي يمكن للمستخدم عرضها أو إخفاءها عند الطلب.<br/>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
                <span style="color:var(--html-color-tags)">&lt;details</span> <span style="color:var(--js-color)">ontoggle</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">ontoggle</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
        </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"toggle"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </div>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js131_ontoggle.png' %}" className="img"/>
        <div className="styleee">
            <div className="h2" style="color: red;">ontoggle event attribute (open the details)</div>
            <details ontoggle="function_name()">
                <summary style="color:blue">
                 is the full form of HTML
                </summary> 
                <p>Hyper Text Markup Language</p>
                <div id="DIV"> DIV BOX </div>
            </details>
        </div>
    </article>
</section>
    )
}