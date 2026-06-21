import { CodeHighlighter } from "../../path";

export default function Boolean(props){
    return(
<section>
    <h1 className="heading-style">TypeScript boolean</h1>
    <article className="mt-5">        
       <p className="style_divv">
            يتم تحويل <b>boolean</b> في <b>TypeScript</b> إلى <b>boolean</b> العادي في <b>JavaScript</b> بعد الترجمة، بدون أي تكلفة إضافية في وقت التشغيل.
            نوع <b>boolean</b> في <b>TypeScript</b> يوفر فحصًا في وقت الترجمة للتأكد من أن القيم المنطقية تُستخدم بشكل صحيح، مما يمنع الأخطاء الشائعة في <b>JavaScript</b> حيث يمكن لأي قيمة أن تُعتبر "truthy" أو "falsy".
        </p>
            <CodeHighlighter code={`let variable: boolean = true;`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">1 - الاستخدام الأساسي</h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`let isActive: boolean = true;
let isCompleted: boolean = false;
let hasPermission: boolean = true;`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">2 - القيم الصحيحة</h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`// Direct boolean values
let truthy: boolean = true;
let falsy: boolean = false;

// From logical expressions
let isGreater: boolean = (5 > 3);  // true
let isEqual: boolean = (10 === 10); // true
let exists: boolean = (value !== null && value !== undefined);`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">3 -  التحويل إلى Boolean</h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`let value1: boolean = Boolean(1);      // true
let value2: boolean = Boolean(0);      // false
let value3: boolean = Boolean("hello"); // true
let value4: boolean = Boolean("");      // false
let value5: boolean = !!someValue;      // Double negation to boolean`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">4 - التعبيرات المنطقية </h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`// AND
let bothTrue: boolean = true && true;    // true
let oneFalse: boolean = true && false;   // false

// OR
let eitherTrue: boolean = true || false; // true
let bothFalse: boolean = false || false; // false

// NOT
let notTrue: boolean = !true;    // false
let notFalse: boolean = !false;  // true`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>



</section>  
    )
}