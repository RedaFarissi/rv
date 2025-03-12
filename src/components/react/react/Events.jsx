import codes from "../../../assests/codes/react-js/react"
import { CodeHighlighter , Result } from "../../path";
import react_logo from "../../../assests/images/logo/react_logo.svg";
import { EventExemple, EventExemple2 } from "../pathExemple";

export default function Events(){
    return(
    <article id="Events">
        <h2 className="title-h2">3 - الأحداث (Events) </h2>
        <p className="style_divv">
            تمامًا مثل أحداث <b>DOM</b> في <b>(Event DOM HTML)</b>  ، يمكن لـ <b>React</b> القيام بإجراءات استنادًا إلى أحداث المستخدم.<br/><br/>
            <b>React</b> لديها نفس أحداث <b>HTML: click، change، mouseover</b>، إلخ.<br/><br/>
            أحداث <b>React</b> مكتوبة بتركيبة <b>camelCase</b>:
            <ul>
              <li><b>onClick</b> بدلاً من <b>onclick</b>.</li>
              <li><b>onSubmit</b> بدلاً من <b>onsubmit</b>.</li>
              <li><b>onChange</b> بدلاً من <b>onchange</b>.  إلخ. </li>
            </ul>
            معالجو الأحداث في <b>React</b> يتم كتابتهم داخل أقواس معوجة:
            onClick={"{"}shoot{"}"} بدلاً من <bdi>onClick="shoot()"</bdi>
        </p>
        <div className="mital">متال 1 : </div>
        <CodeHighlighter code={codes[2].Events[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <EventExemple images={react_logo}/>
        <p><ul><li>إذا كتبت <bdi>onClick={"{"}shoot(){"}"}،</bdi> فسيتم تشغيل الوظيفة <bdi><b>shoot()</b></bdi> عند بدء التطبيق.</li></ul></p>  
        <div className="mital">متال 2 : </div>
        <CodeHighlighter code={codes[2].Events[1]} language="css" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <CodeHighlighter code={codes[2].Events[2]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/>
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
            <EventExemple2 />
        </Result>
    </article>    

    )
}