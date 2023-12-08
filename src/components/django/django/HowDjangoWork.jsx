import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function HowDjangoWork(){
    return(
    <article  id="How_Django_Work">
        <h1>  How Django Work </h1>
        <div>
        <h2> create button in work with server   </h2>
        <img src={images.django177} className="img"/>
        <img src={images.django178} className="img"/>
        <h2>  use models to handle data   </h2>
        <h3> 1 - use function creatred in models file in views file</h3>
        <img src={images.django179} className="img"/>
        <img src={images.django180} className="img"/>
        <h3> 2 - use function created in models in templates direct </h3>
        <img src={images.django181} className="img"/>
        <img src={images.django182} className="img"/>
        </div>
    </article>
    )
}