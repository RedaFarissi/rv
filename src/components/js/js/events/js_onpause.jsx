export default function Onpause(){
    // function myFunction() {
    //     alert("The video was paused.");
    //   }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onpause</h1>
    <article>
        <p className="style_divv mt-5">
        يحدث حدث <b>onpause</b> عندما يتم إيقاف <b>audio</b>/<b>video</b> مؤقتًا إما من قبل المستخدم أو برمجيًا.<br/>
            <div className="alert alert-warning my-3">
                نصيحة: يحدث حدث onplay عندما يبدأ تشغيل  <b>audio</b>/<b>video</b>
            </div>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onpause</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onpause</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"pause"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </p>
        
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js125_onpause.png' %}" className="img"/>
        <div className="styleee">  
            <div>
              This example demonstrates how to assign an 
              "onpause" event to a video element.
            </div>
        
            <p>Play and pause the video.</p>
        
            <video  onpause="myFunction()" controls width="330" height="250">
              <source src="./js/video.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
        </div>
    </article>
</section>
    )
}
  