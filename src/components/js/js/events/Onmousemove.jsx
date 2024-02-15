import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onmousemove(){
  // #div {
  //   width: 200px;
  //   height: 100px;
  //   border: 1px solid black;
  // }


  // function myFunction(e) {
  //   var x = e.clientX;
  //   var y = e.clientY;
  //   var coor = "Coordinates: (" + x + "," + y + ")";
  //   document.getElementById("id_name").innerHTML = coor;
  // }

  // function clearCoor() {
  //   document.getElementById("id_name").innerHTML = "";
  // }
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
  <h1 className="heading-style">JavaScript onmousemove</h1>
    <p className="style_divv mt-5">
        يقع حدث <b>onmousemove</b> عندما يتحرك المؤشر أثناء وجوده فوق عنصر.<br/>
        <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
        <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
        <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
    </p>
    <div className="mital">متال : </div>
    <img src={images.js113_onmousemove} className="img"/>
    <div className="styleee">
        <div id="div" onmousemove="myFunction(event)" onmouseout="clearCoor()"></div>
        <p>Mouse over the rectangle above, and get the coordinates of your mouse pointer.</p>
        <p>
          When the mouse is moved over the div, the p element will display the horizontal and
          vertical coordinates of your mouse pointer, whose values are returned from the 
          clientX and clientY properties on the MouseEvent object.
        </p>
        <p id="id_name"></p>
    </div>
  <article>
  </article> 
</section>
    )
}
