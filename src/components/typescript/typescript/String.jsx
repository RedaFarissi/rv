import { CodeHighlighter } from "../../path";

export default function String(props){
    return(
<section>
    <h1 className="heading-style">TypeScript string</h1>
    <article className="mt-5">        
       <p className="style_divv">
         النصوص <b>(Strings)</b> في <b>TypeScript</b> هي نوع بيانات يمثل سلسلة من الأحرف النصية. تُستخدم لتخزين ومعالجة البيانات النصية مثل الأسماء، العناوين، الرسائل، وغيرها.
        <CodeHighlighter code={`let variable: string = 'Hello Word';`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1 - أنواع السلاسل النصية وإعلانهاHTML </h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`// String type annotations
let firstName: string = "John";
let lastName: string = 'Doe';
let message: string = \`Hello\`;

// Template literals
let fullName: string = \`\${firstName} \${lastName}\`;
let multiline: string = \`This is
a multiline
string\`;

// String constructor
let strFromConstructor: string = String(42); // "42"`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>

    </article>
    <article>
        <h2 className="title-h2">2 - أنواع النصوص الحرفية </h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`// Specific string values as types
type Direction = "north" | "south" | "east" | "west";
let move: Direction = "north"; // Only these 4 values allowed

// String literal unions
type Status = "success" | "error" | "loading";
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// With template literals
type EventName = \`on${"Click" | "Hover" | "Load"}\`;
let myEvent: EventName = "onClick"; // Valid`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>

    </article>
    <article>
        <h2 className="title-h2">3 -  تحويل النصوص </h2>
        <div className="mital">متال :  </div>
    <CodeHighlighter code={`// عمليات الاستبدال
let replaced: string = "Hello World".replace("World", "TypeScript");
let globalReplace: string = "a-b-c".replace(/-/g, "_");

// التقسيم والدمج
let csv: string = "apple,banana,orange";
let fruits: string[] = csv.split(","); // ["apple", "banana", "orange"]
let joined: string = fruits.join("; "); // "apple; banana; orange"

// عمليات القص
let spaced: string = "  Hello  ";
let trimmed: string = spaced.trim(); // "Hello"
let trimStart: string = spaced.trimStart(); // "Hello  "
let trimEnd: string = spaced.trimEnd(); // "  Hello"

// العمليات المدعومة باليونيكود
let emoji: string = "😀🎉";
let codePoint: number = emoji.codePointAt(0)!; // 128512
let fromCodePoint: string = String.fromCodePoint(128512, 127881); // "😀🎉"`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>








</section>  
    )
}


// <CodeHighlighter file_name="reda.html"code={`dd`} language="html" is_html={true} title="Reda eskouni" addClass="mt-3 mb-3" copie={true}  number={false}/>
// <CodeHighlighter file_name="reda.js"code={`codeExemple1.script`} language="js" addClass="mt-3 mb-3" copie={true}  number={false}/>
// <Result title='Reda Eskouni' logo={images.typescriptLogo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">           </Result>
// <div className="mital">متال 2 :  </div>
// <CodeCommand></CodeCommand>