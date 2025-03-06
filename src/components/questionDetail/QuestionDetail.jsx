import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Footer } from "../path";
import { useNavigate } from "react-router-dom";


const QuestionDetail = (props) => {
    props.scrollY_to_0();
    
    const { id } = useParams(); // Get question ID from URL
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        if (!token) {
          navigate("/login"); // Redirect if no token
        }
     
        async function fetchQuestion() {
            try {
                const response = await axios.get(`${props.url}/question/${id}/`, { // Use id instead of props.id
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                });

                console.log(response.data);
                setQuestion(response.data);
            } catch (err) {
                setError("Failed to load question.");
            } finally {
                setLoading(false);
            }
        }

        fetchQuestion();
    }, [id,props.url,navigate]); 


    if (loading) return <p>تحميل ...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
    <div onClick={props.boxProfileStyle} >
        <h3 style={{ marginTop: "200px" ,marginRight: "8%" }}>السؤال :</h3>
        <section  className="container text-end mb-5">
                <h4>{question.title}</h4>
                <small>{question.text}</small>
                <p><small>{question.language}</small></p>
                <small>أرسل بواسطة : {question.username}</small>
        </section>
        <h3 style={{ marginTop: "20px" ,marginRight: "8%" }}>الأجوبة :</h3>

        <br />

        <Footer 
            widthFooter="100%"
            block_1={"col-sm-10 col-sm-10 col-md-8 col-lg-4 offset-lg-2 col-xl-4 offset-xl-1"}
            block_2={"col-sm-10 col-md-8 col-lg-4 col-xl-4"}
            blockChildStyle={{width: "90%" , margin:"auto"}}
        />
    </div>
    );
};

export default QuestionDetail;
