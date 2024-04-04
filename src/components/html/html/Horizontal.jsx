
import { CodeHighlighter ,  Result} from "../../path";

export default function Horizontal(props){
const codeExemple =  `<p>
  HTML is the standard markup language for creating web pages and web applications. With HTML, you can create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, images and other items. [Image of a screenshot of a few lines of HTML code]
</p>
<hr/>
<p>
  PHP (Hypertext Preprocessor) is a server-side scripting language that is used to add dynamic and interactive elements to a web page. PHP can be used to generate HTML, connect to databases, and perform other tasks that require access to the server. PHP is an interpreted language, which means that it is executed by a PHP interpreter on the server.
</p>`
    return(
<>
    <h1 className="heading-style">HTML Horizontal Line (hr) </h1>
    <p className="style_divv mt-5">
        عندما نقوم بكتابة الفقرات و نريد ان نفصل بينها بخط فاننا نقوم بوضع خط افقي لكي 
        نفرق بين هاته الفقرات و الخط الفاصل لا نستطيع وضعه هكذا بل يلزمنا وسم نستعمله 
        <kbd>
            &lt;hr&gt;</kbd>  وهذا الوسم هو الوسم الفردي . <br/>
            يمكن كتابة الوسم <b>hr</b>  بهده الطريقة أيضا <kbd><bdi>&lt;hr/&gt;</bdi></kbd>  
    </p>
    <div className="sum_exemple_style">
        <div className="mital">متال : </div>
        <CodeHighlighter  code={codeExemple} language="html" is_html={true} file_name="index.html" title="Horizontal" addClass="mt-3 mb-3" copie={true}/>
        <Result file_name="index.html" title='Horizontal' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <p> HTML is the standard markup language for creating web pages and web applications. With HTML, you can create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, images and other items. [Image of a screenshot of a few lines of HTML code]</p>
            <hr/>
            <p> PHP (Hypertext Preprocessor) is a server-side scripting language that is used to add dynamic and interactive elements to a web page. PHP can be used to generate HTML, connect to databases, and perform other tasks that require access to the server. PHP is an interpreted language, which means that it is executed by a PHP interpreter on the server. </p>
        </Result>
    </div>
    <div className="green"> ملاحظة :</div>
    <ul><li> يتم إضافة القليل من الفراغ فوق السطر وأسفله يمكنك التعديل وجعله كيفما تريده بستعمال CSS ( ستتعلم ذالك في دروس CSS).</li></ul>
</>
)
}