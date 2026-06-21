import { useDispatch } from 'react-redux';
import { CodeHighlighter , CodeCommand ,  Result} from "../../path";
import images from "../imagesTypeScript"

export default function Array(props){
    return(
<section>
    <h1 className="heading-style">TypeScript array</h1>
    <article className="mt-5"> 
        <h2 className="title-h2">1 - ما هي المصفوفة؟ (array)</h2>   
        المصفوفة هي هيكل بيانات يخزن مجموعة من القيم في متغير واحد 
        <CodeHighlighter code={`let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Ahmed", "Sara", "Mohammed"];

console.log(numbers); // [1, 2, 3, 4, 5]
console.log(names); // ["Ahmed", "Sara", "Mohammed"]`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">2 - طرق تعريف المصفوفة </h2>   
        <CodeHighlighter code={`//Method 1: Using square brackets
let variable: number[] = [1, 2, 3];

// The second method: using Generic Array
let variable: Array<number> = [1, 2, 3];

// Multi-type matrix (rarely used)
let variable: (string | number)[] = ["Ahmed", 25, "Sara", 30];`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">3 - الوصول إلى عناصر المصفوفة</h2>        
        <CodeHighlighter code={`let students: string[] = ["Ahmed", "Sara", "Mohammed", "Layla"];

// Index starts from 0
console.log(students[0]); // "Ahmed"
console.log(students[2]); // "Mohammed"
console.log(students[students.length - 1]); // "Layla" (last element)
console.log(students.length); // 4 (array length)`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
        <article>
        <h2 className="title-h2">4 - إضافة العناصر وإزالتها</h2>
        <CodeHighlighter code={`let numbers: number[] = [1, 2, 3];

// push - Add at the end
numbers.push(4); 
console.log(numbers);   // [1, 2, 3, 4]

// pop - Remove from the end
let lastElement = numbers.pop(); // 4
console.log(numbers); // [1, 2, 3]

// unshift - Add at the beginning
numbers.unshift(0); // [0, 1, 2, 3]

// shift - Remove from the beginning
let firstElement = numbers.shift(); // 0`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">5 - تعديل المصفوفة </h2>
        <CodeHighlighter code={`let days: string[] = ["Saturday", "Sunday", "Tuesday"];

// Modify existing element
days[2] = "Monday"; // Correcting the day
console.log(days); // ["Saturday", "Sunday", "Monday"]

// Add element at specific position
days[3] = "Tuesday";
console.log(days); // ["Saturday", "Sunday", "Monday", "Tuesday"]`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">6 -  forEach للتكرار </h2>
        <CodeHighlighter code={`let products: string[] = ["Phone", "Computer", "Tablet"];

// Print all products
products.forEach((product, index) => {
    console.log(\`\${index + 1}: \${product}\`);
});
// Result:
// 1: Phone
// 2: Computer
// 3: Tablet`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
    <article>
        <h2 className="title-h2">7 - map لتحويل المصفوفة </h2>
        <CodeHighlighter code={`let prices: number[] = [100, 200, 300];

// Increase prices by 10%
let newPrices = prices.map(price => price * 1.1);
console.log(newPrices); // [110, 220, 330]

// Convert numbers to strings
let stringPrices = prices.map(price => \`\${price} SAR\`);
console.log(stringPrices); // ["100 SAR", "200 SAR", "300 SAR"]`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
        <article>
        <h2 className="title-h2">8 -  filter لتصفية المصفوفة </h2>
        <CodeHighlighter code={`let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get even numbers only
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Get numbers greater than 5
let largeNumbers = numbers.filter(num => num > 5);
console.log(largeNumbers); // [6, 7, 8, 9, 10]`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
        <article>
        <h2 className="title-h2">9 -  find و findIndex للبحث </h2>
        <CodeHighlighter code={`let users = [
    { id: 1, name: "Ahmed", age: 25 },
    { id: 2, name: "Sara", age: 30 },
    { id: 3, name: "Mohammed", age: 22 }
];

// Find first user older than 25
let olderUser = users.find(user => user.age > 25);
console.log(olderUser); // { id: 2, name: "Sara", age: 30 }

// Find position of specific user
let saraPosition = users.findIndex(user => user.name === "Sara");
console.log(saraPosition); // 1`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
        <article>
        <h2 className="title-h2">10 - reduce لدمج القيم </h2>
        <CodeHighlighter code={`let purchases: number[] = [50, 100, 75, 200];

// Calculate total sum
let total = purchases.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log(total); // 425

// Example with objects
let orders = [
    { product: "Phone", quantity: 2, price: 1000 },
    { product: "Charger", quantity: 3, price: 50 },
    { product: "Headphones", quantity: 1, price: 200 }
];

let grandTotal = orders.reduce((sum, order) => {
    return sum + (order.quantity * order.price);
}, 0);
console.log(grandTotal); // 2350`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
        <article>
        <h2 className="title-h2">11 - sort للترتيب </h2>
        <CodeHighlighter code={`let numbers: number[] = [5, 2, 8, 1, 9, 3];

// Ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 5, 8, 9]

// Descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // [9, 8, 5, 3, 2, 1]

// Sorting strings
let names: string[] = ["Ahmed", "Sara", "Mohammed", "Layla"];
names.sort();
console.log(names); // ["Ahmed", "Layla", "Mohammed", "Sara"] (based on Unicode)`} language="typescript" addClass="mt-3 mb-3" copie={true}  number={false}/>
    </article>
</section>  
    )
}


// <CodeHighlighter file_name="reda.html"code={`dd`} language="html" is_html={true} title="Reda eskouni" addClass="mt-3 mb-3" copie={true}  number={false}/>
// <CodeHighlighter file_name="reda.js"code={`codeExemple1.script`} language="js" addClass="mt-3 mb-3" copie={true}  number={false}/>
// <Result title='Reda Eskouni' logo={images.typescriptLogo}  route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/reda.html">           </Result>
// <div className="mital">متال 2 :  </div>
// <CodeCommand></CodeCommand>