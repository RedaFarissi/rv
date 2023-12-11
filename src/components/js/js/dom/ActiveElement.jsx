export default function ActiveElement(){
  // function Event_mouseup() {
  //   document.getElementById('output-element-id').innerHTML = document.activeElement.id
  //   document.getElementById('output-element-name').innerHTML =  document.activeElement.name
  //   document.getElementById('output-text').innerHTML = document.activeElement.value
  // }
  // document.getElementById('ta-example-one').addEventListener('mouseup', Event_mouseup)
  // document.getElementById('ta-example-two').addEventListener('mouseup', Event_mouseup)
  // function tag_name() {
  //   const element = document.activeElement.tagName;
  //   const element2 = document.activeElement.type;
  //   document.getElementById("p").innerHTML = element;
  //   document.getElementById("p2").innerHTML = element2;
  // }

  return(
<section className="section-conetent">
      <h1 className="heading-style heading-style-js-color">JavaScript activeElement</h1>
      <article>
        <p className="style_divv mt-5">
            تقوم الخاصية <b>activeElement</b> بإرجاع عنصر <b>HTML</b> الذي تم التركيز عليه.<br/>
            غالبًا ما تستخدم الخاصية <b>activeElement</b> مع عناصر <b>input</b> و عناصر <b>textarea</b> .<br/>
            الخاصية <b>activeElement</b> للقراءة فقط.
            {/* <div className="codeStudio alert bg-dark" dir="ltr" style="margin-top: 9px;padding-bottom:0pt;">
                <pre><span style="color:var(--js-color)">document</span>.<span style="color:var(--js-color)">activeElement</span></pre>
            </div> */}
        </p>
        <div className="mital">متال :  </div>
        <img src="{% static 'js/js57_activeElement.png' %}" className="img"/>
        <div className="styleee">
            <textarea name="ta-example-one" id="ta-example-one" rows="7" cols="40">   
              This is Text Area One. Lorem ipsum dolor sit amet, consectetur adipiscing elit.     
              Donec tincidunt, lorem a porttitor molestie, odio nibh iaculis libero, et accumsan     nunc orci eu dui.
            </textarea>   
            <textarea name="ta-example-two" id="ta-example-two" rows="7" cols="40">   
              This is Text Area Two. Lorem ipsum dolor sit amet consectetur adipisicing elit.     
              Dicta explicabo asperiores a hic consequatur .    
            </textarea>   
            <p>Active element ID: <b id="output-element-id"></b></p>    
            <p>Active element NAME: <b id="output-element-name"></b></p>    
            <p>Full text: <span id="output-text"></span></p>    
        </div>    
        <div className="mital"> متال 2 : </div>   
        <img src="{% static 'js/js57_activeElement2.png' %}" className="img"/>    
        <div className="styleee img">   
            <main onclick="tag_name()">   
                <h2 style={{backgroundColor: "yellow"}}>The activeElement Property</h2>   
                <input type="text" value="input"/>   
                <button style={{outline:"none", border:"0.9px solid paleturquoise"}}> Button </button>
                <p> Tag Name : <b id="p"></b></p>
                <p> Type : <b id="p2"></b> </p>
            </main>
        </div>  
      </article>
  </section>
  )
}