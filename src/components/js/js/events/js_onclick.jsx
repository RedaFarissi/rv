export default function Onclick(){
    // const y = document.getElementById("div_test")
    // function function_name1(){
    //   y.style.backgroundColor = "red"
    //   y.style.border = "2px solid brown"
    //   y.style.borderRadius = "2px"
    //   y.style.padding = "20px"
    // }
    // document.getElementById("btn2").addEventListener('click',function(){
    //   y.style.backgroundColor = "red"
    //   y.style.border = "5px double white"
    //   y.style.borderRadius = "20px"
    //   y.style.padding = "9px"
    // })
    // document.getElementById("btn3").onclick = function(){
    //   y.style.backgroundColor = "red"
    //   y.style.border = "2px solid black"
    //   y.style.borderRadius = "9px"
    //   y.style.padding = "2px"
    // }
    // function myFunction() {
    //       const f2 = document.getElementById("f2")
    //       const f1 = document.getElementById("f1")
    //       f2.value = f1.value;
    // }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onclick</h1>
    <article>
    </article>
<div className="style_divv mt-5">
    يقع حدث <b>onclick</b> عندما ينقر المستخدم على عنصر.
    <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
<span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onclick</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
    </div>
    <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onclick</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
    </div>
    <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
<span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"click"</span>, function_name <span style="color:gold">)</span></pre>  
    </div>
</div>
    <div className="mital">متال :  </div>
    <img src="{% static 'js/js97_onclick.png' %}" className="img"/>
    <div className="styleee"> 
        <div id="div_test"> 
          <button className="btn btn-primary" onclick="function_name1()">
             change style1 
          </button>
          <button className="btn btn-primary" id="btn2">
             change style2 
          </button>
          <button className="btn btn-primary" id="btn3">
             change style3 
          </button>
        </div>
    </div>
    <div className="mital">متال 2 :  </div>
    <img src="{% static 'js/js97_onclick2.png' %}" className="img"/>
    <div className="styleee"> 
        <div>Field1: <input type="text" id="f1" value="JavaScript"/></div>
        <div>Field2: <input type="text" id="f2"/></div>
        <button onclick="myFunction()" className="btn btn-primary mt-2">
            Copy 
        </button>
    </div>
</section>
    )
}
