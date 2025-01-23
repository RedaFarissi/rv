import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import "./Search.sass"

export default function Search(props){    
    
    props.scrollY_to_0();
    const links = props.searchAndRetrieve(props.searchValue).map( e => 
        <div class="card box-search mb-1" style={{width: "18rem"}}>
            <div class="card-body">
                <h5 class="card-title te"> 
                    <Link to={`${e.route}`}> 
                        {e.value}
                    </Link>  
                </h5>
            </div>
        </div>
    );
    return(
    <>
        <main 
            className="main-home d-flex justify-content-center align-items-center flex-wrap" dir="ltr" 
        >          
            {links}
        </main>
        
        <Footer 
          widthFooter="100%"
          block_1={"col-sm-10 col-sm-10 col-md-8 col-lg-4 offset-lg-2 col-xl-4 offset-xl-1"}
          block_2={"col-sm-10 col-md-8 col-lg-4 col-xl-4"}
          blockChildStyle={{width: "90%" , margin:"auto"}}
        />

    </>
    )
}

