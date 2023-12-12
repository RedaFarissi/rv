import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onsubmit(){
  // function test(event){
  //   var email = document.getElementById("myEmail").value
  //   console.log(email);
  //   if(email.includes("@gmail.com") == true){
  //     alert("submit success")
  //   }else{
  //     event.preventDefault()
  //   }
  // }
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript onsubmit</h1>
  <article>
      <p className="style_divv mt-5">
          يقع حدث <b>onsubmit</b> عند إرسال نموذج إلى الخادم . 
          {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
              <pre><span style="color:green">&lt;!-- Code HTML --&gt;</span>
      <span style="color:var(--html-color-tags)">&lt;form</span> <span style="color:var(--js-color)">onsubmit</span>=<span style="color:orange;">"<span style="color:green">//script</span>"</span><span style="color:var(--html-color-tags);">&gt;</span></pre>  
          </div>
          <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
              <pre><span style="color:green">&lt;!-- Code JavaScript --&gt;</span>
      <span style="color:var(--js-color)">object</span>.<span style="color:var(--js-color)">onsubmit</span> = <span style="color:var(--html-color-tags)">function()</span>{ <span style="color:green"> //myScript </span> }</pre>  
          </div>
          <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr" >
              <pre><span style="color:green">&lt;!-- Code JavaScript using the addEventListener() --&gt;</span>
      <span style="color:var(--js-color)">object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"submit"</span>, function_name <span style="color:gold">)</span></pre>  
          </div> */}
      </p>
      <div className="mital"> متال :  </div>
      <img src={images.js116_onsubmit} className="img"/>
      <div className="styleee">   
          <form onsubmit="test(event)" action="./js/test_submit.php" method="POST">
             <input type="email" name="Email_submit" id="myEmail" required/>
             <input type="submit" value="submit"/>
          </form>
      </div>
  </article>
</section>
    )
}