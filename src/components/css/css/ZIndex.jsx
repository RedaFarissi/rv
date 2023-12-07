import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./ZIndex.css"

export default function ZIndex(props){
    const codeExemple1= { 
    head:`  
    <style> 
        body {
          background-image: linear-gradient(to left, #0277bd, #0277bd , azure );
          position: relative; 
        }
        
        .h2 {
          color: white;
          font-size: 60px;
          text-shadow: 5px 5px 5px #0277bd;
          position: absolute;
          top: 30px;
          left: 120px;
          z-index: 1;
        }
        
        .img {
          width: 200px;
          position: absolute;
          top: 20px;
          left: 20px;
        }   
    </style>`,
    code:`      <img src="./css/css_logo.png" class='img' alt="css logo" />
    <h1 class="h2">CSS LOGO</h1>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Z-Index </h1>
    <article>
        <p className="style_divv mt-5">
            عندما يتم وضع العناصر ، يمكن أن تتداخل مع عناصر أخرى.<br/>
            تحدد الخاصية <b>z-index</b> ترتيب مكدس العنصر (أي عنصر يجب وضعه أمام العناصر الأخرى أو خلفها).<br/>
            يمكن أن يكون للعنصر ترتيب مكدس موجب أو سلبي <br/>
        </p>
        <div className="mital"> متال : </div>
        <ul><li> من دون الخاصية <b>z-index</b> لن يضهر العنوان لأن الصوة ستكون فوقه </li></ul>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Z-Index" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Z-Index' styleAdd="css-z-index-ex1-body" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <img src={images.css_logo}  className='css-z-index-ex1-img' alt="css logo" />
            <h1 className="css-z-index-ex1-h2">CSS LOGO</h1>
        </Result>     
    </article>
</section>
    )
}