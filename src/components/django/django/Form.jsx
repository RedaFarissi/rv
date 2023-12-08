import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function Form(){
    return(
    <article id="Form">
        <h1> forms.From </h1>
        <div className="fs-5">
           <b>forms.Form</b>: This is a basic form class provided by Django.<br/> It allows you to define form fields and their validation directly in the form class.<br/> You have full control over the form fields and their behavior.<br/> You need to define each form field manually using the available field classes provided by Django (CharField, EmailField, etc.).<br/> You can perform custom validation and define custom form methods to handle form submission.
        </div>
        <h3>Exemple : </h3>
        <img src={images.django183} className="img"/>
        <img src={images.django184} className="img"/>
        <img src={images.django185} className="img"/>
    </article>
    )
}
