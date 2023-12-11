export default function Onfullscreenchange(){

    // #myP {background-color: yellow;padding: 20px;font-size: 30px;  }


    // /* Get the element you want displayed in fullscreen */ 
    // var elem = document.documentElement;
    // /* Function to open fullscreen mode */
    // function openFullscreen() {
    //   if (elem.requestFullscreen) {
    //     elem.requestFullscreen();
    //   } else if (elem.mozRequestFullScreen) { /* Firefox */
    //     elem.mozRequestFullScreen();
    //   } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    //     elem.webkitRequestFullscreen();
    //   } else if (elem.msRequestFullscreen) { /* IE/Edge */
    //     elem = window.top.document.body; //To break out of frame in IE
    //     elem.msRequestFullscreen();
    //   }
    // }
    // /* Function to close fullscreen mode */
    // function closeFullscreen() {
    //   if (document.exitFullscreen) {
    //     document.exitFullscreen();
    //   } else if (document.mozCancelFullScreen) {
    //     document.mozCancelFullScreen();
    //   } else if (document.webkitExitFullscreen) {
    //     document.webkitExitFullscreen();
    //   } else if (document.msExitFullscreen) {
    //     window.top.document.msExitFullscreen();
    //   }
    // }
    // // Events
    // var output = document.getElementById("mydiv");
    // document.addEventListener("fullscreenchange", function() {
    //   output.innerHTML = "<h2>fullscreenchange event fired!</h2>";
    // });
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript onfullscreenchange</h1>
  <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onfullscreenchange</b> عند عرض عنصر في وضع ملء الشاشة.<br/>
            يتطلب هذا الحدث بادئات معينة للعمل في متصفحات مختلفة .
            <div className="alert alert-warning mt-3">
                <b>نصيحة</b> : 
                <ul>
                    <li> استخدم طريقة <bdi><b>element.requestFullscreen()</b></bdi> لعرض عنصر في وضع ملء الشاشة.</li>
                    <li> استخدم طريقة <bdi><b>element.exitFullscreen()</b></bdi> لإلغاء وضع ملء الشاشة.</li>
                </ul>
            </div>

            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
        <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onfullscreenchange</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onfullscreenchange</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
            </div>
            <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
                <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
        <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"fullscreenchange"</span>, function_name <span style="color:gold">)</span></pre>  
            </div>*/}
        </p> 
        {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <b className="d-block mt-3 text-danger"> Open fullscreen </b>
            <pre><span style="color:var(--html-color-tags)">var</span> elem = <span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">decumentElement</span>
        <span style="color:var(--html-color-tags)">function</span> <span style="color:gold">function openFullscreen()</span> {
            <span style="color:var(--violet-color)">if</span> (<span style="color:var(--js-color)">elem</span>.<span style="color:var(--js-color)">requestFullscreen</span>) {
                <span style="color:var(--js-color)">elem</span>.<span style="color:gold">requestFullscreen()</span>;
            }<span style="color:var(--violet-color)">else if</span> (<span style="color:var(--js-color)">elem</span>.<span style="color:var(--js-color)">webkitRequestFullscreen</span>) { <span style="color:green">/* Safari * /</span>
                <span style="color:var(--js-color)">elem</span>.<span style="color:gold">webkitRequestFullscreen()</span>;
            }<span style="color:var(--violet-color)">else if</span> (<span style="color:var(--js-color)">elem</span>.<span style="color:var(--js-color)">msRequestFullscreen</span>) {<span style="color:green"> /* IE11 * /</span>
                <span style="color:var(--js-color)">elem</span>.<span style="color:gold">msRequestFullscreen()</span>;
            }
        }

        <b className="d-block text-danger">Close fullscreen </b>
        <span style="color:var(--html-color-tags)">var</span> elem = <span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">decumentElement</span>
        <span style="color:var(--html-color-tags)">function</span> <span style="color:gold">function closeFullscreen()</span> {
            <span style="color:var(--violet-color)">if</span> (<span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">exitFullscreen</span>) {
                <span style="color:var(--js-color)">document</span>.<span style="color:gold">exitFullscreen()</span>;
            }<span style="color:var(--violet-color)">else if</span> (<span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">webkitExitFullscreen</span>) { <span style="color:green">/* Safari * /</span>
                <span style="color:var(--js-color)">document</span>.<span style="color:gold">webkitExitFullscreen()</span>;
            }<span style="color:var(--violet-color)">else if</span> (<span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">msExitFullscreen</span>) {<span style="color:green"> /* IE11 * /</span>
                <span style="color:var(--js-color)">document</span>.<span style="color:gold">msExitFullscreen()</span>;
            }
        }</pre>
        </div> */}
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js122_onfullscreenchange.png' %}" className="img"/>
        <div className="styleee">  
            <div className="h2">Fullscreen with JavaScript</div>
            <button onclick="openFullscreen();">Go Fullscreen Mode</button>
            <button onclick="closeFullscreen();">Close Fullscreen</button>
            <div id="mydiv"></div>   
        </div>
    </article>
</section>
    )
}
