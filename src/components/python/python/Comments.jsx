import { CodeHighlighter , CodeCommand} from "../../path";
import images from "../imagesPython"
export default function Comments(){
    return(
        <article className="mt-5">
            <h2 id="comments" className="title-h2"> التعليقات في بايثون </h2>
            <p className="style_divv">
                في لغة البرمجة <b>Python،</b> يمكنك إضافة تعليقات لشرح الشيفرة أو جعلها أكثر فهمًا. التعليقات لا تؤثر على تنفيذ الشيفرة، إذ تعتبر مجرد نص توضيحي يتم تجاهله أثناء تنفيذ البرنامج. لإضافة تعليقات في <b>Python</b>، يمكنك استخدام الرمز <b>#</b>
            </p>
            <div className="mital"> متال 1 : </div>
            <img src={images.python5} className="img" alt="python" />                     
            <div className="mital"> متال 2 : </div>
            <CodeHighlighter code={`'''
    This is a long comment that spans several lines
    It can be used to explain code or write documentation for the program.
'''
print("Hello Word")`} language="python" file_name="app.py" addclassName="mt-3 mb-3" copie={true}/>
            <div className="mital"> Result </div>
            <CodeCommand>Hello Word</CodeCommand>
        </article>
    )
}