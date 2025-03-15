import codes from "../../../assests/codes/react-js/react"
import { CodeHighlighter , CodeCommand , Result } from "../../path";
import react_logo from "../../../assests/images/logo/react_logo.svg";

export default function HandleImagesReact(){
    return(
    <article id="Handle-images-react">
        <h1 className="heading-style"> React Images </h1>
        <p className="style_divv">
            لتعامل مع الصور في React يجب أن تكون الصور في مجلد <kbd>src/</kbd> <br/>
        </p>
        <div className="mital">متال : </div>
        <ul><li> في هذا المتال قمن بجلب الصورة من مسارها مباشرة  </li></ul>
        <CodeHighlighter code={codes[4].Handle_images_react[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <CodeHighlighter code={codes[4].Handle_images_react[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <img src={react_logo} className="w-25 " alt="logo react" />
        </Result>
        <ul><li>ماذا لو إحتجت لجلب عدة صور ، الطريقة المستعملة في المثال السبق ستكون طريقة <span className="text-danger">غير عملية</span> لذلك <span className="text-success">قم بإنشاء ملف بامتداد js</span> لمعالجة تنظيم الصور</li></ul>
        <CodeHighlighter code={codes[4].Handle_images_react[2]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <CodeHighlighter code={codes[4].Handle_images_react[3]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
    </article>
    )
}