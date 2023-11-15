import { CodeHighlighter } from "../path";
import { Link } from "react-router-dom";


export default function HomeBox(props){
    return(
    <Link to={props.link} className={`home-box ${props.home_box}`}>
        <img src={props.img} className={`logo ${props.img_class}`} alt="logo" />
        <article className="home-box-2 row rounded">  
          <h1 className={`h1 col-12 ${props.h1_class}`}> {props.h1} </h1>     
            <p className='style_p col-7'> 
              {props.paragraph}
            </p>
            <CodeHighlighter code={props.code} language={props.language} /> 
        </article>
    </Link>
    )
}