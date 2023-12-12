import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onerror(){
  // function myFunction() {
  //   alert('The image could not be loaded.');
  // }
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript onerror</h1>
  <article>
      <p className="style_divv mt-5">
          يتم تشغيل حدث <b>onerror</b> في حالة حدوث خطأ أثناء تحميل ملف خارجي (مثل مستند أو صورة).   
          {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
              <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
      <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">onerror</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
          </div>
          <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
              <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
      <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onerror</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
          </div>
          <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
              <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
      <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"error"</span>, function_name <span style="color:gold">)</span></pre>  
          </div> */}
      </p>
      <div className="mital"> متال :  </div>
      <img src="{% static 'js/js119_onerror.png' %}" className="img"/>
      <div className="styleee">      
          <img src="image.gif" onerror="myFunction()"/>
          <p>
            A function is triggered if an error
            occurs when loading the image. 
            The function shows an alert box with a text.
            In this example we refer to an image
            that does not exist, therefore 
            the onerror event occurs.
          </p>
      </div>
  </article>
</section>
    )
}
