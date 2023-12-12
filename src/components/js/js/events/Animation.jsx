import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Animation(){
  // var x = document.getElementById("id_DIV");
  // // Start the animation with JavaScript
  // function myFunction() {
  //   x.style.animation = "mymove 4s 2";        
  // }
  // function myStartFunction() {
  //   this.innerHTML = "animationstart event occured - The animation has started"; 
  //   this.style.backgroundColor = "yellow"; // this => x
  // }
  // function myRepeatFunction() {
  //   x.innerHTML = "animationiteration event occured - The animation was played again";
  //   x.style.backgroundColor = "brown";
  // }
  // function myEndFunction() {
  //   this.innerHTML = "animationend event occured - The animation has completed";
  //   this.style.backgroundColor = "red";
  // }
  // x.addEventListener("animationstart", myStartFunction);
  // x.addEventListener("animationiteration", myRepeatFunction);
  // x.addEventListener("animationend", myEndFunction);
  
  // /************************************  animationIteration  *************************************** */
  // const DIV = document.getElementById("DIV")
  // function Myfunction(){
  //   DIV.style.animation = "example 4s 3 linear"
  // }
  // DIV.addEventListener("animationstart",animationStart)
  // DIV.addEventListener("animationiteration",animationIteration)
  // DIV.addEventListener("animationend",animationEnd)
  // function animationStart(){
  //   DIV.innerHTML = "Start"
  //   DIV.style.backgroundColor = "yellow"
  // }
  // function animationIteration(){
  //   DIV.innerHTML = "Iteration"
  //   DIV.style.borderRadius = "50%"
  //   DIV.style.lineHeight = "90px"
  //   DIV.style.textAlign = "center"
  // }
  // function animationEnd(){
  //   DIV.innerHTML = "End"
  //   DIV.style.borderRadius = "30px"
  // }
  
  // /************************************  animationEnd  *************************************** */
  // const DIV2 = document.getElementById("DIV2")
  // function Myfunction2(){
  //   DIV2.style.animation = "example2 4s linear"
  // }
  // DIV2.addEventListener("animationstart",animationStart2)
  // DIV2.addEventListener("animationiteration",animationIteration2)
  // DIV2.addEventListener("animationend",animationEnd2)
  // function animationStart2(){
  //   DIV.style.backgroundColor = "yellow"
  // }
  // function animationIteration2(){
  //   this.innerHTML = "Iteration" // this => DIV
  // }
  // function animationEnd2(){
  //   this.innerHTML = "End"
  //   this.style = "position:absolute;top:calc(50% - 45px);left:calc(50% - 45px);"
  //   this.style.color = "white"
  //   this.style.backgroundColor = "gray"
  //   this.style.backgroundColor = "gray"
  //   this.style.border = "2px solid white" 
  //   this.style.padding = "3px" 
  // }
return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript Animation</h1>
  <article>
    <p className="style_divv mt-5">
        عند تشغيل رسم متحرك CSS ، هناك ثلاثة أحداث يمكن أن تحدث:
        <ul>
            <li><b>animationstart</b> : يحدث عند بدء الرسوم المتحركة لـ CSS </li>
            <li><b>animationiteration</b> : يحدث عندما يتم تكرار الرسوم المتحركة CSS</li>
            <li><b>animationend</b> : يحدث عند اكتمال الرسوم المتحركة لـ CSS</li>
        </ul>
    </p>
    </article>
    <article>
        <h2 className="title-h2">1- animationstart</h2>
        <p className="style_divv">
            يقع حدث <bdi><b>Animationstart</b></bdi> عندما يبدأ تشغيل الرسوم المتحركة <b>CSS</b>.<br/>
            {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
                 <pre><span style="color:var(--js-color)">Object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"animationstart"</span>, function_name<span style="color:orange"></span><span style="color: gold;">)</span></pre>  
            </div> */}
        </p>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js84_animation.png' %}" className="img"/>
        <div className="styleee" style={{height: "360px"}}>
              <div id="id_DIV" onclick="myFunction()">Click me to start the animation.</div>
        </div>
    </article>
    <article>
      <h2 className="title-h2">2- animationiteration </h2>
      <p className="style_divv">
        يقع حدث <b>animationiteration</b> عند تكرار رسم متحرك <b>CSS</b> .<br/>
        {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
          <pre><span style="color:var(--js-color)">Object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"animationiteration"</span>, function_name<span style="color:orange"></span><span style="color: gold;">)</span></pre>  
        </div> */}
      </p>
      <div className="mital"> متال :  </div>
      <img src="{% static 'js/js84_animation2.png' %}" className="img"/>
      <div className="styleee" style={{height: "400px"}}>
        <div style={{width:"100%",height:"300px",position:"relative",backgroundColor:"thistle"}}>
          <div id="DIV">  </div>
        </div>
        <button className="btn btn-primary mt-2" onclick="Myfunction()"> Click </button>
      </div>
    </article>
    <article>
        <h2 className="title-h2">3- animationend </h2>
        <div className="style_divv">
          يقع الحدث <bdi><b>animationend</b></bdi> عند اكتمال رسم متحرك <b>CSS</b> .<br/>
          {/* <div className="codeStudio alert bg-dark mt-2 pb-0" dir="ltr">
            <pre><span style="color:var(--js-color)">Object</span>.<span style="color:gold">addEventListener(</span><span style="color:orange;">"animationend"</span>, function_name <span style="color:orange"></span><span style="color: gold;">)</span></pre>  
          </div> */}
        </div>
        <div className="mital"> متال :  </div>
        <img src="{% static 'js/js84_animation3.png' %}" className="img"/>
        <div className="styleee" style={{height: "400px"}}>
          <div style={{width:"100%",height:"300px",position:"relative",backgroundColor:"thistle"}}>
            <div id="DIV2">  </div>
          </div>
          <button className="btn btn-primary mt-2" onclick="Myfunction2()"> Click </button>
        </div>
    </article>
  </section>
  )
}