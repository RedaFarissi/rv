import codes from "../../../assests/codes/django/django"
import images from "../imagesDjango";
import { CodeCommand , CodeHighlighter , Result } from "../../path";

export default function DjangoSlug(){
    return(
    <article>
        <div className="border-5 m-2">
        <br id="django_Slug"/><br/><br/><br/>
        <h1> django Slug </h1>
        <h2>1 - Why we use slug</h2>
        <p><b>use slug to creaete specific route without space</b></p>
        <h2>2 - create field in models.py class </h2>
        <p><b>to use slug we create field in models.py class in database</b></p>
        <ul>
           <div className="h3"><li><a href="https://www.youtube.com/watch?v=E8-3uuqp19s&list=PLtGOJcWqvbqfv9yQelR4HETqU35alUoW6&index=14" target="_blank">Youtube</a></li></div>
        </ul>
        </div>
    </article>
    )
}
