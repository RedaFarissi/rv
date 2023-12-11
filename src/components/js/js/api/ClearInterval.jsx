export default function ClearInterval(){
    // let id = document.getElementById("h2")
    // let s=0 ; m=0 , h=0 ; 
    // var clear = setInterval( Clock ,1000)
    // function Clock(){
    //     if( s < 59)   s++;
    //     else{ m++;  s=0; 
    //         if(m == 60){ m=0; h++; } 
    //     }
    //     id.innerHTML = ` ${h} : ${m} : ${s} `
    // }
    // function stop_Inter(){
    //     clearInterval(clear)
    // }

    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript clearInterval</h1>
    <article>
        <p className="style_divv mt-5">
            لمسح فاصل زمني ، قم إدخال قيمة  <bdi><b>setInterval()</b></bdi> داخل متغير تم قم بإسناد قيمة المتغير داخل <bdi><b>clearInterval()</b></bdi> .<br/>
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--html-color-tags)">let</span> variable =  <span style="color:gold">setInterval(</span> Function_name <span style="color:gold">,</span> milliseconds<span style="color:gold">)</span>;

        <span style="color:gold">clearInterval(</span>variable<span style="color:gold">)</span>;</pre>
            </div> */}
        </p>
        
        <div className="mital"> متال  :  </div>
        <img src="{% static 'js/js36_clearInterval.png' %}" className="img"/>
        <div className="styleee">
            <h2 id='h2'>  0 : 0 : 0  </h2>
            <button onclick="stop_Inter()" style={{outline:"none",borderRadius:"2px",border:"1px solid black"}}> STOP </button>
        </div>
    </article>
</section>
    )
}