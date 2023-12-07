import { CodeHighlighter ,  Result} from "../../path";

export default function Mark(props){
    const code = `<mark> content </mark>`
    const codeExemple =  `<p>
    The <mark>quick brown fox</mark> jumps over the lazy dog.
</p>`
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-html-color">HTML mark</h1>
    <article>
        <p className="style_divv">
        يستخدم الوسم <b>mark</b>   في <b>HTML</b> لتمييز النص ذي الأهمية الخاصة أو الملاءمة في مستند <b>HTML</b>.<br/>
            تعرض المتصفحات تقليديًا النص الموجود داخل الوسم <kbd>&lt;mark&gt;</kbd> كنص بلون خلفية أصفر. <br/>
        يكتب الوسم <b>mrak</b> على شكل التالي : 
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital"> متال :</div>
            <CodeHighlighter file_name="index.html" code={codeExemple} language="html" is_html={true} title="Mark" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Mark' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <p>  The <mark style={{backgroundColor:"yellow"}}>quick brown fox</mark> jumps over the lazy dog.</p>
            </Result>
        </div>
    </article>
</section>
)
}