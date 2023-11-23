import images from "../imagesHtml";
import { CodeHighlighter ,  Result} from "../../path";
import html_logo from "../../../assests/images/logo/html_logo.png"
import css_logo from "../../../assests/images/logo/css_logo.png"
export default function Details(props){
    const code = `<details>
    <summary> Title </summary>
    HTML
</details>`
    const codeExemple = `<details>
    <summary>html logo</summary>
    <div className="style_div" style={{backgroundColor:"greenyellow"}}>
       <div>
           <center>
                <h2><u>html</u></h2>
                <img src={html_logo} alt="logo html" width="20%" />
           </center>
       </div>
    </div>
</details>
<details>
    <summary>css logo</summary>
    <div className="style_div" style={{backgroundColor:"greenyellow"}}>
       <div>
           <center>
               <h2><u>css</u></h2>
               <img src={css_logo} width="20%" alt="css logo"/>
           </center>
       </div>
    </div>
</details>`
    return(
    <section className="section-conetent">
        <h1 className="heading-style heading-style-html-color">HTML Details</h1>
        <p className="style_divv mt-5">
            يحدد الوسم <kbd>&lt;details&gt;</kbd> تفاصيل إضافية يمكن للمستخدم فتحها وإغلاقها عند النقر
            <ul>
                <li> يحدد الوسم <kbd>&lt;summary&gt;</kbd> عنوانًا مرئيًا لوسم <kbd>&lt;details&gt;</kbd>. يمكن النقر فوق العنوان لعرض أو إخفاء التفاصيل. </li>
                <li> يجب أن يكون العنصر <kbd>&lt;summary&gt;</kbd> أول عنصر فرعي لعنصر <kbd>&lt;details&gt;</kbd></li>
            </ul>
        </p>
        <CodeHighlighter  code={code} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
        <div className="mital">مثال : </div>
        <CodeHighlighter  code={codeExemple} language="html" title="Details" addClass="mt-3 mb-3" copie={true}/>
        <ul>
            <li> عند نقر على العنوانين سيضهر محتوى details</li>
            <li>عند إعادة الضغط سيعود المتصفح لشكل الأول</li>
        </ul>
        <Result title='Details' logo={props.html_logo}  route="C:/Users/SURFACE BOOK/Desktop/html/index.html">
            <details>
                <summary>html logo</summary>
                <div className="style_div" style={{backgroundColor:"greenyellow"}}>
                   <div>
                       <center>
                            <h2><u>html</u></h2>
                            <img src={html_logo} alt="logo html" width="20%" />
                       </center>
                   </div>
                </div>
            </details>
            <details>
                <summary>css logo</summary>
                <div className="style_div" style={{backgroundColor:"greenyellow"}}>
                   <div>
                       <center>
                           <h2><u>css</u></h2>
                           <img src={css_logo} width="20%" alt="css logo"/>
                       </center>
                   </div>
                </div>
            </details>
        </Result>
      
        </div>
    </section>
    )
}