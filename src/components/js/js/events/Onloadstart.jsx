import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onloadstart(){
    // function function_name() 
    // {
    //   alert("Starting to load video");
    // }
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onloadstart</h1>
    <article>
        <p className="style_divv mt-5">
            يقع حدث <b>onloadstart</b> عندما يبدأ المتصفح في البحث عن <bdi><b>audio/video</b></bdi>  المحدد. هذا عندما تبدأ عملية التحميل.<br/><br/>
            أثناء عملية تحميل <bdi><b>audio / video</b></bdi> ، تقع الأحداث التالية بهذا الترتيب :
            <ol dir="ltr"> 
                <li> <b>onloadstart</b> </li>
                <li> <b>ondurationchange</b> </li>
                <li> <b>onloadedmetadata</b> </li>
                <li> <b>onloadeddata</b> </li>
                <li> <b>onprogress</b> </li>
                <li> <b>oncanplay</b> </li>
                <li> <b>oncanplaythrough</b> </li>
            </ol>
            <CodeHighlighter code={`<!-- Code HTML -->
<video src="name.type" onloadstart="//script"> </video>`} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={`// Code JavaScript 
object.onloadstart = function(){  //myScript  }`} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={`// Code JavaScript using the addEventListener() 
object.addEventListener("loadstart", function_name )`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js90_onloadstart} className="img"/>
        <div className="styleee"> 
            <video controls onloadstart="function_name()" width="50%">
                <source src={images.video} type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>
        </div>
    </article>
</section>
    )
}
