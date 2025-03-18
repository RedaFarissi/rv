import { useEffect, useState } from "react";
import { Footer } from "../path";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useCustomScroolTo0 } from "../../custom/pathCustoms";


const AllQuestion = (props) => {
    const dispatch = useDispatch();
    useCustomScroolTo0();
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([]); 

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        if (!token) {
            navigate("/login");
            //return;
        }

        async function getAllQuestion() {
            try {
                const response = await axios.get(`${props.url}/question/all/`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                });
                setQuestions(response.data.reverse());
            } catch (err) {
                console.error("Failed to fetch questions:", err);
            }
        }
        getAllQuestion();
    }, [props]);
    
    const getFormattedDate = (createdAt) => {
        const createdDate = new Date(createdAt);
        const now = new Date();
        const diffMs = now - createdDate; // Difference in milliseconds
        const diffSec = Math.floor(diffMs / 1000);
        const diffMin = Math.floor(diffSec / 60);
        const diffHrs = Math.floor(diffMin / 60);
        
        if (diffHrs < 24) {
            if(diffHrs > 0){
                return `${diffHrs} hour${diffHrs > 1 ? "s" : ""} ago`;
            }else if(diffMin > 0){
                return `${diffMin} minute${diffMin > 1 ? "s" : ""} ago`;
            }else{
                return `${diffSec} second${diffSec > 1 ? "s" : ""} ago`;
            }
        }
      
        // If more than 24 hours, return just the date
        return createdDate.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" });
    };

    const allQuestions = questions.map((question) => (
        <Link to={`/question/${question.id}`} style={{ color: "white", textDecoration: "none" }}>
            <div
                key={question.id} 
                className="card mb-3" 
                style={{backgroundColor: "#171c2c",border: "1px solid #475065"}}
            >
                <div className="card-header" style={{border: "1px solid #475065"}} > اسم المستخدم : {question.username}  </div>
                <div className="card-body text-light">
                  <h5 className="card-title">{question.title}</h5>
                  <p className="card-text">{question.text}</p>
                </div>
                <div
                    style={{border: "1px solid #475065"}}
                    className="card-footer text-secondary bg-transparent d-flex justify-content-between"
                > 
                    <div> {question.language} </div>
                    <div> {getFormattedDate(question.created_at)} </div>
                </div>
            </div>
        </Link>
    ));

                    
    return (
        <div onClick={ ()=>{dispatch({ type: 'FALSE_VISIBILTY_PROFILE' }) }}>

            <div style={{ marginTop: "200px", marginRight: "8%", marginLeft: "8%" }} className="d-flex justify-content-between">
                <h2 className="font-bold f-family fs-4">أسئلة المستخدمين</h2>
                <Link to="/add-question">
                    <button className="btn btn-primary">
                        <i className="fa-solid fa-plus"></i> أضف سؤالا
                    </button>
                </Link>
            </div>

            <br /><br />

            <div className="p-2 mb-2 mt-3" style={{ marginRight: "8%", marginLeft: "8%"}}>
                {questions.length > 0 ? (
                    <>  {allQuestions}  </>
                ) : (
                    <p style={{ color: "white" }}>لا توجد أسئلة بعد</p>
                )}
            </div>

            <br /><br />

            
            <Footer
                widthFooter="100%"
                block_1={"col-sm-10 col-sm-10 col-md-8 col-lg-4 offset-lg-2 col-xl-4 offset-xl-1"}
                block_2={"col-sm-10 col-md-8 col-lg-4 col-xl-4"}
                blockChildStyle={{ width: "90%", margin: "auto" }}
            />
        </div>
    );
};

export default AllQuestion;
