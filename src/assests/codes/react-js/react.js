



const index0class =()=>{
  return`class Animal {
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
  cat.makeSound();        //Cat says Meow`
}

const index0variable =()=>{
return`let x = 5;
const pi = 3.14;`  
}
const index0arrow =()=>{
return`const multiply = (a, b) => a * b;
console.log(multiply(20,2))      //40`
}
const index0destructuring=()=>{
  return`const person = { name: 'Ahmed', age: 25 };
const { name, age } = person;`
}
const index0modules =()=>{
return`// Exporting a module
export const add = (a, b) => a + b;

// Importing a module
import { add } from './math';`
}
const index0default_parameter =()=>{
return`function greet(name = 'Guest') {
  console.log(\`Hello, \${name}!\`);
}`
}
const index0spread_operator =()=>{
return`const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];`
}
const index0object_iteration =()=>{
  return`const person = { name: 'Sara', age: 30 };
    for (let key in person) {
    console.log(\`\${key}: \${person[key]}\`);
}`
}
const index0Run_React_App0 =()=>{
  return`cd myproject`
}
const index0Run_React_App1 =()=>{
  return `npm start`
}
const index1JSX=()=>{
return `function App() {
  let a = 2, b = 9;

  const myElement = (
    <ul>
      <li> a = {a} </li>
      <li> b = {b} </li>
      <li> a+b = {a+b} </li>
    </ul>
  );
  
  return (
    <>
      {myElement}
    </>
  );
}

export default App;
`
}
const index1function_Component=()=>{
return `import React from "react";

const ComponentH2 = () => {
  return (
    <h2>
      Component haeding
    </h2>
  );
};

const Paragraph = () => {
  return (
    <p className="p">
      Component paragraph
    </p>
  );
};

function App() {
  return (
    <>
      <ComponentH2 />
      <br />
      <Paragraph />
      <br />
    </>
  );
}

export default App;`
}
const index1function_Component_props=()=>{
return `import React from 'react';

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

export default App;`
}
const index1class_Component=()=>{
return `import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return <div>مكوّن الفئة</div>;
  }
}`
}
const index1class_Component_this_props0=()=>{
return `import React, { Component } from "react";

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

export default Paragraph;`
}
const index1class_Component_this_props1=()=>{
  return `import Paragraph from "./paragraph/Paragraph";

const design = ["red", "white"];

const App = () => {
  return (
    <Paragraph p_test="Learn React" design={design} />
  );
};

export default App;`
}
const index1Components_in_Component0=()=>{
  return `import React from 'react';

class Car extends React.Component {
  render() {
    return <h2>I am a Car!</h2>;
  }
}

export default Car;`
}
const index1Components_in_Component1=()=>{
  return `import React from 'react';
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

export default Garage;`
}

const index1Components_in_Component2=()=>{
  return `import Garage from './path-to-component-Garage/Garage';

const App = () => {
return (
  <Garage />
);
};

export default App;`
}
const index2Events=()=>{
  return`function App() {
  const shoot = () => {
    alert("take Shoot function");
  };
  
  return (
    <button onClick={shoot}>Shoot!</button>
  );
}

export default App;`
}
const index3Lists0=()=>{
  return`import React from 'react';

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
  
  export default MyList;`
}
const index3Lists1=()=>{
  return`import React from "react";
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
  
  export default App;`

}
const index3Lists2=()=>{
  return `import React from "react";

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
}
const index4Handle_images_react0=()=>{
  return`import react_logo from "../../assests/images/logo/react_logo.svg";

  const MyImage = () => {
    return (
      <img src={react_logo} alt='react logo'/>
    )
  }
  
  export default MyImage`

}
const index4Handle_images_react1=()=>{
  return`import MyImage from './path-to-component-MyImage/MyImage'

  function App() {
    return (
      <>
        <MyImage />
      </>
   );
  }
  
  export default App;`

}
const index4Handle_images_react2=()=>{
  return`import react_logo from "../../assests/images/html/react_logo.svg"
  import python_logo from "../../assests/images/html/python_logo.png"
  import js_logo from "../../assests/images/html/js_logo.png"
  
  const images = {
    react_logo, python_logo, js_logo ,
  }
  
  export default images ;`

}
const index4Handle_images_react3=()=>{
  return`import images from "./path-to-imagesFile/imagesFile";

  console.log(images.react_logo)
  console.log(images.python_logo)
  console.log(images.js_logo)`

}

const index5Handle_import0=()=>{
  return`function Header() {
    return (
      <h1>Header</h1>
    );
  }
  
  export default Header;`
}
const index5Handle_import1=()=>{
  return`function Content() {
    return (
      <p>This is the content of the app.</p>
    );
  }`
}
const index5Handle_import2=()=>{
  return`function Footer() {
    return (
      <h3>Footer</h3>
    );
  }
  
  export default Footer;`
}
const index5Handle_import3=()=>{
  return`function Footer() {
    return (
      <h3>Footer</h3>
    );
  }
  
  export default Footer;`
}
const index5Handle_import4=()=>{
  return`import Header from "./path-to-component-Header/Header";
  import Content from "./path-to-component-Content/Content";
  import Footer from "./path-to-component-Footer/Footer";
  
  function App() {
    return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
    );
  }
  
  export default App;`
}
const index5Handle_import5=()=>{
  return`export {default as Header} from './path-to-component-Header/Header';

  export {default as Content} from './path-to-component-Content/Content';
  
  export {default as Footer} from './path-to-component-Footer/Footer';`
}
const index5Handle_import6=()=>{
  return`import { Header , Content , Footer } from './path-to-file-handle-component/file-name.js';

  function App() {
    return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
    );
  }
  
  export default App;
  `
}
const index6props_children0=()=>{
  return`import React from 'react';

  const Card = (props) => {
    return (
      <div className="card">
        {props.children}
      </div>
    );
  };
  
  export default Card;`
}
const index6props_children1=()=>{
  return`import React from 'react';
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
}
const index7useState0=()=>{
  return`import { useState } from "react";`
}
const index7useState1=()=>{
  return`const [ stateName , setStateName] = useState({num:1, noba:true , _666:[]})`
}
const index7useState2=()=>{
  return`console.log( stateName )`
}
const index7useState3=()=>{
  return`setStateName(another_value) `
}
const index7useState4=()=>{
  return `setStateName( prevState => ({...prevState, key:value }) )`
}

const index7this_state0=()=>{
  return`import React, { Component } from "react";
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
  
  export default App;`
}
const index7this_state1=()=>{
  return`import React, {Component} from "react";
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
  
  export default App;`
}
const index8axios0=()=>{
  return`import axios from 'axios';`
}
const index8axios1=()=>{
  return`import axios from "axios";

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
  }`
}
const index8axios2=()=>{
  return`export default function CreatePost(props){
  
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
  `
}
const index8axios3=()=>{
return`export default function CreatePost(props){
  
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
`
}
const index8axios4=()=>{
return`const response = await axios.get(\`\${this.state.url}produit_api/\` , {headers});
const responseData = response.data;`
}
const index8axios5=()=>{
return` cart_length = async () =>{
  try{
    const response = await axios.get(\`\${this.state.url}cart/length/\` , {withCredentials: true});
    this.setState( prevState => ({...prevState , cart_length : response.data.length }) )
  }catch(err){
    alert(err)
  }
}
`
}
const index8Router=()=>{
  return`import React from 'react';
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
  }
const index8useNavigate_Router=()=>{
  return`import { useNavigate } from 'react-router-dom';

  function MyComponent() {
    const navigate = useNavigate();
  
    function handleClick() {
      navigate('/new-page'); // Navigate to the new route
    }
  
    return (
      <button onClick={handleClick}>Go to new page</button>
    );
  }`
  }
const index8useParams_Router0=()=>{
  return`import React from 'react';
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
  
  export default App;`
  }
const index8useParams_Router1=()=>{
return`import React from 'react';
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

export default ArticleList;`
}
const index8useParams_Router2=()=>{
  return`import React from "react";
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
  
  export default ArticleDetail;`
}
const index8react_syntax_highlighter0=()=>{
  return`import React from 'react';
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
  
  export default CodeExample;`
}
const index8react_syntax_highlighter1=()=>{
  return`import React from 'react';
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
}
const codes = [
  {
    title:"Introduction", 
    What_is_React:[],
    How_react_work:[],
    What_you_need_to_get_started:[],
    Verify_required_installations:[],
    ES6:{
      class:[index0class()],
      variable:[index0variable()],      
      arrow:[index0arrow()],
      destructuring:[index0destructuring()],
      modules:[index0modules()],
      default_parameter:[index0default_parameter()],
      spread_operator:[index0spread_operator()],
      object_iteration:[index0object_iteration()],
    },
    Create_React_App:[],
    Run_React_App:[index0Run_React_App0(),index0Run_React_App1()]
  },
  {//code [1]
    title:"Component",
    JSX:[index1JSX()],
    function_Component:[index1function_Component()],
    function_Component_props:[index1function_Component_props()],
    class_Component:[index1class_Component()],
    class_Component_this_props:[index1class_Component_this_props0(), index1class_Component_this_props1() ],
    Components_in_Component:[index1Components_in_Component0(),index1Components_in_Component1(),index1Components_in_Component2()],
  },
  {//code[2]
    Events:[index2Events()]
  },
  {//code[3]
    Lists:[index3Lists0() , index3Lists1(), index3Lists2() ]},
  {//code[4]
    Handle_images_react:[index4Handle_images_react0() ,index4Handle_images_react1(),index4Handle_images_react2(),index4Handle_images_react3()]
  },
  {//code[5]
    Handle_import:[index5Handle_import0(),index5Handle_import1(),index5Handle_import2(),index5Handle_import3(),index5Handle_import4(),index5Handle_import5(),index5Handle_import6()]
  },
  {//code[6]
    props_children:[ index6props_children0() ,index6props_children1()]
  },
  {//code[8
    title:"hooks",
    useState:[index7useState0(),index7useState1(),index7useState2(),index7useState3(),index7useState4()],
    this_state:[index7this_state0(),index7this_state1()],
  },
  {//code[8]
    title:"packages",
    npm_list:[],
    axios:[index8axios0(),index8axios1(),index8axios2(),index8axios3(),index8axios4(),index8axios5()],
    react_paypal_js:[],
    react_sass:[`import "./App.sass"`],
    Router:[index8Router()],
    useNavigate_Router:[index8useNavigate_Router()],
    useParams_Router:[index8useParams_Router0(),index8useParams_Router1(),index8useParams_Router2()],
    react_syntax_highlighter:[index8react_syntax_highlighter0(),index8react_syntax_highlighter1()]
  }
]

export default codes;