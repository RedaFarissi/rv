import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function DjangoPagination(){
    return(
    <article id="Django_Pagination">
        <div className="border-5 mt-5">
        <br id="django_Pagination"/><br/><br/><br/>
        <h1> django Pagination </h1>
        <ul>
           <div className="h3"><li><a href="https://www.youtube.com/watch?v=2nCftuWRuHE&list=PLtGOJcWqvbqfv9yQelR4HETqU35alUoW6&index=13" target="_blank">Youtube</a></li></div>
           <div className="h3"><li><a href="https://docs.djangoproject.com/en/4.1/topics/pagination/" target="_blank">Toturial</a></li></div>
        </ul>
        <h3>Exemple </h3>
        <div className="alert-primary m-3">name django project = <b>project</b><br/>django app = <b>app</b></div>
        <p>
           <ul><li><b> Create model with name <u>Profile</u> </b></li><li><b> we add in this table 10 rows  </b></li> </ul>
        </p>
        <img src={images.django58} className="img"/>
        <p><ul><li><b> project/app/views.py </b></li></ul></p>
        <img src={images.django59} className="img"/>
        <p><ul><li><b> project/app/templates/home.html </b></li></ul></p>
        <img src={images.django60} className="img"/>
        <p><ul><li><b> Result </b></li></ul></p>
        <img src={images.django61} className="img"/>
        </div>
    </article>
    )
}