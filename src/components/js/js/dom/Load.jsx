export default function Load(){
  // var vid = document.getElementById("myVideo"); 
  // function playVid() { 
  //   vid.play(); 
  // } 
  // function pauseVid() { 
  //   vid.pause(); 
  // } 
  // function loadVid(){
  //   vid.load(); 
  //   vid.play(); 
  // }
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript load</h1>
  <article>
    <p className="style_divv mt-5">
        طريقة <bdi><b>load()</b></bdi> تعيد تحميل عنصر الصوت / الفيديو.<br/>
        تُستخدم طريقة التحميل <bdi><b>load()</b></bdi> عنصر الصوت / الفيديو بعد تغيير المصدر أو الإعدادات الأخرى.
        {/* <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
            <pre><span style="color:var(--js-color)">video</span>.<span style="color:gold">load()</span></pre>
        </div>
        <div className="codeStudio alert bg-dark  mt-2 pb-0" dir="ltr">
            <pre><span style="color:var(--js-color)">audio</span>.<span style="color:gold">load()</span></pre>
        </div> */}
    </p>
    <div className="mital">متال :  </div>
    <img src="{% static 'js/js89_load.' %}" className="img"/>
    <div className="styleee"> 
        <button onclick="playVid()" type="button" className="btn btn-outline-primary mb-2">
          Play Video
        </button>
        <button onclick="pauseVid()" type="button" className="btn btn-outline-danger mb-2">
          Pause Video
        </button>
        <button onclick="loadVid()" type="button" className="btn btn-outline-dark mb-2">
          Load Video
        </button>
        <br/> 

        <video id="myVideo" width="40%" height="176" controls>
          <source src="./js/video.mp4" type="video/mp4"/>
          Your browser does not support HTML5 video.
        </video>
    </div>
  </article>
</section>
  )
}