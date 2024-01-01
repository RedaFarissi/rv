import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useState } from "react";

export default function ActiveElement(){
  const [activeElementExemple1,setActiveElementExemple1] = useState({
    element_ID: "",element_NAME:"",full_text:""
  })

  function tag_name() {
      const element = document.activeElement.tagName;
      const element2 = document.activeElement.type;

      document.getElementById("p").innerHTML = element;
      document.getElementById("p2").innerHTML = element2;
  }
  const codeExemple1= { 
    code: `      <textarea name="ta-example-one" id="ta-example-one" rows="7" cols="40">
       This is Text Area One. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Donec tincidunt, lorem a porttitor molestie, odio nibh iaculis libero, et accumsan nunc orci eu dui.
     </textarea>
    
     <textarea name="ta-example-two" id="ta-example-two" rows="7" cols="40">
       This is Text Area Two. Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Dicta explicabo asperiores a hic consequatur
     </textarea>
     
     <p>Active element ID: <b id="output-element-id"></b></p>
     <p>Active element NAME: <b id="output-element-name"></b></p>
     <p>Full text: <span id="output-text"></span></p>

     <script src="./index.js"></script>`,
    script:`function Event_mouseup() {
    document.getElementById('output-element-id').innerHTML = document.activeElement.id
    document.getElementById('output-element-name').innerHTML = document.activeElement.name
    document.getElementById('output-text').innerHTML = document.activeElement.value
}

document.getElementById('ta-example-one').addEventListener('mouseup', Event_mouseup)
document.getElementById('ta-example-two').addEventListener('mouseup', Event_mouseup)`
  }
  const codeExemple2= { 
    code: `    <main class="m-2 bg-danger text-light" onclick="tag_name()">
         <h2 class="bg-success">The active Element Property</h2>
       
         <input type="text" value="input"/>
         <button class="btn btn-primary"> Button </button>
         
         <p> Tag Name : <b id="p"></b></p>
         <p> Type: <b id="p2"></b> </p>    
     </main>

     <script src="./index.js"></script>`,
    script:`function tag_name() {
      const element = document.activeElement.tagName;
      const element2 = document.activeElement.type;

      document.getElementById("p").innerHTML = element;
      document.getElementById("p2").innerHTML = element2;
}`
  }

  function taExample1One(){
    setActiveElementExemple1({element_ID: "ta-example-one",element_NAME:"ta-example-one",full_text:"This is Text Area One. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt, lorem a porttitor molestie, odio nibh iaculis libero, et accumsan nunc orci eu dui."})
  }
  function taExample1Two(){
    setActiveElementExemple1({element_ID: "ta-example-two",element_NAME:"ta-example-two",full_text:"This is Text Area Two. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta explicabo asperiores a hic consequatur"})
  }
  return(
<section className="section-conetent">
      <h1 className="heading-style heading-style-js-color">JavaScript activeElement</h1>
      <article>
        <p className="style_divv mt-5">
            تقوم الخاصية <b>activeElement</b> بإرجاع عنصر <b>HTML</b> الذي تم التركيز عليه.<br/>
            غالبًا ما تستخدم الخاصية <b>activeElement</b> مع عناصر <b>input</b> و عناصر <b>textarea</b> .<br/>
            الخاصية <b>activeElement</b> للقراءة فقط.
            <CodeHighlighter code={`document.activeElement`} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital"> متال 1 :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} language="html" is_html={true} title="activeElement" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="activeElement" logo={images.html_logo} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <textarea name="ta-example-one" onClick={taExample1One} id="ta-example-one" rows="7" cols="40">
                This is Text Area One. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec tincidunt, lorem a porttitor molestie, odio nibh iaculis libero, et accumsan nunc orci eu dui.
            </textarea>
            <textarea name="ta-example-two" onClick={taExample1Two} id="ta-example-two" rows="7" cols="40">
                This is Text Area Two. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dicta explicabo asperiores a hic consequatur
            </textarea>
            <p>Active element ID: <b> {activeElementExemple1.element_ID} </b></p>
            <p>Active element NAME: <b> {activeElementExemple1.element_NAME} </b></p>
            <p>Full text: <span> {activeElementExemple1.full_text} </span></p>
            <br/>
        </Result>
        <div className="mital"> متال 2 : </div>   
        <CodeHighlighter file_name="index.html"code={codeExemple2.code} language="html" is_html={true} title="activeElement" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple2.script} language="js"  addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="activeElement" logo={images.html_logo} styleAdd={"p-0"} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
          <main className="m-2 bg-danger text-light" onClick={tag_name}>
                <h2 className="bg-success">The active Element Property</h2>

              <input type="text" value="input"/>
              <button className="btn btn-primary"> Button </button>

              <p> Tag Name : <b id="p"></b></p>
              <p> Type: <b id="p2"></b> </p>    
          </main>
        </Result>
      </article>
  </section>
  )
}