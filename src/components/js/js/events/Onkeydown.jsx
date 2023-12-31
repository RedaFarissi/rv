import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";

export default function Onkeydown(){
    // function myFunction() {
    //     alert("You pressed a key inside the input field");
    //   }
    const code1 = `<!-- Code HTML -->
<element onkeydown="//script">`
    const code2 = `// Code JavaScript -->
object.onkeydown = function(){  //myScript  }`
    const code3 = `// Code JavaScript using the addEventListener() -->
object.addEventListener("keydown", function_name)`
    return(
  <section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript onkeydown</h1>
    <article>
        <p className="style_divv mt-5">
            يستعمل حدث <b>onkeydown</b> لتنقيد الأوامر بمجرد النقر على أحد أزرار الكيبورد . يعمل فقط على أزرار الحروف و الأرقام .<br/>
            <div className="alert bg-info my-3 text-black">
                <b>نصيحة</b> : ترتيب الأحداث المتعلقة بحدث <b>onkeydown</b>:<br/><br/>
                <ol>
                    <li><b>onkeydown</b> : لتنقيد الأوامر بمجرد النقر على أحد أزرار الكيبورد . </li>
                    <li><b>onkeypress</b> :  لتنقيد الأوامر بمجرد النقر على أحد أزرار الكيبورد . يعمل فقط على أزرار الحروف و الأرقام</li>
                    <li><b>onkeyup</b> : لتنقيد الأوامر عند النقر على أحد أزرار الكيبورد و رفع الإصبع عنها </li>
                </ol>
            </div>
            <CodeHighlighter code={code1} language="html" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code2} language="js" addClass="mt-3 mb-3" copie={true} />
            <CodeHighlighter code={code3} language="js" addClass="mt-3 mb-3" copie={true} />
        </p>
        <div className="mital">متال :  </div>
        <img src={images.js105_onkeydown} className="img"/>
        <div className="styleee">
            <p> A function is triggered when the user is pressing a key in the input field.   </p>
            <input type="text" onkeydown="myFunction()"/>      
        </div>
    </article>
</section>
    )
}