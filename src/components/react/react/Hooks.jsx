import codes from "../../../assests/codes/react-js/react"
import images from "../imagesReact";
import { CodeHighlighter  , Result } from "../../path";
import react_logo from "../../../assests/images/logo/react_logo.svg";
import {ThisState} from "../pathExemple";
import { useMemo, useState } from "react";

export default function Hooks(){
    const [count1 , setCount1] = useState(0);
    const [count2 , setCount2] = useState(0);
    const [count3 , setCount3] = useState(0);

    var randomColor =  "#" + Math.floor(Math.random()*16777215).toString(16); 
    
    let  rColor = useMemo(()=>{ 
        const randomColor =  "#" + Math.floor(Math.random()*16777215).toString(16); 
        return randomColor
    },[]);

    var randomColor3 =  "#" + Math.floor(Math.random()*16777215).toString(16); 
  
    return(
<div id="Hooks">
    <h1 className="heading-style"> React Hooks </h1>
    <article id="this_state">
        <h2 className="title-h2">1 - this.state</h2>
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
    <article id="useState">
        <h2 className="title-h2" >2 - <bdi>useState()</bdi> </h2>
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
    <article id="useEffect">
        <h2 className="title-h2">3 - useEffect </h2>
        <p className="style_divv">
            useEffect هو إحدى الوظائف (Hooks) التي توفرها مكتبة React لإدارة الأحداث الجانبية (Side Effects) في المكونات الوظيفية (Functional Components). الأحداث الجانبية هي أي عمليات لا تتعلق مباشرة بعرض الواجهة، مثل جلب البيانات من واجهة برمجية (API)، أو الاشتراك في خدمات خارجية، أو تعديل DOM يدويًا. <br />
            يُستخدم useEffect عندما تريد تنفيذ بعض الأكواد بعد أن يتم render المكون أو عند تغيير قيم محددة (تبعيات). على سبيل المثال:
            <ul>
               <li>جلب البيانات من API.</li>
               <li>الاشتراك في خدمة أو حدث (مثل setInterval أو window.addEventListener).</li>
               <li>تنفيذ أي عملية تحتاج إلى تحديث بعد تغيير حالة المكون.</li>
            </ul>
        </p>
    </article>
    <article id="useMemo">
        <h2 className="title-h2">4 - useMemo </h2>
        <p className="style_divv">
            useMemo هو إحدى الوظائف (Hooks) التي توفرها مكتبة React لتحسين أداء التطبيقات من خلال تقليل العمليات الحسابية غير الضرورية. يعمل useMemo على "تذكر" القيم التي يتم حسابها، بحيث يتم إعادة حسابها فقط عندما تتغير التبعيات (Dependencies) المحددة. <br />
            يُستخدم useMemo عندما يكون لديك عمليات حسابية مكلفة (مثل عمليات التصفية أو العمليات الرياضية المعقدة) وتريد تجنب إعادة تنفيذها في كل مرة يتم فيها إعادة render للمكون (Component)، إلا إذا تغيرت البيانات التي تعتمد عليها هذه العمليات.
        </p>
        <div className="mital">  متال 1 : </div>
        <ul><li>المثال الأول بدون استخدام useMemo</li></ul>
        <CodeHighlighter code={`import React, { useState } from 'react';

export default function App() {
    
    const [count , setCount] = useState(0);
    var randomColor =  "#" + Math.floor(Math.random()*16777215).toString(16); 

    return (
    <div  className='p-3'>
        <div style={{
          backgroundColor: randomColor, 
          height: "100px"
        }}>    random bg color    </div>
        <div className='d-flex mt-3'>
            <button className='btn btn-primary' 
                onClick={()=>setCount(count+1)}
            > +1 </button>
            <div className='p-3 border'>
                {count}
            </div>
            <button className='btn btn-primary' 
                onClick={()=>setCount(count-1)}
            > -1 </button>
        </div>
    </div>
  );
}`} language="jsx" number={false}   addclassName="mt-3 mb-3" copie={true}/> 
        <ul><li>يتغير اللون في كل مرة نقوم فيها ب render  لصفحة</li></ul>
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
            <div style={{backgroundColor: randomColor, height: "100px"}}>    random bg color    </div>
            <div className='d-flex mt-3'>
                <button className='btn btn-primary' onClick={  ()=>setCount1(count1+1)  }> +1 </button>
                <div className='p-3 border'>
                    {count1}
                </div>
                <button className='btn btn-primary' onClick={  ()=>setCount1(count1-1)  }> -1 </button>
            </div>
        </Result>
        <div className="mital">  متال 2 : </div>
        <ul><li>المثال الثاني بإستخدام useMemo</li></ul>
        <CodeHighlighter code={`import React, { useMemo, useState } from 'react';

export default function App() {
    const [count , setCount] = useState(0);
    
    let  rColor = useMemo(()=>{ 
        var randomColor =  "#" + Math.floor(Math.random()*16777215).toString(16); 
        return randomColor
    },[]);
    
    return (
    <div  className='p-3'>
        <div style={{backgroundColor: rColor, height: "100px"}}>    
            random bg color    
        </div>
        <div className='d-flex mt-3'>
            <button className='btn btn-primary' onClick={()=>setCount(count+1)}> +1 </button>
            <div className='p-3 border'>
                {count}
            </div>
            <button className='btn btn-primary' onClick={()=>setCount(count-1)}> -1 </button>
        </div>
    </div>
  );
}`} language="jsx" number={false}  addclassName="mt-3 mb-3" copie={true}/> 
        <ul><li>لن يتغير اللون في كل مرة نقوم فيها ب render لصفحة</li></ul>
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
            <div style={{backgroundColor: rColor, height: "100px"}}>    
                random bg color    
            </div>
            <div className='d-flex mt-3'>
                <button className='btn btn-primary' onClick={()=>setCount2(count2+1)}> +1 </button>
                <div className='p-3 border'>
                    {count2}
                </div>
                <button className='btn btn-primary' onClick={()=>setCount2(count2-1)}> -1 </button>
            </div>
        </Result>
        <div className="mital">  متال 3 : </div>
        <CodeHighlighter code={`import React, { useMemo, useState } from 'react';

export default function App() {
    const [count , setCount] = useState(0);
    
    let  rColor = useMemo(()=>{ 
        var randomColor =  "#" + Math.floor(Math.random()*16777215).toString(16); 
        return randomColor
    },[count]);    // render when count change
    
    return (
    <div  className='p-3'>
        <div style={{backgroundColor: rColor, height: "100px"}}>    
            random bg color    
        </div>
        <div className='d-flex mt-3'>
            <button className='btn btn-primary' onClick={()=>setCount(count+1)}> +1 </button>
            <div className='p-3 border'>
                {count}
            </div>
            <button className='btn btn-primary' onClick={()=>setCount(count-1)}> -1 </button>
        </div>
    </div>
  );
}`} language="jsx" number={false}   addclassName="mt-3 mb-3" copie={true}/> 
        <ul><li>سوف يتغير اللون فقط عند تغيير count </li></ul>
        <Result title={'React App'} logo={react_logo} route="localhost:3000">
            <div style={{backgroundColor: randomColor3, height: "100px"}}>    random bg color    </div>
            <div className='d-flex mt-3'>
                <button className='btn btn-primary' onClick={  ()=>setCount3(count3+1)  }> +1 </button>
                <div className='p-3 border'>
                    {count3}
                </div>
                <button className='btn btn-primary' onClick={  ()=>setCount3(count3-1)  }> -1 </button>
            </div>
        </Result>
    </article>
    <article id="custom_hooks">
        <h2 className="title-h2">5 - custom hooks </h2>
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