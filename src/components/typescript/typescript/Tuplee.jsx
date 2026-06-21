import { CodeHighlighter } from "../../path";

export default function Tuplee(props){
    return(
<section>
    <h1 className="heading-style">TypeScript tuple</h1>
    <article className="mt-5">        
       <p className="style_divv">
            <b>Tuples</b> الصفوف هي مصفوفات ذات طول ثابت وأنواع محددة في كل موقع. على عكس المصفوفات العادية حيث جميع العناصر تشترك في نفس النوع، تسمح لك الصفوف بخلط الأنواع في مواقع محددة مسبقًا.
            <CodeHighlighter code={`// Regular array (homogeneous)
let colors: string[] = ["red", "green", "blue"];

// Tuple (heterogeneous, fixed length)
let person: [string, number] = ["Alice", 30];
//                     ^index0 ^index1`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1 -  الطول الثابت والأنواع ( Fixed Length & Types ) </h2>
        <CodeHighlighter code={`// Correct - matches exactly
let user: [string, number, boolean] = ["Bob", 25, true];

// Errors:
// user = ["Bob", 25];           // Too few elements
// user = ["Bob", 25, true, "extra"]; // Too many elements
// user = [25, "Bob", true];     // Wrong types at positions`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">2 - الوصول إلى العناصر </h2>
        <CodeHighlighter code={`let employee: [string, number] = ["John", 50000];

let name = employee[0];  // Type: string
let salary = employee[1]; // Type: number

// TypeScript knows the type at each index
employee[0].toUpperCase();  // OK
employee[1].toFixed(2);     // OK`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">3 - عناصر اختيارية في الصفوف </h2>
        <CodeHighlighter code={`// Using ? for optional elements
let optionalTuple: [string, number?] = ["Alice"];        // Valid
optionalTuple = ["Alice", 30];  // Also valid

let multiOptional: [string, number?, boolean?] = ["Bob"];
multiOptional = ["Bob", 25];
multiOptional = ["Bob", 25, true];`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">4 -  عناصر الباقي في الصفوف </h2>
        <CodeHighlighter code={`// Rest elements (must be last)
type StringNumberBooleans = [string, number, ...boolean[]];
let example1: StringNumberBooleans = ["hello", 42];
let example2: StringNumberBooleans = ["hello", 42, true];
let example3: StringNumberBooleans = ["hello", 42, true, false, true];

// Multiple rest elements? No - only one rest element allowed
type Mixed = [string, ...number[], ...boolean[]]; // ❌ Error`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">5 - مثال  استجابة API </h2>
        <CodeHighlighter code={`type APIResponse = [statusCode: number, data: any, error?: string];

function fetchUser(): APIResponse {
    // Success case
    return [200, { id: 1, name: "Alice" }];
    
    // Error case
    // return [404, null, "User not found"];
}

const [code, data, err] = fetchUser();
if (code === 200) {
    console.log(data.name);
} else {
    console.error(err);
}`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
</section>  
    )
}


// <CodeHighlighter file_name="reda.html"code={`dd`} language="html" is_html={true} title="Reda eskouni" addClass="mt-3 mb-3" copie={true}  number={false}/>
// <CodeHighlighter file_name="reda.js"code={`codeExemple1.script`} language="js" addClass="mt-3 mb-3" copie={true}  number={false}/>
// <Result title='Reda Eskouni' logo={images.typescriptLogo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">           </Result>
// <div className="mital">متال 2 :  </div>
// <CodeCommand></CodeCommand>