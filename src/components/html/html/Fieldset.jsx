import images from "../imagesHtml";
import { CodeHighlighter ,  Result} from "../../path";

export default function Fieldset(props){
    const code = `<fieldset> 
    <legend> title </legend>
    HTML content
    </fieldset>`
   
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color"> HTML fieldset </h1>
    <article>
        <p className="style_divv mt-5">
            يتم استخدام العلامة <kbd>&lt;fieldset&gt;</kbd> لتجميع العناصر ذات الصلة في نموذج.<br/>
            ترسم العلامة <kbd>&lt;fieldset&gt;</kbd> مربع حول العناصر ذات الصلة.<br/>
            يتم استخدام العلامة <kbd>&lt;legend&gt;</kbd> لتعريف تسمية توضيحية <kbd>&lt;fieldset&gt;</kbd>.
        </p>
        <CodeHighlighter  code={code} language="jsx"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital">مثال : </div>
            <img src={images.html36_fieldset} alt="fieldset"  className="img"/>
            <img src={images.html36_fieldset_2} alt="fieldset" className="img"/>
        </div>
        <div className="sum_exemple_style">
            <div className="mital">مثال 2 : </div>
            <img src={images.html36_fieldset2} alt="fieldset" className="img"/>
            <img src={images.html36_fieldset2_2} alt="fieldset" className="img"/>
        </div>
    </article>
</section>
)
}