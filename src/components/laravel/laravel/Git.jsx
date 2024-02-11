import { CodeCommand } from "../../path";
import images from "../imagesLaravel";

export default function Git(props){
   return(
   <>
      <h1 className="heading-style heading-style-python-color">Laravel Git</h1>
      <article className="mt-5">
            <hr style={{height: "0.9rem",border:"0.3rem solid black"}}/>
            <h1 className="mt-5"> LARAVEL GITHUB & DOCKER </h1>
            <h2 id="clone_laravel_project"> Clone Laravel project  </h2>
            <b> First clone your project </b>
            <div className='alert bg-dark text-light pb-0'><pre> git clone &lt;repository_url{">"} </pre></div>
            <b> Go to directory of your project </b>
            <div className='alert bg-dark text-light pb-0'><pre>cd project-directory </pre></div>
            <b> Install Project Dependencies  </b>
            <div className='alert bg-dark text-light pb-0'><pre>composer install </pre></div>
            <b> Error : if you got error like this install <a href="https://www.7-zip.org/">https://www.7-zip.org/</a> and run "composer install" again</b>
            <img src={images.laravel58} className="w-100 border mb-2 mt-3" alt="ControllerPost"/>
            <b>Set Up Environment Files </b>
            <div className='alert bg-dark text-light pb-0'><pre>copy .env.example .env </pre></div>
            <b> Generate an Application Key</b>
            <div className='alert bg-dark text-light pb-0'><pre>php artisan key:generate </pre></div>
            <b> migrate to </b>
            <div className='alert bg-dark text-light pb-0'><pre>php artisan migrate </pre></div>
            <b> Run all seeder in your laravel project if needed </b>
            <div className='alert bg-dark text-light pb-0'><pre>php artisan db:seed</pre></div>
            <b> run project  </b>
            <div className='alert bg-dark text-light pb-0'><pre>php artisan serve </pre></div>
               
            <h2 id="laravel_docker"> Laravel Docker  </h2>
            <hr style={{height: "0.9rem",border:"0.3rem solid black"}}/>
            <h1 className="mt-5"> LARAVEL DOCKER </h1>
      
      </article>
   </>
   )
}