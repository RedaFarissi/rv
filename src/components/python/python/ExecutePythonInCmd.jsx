import { CodeCommand } from "../../path";

export default function ExecutePythonInCmd(){
    return(
        <article>
            <h2 id="execute-python-in-cmd" className="title-h2"> 3 - تنفيذ بايثون في موجه الأوامر . </h2>
            <h3 className="title-h3"> افتح موجه الأوامر</h3>
            <CodeCommand>
                C:\{">"} <span className="text-warning">python</span><br/>
                Python 3.12.1 (tags/v3.12.1:2305ca5, Dec  7 2023, 22:03:25) [MSC v.1937 64 bit (AMD64)] on win32<br/>
                Type "help", "copyright", "credits" or "license" for more information.<br/><br/>
                {`>>>`} print("Hello, Python!")<br/>
                Hello, Python!
            </CodeCommand>
        </article>
    )
}