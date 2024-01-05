import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Canplay(){
    // function myFunction() {
    //     alert("Can start playing video");
    //   }
    const code1 = ``
    const code2 = ``
    const code3 = ``
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
    <h1 className="heading-style heading-style-js-color">JavaScript canplay</h1>
    <article>
        <p className="style_divv mt-5">
            يحدث حدث <b>oncanplay</b> عندما يمكن للمتصفح بدء تشغيل <bdi><b>audio/video</b></bdi> المحدد (عندما يكون مخزنًا مؤقتًا بما يكفي لبدء التشغيل).<br/><br/>
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
        <img src="{% static 'js/js95_oncanplay.png' %}" className="img"/>
        <div className="styleee"> 
            <video controls oncanplay="myFunction()" width="60%">
                <source src={images.video} type="video/mp4"/>
                Your browser does not support HTML5 video.
            </video>
        </div>
    </article>
</section>
    )
}
