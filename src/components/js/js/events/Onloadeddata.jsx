import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onloadeddata(){
  // function function_name() 
  // {
  //   alert("Starting to load video");
  // }
  // function function_name2() 
  // {
  //   alert("durationchange to load video");
  // }
  // function function_name3() 
  // {
  //   alert("Meta data for video loaded");
  // }
  // function function_name4() 
  // {
  //   alert("onloadeddata");
  // }
  const code1 = `<!-- Code HTML -->
<video src="name.type" onloadeddata="//script">  </video> `
  const code2 = `// Code JavaScript 
object.onloadeddata = function(){  //myScript  }`
  const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("loadeddata", function_name )`
  return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onloadeddata</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onloadeddata</b> عندما يتم تحميل بيانات الإطار الحالي ، ولكن لا توجد بيانات كافية لتشغيل الإطار التالي من الصوت / الفيديو المحدد.<br/><br/>
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
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js93_onloadeddata} className="img"/>
        <div className="styleee"> 
            <video controls onloadstart="function_name()" onloadedmetadata="function_name3()" ondurationchange="function_name2()" onloadeddata="function_name4()" width="50%">
              <source src={images.video} type="video/mp4"/>
              Your browser does not support HTML5 video.
            </video>
        </div>
    </article>
</section>
)
}