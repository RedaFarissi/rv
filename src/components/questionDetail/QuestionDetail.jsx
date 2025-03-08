import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Footer } from "../path";

const QuestionDetail = (props) => {
    props.scrollY_to_0();    
    const { id } = useParams(); // Get question ID from URL
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [answerText, setAnswerText] = useState(""); // State for answer input
    const [submitting, setSubmitting] = useState(false); // Loading state for submission
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        if (!token) {
            navigate("/login"); // Redirect if no token
            return;
        }

        async function fetchQuestion() {
            try {
                const response = await axios.get(`${props.url}/question/${id}/`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                });
                setQuestion(response.data);
            } catch (err) {
                setError("Failed to load question.");
            } finally {
                setLoading(false);
            }
        }
        fetchQuestion();
    }, [id, props.url, navigate]); 

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!answerText.trim()) {
            alert("لا يمكن إرسال إجابة فارغة!");
            return;
        }

        setSubmitting(true);
        const token = localStorage.getItem("auth_token");

        try {
            const response = await axios.post(
                `${props.url}/question/${id}/answers/`,  // Change "question" to "questions"
                { text: answerText },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${token}`,
                    },
                }
            );
            alert("تم إرسال الإجابة بنجاح! ✅");
            setAnswerText(""); // Clear the textarea
            // Optionally, reload the question to show new answers
            setQuestion((prev) => ({
                ...prev,
                answers: [...(prev.answers || []), response.data]
            }));
        } catch (err) {
            alert("فشل في إرسال الإجابة! ❌");
        } finally {
            setSubmitting(false);
        }
    };

    if (loading) return <p>تحميل ...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <div onClick={props.boxProfileStyle}>
            <h3 style={{ marginTop: "200px", marginRight: "8%" }}>السؤال :</h3>
            <section className="container text-end mb-5">
                <h4>{question.title}</h4>
                <small>{question.text}</small>
                <p><small>{question.language}</small></p>
                <small>أرسل بواسطة : {question.username}</small>
            </section>

            {/* Answers Section */}
            <h3 style={{ marginTop: "20px", marginRight: "8%" }}>الإجابات :</h3>
            {question.answers && question.answers.length > 0 ? (
                question.answers.map((answer, index) => (
                    <div key={index} className="container text-end mb-3" style={{ backgroundColor: "#252e4b", padding: "10px", borderRadius: "5px", color: "white" }}>
                        <p>{answer.text}</p>
                        <small>أجاب بواسطة: {answer.username}</small>
                    </div>
                ))
            ) : (
                <p style={{ marginRight: "8%" }}>لا توجد إجابات بعد.</p>
            )}

            {/* Answer Form */}
            <h3 style={{ marginTop: "20px", marginRight: "8%" }}>أضف جواب :</h3>
            <form onSubmit={handleSubmit}>
                <textarea
                    style={{ marginRight: "8%", backgroundColor: "#252e4b", width: "85%", height: "200px" }}
                    className="rounded p-2 mt-5 text-light border-none"
                    value={answerText}
                    onChange={(e) => setAnswerText(e.target.value)}
                ></textarea>
                <br /><br />
                <button type="submit" className="btn btn-primary btn-lg" style={{ marginRight: "8%" }} disabled={submitting}>
                    {submitting ? "جاري الإرسال..." : "إرسال"}
                </button>
            </form>

            <br />
            <Footer widthFooter="100%" block_1={"col-sm-10 col-sm-10 col-md-8 col-lg-4 offset-lg-2 col-xl-4 offset-xl-1"} block_2={"col-sm-10 col-md-8 col-lg-4 col-xl-4"} blockChildStyle={{ width: "90%", margin: "auto" }} />
        </div>
    );
};

export default QuestionDetail;
