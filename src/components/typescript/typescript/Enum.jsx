import { CodeHighlighter} from "../../path";


export default function Enum(props){
    return(
<section>
    <h1 className="heading-style">TypeScript enum</h1>
    <article className="mt-5">        
       <p className="style_divv">
            التعداد <b>(Enum)</b> هو ميزة خاصة في <b>TypeScript</b> تسمح لك بتعريف مجموعة من الثوابت المسماة. التعداد يسهل التعامل مع القيم المرتبطة التي لها أسماء ذات معنى.
            <CodeHighlighter code={`enum Direction {
  Up,
  Down,
  Left,
  Right
}

let move: Direction = Direction.Up;
console.log(move); // 0 (default numeric value)`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
        </p>
    </article>
    <article>
        <h2 className="title-h2">1 - الإينوم الرقمي  Numeric Enums ( الافتراضي )</h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`enum Status {
  Pending,    // 0
  Approved,   // 1
  Rejected    // 2
}

// Custom initialization
enum Priority {
  Low = 1,
  Medium = 3,
  High = 5
}`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">2 - الإينوم النصي String Enums </h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

console.log(Color.Red); // "RED"`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">3 - الإينوم المختلط (خليط من النصوص والأرقام) </h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`enum Mixed {
  Yes = "YES",
  No = 0
}`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">4 - حالات الاستخدام الشائعة رموز حالة HTTP </h2>
        <div className="mital">متال :  </div>
        <CodeHighlighter code={`enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  ServerError = 500
}

function handleResponse(status: HttpStatus) {
  if (status === HttpStatus.OK) {
    console.log("Success!");
  }
}`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
</section>  
    )
}