import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function ExitFullscreen(){
//   style = /* Safari */  :-webkit-full-screen{ background-color: yellow; }
//   /* IE11 syntax */ :-ms-fullscreen { background-color: yellow; }
//   /* Standard syntax */ :fullscreen { background-color: yellow; }


// var elem = document.documentElement;
// function openFullscreen() {
//   if (elem.requestFullscreen) 
//     elem.requestFullscreen();
//   else if (elem.webkitRequestFullscreen) { /* Safari */
//     elem.webkitRequestFullscreen();
//   } else if (elem.msRequestFullscreen) { /* IE11 */
//     elem.msRequestFullscreen();
//   }
// }

// function closeFullscreen() {
//   if (document.exitFullscreen) {
//     document.exitFullscreen();
//   } else if (document.webkitExitFullscreen) { /* Safari */
//     document.webkitExitFullscreen();
//   } else if (document.msExitFullscreen) { /* IE11 */
//     document.msExitFullscreen();
//   }
// }
    const codeExemple1= { 
    head:`
    <style>
      
    </style>`,
    code: `      <h2 id="result"></h2>
      
     <script src="./index.js"></script>`,
    script:``
    }
return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript exitFullscreen</h1>
  <article>

    

<p className="style_divv mt-5">
    تلغي طريقة <bdi><b>exitFullscreen()</b></bdi> عنصرًا في وضع ملء الشاشة.<br/>
    استخدم طريقة <bdi><b>requestFullscreen()</b></bdi> لفتح عنصر في وضع ملء الشاشة.<br/>
    <CodeHighlighter code={``} language="js" addClass="mt-3 mb-3" copie={true} />
    {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
        <pre><span style="color:var(--js-color)">HTMLElementObject</span>.<span style="color:var(--js-color)">exitFullscreen()</span></pre>  
    </div> */}
</p>
{/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
    <b className="d-block my-3 text-danger">Close fullscreen </b>
    <pre><span style="color:var(--html-color-tags)">var</span> elem = <span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">decumentElement</span>
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
<img src={images.js121_exitFullscreen} className="img"/>
<div className="styleee">      
    <p>Click on the "Open Fullscreen" button to open this page in fullscreen mode.Close it by either clicking the "Esc" key on your keyboard, or with the"Close Fullscreen" button.</p>
    <button className="btn btn-outline-success" onclick="openFullscreen();">Open Fullscreen</button>
    <button className="btn btn-outline-danger" onclick="closeFullscreen();">Close Fullscreen</button>   
</div>
<ul className="mt-5">
    <li>يمكنك استخدام CSS لتصميم الصفحة عندما تكون في وضع ملء الشاشة :</li>
</ul>
{/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
<b className="d-block my-3 text-danger">CSS Fullscreen</b>
<pre><span style="color:green;">/* Safari CSS * /</span>
<span style="color:gold">:-webkit-full-screen{</span>
    <span style="color:green;">/*css code* /</span>
<span style="color:gold">}</span>


<span style="color:green;">/* IE11 syntax * /</span>
<span style="color:gold">:-ms-fullscreen {</span>
    <span style="color:green;">/*css code* /</span>
<span style="color:gold">}</span>


<span style="color:green;">/* Standard syntax * /</span>
<span style="color:gold">:fullscreen {</span>
    <span style="color:green;">/*css code* /</span>
<span style="color:gold">}</span></pre>  
</div> */}
</article>
</section>
  )
}