import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function Session(){
    return(
        <article id="Session">
            <h1 className="heading-style heading-style-django-color"> Django SESSION</h1> 
            <p className="style_divv mt-5">

            </p>
            <img src={images.django152} className="img"/>

            <h3> exemple 1 </h3>
            <img src={images.django148} className="img"/>
            <p className="fs-3"> the number increment each time you call the function and the function activate each reload </p>
            <img src={images.django149} className="img"/>

            <h3> exemple 2 </h3>
            <img src={images.django150} className="img"/>
            <img src={images.django151} className="img"/>

            <h3> exemple 3 </h3>
            <img src={images.django158} className="img"/>
            <img src={images.django159} className="img"/>
      </article>
    )
}