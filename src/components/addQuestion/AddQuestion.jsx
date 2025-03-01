import { Footer } from "../path";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddQuestion = (props) => {
    props.scrollY_to_0();
    const navigate = useNavigate();

    const [dataForm, setDataForm] = useState({   
        title: '',
        text: '',
        language: '',
    });

    const handleInputChange = (event) => {
        setDataForm({ ...dataForm, [event.target.name]:  event.target.value });
    };

    const handleCreatePost = async (event) => {
        event.preventDefault();
        const response = await axios.post(`${props.url}/question/create/`, dataForm ,
            {
                headers : { 
                    'Authorization': `Token ${localStorage.getItem('auth_token')}` ,
                    "Content-Type": "application/json"
                }
            }
        );
        
        if(response.data){
            setDataForm({title: '', text: '', language: '',})
            navigate("/all-question")
        }
    };


    return (
<div style={{marginTop: "200px"}} onClick={props.boxProfileStyle}>
    <h2 className="mb-4 text-end" style={{marginRight: "8%"}}> اطرح سؤالك </h2>
    <section style={{ marginRight: "8%" ,  marginLeft: "8%"}} >
        <div className="container mt-5">
            <div className=" shadow p-4">
                <form method="POST" onSubmit={handleCreatePost}>
                    <div className="mb-3 text-end">
                        <label for="title" className="form-label fs-5 f-family">عنوان :</label>
                        <input 
                            type="text" id="title" name="title" value={dataForm.title}  
                            onChange={handleInputChange} className="form-control" required
                        />
                    </div>

                    <div className="mb-3 text-end">
                        <label for="question" className="form-label fs-5 f-family">اشرح سؤالك بالتفصيل :</label>
                        <textarea id="text" name="text" className="form-control" value={dataForm.text}  style={{minHeight: "220px"}}
                            onChange={handleInputChange} required></textarea>
                    </div>

                    <div className="mb-3 text-end">
                        <label for="language" className="form-label fs-5 f-family">اللغات المستخدمة :</label>
                        <input 
                            type="text" id="language" name="language" className="form-control" 
                            placeholder="مثل html - javascript - php" value={dataForm.language}  
                            onChange={handleInputChange} required 
                        />
                    </div>

                    <button type="submit" className="btn btn-primary px-3">إرسال</button>
                </form>
            </div>
        </div>
    </section>
    <br /><br />
    <Footer 
          widthFooter="100%"
          block_1={"col-sm-10 col-sm-10 col-md-8 col-lg-4 offset-lg-2 col-xl-4 offset-xl-1"}
          block_2={"col-sm-10 col-md-8 col-lg-4 col-xl-4"}
          blockChildStyle={{width: "90%" , margin:"auto"}}
    />
</div>
    )
}
export default AddQuestion ;