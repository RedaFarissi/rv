import { CodeHighlighter ,  Result} from "../../path";

export default function Deleted(props){
    const code = `<del> content </del>`
    const codeExemple = `    <del>100DH</del> <strong>70 dh</strong>`
    return(
<>
    <h1 className="heading-style">HTML Deleted (del)</h1>
    <article className="mt-5">
        <p className="style_divv">
            يمثل عنصر  <kbd>&lt;del&gt;</kbd> في لغة <b>HTML</b> جزءًا من النص تم حذفه من المستند. غالبًا ما يتم عرض هذا العنصر مخططًا <small><small>(ولكن ليس بالضرورة)</small></small>.<br/>
            يمكن تلاعب  بشكل عبر <b>CSS</b> .<br/>
            يكتب الوسم <b>del</b> على شكل التالي : 
        </p>
        <CodeHighlighter  code={code} language="html"  addclassName="mt-3 mb-3" copie={true}/>
        <div className="sum_exemple_style">
            <div className="mital"> متال :</div>
            <CodeHighlighter file_name="index.html" code={codeExemple} language="html" is_html={true} title="Deleted" addClass="mt-3 mb-3" copie={true}/>
            <Result title='Deleted' logo={props.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
                <del>100DH</del> <strong>70 dh</strong>
            </Result>
        </div>
    </article>
</>
    )
}