import { useState, useEffect } from "react";
import "./MyPage.sass";
import { Footer } from "../path";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const MyPage = (props) => {
    props.scrollY_to_0();
  
    const navigate = useNavigate();
  
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [yourQuestions, setYourQuestions] = useState([]);

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
   
    
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
      
      
    
    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem("auth_token");
                if (!token) {
                  navigate("/login"); 
                  return;
                }
                const response = await fetch(`${props.url}/api/user/`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Token ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                if (!response.ok)  throw new Error("Failed to fetch user info");
                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();


        async function fetchMyQuestions() {
          try {
              const response = await axios.get(`${props.url}/question/my-questions/`, {
                  headers: {
                      "Content-Type": "application/json",
                      Authorization: `Token ${localStorage.getItem("auth_token")}`,
                  },
              });
  
              setYourQuestions(response.data);
          } catch (err) {
              setError("Failed to load your questions.");
          } 
        }
        fetchMyQuestions();
    }, [navigate]);

    if (loading) return <div className="container" style={{marginTop: "270px"}} > تحميل معلومات المستخدم ...</div>;
    if (error) return <div className="container" style={{marginTop: "270px"}} >خطأ : {error}</div>;

    const handlePasswordChange = async (e) => {
        e.preventDefault();  
        if (newPassword !== confirmPassword) 
            setMessage("كلمات المرور غير متطابقة!")
        try {
            const response = await fetch(`${props.url}/rest-auth/password/change/`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Token ${localStorage.getItem("auth_token")}`,
                },
                body: JSON.stringify({
                  old_password: oldPassword,
                  new_password1: newPassword,
                  new_password2: confirmPassword,
                }),
            });
            if (response.ok) {
                setMessage(<span className='text-success fs-5'>تم تغيير كلمة المرور بنجاح!</span>);
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
            } else {
                const data = await response.json();
                setMessage(data.detail || <span className='text-danger fs-5'>خطأ في تغيير كلمة المرور</span>);
            }
        } catch (error) {
            setMessage(<span className='text-danger fs-5'>حدث خطأ أثناء تحديث كلمة المرور</span>);
        }
    };
    
    const   myQuestions = yourQuestions.map(e=>
            <Link to={`/question/${e.id}`} style={{ color: "white", textDecoration: "none" }}>
                <section  className="container text-end d-flex justify-content-between align-items-center"> 
                    <div>{e.title} </div>
                    <small dir="ltr">{getFormattedDate(e.created_at)}</small>
                </section> 
            </Link>
            )
    console.log(yourQuestions)
    return (
<div onClick={props.boxProfileStyle}>
    <h4 className="font-bold f-family col-sm-12" style={{marginTop: "200px", marginRight: "9%"}}>ملف تعريف المستخدم</h4>
    <section  className="container text-end">
        <div className="my-page-child row" style={{width: "90%" , margin: "auto"}}>
            <i className="fa-solid fa-address-card col-sm-3 me-4" style={{fontSize:"120px"}}></i>
            <div  className="col-sm-3">
                <strong className="fs-4 me-4"> {user.username} </strong> 
            </div>
        </div>
    </section>

    <br />
    
    <h4 className="font-bold mb-4 f-family" style={{marginRight: "9%"}}>تغيير كلمة المرور</h4>
    <section  className="container text-end">
        <div className="my-page-parent" style={{width: "90%" , margin: "auto"}}>
            <div className="my-page-child">
            <form onSubmit={handlePasswordChange} className="mt-2 row">
        
                  <strong className="col-sm-3 mt-3">  كلمة المرور الحالية : </strong>
                  <input
                      type="password"    value={oldPassword} 
                      onChange={(e) => setOldPassword(e.target.value)} className="block w-full p-2 border rounded mt-1 col-sm-5"
                      required
                  />
                  <div className="col-sm-3 mt-3">  </div>

                  <strong className="col-sm-3 mt-3">كلمة المرور الجديدة :</strong> 
                  <input
                      type="password"    value={newPassword}   
                      onChange={(e) => setNewPassword(e.target.value)} className="block w-full p-2 border rounded mt-2 col-sm-5"
                      required
                  />
                  <div className="col-sm-3 mt-3">  </div>

                  <strong className="col-sm-3 mt-3">تأكيد كلمة المرور الجديدة :</strong>
                  <input
                      type="password"    value={confirmPassword}   
                      onChange={(e) => setConfirmPassword(e.target.value)}  className="block w-full p-2 border rounded mt-2 col-sm-5"
                      required
                  />
                  <div className="col-sm-3 mt-3">  </div>
                  <div className="col-sm-3 mt-3">  </div>
                  <button type="submit" className="btn btn-outline-success mt-2 col-sm-5" >  تحديث كلمة المرور  </button>
            </form>
            <div className="text-center mt-4">
                {message && <p className="mt-2 text-red-500">{message}</p>}
            </div>
        </div>
      </div>
    </section>

    <br /><br />
    
    <h4 className="font-bold mb-4 f-family" style={{marginRight: "9%"}}> أسئلتك </h4>
    {myQuestions.reverse()}
     
    <br /><br />
    <Footer 
          widthFooter="100%"
          block_1={"col-sm-10 col-sm-10 col-md-8 col-lg-4 offset-lg-2 col-xl-4 offset-xl-1"}
          block_2={"col-sm-10 col-md-8 col-lg-4 col-xl-4"}
          blockChildStyle={{width: "90%" , margin:"auto"}}
    />
</div>
    );
};

export default MyPage;