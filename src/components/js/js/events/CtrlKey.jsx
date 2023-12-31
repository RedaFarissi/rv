import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function OnctrlKey(){

  // #span1{ color: green; font-size: 24px;}
  // #span2{ color: red; font-size: 24px; }



  // function function_KeyPressed(event) {
  //   var r = document.getElementById("result")
  //   if (event.ctrlKey && event.code == "KeyI") {
  //     alert("you press Ctrl + i ")
  //   }else if (event.ctrlKey) {
  //     alert("you press Ctrl + " + event.code )
  //   }
  //   else {
  //     alert("The CTRL key was NOT pressed!")
  //   }
  // }
  // document.body.addEventListener("keypress", function_KeyPressed)

  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript onctrlKey</h1>
  <article>
    <p className="style_divv mt-5">
        تقوم الخاصية <b>onctrlKey</b> بإرجاع قيمة منطقية تشير إلى ما إذا كان قد تم الضغط على مفتاح <kbd>CTRL</kbd> عند تشغيل حدث الماوس أم لا.<br/>
        هذه الخاصية للقراءة فقط.
        <CodeHighlighter code={`event.ctrlKey`} language="js" addClass="mt-3 mb-3" copie={true} />
    </p>
    <CodeHighlighter code={`if(event.ctrlKey){
    // JavaScript Code 
}else{
    // JavaScript Code 
}`} language="js" addClass="mt-3 mb-3" copie={true} />
    
    <div className="mital"> متال :  </div>
    <img src={images.js133_ctrlKey} className="img"/>
    <div className="styleee">
        <p>    use event.ctrlKey width event  onkeypress    </p>
    </div>
  </article>
</section>
  )
}