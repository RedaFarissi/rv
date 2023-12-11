export default function Onended(){
    // var video = document.getElementById("video")  
    // function videO(){
    //     alert("thanks for watching "+"\npress p to load video"+"\npress s to start video")
    // }

    // document.body.addEventListener('keypress', function Reload(event){
    //     if(event.key == "p"){
    //       video.load();
    //     }
    //     if(event.key == "s"){
    //       video.play();
    //     }
    // })
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onended</h1>
    <article>
        <div className="style_divv mt-5">
            يقع الحدث <b>onended</b> عندما يصل <b>audio</b>/<b>video</b> إلى نهايته.<br/>
            هذا الحدث مفيد لرسائل  وما إلى ذلك.<br/>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onended</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onended</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"ended"</span>, function_name <span style="color:gold">)</span></pre>  
            </div> */}
        </div>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js117_onended.png' %}" className="img"/>
        <div className="styleee">   
            <video id="video" controls oncanplay="myFunction()" onended="videO()" width="50%">
              <source src="./js/video.mp4" type="video/mp4" for="2"/>
              Your browser does not support HTML5 video.
            </video>
        </div>
    </article>
</section>
    )
}
