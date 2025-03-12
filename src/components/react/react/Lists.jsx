import codes from "../../../assests/codes/react-js/react"
import { CodeHighlighter , Result } from "../../path";
import react_logo from "../../../assests/images/logo/react_logo.svg";

export default function Lists(){
    return(
    <article id="Lists">
        <h2 className="title-h2">4 -  القوائم (Lists) </h2>
        <p className="style_divv">
          القوائم في <b>React</b> تشير إلى مجموعة من العناصر المترابطة يمكن عرضها أو تكرارها داخل واجهة المستخدم.<br/><br/>
          في <b>React</b>، ستقوم بعرض القوائم باستخدام نوع من أنواع الحلقات. وأسلوب استخدام دالة <bdi><b>map()</b></bdi> في <b>JavaScript</b> على الأراي (المصفوفة) هو عادة الأسلوب المفضل.
        </p>
        <div className="mital">متال 1 : </div>
        <CodeHighlighter code={codes[3].Lists[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <ul className="m-0">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </Result>
        <div className="mital">متال 2 : </div>
        <CodeHighlighter code={codes[3].Lists[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <table className="table">
            <tr> <th>name</th> <th>age</th> </tr>
            <tr> <td>kama186758"</td> <td>26</td> </tr>
            <tr> <td>ama186758</td> <td>29</td> </tr>
            <tr> <td>kamila58</td> <td>23</td> </tr>
            <tr> <td>thami08</td> <td>19</td> </tr>
            <tr> <td>Reda6758</td> <td>16</td> </tr>
          </table>
        </Result>
        <div className="mital">متال 3 : </div>
        <CodeHighlighter code={codes[3].Lists[2]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <h1  className="m-0">My Garage</h1>
          <ul className="m-0">
            <li>Ford</li>
            <li>BMW</li>
            <li>Audi</li>
          </ul>    
        </Result>
    </article>
    )
}