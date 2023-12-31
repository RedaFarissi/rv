import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onerror(){
  // function myFunction() {
  //   alert('The image could not be loaded.');
  // }
  const code1 = `<!-- Code HTML -->
<element onerror="//script">`
  const code2 = `// Code JavaScript
object.onerror = function(){  //myScript  }`
  const code3 = `// Code JavaScript using the addEventListener()
object.addEventListener("error", function_name )`
  return(
<section className="section-conetent">
  <h1 className="heading-style heading-style-js-color">JavaScript onerror</h1>
  <article>
      <p className="style_divv mt-5">
          يتم تشغيل حدث <b>onerror</b> في حالة حدوث خطأ أثناء تحميل ملف خارجي (مثل مستند أو صورة).   
          <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
          <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
          <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
      </p>
      <div className="mital"> متال :  </div>
      <img src={images.js119_onerror} className="img"/>
      <div className="styleee">      
          <img src={images.gif} onerror="myFunction()"/>
          <p>
            A function is triggered if an error
            occurs when loading the image. 
            The function shows an alert box with a text.
            In this example we refer to an image
            that does not exist, therefore 
            the onerror event occurs.
          </p>
      </div>
  </article>
</section>
    )
}
