import { CodeHighlighter } from "../../path";

export default function Number(props){
    return(
<section>
    <h1 className="heading-style">TypeScript number</h1>
    <article className="mt-5">        
       <p className="style_divv">
        في <b>TypeScript</b>، يُستخدم نوع <b>number</b> لتمثيل القيم الصحيحة والعشرية. 
        <CodeHighlighter code={`let variable: number = 20;`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>

        </p>
    </article>
    <article>
        <h2 className="title-h2">1 - الاستخدام الأساسي</h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`let age: number = 25;           // integer
let price: number = 99.99;      // floating-point
let temperature: number = -10;  // negative`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">2 - أنظمة الأرقام</h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`let decimal: number = 42;        // decimal (base 10)
let hex: number = 0xf00d;        // hexadecimal (base 16)
let binary: number = 0b1010;     // binary (base 2)
let octal: number = 0o744;       // octal (base 8)`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">3 -  القيم الرقمية الخاصة</h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`let infinity: number = Infinity;
let negativeInfinity: number = -Infinity;
let notANumber: number = NaN;

console.log(1 / 0);           // Infinity
console.log(Math.sqrt(-1));   // NaN`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">4 - الدوال والخصائص الخاصة بالأرقام </h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`// TypeScript has access to all JavaScript Number methods
let num: number = 123.456;

num.toFixed(2);       // "123.46" - string representation
num.toPrecision(4);   // "123.5" - string with specified precision
num.toString();       // "123.456" - convert to string
num.toExponential();  // "1.23456e+2" - exponential notation

// Static properties
Number.MAX_VALUE;     // largest possible number
Number.MIN_VALUE;     // smallest positive number
Number.POSITIVE_INFINITY;
Number.NEGATIVE_INFINITY;
Number.NaN;`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">5 - ميزات السلامة النوعية </h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`// TypeScript prevents invalid assignments
let score: number = 100;
// score = "100"; // Error: Type 'string' is not assignable to type 'number'

// But you can assign other numeric types
let bigNum: bigint = 9007199254740991n;
// let regularNum: number = bigNum; // Error: Type 'bigint' is not assignable to type 'number'`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">6 - الفرق بين Number و BigInt </h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`let regularNumber: number = 9007199254740991; // Safe integer limit
let bigInteger: bigint = 9007199254740991n;   // BigInt for larger integers

// Different types - cannot be mixed without conversion
// regularNumber + bigInteger; // Error: Operator '+' cannot be applied to types 'number' and 'bigint'`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">7 -التأكيدات النوعية (Type Assertions)</h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`let value: any = "123.45";
let numValue: number = parseFloat(value);  // 123.45
let anotherNum: number = Number(value);    // 123.45
let intValue: number = parseInt(value);    // 123`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
   
</section>  
    )
}