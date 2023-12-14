import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function Ngrok(){
    return(
    <article id="ngrok">
        <h1 className="heading-style heading-style-django-color"> ngrok </h1> 
        <ul>
           <li><a className='fs-4' href="https://ngrok.com/docs/getting-started/" target="_blanck"> use ngrok to securely share project with the world. <small>(Documentation)</small>  </a></li>
        </ul>
    </article>
    )
}