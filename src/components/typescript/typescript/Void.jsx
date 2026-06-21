import { useDispatch } from 'react-redux';
import { CodeHighlighter } from "../../path";
import images from "../imagesTypeScript"

export default function Void(props){
    return(
<section>
    <h1 className="heading-style">TypeScript void</h1>
    <article className="mt-5">        
       <p className="style_divv">
            void يُمثل غياب النوع – وبالتحديد قيمة الإرجاع للدوال التي لا تُرجِع أي شيء.
        </p>
    </article>
    <article>
        <h2 className="title-h2">1 - void كنوع لباراميتر دالة</h2>
        <div className="mital">متال :  </div>
  <     CodeHighlighter code={`function logMessage(message: string): void {
          console.log(message);
          // No return statement (implicitly returns undefined)
        }`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">2 - void في أنواع إرجاع دوال الاسترجاع (callbacks) </h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`// This function accepts a callback that returns void
function forEachItem(items: string[], callback: (item: string) => void): void {
  for (const item of items) {
    callback(item);
  }
}`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">3 - الفرق بين دوال void الحرفية وسياق نوع الإرجاع void </h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`// Literal void – cannot return anything else
const fn1: () => void = () => {
  return 42; // ❌ Error: Type 'number' is not assignable to type 'void'
};

// Inferred return type – can return anything because it's ignored
function higherOrder(cb: () => void) {
  return cb(); // Return type is \`void\` but cb could return anything
}`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">4 -  void في الدوال غير المتزامنة (async) </h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`async function fetchData(): Promise<void> {
  const res = await fetch('https://api.example.com');
  // No return needed
}

// Wrong:
async function badExample(): void { } // ❌ Async functions must return Promise<T>`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>

</section>  
    )
}
