import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Oncontextmenu(){
  // #div_element{
  //   padding:9px 5px; 
  //   font-size: 20px;
  // }


  // const div_element = document.getElementById("div_element")
  // div_element.oncontextmenu =()=>{
  //   div_element.style.backgroundColor = "red"
  //   div_element.style.color = "white"
  //   alert("oncontextmenu Event")
  // }
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript oncontextmenu</h1>
  <article>
      <p className="style_divv mt-5">
          يقع حدث <b>oncontextmenu</b> عندما ينقر المستخدم بزر الماوس الأيمن فوق عنصر لفتح قائمة السياق.<br/>
          <div className="alert alert-warning mt-2"> على الرغم من أن حدث <b>oncontextmenu</b> مدعوم في جميع المتصفحات ، إلا أن سمة <b>contextmenu</b> مدعومة حاليًا في <b>Firefox</b> فقط.</div>
          {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
              <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
      <span style="color:var(--html-color-tags)">&lt;element</span> <span style="color:var(--js-color)">oncontextmenu</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
          </div>
          <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
              <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
      <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">oncontextmenu</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
          </div>
          <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
              <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
      <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"contextmenu"</span>, function_name <span style="color:gold">)</span></pre>  
          </div> */}
      </p>
      <div className="mital">متال :  </div>
      <img src="{% static 'js/js100_oncontextmenu.png' %}" className="img"/>
      <div className="styleee">
          <div id="div_element"> 
            div element with Event oncontextmenu
          </div>
      </div>
  </article>
</section>
    )
}
