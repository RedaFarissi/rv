export default function EventTarget(){
//     #parent{background-color: yellow;padding:9px;  }
//     #div_box{ background-color: red; color:white;min-height:1rem; font-size: 23px;  } 
//     #parent2{ background-color: yellow; padding:9px;   }
//    .styling{ border:5px outset white; border-radius: 7px; padding: 16px; font-size: 24px;   }
    
    
    // function function_name(event){
    //     window.alert(
    //     "you press in tag name "+ event.target.tagName +
    //     " id "+ event.target.id
    //     )
    // }

    // function myfunction(event){
    //     event.target.style.backgroundColor = "red"
    //     event.target.style.color = "white"
    //     if(event.target.tagName == "BUTTON"){
    //       event.target.classList.add("styling")
    //     }
    // }

    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript event.target</h1>
    <article>
    </article>
<style> 
</style>
<div className="style_divv mt-5">
    ترجع خاصية <bdi><b>event.target</b></bdi> العنصر الذي أطلق الحدث.<br/>
    تحصل الخاصية <b>target</b> على العنصر الذي حدث فيه الحدث في الأصل ، على عكس الخاصية <b>currentTarget</b> ، والتي تشير دائمًا إلى العنصر الأب.<br/>
    {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
        <pre><span style="color:var(--js-color)">event</span>.<span style="color:var(--js-color)">target</span></pre>
    </div> */}
</div>
<div className="sum_exemple_style">
    <div className="mital">متال :  </div>
    <img src="{% static 'js/js114_event_target.png' %}" className="img"/>
    <div className="styleee">
        <div id="parent2" onclick="function_name(event)" >
            <p id="paragraph"> this  is paragraph click </p>
            <h2 id="h2"> heading click </h2>
            <button id="btn"> click </button>
        </div>
    </div>
</div>
<div className="sum_exemple_style">
    <div className="mital">متال 2 :  </div>
    <img src="{% static 'js/js114_event_target2.png' %}" className="img"/>
    <div className="styleee">
        <div id="parent2" onclick="myfunction(event)" >
            <p id="child-p"> this  is paragraph click </p>
            <h2 id="child-h2"> heading click </h2>
            <button id="child-btn"> click </button>
        </div>
    </div>
</div>
</section>
    )
}