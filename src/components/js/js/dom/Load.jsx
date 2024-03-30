import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Load(){
 
    const codeExemple1= { 
    code: `      <button onclick="playVid()" type="button" class="btn btn-outline-primary">
        Play Video
     </button>
     <button onclick="pauseVid()" type="button" class="btn btn-outline-danger">
        Pause Video
     </button>
     <button onclick="loadVid()" type="button" class="btn btn-outline-dark">
        Load Video
     </button>
      
     <script src="./index.js"></script>`,
   script:`function playVid() {
    document.getElementById("myVideo").play();
}
 
function pauseVid() {
    document.getElementById("myVideo").pause();
}

function loadVid(){
    document.getElementById("myVideo").load();
    document.getElementById("myVideo").play();
}`
    }
    function playVid() {
      document.getElementById("myVideo").play();
    }
  
    function pauseVid() {
      document.getElementById("myVideo").pause();
    }

    function loadVid(){
      document.getElementById("myVideo").load();
      document.getElementById("myVideo").play();
    }
  return(
<section className="section-conetent">
  <h1 className="heading-style">JavaScript load</h1>
  <article>
    <p className="style_divv mt-5">
        طريقة <bdi><b>load()</b></bdi> تعيد تحميل عنصر الصوت / الفيديو.<br/>
        تُستخدم طريقة التحميل <bdi><b>load()</b></bdi> عنصر الصوت / الفيديو بعد تغيير المصدر أو الإعدادات الأخرى.
        <CodeHighlighter code={`video.load()`} language="js" addClass="mt-3 mb-3" copie={true} />
        <CodeHighlighter code={`audio.load()`} language="js" addClass="mt-3 mb-3" copie={true} />
    </p>
    <div className="mital">متال :  </div>
    <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="load" addClass="mt-3 mb-3" copie={true}  number={false}/>  
    <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={false}/>
    <Result title="load" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
        <button onClick={playVid} type="button" class="btn btn-outline-primary">Play Video</button>
        <button onClick={pauseVid} type="button" class="btn btn-outline-danger">Pause Video</button>
        <button onClick={loadVid} type="button" class="btn btn-outline-dark">Load Video</button>
        <br/>
        <video id="myVideo" width="40%" height="176" className="mt-2">
          <source src={images.video} type="video/mp4"/>
          Your browser does not support HTML5 video.
        </video>
    </Result>  
  </article>
</section>
  )
}