import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Order.css"

export default function Order(props){
    const codeExemple1= { 
        css:`#parent {
  border: 1px solid #c3c3c3;
  display: flex;
}
#parent div {
  width: 90px; height: 90px;
}

.flex-center-center{
    display: flex;
    justify-content: center;
    align-items: center;
}

.bg-red{ background-color: red; }
.bg-blue{ background-color: blue; }
.bg-green{ background-color: green; }
.bg-pink{ background-color: pink; }
.bg-yellow{ background-color: yellow; }

.fs-45{ font-size: 45px;}

.order-1{ order: 1 ;}
.order-2{ order: 2 ;}
.order-3{ order: 3 ;}
.order-4{ order: 4 ;}
.order-4{ order: 5 ;}`,
    head:`  
    <link rel="stylesheet" href="./index.css">`,
    code:`      <div id="parent">
          <div class="flex-center-center fs-45 order-3 bg-red" >   1 </div>
          <div class="flex-center-center fs-45 order-5 bg-blue">   2 </div>
          <div class="flex-center-center fs-45 order-2 bg-green"> 3 </div>
          <div class="flex-center-center fs-45 order-1 bg-pink">    4 </div>
          <div class="flex-center-center fs-45 order-4 bg-yellow"> 5 </div>
      </div>`
    }
    
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Order </h1>
    <article>
        <p className="style_divv mt-5">
            تحدد خاصية الأمر ترتيب العنصر المرن بالنسبة لبقية العناصر المرنة داخل نفس الحاوية.<br/>
            ملاحظة: إذا لم يكن العنصر عنصرًا مرنًا ، فلن يكون لخاصية الأمر أي تأثير.
        </p>
        <div className="mital">متال  :  </div>
        <CodeHighlighter file_name="index.css" code={codeExemple1.css} language="css" copie={true}/>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Order" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Order' logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">
            <div id="css-order-ex-parent">
                <div className="css-order-ex-flex-center-center css-order-ex-fs-45 css-order-ex-order-3 css-order-ex-bg-red" > 1 </div>
                <div className="css-order-ex-flex-center-center css-order-ex-fs-45 css-order-ex-order-5 css-order-ex-bg-blue"> 2 </div>
                <div className="css-order-ex-flex-center-center css-order-ex-fs-45 css-order-ex-order-2 css-order-ex-bg-green"> 3 </div>
                <div className="css-order-ex-flex-center-center css-order-ex-fs-45 css-order-ex-order-1 css-order-ex-bg-pink"> 4 </div>
                <div className="css-order-ex-flex-center-center css-order-ex-fs-45 css-order-ex-order-4 css-order-ex-bg-yellow"> 5 </div>
            </div>
        </Result>
    </article>
</section>
    )
}