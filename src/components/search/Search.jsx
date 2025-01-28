import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import "./Search.css"

export default function Search(props){    
    
    props.scrollY_to_0();
    const links = props.searchAndRetrieve(props.searchValue).map( e => 
        <Link to={`${e.route}`}> 
                <div class="card box-search mb-1" style={{width: "18rem"}}>
                    <div class="card-body">
                        <h5 class="card-title te"> 
                                {e.value}
                        </h5>
                    </div>
                </div>
        </Link>  
    );
    const empty_search  =  <div class="container">
                                <h1>لم يتم العثور عليه</h1>
                                <p>لم نتمكن من العثور على ما تبحث عنه. يرجى التحقق من المعلومات والمحاولة مرة أخرى.</p>
                                <a href="/">العودة إلى الصفحة الرئيسية</a>
                            </div>

    return(
    <>
        <main 
            className="main-home d-flex justify-content-center align-items-center flex-wrap" dir="ltr" 
        >          
            {(links.length > 0)? links : empty_search}
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

