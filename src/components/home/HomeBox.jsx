import { Link } from "react-router-dom";


export default function HomeBox(props){
    return(
        <div className="box-lang">
          <Link to={`${props.link}`} className="text-light text-decoration-none ">
            <div class="card-header py-3"> 
                <h3 class="text-center">{props.h3}</h3>
            </div>
            <div class="card-body">
                <div className="div-img">
                    <img src={props.img} alt="logos" className={`${(props.link === "/django-rest-framework")?"w-75":""}`}/>
                </div>
                <p class="card-text">{props.p}</p>
            </div>
          </Link>
        </div>    
    )
} 