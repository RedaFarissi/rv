const codes = [
  {
    title:"Introduction", 
    What_is_React:"",
    How_react_work:"",
    What_you_need_to_get_started:"",
    Verify_required_installations:"",
    ES6:{
class:[`class Animal {
constructor(name, sound) {
  this.name = name;
  this.sound = sound;
}

makeSound() {
  console.log(\`\${this.name} says \${this.sound}\`);
}
}

// Creating an instance of the class
const cat = new Animal('Cat', 'Meow');
cat.makeSound();        //Cat says Meow`],
variable:[`let x = 5;
const pi = 3.14;`],      
arrow:[`const multiply = (a, b) => a * b;
console.log(multiply(20,2))      //40`],
destructuring:[`const person = { name: 'Ahmed', age: 25 };
const { name, age } = person;`],
modules:[`// Exporting a module
export const add = (a, b) => a + b;

// Importing a module
import { add } from './math';`],
default_parameter:[`function greet(name = 'Guest') {
console.log(\`Hello, \${name}!\`);
}`],
spread_operator:[`const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];`],
object_iteration:[`const person = { name: 'Sara', age: 30 };
for (let key in person) {
console.log(\`\${key}: \${person[key]}\`);
}`],
    },
    Create_React_App:"",
    Run_React_App:[`cd myproject`,`npm start`]
  },
  {//code [1]
    title:"Component",
    JSX:"",
    function_Component:"",
    function_Component_props:[`import React from 'react';

// Define a function component using props
const Greeting = (props) => {
return <div>Hello, {props.name}!</div>;
};

// Use the component and pass props
const App = () => {
return (
  <div>
    <Greeting name="John" />
    <Greeting name="Sara" />
  </div>
);
};

export default App;`],
    class_Component:[`import React, { Component } from 'react';

class MyComponent extends Component {
render() {
  return <div>مكوّن الفئة</div>;
}
}`],
    class_Component_this_props:[`import React, { Component } from "react";

class Paragraph extends Component {
stylemethod() {
  return {
    backgroundColor: this.props.design[0],
    color: this.props.design[1],
  };
}

render() {
  return (
    <p style={this.stylemethod()}>
      {this.props.p_test}
    </p>
  );
}
}

export default Paragraph;`,
`import Paragraph from "./paragraph/Paragraph";

const design = ["red", "white"];

const App = () => {
return (
  <Paragraph p_test="Learn React" design={design} />
);
};

export default App;`
  ],
    Components_in_Component:[`import React from 'react';

class Car extends React.Component {
render() {
  return <h2>I am a Car!</h2>;
}
}

export default Car;`,
`import React from 'react';
import Car from'./path-to-component-Car/Car';

class Garage extends React.Component{
render() {
  return (
    <div>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </div>
  );
}
}

export default Garage;`,
`import Garage from './path-to-component-Garage/Garage';

const App = () => {
return (
  <Garage />
);
};

export default App;`
],
  },
  {//code[2]
    Events:[
`function App() {
const shoot = () => {
  alert("take Shoot function");
};

return (
  <button onClick={shoot}>Shoot!</button>
 );
}

export default App;`,
  ]
  },
  {//code[3]
    Lists:[
`import React from 'react';

const MyList = () => {
const items = ['Item 1', 'Item 2', 'Item 3'];

return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
};

export default MyList;`,
`import React from "react";
import "./App.css";

import Item from "./Item";

function Item(props) {
return (
  <tr>
    <td>{props.name}</td>
    <td>{props.age}</td>
  </tr>
);
}

class App extends React.Component {
constructor() {
  super();
  this.state = {
    users: [
      { id: "1", name: "kama186758", age: "26" },
      { id: "2", name: "ama186758", age: "29" },
      { id: "3", name: "kamila58", age: "23" },
      { id: "4", name: "thami08", age: "19" },
      { id: "5", name: "Reda6758", age: "16" },
    ],
  };
}

render() {
  const items = this.state.users.map((e) => (
    <Item key={e.id} name={e.name} age={e.age} />
  ));

  return (
    <table className="table">
      <tr>
        <th>name</th>
        <th>age</th>
      </tr>
      {items}
    </table>
  );
}
}

export default App;`,
`import React from "react";

function Garage() {
const cars = [
  { id: 1, brand: "Ford" },
  { id: 2, brand: "BMW" },
  { id: 3, brand: "Audi" },
];

return (
  <div>
    <h1>My Garage</h1>
    <ul>
      {cars.map((car) => (
        <li key={car.id}>{car.brand}</li>
      ))}
    </ul>
  </div>
);
}

export default Garage;`
  ]},
  {//code[4]
    Handle_images_react:[
`import react_logo from "../../assests/images/logo/react_logo.svg";

const MyImage = () => {
return (
  <img src={react_logo} alt='react logo'/>
)
}

export default MyImage`,
`import MyImage from './path-to-component-MyImage/MyImage'

function App() {
return (
  <>
    <MyImage />
  </>
 );
}

export default App;`,
`import react_logo from "../../assests/images/html/react_logo.svg"
import python_logo from "../../assests/images/html/python_logo.png"
import js_logo from "../../assests/images/html/js_logo.png"

const images = {
react_logo, python_logo, js_logo ,
}

export default images ;`,
`import images from "./path-to-imagesFile/imagesFile";

console.log(images.react_logo)
console.log(images.python_logo)
console.log(images.js_logo)`
  ]},
  {//code[5]
    Handle_import:[
`export {default as Header} from './path-to-component-Header/Header';

export {default as Content} from './path-to-component-Content/Content';

export {default as Footer} from './path-to-component-Footer/Footer';`,
`import { Header , Content , Footer } from './path-to-file-handle-component/file-name.js';`
  ]},
  {//code[6]
    props_children:[ 
`import React from 'react';

const Card = (props) => {
return (
  <div className="card">
    {props.children}
  </div>
);
};

export default Card;`,
`import React from 'react';
import Card from './Card';

const App = () => {
return (
  <div>
    <Card>
      <h2>عنوان البطاقة</h2>
      <p>هذا هو نص البطاقة.</p>
      <img src="path/to/image.jpg" alt="صورة البطاقة" />
    </Card>
  </div>
);
};

export default App;
`
  ]},
  {//code[7]
    title:"hooks",
    useState:[
`import { useState } from "react";`,
`const [ stateName , setStateName] = useState({num:1, noba:true , _666:[]})`,
`console.log( stateName )`,
`setStateName(another_value) `,
`setStateName( prevState => ({...prevState, key:value }) )`,
    ],
    this_state:[
`import React, { Component } from "react";
import "./App.css";

class App extends Component {
constructor() {
  super();

  this.state = ["Admin", { id: "1", name: "Reda Eskouni" }, true];
}

render() {
  return (
    <div>
      <ul>
        <li style={{ fontSize: 24, color: "red" }}>{this.state[0]}</li>
        <li style={{ fontSize: 24, color: "red" }}>{this.state[1].id}</li>
        <li style={{ fontSize: 24, color: "red" }}>{this.state[1].name}</li>
        <li>
          the state this.state[2] is
          {this.state[2] ? "true" : "false"}
        </li>
      </ul>
    </div>
  );
}
}

export default App;`,
`import React, {Component} from "react";
import './App.css';

class App extends Component {

constructor() {
  super();

  this.state = ["Admin", {id:"1", name: "Reda Eskouni"}, true];
  // to say to react react we mean this.state here
  this.addValueToStateArray = this.addValueToStateArray.bind(this);
}

addValueToStateArray() {
  this.setState(["Usser", {id:"2", name: "Reda Eskouni"}, true, true]);
}

render() {
  return (
    <div>
      <ul>
        <li>{this.state[0]}</li>
        <li>{this.state[1].id}</li>
        <li>{this.state[1].name}</li>
        <li>
          the state {this.state[2]} is {this.state[2] ? "true" : "false"}
        </li>
        <li>
          the state {this.state[3]} is {this.state[3] ? "true" : "false"}
        </li>
      </ul>

      <button className="btn border" onClick={this.addValueToStateArray}>
        Change
      </button>
    </div>
  );
}
}

export default App;`,        
    ],
  },
  {//code[8]
    title:"packages",
    npm_list:"",
    axios:[
`import axios from 'axios';`,
`import axios from "axios";

export default function Login(props){
  const [login , setLogin] = useState({ username:"User_Name" , password:"Your_Password" });
  
  const hundleLogin =(e)=>{
      setLogin({...login , [e.target.name]: e.target.value});
  }
  
  const hundleSubmitLogin = async (event) => {
      event.preventDefault();
      try{
        const response = await axios.post(\`\${props.url}rest-auth/login/\`, login);
        localStorage.setItem('auth_token', response.data.key );
        setLogin({ username:"" , password:"" });
      }catch(err){
        alert(err);
      }
  }

  return (
    <form method="POST" onSubmit={hundleSubmit}>
        <div className="form-group first">
          <label htmlFor="username">{languages.login.username}</label>
          <input type="text" name="username" onChange={hundleLogin} value={login.username} id="user_name"/>
        </div>
        
        <div className="form-group last mb-4">
          <label htmlFor="password">{languages.login.password}</label>
          <input type="password" name="password" value={login.password} onChange={hundleLogin} id="password"/>
        </div>  
        <input type="submit" value="Submit" className="btn btn-primary"/>
    </form>
  )
}`,
`export default function CreatePost(props){
  
  const [data, setData] = useState({   
      image: null,
      title: 'product name',
      description: 'Product name bla bla ...',
      start: '1',
      default_price: 120,
      price_reduction: 100,
      category: "",
  });

  const handleCreatePost = async (event) => {
       event.preventDefault();
       const formData = new FormData();
       formData.append('image', data.image);
       formData.append('title', data.title);
       formData.append('description', data.description);
       formData.append('default_price', data.default_price);
       formData.append('price_reduction', data.price_reduction);
       formData.append('start', data.start);
       formData.append('category', data.category);
       const response = await axios.post(\`\${props.url}create_post/create/\`, formData ,
         {
           headers : { 'Authorization': \`Token \${localStorage.getItem('auth_token')}\`, }
         }
       )
       if(response.data.msg){
        window.location.reload()
       }
  };
return(
<form onSubmit={props.handleCreatePost} encType="multipart/form-data"  method="POST"> 
....
</form>
)
}
`,
`const response = await axios.get(\`\${this.state.url}produit_api/\` , {headers});
const responseData = response.data;`,
` cart_length = async () =>{
try{
  const response = await axios.get(\`\${this.state.url}cart/length/\` , {withCredentials: true});
  this.setState( prevState => ({...prevState , cart_length : response.data.length }) )
}catch(err){
  alert(err)
}
}
`
    ],
    react_paypal_js:"",
    react_sass:[`import "./App.sass"`],
    Router:[
`import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
return (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);
}

function Home() {
return (
  <div>
    <h1>Home</h1>
    <p>This is the Home page.</p>
  </div>
);
}

function About() {
return (
  <div>
    <h1>About</h1>
    <p>This is the About page.</p>
  </div>
);
}

function Contact() {
return (
  <div>
    <h1>Contact</h1>
    <p>This is the Contact page.</p>
  </div>
);
}

export default App;`
    ],
    useNavigate_Router:[
`import { useNavigate } from 'react-router-dom';

function MyComponent() {
const navigate = useNavigate();

function handleClick() {
  navigate('/new-page'); // Navigate to the new route
}

return (
  <button onClick={handleClick}>Go to new page</button>
);
}`,
    ],
    useParams_Router:[
`import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ArticleList from './ArticleList';
import ArticleDetail from './ArticleDetail';

function App() {
return (
  <Router>
    <Switch>
      <Route path="/" exact component={ArticleList} />
      <Route path="/article/:slug" component={ArticleDetail} />
    </Switch>
  </Router>
);
}

export default App;`,
`import React from 'react';
import { Link } from 'react-router-dom';
import articles from "./data/articles";

// Your article data
/*const articles = [
{ title: 'Article 1', slug: 'article-1' },
{ title: 'Article 2', slug: 'article-2' },
{ title: 'Article 3', slug: 'article-3' },
];*/

const ArticleList = () => {
return (
  <ul>
    {articles.map((article) => (
      <li key={article.slug}>
        <Link to={\`/article/\${article.slug}\`}>{article.title}</Link>
      </li>
    ))}
  </ul>
);
};

export default ArticleList;`,
`import React from "react";
import { useParams } from "react-router-dom";

import articles from "./data/articles"; // Your article data

function ArticleDetail() {
const { slug } = useParams();

const article = articles.find((article) => article.slug === slug);

if (!article) {
  return <div>Article not found.</div>;
}

return (
  <div>
    <h1>{article.title}</h1>
    <p>{article.content}</p>
    <img src={article.image} alt={article.title} />
  </div>
);
}

export default ArticleDetail;`,
    ],
    react_syntax_highlighter:[
`import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeExample = () => {
const codeString = \`const greeting = 'Hello, world!';\`;

return (
  <SyntaxHighlighter language="javascript" style={solarizedlight}>
    {codeString}
  </SyntaxHighlighter>
);
};

export default CodeExample;`,
`import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeExample = () => {
const codeString = \`const greeting = 'Hello, world!';\`;

return (
  <SyntaxHighlighter language="javascript" style={solarizedlight} showLineNumbers>
    {codeString}
  </SyntaxHighlighter>
);
};

export default CodeExample;`
    ]
  }
]

export default codes;