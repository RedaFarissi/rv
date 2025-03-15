import images from "../imagesReact";
import { CodeHighlighter , CodeCommand , Result } from "../../path";
import react_logo from "../../../assests/images/logo/react_logo.svg";
import { useState } from "react";

export default function Redux(){
    
    const [ countNum1 , setCountNum1] = useState(9);
    const [ countNum2 , setCountNum2] = useState(0);
    const [ countNum3 , setCountNum3] = useState(0);

    const [ message3 , setMessage3] = useState("");
    
    const [ visibility , setVisibility] = useState(false);

    return(
<div id="Redux">
    <h1 className="heading-style"> React Redux </h1>
    <article  id='What_is_redux'>
        <h2 className="title-h2">1 -  ما هو redux  </h2>
        <p className="style_divv">
            <b>Redux</b> هو مكتبة لإدارة الحالة (State Management) في تطبيقات JavaScript، تُستخدم غالبًا مع React. تُساعد Redux في تنظيم البيانات وتحديث الحالة بطريقة متوقعة من خلال الاحتفاظ بحالة التطبيق في <b>"Store"</b> مركزي. <br /><br />
              مميزات Redux:
            <ul>
              <li><span className="text-success">إدارة مركزية للحالة : </span> جميع بيانات التطبيق تكون في مكان واحد.</li>
              <li><span className="text-success">تحديثات متوقعة : </span> يتم تعديل البيانات فقط من خلال "Actions" و"Reducers"، مما يسهل التنبؤ بالتغييرات.</li>
              <li><span className="text-success">تصحيح الأخطاء بسهولة : </span> يُمكن تتبع جميع التغييرات في الحالة باستخدام أدوات Redux DevTools.</li>
              <li><span className="text-success">تكامل قوي مع React : </span> يمكن استخدام useSelector و useDispatch للحصول على البيانات وإرسال الأحداث بسهولة</li>
            </ul>
        </p>
        <img src={images.react6} alt="react6" className="w-100" />
    </article>
    <article  id='install_redux'>
        <h2 className="title-h2">2 - تثبيت التبعيات  </h2>
        <CodeCommand>npm install redux react-redux</CodeCommand>
    </article>
    <article id='example_1'>
    <h2 className="title-h2"> مثال 1 : </h2>
    <CodeHighlighter code={`import { createStore } from 'redux';

// Initial State
const initialState = {
    a: 20 ,
    b: 30 ,
    count: 9
};

// Reducer Function
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state , count: state.count + 1 };
        case 'DECREMENT':
            return {...state , count: state.count - 1 };
        default:
            return state;
    }
};

// Create Store
const store = createStore(counterReducer);
export default store;`} language="jsx" number={false} file_name="src / store.js"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import React from 'react';
import { useSelector , useDispatch } from 'react-redux';

const Counter = () => {
  // useSelector to handle state 
  const count = useSelector(state => state.count);
  const allState = useSelector(state => state);
  // useDispatch to handle action 
  const dispatch = useDispatch();
   
  
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>

      <br />    <br />

      <h2>a = {allState.a}</h2>
      <h2>b = {allState.b}</h2>       
    </div>
  );
};

export default Counter;`} language="jsx" number={false} file_name="src / components / Counter.jsx"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <h1>Redux Counter App</h1>
      <Counter />
    </div>
  );
};

export default App;`} language="jsx" number={false} file_name="src / App.jsx"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'; // new
import store from './store'; // new


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>    {/* new */} 
         <App /> 
     </Provider>
  </React.StrictMode>
);

reportWebVitals();`} language="jsx" number={false} file_name="src / index.js"  addclassName="mt-3 mb-3" copie={true}/> 
    <Result title={'React App'} logo={react_logo} route="localhost:3000">
      <h1>Redux Counter App</h1>
       <h2>Counter: {countNum1}</h2>
       <button  className="btn border" onClick={ ()=>{setCountNum1( countNum1 + 1 )} }>+</button>
       <button  className="btn border" onClick={ ()=>{setCountNum1( countNum1 - 1 )} }>-</button>
       <h2> a = 20 </h2>
       <h2> b = 30 </h2>
    </Result>
    
    </article>
    <article id='example_2'>
        <h2 className="title-h2"> مثال 2 : </h2>
        <h6>نفس ملف store بدون أي تغيير .</h6>
    <CodeHighlighter code={`import { createStore } from 'redux';

// Initial State
const initialState = {
    a: 20 ,
    b: 30 ,
    count: 9
};

// Reducer Function
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state , count: state.count + 1 };
        case 'DECREMENT':
            return {...state , count: state.count - 1 };
        default:
            return state;
    }
};

// Create Store
const store = createStore(counterReducer);
export default store;`} language="jsx" number={false} file_name="src / store.js"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import React from 'react';
import { useSelector } from 'react-redux';
import CounterControls from "./CounterControls"

const Counter = () => {
  const count = useSelector(state => state.count);
  const allState = useSelector(state => state);
  
  return (
    <div>
      <h1>Counter: {count}</h1>
      <CounterControls />
      
      <br/><br />

      <h2>a = {allState.a}</h2>
      <h2>b = {allState.b}</h2>       
    </div>
  );
};

export default Counter;`} language="jsx" number={false} file_name="src / components / counter / Counter.jsx"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import React from 'react';
import { useDispatch } from 'react-redux';

const CounterControls = () => {
  const dispatch = useDispatch();   
  return (
    <>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </>
  );
};

export default CounterControls;`} language="jsx" number={false} file_name="src / components / counter / CounterControls.jsx"  addclassName="mt-3 mb-3" copie={true}/> 
    <h6> نفس النتيجة .</h6>
    <Result title={'React App'} logo={react_logo} route="localhost:3000">
        <h1> Redux Counter App </h1>
        <h2> Counter: {countNum2} </h2>
        <button  className="btn border" onClick={ ()=>{setCountNum2( countNum2 + 1 )} }> + </button>
        <button  className="btn border" onClick={ ()=>{setCountNum2( countNum2 - 1 )} }> - </button>
        <h2> a = 20 </h2>
        <h2> b = 30 </h2>
    </Result>
    </article>
    <article id='example_3'>
        <h2 className="title-h2"> مثال 3 : </h2>
        <h6> أولاً قم بإنشاء مجلد  reducers </h6>
        <CodeHighlighter code={`const initialState = {
    count: 0
};
  
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
};
  
export default counterReducer;`} language="jsx" number={false} file_name="src / reducers / counterReducer.js"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`const initialMessageState = {
    message: ''
};
  
 const messageReducer = (state = initialMessageState, action) => {
    switch (action.type) {
        case 'SET_MESSAGE':
            return { message: action.payload };
        default:
            return state;
    }
};
  
export default messageReducer;`} language="jsx" number={false} file_name="src / reducers / messageReducer.js"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import { createStore, combineReducers } from 'redux';
import counterReducer from './reducers/counterReducer';
import messageReducer from './reducers/messageReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  message: messageReducer
});

const store = createStore(rootReducer);
export default store;`} language="jsx" number={false} file_name="src / store.js"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Message = () => {
  const message = useSelector(state => state.message.message);
  const dispatch = useDispatch();

  return (
    <div>
        <h2>Message: {message}</h2>
        <input 
            type="text" 
            onChange={(e) => dispatch({ type: 'SET_MESSAGE', payload: e.target.value })} 
            placeholder="Type a message"
        />
    </div>
  );
};

export default Message;`} language="jsx" number={false} file_name="src / components / message / Message.jsx"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import React from 'react';
import { useSelector } from 'react-redux';
import CounterControls from "./CounterControls"

const Counter = () => {
  const count = useSelector(state => state.counter.count);

  
  return (
    <div>
        <h1> Counter: {count} </h1>
        <CounterControls />
    </div>
  );
};

export default Counter;`} language="jsx" number={false} file_name="src / components / counter / Counter.jsx"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import React from 'react';
import { useDispatch } from 'react-redux';

const CounterControls = () => {
  const dispatch = useDispatch();   
  return (
    <>
      <button className='btn' onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button className='btn' onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </>
  );
};

export default CounterControls;`} language="jsx" number={false} file_name="src / components / counter / CounterControls.jsx"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import React from 'react';
import Counter from './components/counter/Counter';
import Message from './components/message/Message';

const App = () => {
  return (
    <div>
      <h1>Redux Multi-Reducer App</h1>
      <Counter />
      <Message />
    </div>
  );
};

export default App;`} language="jsx" number={false} file_name="src / App.jsx"  addclassName="mt-3 mb-3" copie={true}/>
    <Result title={'React App'} logo={react_logo} route="localhost:3000">
        <br />
        <h1> Redux Multi-Reducer App </h1>
        <h2> Counter: {countNum3} </h2>
        <button  className="btn border" onClick={ ()=>{setCountNum3( countNum3 + 1 )} }> + </button>
        <button  className="btn border" onClick={ ()=>{setCountNum3( countNum3 - 1 )} }> - </button>
        <h2>Message: {message3}</h2>
        <input 
            type="text" 
            onChange={(e) => setMessage3(e.target.value) } 
            placeholder="Type a message"
        />        
    </Result>
    </article>
    <article id='example_4'>
        <h5 className="title-h5"> مثال 4 : </h5>
        <ul><li>نُنشئ مُجلد <bdi>reducers/</bdi> في React-Redux لـ تجميع منطق إدارة الحالة في مكان واحد وفصل المهام، مما يُسهّل صيانة واختبار وتوسعة التحديثات عبر المكونات، مع الالتزام بالنمط المُنتظم لـ Redux. </li></ul>
        <CodeHighlighter code={`const initiallogoVisibility = {
    logoVisibility: false
};
  
 const logoReducer = (state = initiallogoVisibility, action) => {
    switch (action.type) {
        case 'LOGO_BOX_VISIBILITY':
            return { logoVisibility: !state.logoVisibility };
        case 'LOGO_BOX_INVISIBILITY':
            return { logoVisibility: false };
        default:
            return state;
    }
};
  
export default logoReducer;`} language="jsx" number={false} file_name="src / reducers / logoReducer.js"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import { createStore, combineReducers } from 'redux';
import logoReducer from './reducers/logoReducer';

const rootReducer = combineReducers({
    logo: logoReducer ,
});

const store = createStore(rootReducer);
export default store;`} language="jsx" number={false} file_name="src / store.js"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import { useDispatch, useSelector } from "react-redux";

export default function Header(){
    const visibility = useSelector(state => state.logo.logoVisibility);
    const dispatch = useDispatch();   
    

    return(
    <header className="bg-warning p-3">               
        <div 
            onClick={()=>{ dispatch({ type: 'LOGO_BOX_VISIBILITY' }) }}
            className="logo bg-danger text-light p-5 rounded-circle fs-5 border"
            style={{width: "max-content",cursor: "pointer"}} 
        > logo </div>
        <div  style={{display: (visibility) ? "block" : "none"}}>
            <ul>
                <li>option 1</li>
                <li>option 2</li>
                <li>option 3</li>
            </ul>
        </div>
    </header>
    )
}`} language="jsx" number={false} file_name="src / components / header / Header.jsx"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import { useDispatch } from "react-redux"

export default function Aside(){
    
    const dispatch = useDispatch()
    
    return(
    <aside 
        onClick={()=>{ dispatch({type : "LOGO_BOX_INVISIBILITY"}) }} 
        className="w-25 bg-success fs-3 text-light" 
        style={{ height: "500px"}}  
    >
        Aside
    </aside>
    )
}`} language="jsx" number={false} file_name="src / components / aside / Aside.jsx"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import { useDispatch } from "react-redux"

export default function Main(){
 
    const dispatch = useDispatch()
 
    return(
    <main  
        onClick={()=>{ dispatch({type : "LOGO_BOX_INVISIBILITY"}) }}
        className="w-75 bg-danger fs-3 text-light" 
        style={{ height: "500px"}} 
    >
        Main
    </main>
    )
}`} language="jsx" number={false} file_name="src / components / main / Mian.jsx"  addclassName="mt-3 mb-3" copie={true}/> 
    <CodeHighlighter code={`import React from 'react';
import { Header , Aside , Main } from './components/path'

const App = () => {
return (
<div>
    <Header/>
    <div className='d-flex'> 
      <Aside />
      <Main />
    </div>
</div>
);
};

export default App;`} language="jsx" number={false} file_name="src / App.jsx"  addclassName="mt-3 mb-3" copie={true}/> 
    
    <Result title={'React App'} logo={react_logo} route="localhost:3000">
        <div className="bg-warning p-3">               
            <div 
                onClick={()=>{ setVisibility(!visibility) }}
                className="logo bg-danger text-light p-5 rounded-circle fs-5 border"
                style={{width: "max-content",cursor: "pointer"}} 
            > logo </div>
            <div  style={{display: (visibility) ? "block" : "none"}}>
                <ul>
                    <li>option 1</li>
                    <li>option 2</li>
                    <li>option 3</li>
                </ul>
            </div>
        </div>  
        <div className="d-flex">
            <div 
                onClick={()=>{setVisibility(false)}}
                className="w-25 bg-success fs-3 text-light" 
                style={{ height: "500px"}}  
            >
                Aside
            </div>
            <div  
                onClick={()=>{setVisibility(false)}}
                className="w-75 bg-danger fs-3 text-light" 
                style={{ height: "500px"}} 
            >
                Main
            </div>
        </div>
    </Result>

        
    {/* <CodeHighlighter code={``} language="jsx" number={false} file_name="src / .jsx"  addclassName="mt-3 mb-3" copie={true}/>  */}
</article>
</div>
    )
}