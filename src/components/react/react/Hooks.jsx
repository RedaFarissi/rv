import codes from "../../../assests/codes/react-js/react"
import images from "../imagesReact";
import { CodeHighlighter  , Result } from "../../path";
import react_logo from "../../../assests/images/logo/react_logo.svg";
import {ThisState} from "../pathExemple";

export default function Hooks(){
    return(

<div id="Hooks">
    <h1 className="heading-style"> React Hooks </h1>
    <article id="useState">
        <h2 className="title-h2" >1 - <bdi>useState()</bdi> </h2>
        <p className="style_divv">
          يسمح لنا <b>React useState Hook</b> بتتبع الحالة في مكون الوظيفة.<br/><br/>
          تشير الحالة عمومًا إلى البيانات أو الخصائص التي يجب تتبعها في التطبيق لاستخدام الحالة، يجب عليك تضمين التعليمات البرمجية أدناه في الملف <b>Component</b>.
        </p>
        <CodeHighlighter code={codes[7].useState[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <p>
          <ul><li>لإنشاء ال <b>state</b></li></ul>
        </p>
        <CodeHighlighter code={codes[7].useState[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <p><ul><li>للحصول على قيمة ال <b>state</b></li></ul></p>
        <CodeHighlighter code={codes[7].useState[2]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <p><ul><li>لتغيير قيمة ال <b>state</b></li></ul></p>
        <CodeHighlighter code={codes[7].useState[3]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <p><ul><li>لتغيير قيمة مفتاح معين في الكائن عن طريق ال <b>state</b> </li></ul></p>
        <CodeHighlighter code={codes[7].useState[4]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <div className="mital">متال : </div>
        <img src={images.react4} alt="react"  className="img"/>
    </article>
    <article id="this_state">
        <h2 className="title-h2">2 - this.state</h2>
        <p className="style_divv">
          نستخدم <b>this.state</b> عندما نعمل مع مكون الفئة <b>(Component class)</b>
        </p>
        <h3 className="title-h3">1 - إنشاء حالة المكون (this.state) و إعطائه قيمة أولية </h3>
        <CodeHighlighter code={codes[7].this_state[0]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <ul>
            <li style={{fontSize: "24px", color: "red"}}>Admin</li>
            <li style={{fontSize: "24px", color: "red"}}>1</li>
            <li style={{fontSize: "24px", color: "red"}}>Reda Eskouni</li>
            <li>
              the state this.state[2] is true
            </li>
          </ul>
        </Result>
        <h3 className="title-h3">2 - تغيير القيمة (this.state) </h3>
        <CodeHighlighter code={codes[7].this_state[1]} language="jsx" number={false} addclassName="mt-3 mb-3" copie={true}/> 
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
          <ThisState />
        </Result>
    </article>
    <article id="custom_hooks">

    <h2 className="title-h2">3 - custom hooks </h2>
    <p className="style_divv">
        الـ Custom Hooks في React هي دوال تُساعد على إعادة استخدام المنطق ذو الحالة (stateful logic) بين المكونات دون تكرار الأكواد. <br />
        تُستخدم لـ:
        <ul>
          <li>1- إعادة استخدام المنطق المشترك</li>
          <li>2- فصل المنطق عن الواجهة</li>
          <li>3- تحسين تنظيم الكود وتقليل الأخطاء.</li>
        </ul>
    </p>
    <div className="mital">  متال 1 : </div>
    <CodeHighlighter code={`import { useState, useEffect } from 'react';
import axios from 'axios';

function useCustomExample(url) {              // 1. Accept URL as parameter
  const [data, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      }catch(err){
        console.log(err.message)
      }
    };

    fetchData();
  }, [url]); 

  return  [data] 
}

export default useCustomExample;`} language="jsx" number={false} file_name="src / custom_hooks /  useCustomExemple.js"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import React from 'react';
import useCustomExample from "./custom_hooks/useCustomExemple";

export default function App() {
  
  const  [data] = useCustomExample("https://jsonplaceholder.typicode.com/todos"); 
  
  
  return (
    <div>
      {
        data.map(item => (
          <div key={item.id}>{item.id} - {item.title}</div>
        ))
      }
    </div>
  );
}`} language="jsx" number={false} file_name="src / App.jsx"  addclassName="mt-3 mb-3" copie={true}/> 
    
    <div className="mital">  متال 2 : </div>
    <CodeHighlighter code={`import { useState, useEffect } from 'react';
import axios from 'axios';

function useCustomExample(url) {              // 1. Accept URL as parameter
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData([]);
      }
    };

    fetchData();
  }, [url]); // 3. Add URL to dependency array

  return { data, error }; // 4. Return both data and error
}

export default useCustomExample;`} language="jsx" number={false} file_name="src / custom_hooks /  useCustomExemple.js"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import React from 'react';
import useCustomExample from "./custom_hooks/useCustomExemple";

export default function App() {
  const { data, error } = useCustomExample("https://jsonplaceholder.typicode.com/todos"); 

  
  if (error) return <div>Error: {error}</div>;
  if (!data.length) return <div>Loading...</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.id} - {item.title}</div>
      ))}
    </div>
  );
}`} language="jsx" number={false} file_name="src / App.jsx"  addclassName="mt-3 mb-3" copie={true}/> 

</article>

</div>
)
}