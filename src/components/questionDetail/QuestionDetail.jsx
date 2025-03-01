import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const QuestionDetail = (props) => {
    props.scrollY_to_0();
    
    const { id } = useParams(); // Get question ID from URL
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      
        async function fetchQuestion() {
            try {
                const response = await axios.get(`${props.url}/question/${id}/`, { // Use id instead of props.id
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Token ${localStorage.getItem("auth_token")}`,
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
    }, [id,props.url]); // Depend on `id`, not `props.id`

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
    <div onClick={props.boxProfileStyle}>
        <section style={{ marginTop: "200px" }} className="container text-end">
                <h2>{question?.title}</h2>
                <p>{question?.text}</p><br />
                <small>أرسلت بواسطة : {question?.author || "Anonymous"}</small>
        </section>
    </div>
    );
};

export default QuestionDetail;
