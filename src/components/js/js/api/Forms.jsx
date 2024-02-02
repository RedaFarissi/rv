import images from "../../imagesJs"
import { CodeHighlighter ,  Result} from "../../../path";
import { useRef, useState } from "react";

export default function ValidationAPI(){
    const codeExemple1= { 
    code: `      <input id="Id1" type="number" min="100" required/>

     <button onclick="myFunction()">OK</button>
     
     <p id="resulta"></p>
    
     <script src="./index.js"></script>`,
    script:`function myFunction() {
    const inpObj = document.getElementById("Id1");
    const resulta = document.getElementById("resulta");

    if (!inpObj.checkValidity()) {
        resulta.innerHTML = inpObj.validationMessage;
    }
}`
    }
    const inputRef = useRef()
    const [result,setResult] = useState()
    function myFunction() {

        if (!inputRef.current.checkValidity()) {
            setResult(inputRef.current.validationMessage);
        }
    }
    return(
<section className="section-conetent">
    <h1 className="heading-style heading-style-js-color">JavaScript Validation API</h1>
    <article className="mt-5">
        <h2 className="title-h2">1- طرق التحقق من صحة القيد </h2>
        <table className="table text-light" dir="ltr">
            <thead className="text-center">
                <tr>
                    <th> الخاصية </th>
                    <th> الوصف </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="ps-4"> <bdi>checkValidity()</bdi> </td>
                    <td className="pe-4" dir="rtl"> إرجاع <b>true</b> إذا كان عنصر الإدخال يحتوي على بيانات صحيحة. </td>
                </tr>
                <tr>
                    <td className="ps-4"> <bdi>setCustomValidity()</bdi> </td>
                    <td className="pe-4" dir="rtl"> يضبط خاصية <b>validationMessage</b> لعنصر إدخال. </td>
                </tr>
            </tbody>
        </table>
        <div className="mital">متال :  </div>
        <CodeHighlighter file_name="index.html" code={codeExemple1.code} language="html" is_html={true} title="validationMessage" addClass="mt-3 mb-3" copie={true}  number={true}/>  
        <CodeHighlighter file_name="index.js"code={codeExemple1.script} language="js" addClass="mt-3 mb-3" copie={true}  number={true}/>
        <Result title="validationMessage" logo={images.html_logo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
            <input ref={inputRef} id="Id1" type="number" min="100" required/>
            <button onClick={myFunction}>OK</button>
            <p >{result}</p>
        </Result>
    </article>
    <article>
        <h2 className="title-h2">2- خصائص DOM للتحقق من صحة القيد</h2>
        <table  className="table text-light" dir="ltr">
            <thead className="text-center">
                <tr>
                    <th> الخاصية </th>
                    <th> الوصف </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="ps-4"> validity </td>
                    <td className="pe-4" dir="rtl"> يحتوي على خصائص منطقية تتعلق بصلاحية عنصر الإدخال. </td>
                </tr>
                <tr>
                    <td className="ps-4"> validationMessage </td>
                    <td className="pe-4" dir="rtl"> يحتوي على الرسالة التي سيعرضها المتصفح عندما تكون الصلاحية خاطئة. </td>
                </tr>
                <tr>
                    <td className="ps-4"> willValidate </td>
                    <td className="pe-4" dir="rtl"> يشير إلى ما إذا كان سيتم التحقق من صحة عنصر الإدخال.  </td>
                </tr>
            </tbody>
        </table>
    </article>
</section>
    )
}