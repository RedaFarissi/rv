import codes from "../../../assests/codes/react-js/react"
import { CodeHighlighter  } from "../../path";


export default function PropsChildren(){
    return(
<article id="props-children">
    <h1 className="heading-style"> React props.children </h1>
    <p className="style_divv">
          في <b>React</b>، <b>props.children</b> هو خاصية تُستخدم لنقل عناصر الطفل <b>(children)</b> إلى داخل مكون. يمكن استخدام هذه الطريقة لتمرير المحتوى بين عناصر الفتح والإغلاق ({"<"}OpeningTag{">"}...{"<"}/ClosingTag{">"}).<br/><br/>
          تسمح <b>props.children</b> بتوجيه أي شيء يُمكن عرضه داخل تكوين المكون.
    </p>
    <CodeHighlighter code={codes[6].props_children[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={codes[6].props_children[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
</article>
    )
}