import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import "./Search.css"
import { useDispatch, useSelector } from 'react-redux';
import { 
    useCustomScroolTo0 
} from "../../custom/pathCustoms";



export default function Search(props){       
    const  searchResult = useSelector(state => state.search.result ); // Ensure "footer" matches the key in the store
    console.log(searchResult)
    const dispatch = useDispatch();
    
    
    useCustomScroolTo0();

    
    const links = searchResult.map( e => 
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
            onClick={()=>{dispatch({ type: 'FALSE_VISIBILTY_PROFILE' });}}
        >          
            {(links.length > 0)? links : empty_search}
        </main>
        <Footer blockChildStyle={{width: "90%" , margin:"auto"}}/>
    </>
    )
}

