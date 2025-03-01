import { useEffect, useState } from "react";
import { Footer } from "../path";
import { Link } from "react-router-dom";
import axios from "axios";

const AllQuestion = (props) => {
    const [questions, setQuestions] = useState([]); // State to store questions

    useEffect(() => {
        props.scrollY_to_0();

        async function getAllQuestion() {
            try {
                const response = await axios.get(`${props.url}/question/all/`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${localStorage.getItem("auth_token")}`,
                    },
                });
                setQuestions(response.data.reverse()); // Store fetched questions in state
            } catch (err) {
                console.error("Failed to fetch questions:", err);
            }
        }
        getAllQuestion();
    }, [props]);
    
        const allQuestions = questions.map((question) => (
            <Link to={`/question/${question.id}`} style={{ color: "white", textDecoration: "none" }}>
                <div key={question.id} style={{ color: "white", backgroundColor: "#171c2c"  }} className="alert mb-4">
                    {question.title}
                </div>
            </Link>
        ))
                    
    return (
        <div onClick={props.boxProfileStyle}>
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
