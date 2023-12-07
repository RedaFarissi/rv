import { CodeHighlighter ,  Result} from "../../path";
import images from "../imagesCss";
import "./Overflow.css"

export default function Overflow(props){
    const codeExemple1= { 
        head:`  
       <style> 
            div.ex1 { background-color: lightblue; width: 110px; height: 110px; overflow: scroll;}
            div.ex2 { background-color: lightblue; width: 110px; height: 110px; overflow: hidden;}
            div.ex3 { background-color: lightblue; width: 110px; height: 110px; overflow: auto;}
            div.ex4 { background-color: lightblue; width: 110px; height: 110px; overflow: visible;}   
       </style>`,
        code:`        <h1>The overflow Property</h1>
        <p>The overflow property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.</p>
        <h2>overflow: scroll:</h2>
        <div class="ex1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim earum distinctio dolorum sapiente eveniet nam magnam maiores aliquid eligendi aut cumque possimus accusantium aspernatur nulla ipsam porro, nesciunt at!            
        </div>
        <h2>overflow: hidden:</h2>
        <div class="ex2">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim earum distinctio dolorum sapiente eveniet nam magnam maiores aliquid eligendi aut cumque possimus accusantium aspernatur nulla ipsam porro, nesciunt at!                       
        </div>
        <h2>overflow: auto:</h2>
        <div class="ex3">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim earum distinctio dolorum sapiente eveniet nam magnam maiores aliquid eligendi aut cumque possimus accusantium aspernatur nulla ipsam porro, nesciunt at!                       
        </div>
        <h2>overflow: visible (default):</h2>
        <div class="ex4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim earum distinctio dolorum sapiente eveniet nam magnam maiores aliquid eligendi aut cumque possimus accusantium aspernatur nulla ipsam porro, nesciunt at!                       
        </div>`
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-css-color"> CSS Overflow </h1>
    <article>
        <div className="style_divv mt-5">    
            تحدد خاصية overflow ما يجب أن يحدث إذا تجاوز المحتوى مربع عنصر .<br/>
            تحدد هذه الخاصية ما إذا كان سيتم قص المحتوى أو إضافة أشرطة التمرير عندما يكون محتوى العنصر كبيرًا جدًا بحيث لا يتناسب مع منطقة معينة.<br/>
            ملاحظة: تعمل خاصية overflow فقط مع عناصر الكتلة ذات الارتفاع المحدد وتستقبل القيم التالية :
            <ul style={{marginTop: "9px"}}>
                <li>scroll :  من خلال هذه القيمة يمكن إضافة شريط تمرير من ناحية width و height .  </li>
                <li>hidden :  من خلال هذه القيمة  لتختفي جميع العناصر خارج ال width و height .</li>
                <li>auto   :  من خلال هذه القيمة يمكن إضافة شريط تمرير من ناحية height  </li>
                <li>visible : عرض المحتوى كاملا بدون شريط تمرير . </li>
            </ul>
        </div>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html"code={codeExemple1.code} head={codeExemple1.head} language="html" is_html={true} title="CSS Overflow" addClass="mt-3 mb-3" copie={true}/>
        <Result title='CSS Overflow' logo={images.html_logo} styleAdd="css-overflow-styleAdd" route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <h1>The overflow Property</h1>
            <p>The overflow property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area.</p>
            <h2>overflow: scroll:</h2>
            <div className="css-overflow-ex1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim earum distinctio dolorum sapiente eveniet nam magnam maiores aliquid eligendi aut cumque possimus accusantium aspernatur nulla ipsam porro, nesciunt at!            
            </div>
            <h2>overflow: hidden:</h2>
            <div className="css-overflow-ex2">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim earum distinctio dolorum sapiente eveniet nam magnam maiores aliquid eligendi aut cumque possimus accusantium aspernatur nulla ipsam porro, nesciunt at!                       
            </div>
            <h2>overflow: auto:</h2>
            <div className="css-overflow-ex3">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim earum distinctio dolorum sapiente eveniet nam magnam maiores aliquid eligendi aut cumque possimus accusantium aspernatur nulla ipsam porro, nesciunt at!                       
            </div>
            <h2>overflow: visible (default):</h2>
            <div className="css-overflow-ex4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos enim earum distinctio dolorum sapiente eveniet nam magnam maiores aliquid eligendi aut cumque possimus accusantium aspernatur nulla ipsam porro, nesciunt at!                       
            </div>
        </Result>
    </article>
</section>
    )
}