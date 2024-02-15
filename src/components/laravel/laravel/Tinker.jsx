import images from "../imagesLaravel";
import { CodeCommand } from "../../path";

export default function Tinker(props){
   return(
   <>
      <h1 className="heading-style">Laravel Tinker </h1>
      <article className="mt-5">
         <hr style={{height: "0.9rem",border:"0.3rem solid black"}}/>
         <h1 className="mt-5"> Tinker </h1>
         <a href="https://laravel.com/docs/10.x/artisan#usage" rel="noreferrer" target="_blank"> https://laravel.com/docs/10.x/artisan#usage </a>
         <h2 id="useTinker">1 - Use Tinker </h2>
         <div className="alert bg-dark text-light pb-0"><pre>php artisan tinker</pre></div>
         <h2 id="TinkerExemple1">2 - Tinker Exemple 1 </h2>
         <img src={images.laravel60} className="w-100 border mb-2" alt="ControllerPost"/>
      </article>
   </>
   )
}