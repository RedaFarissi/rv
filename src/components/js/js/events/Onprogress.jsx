export default function Onprogress(){
    // function function_name(){
    //     alert("onprogress");
    //   }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onprogress</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onprogress</b> عندما يقوم المستعرض بتنزيل الصوت / الفيديو المحدد.<br/><br/>
            أثناء عملية تحميل <bdi><b>audio/video</b></bdi> ، تقع الأحداث التالية بهذا الترتيب :
            <ol dir="ltr"> 
                <li> <b>onloadstart</b> </li>
                <li> <b>ondurationchange</b> </li>
                <li> <b>onloadedmetadata</b> </li>
                <li> <b>onloadeddata</b> </li>
                <li> <b>onprogress</b> </li>
                <li> <b>oncanplay</b> </li>
                <li> <b>oncanplaythrough</b> </li>
            </ol>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;video</span> <span style="color:var(--js-color)">src</span>=<span style="color:orange;">"name.type"</span> <span style="color:var(--js-color)">onprogress</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span>  <span style="color:var(--html-color-tags)">&lt;/video&gt;</span> </pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onprogress</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"progress"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js94_onprogress.png' %}" className="img"/>
        <div className="styleee"> 
            <video controls onprogress="function_name()" width="50%">
              <source src="./js/video.mp4" type="video/mp4"/>
              Your browser does not support HTML5 video.
            </video>
        </div>
    </article>
</section>
    )
}