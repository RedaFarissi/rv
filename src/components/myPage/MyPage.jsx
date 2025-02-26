import { useState, useEffect } from "react";
import "./MyPage.sass";
import { Footer } from "../path";
import { useNavigate } from "react-router-dom";

const MyPage = (props) => {
    props.scrollY_to_0();
  
    const navigate = useNavigate();
  
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
   
    
    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem("auth_token");
                if (!token) {
                  navigate("/login"); // Redirect if no token
                  return;
                }
             
                const response = await fetch("http://localhost:8000/api/user/", {
                    method: "GET",
                    headers: {
                        "Authorization": `Token ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch user info");
                }

                const data = await response.json();
                setUser(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [navigate]);

    if (loading) return <p style={{marginTop: "200px"}} > Loading user info...</p>;
    if (error) return <p style={{marginTop: "200px"}} >Error: {error}</p>;

    const handlePasswordChange = async (e) => {
      e.preventDefault();
  
      if (newPassword !== confirmPassword) {
        setMessage("كلمات المرور غير متطابقة!");
        return;
      }
  
      try {
        const response = await fetch("http://localhost:8000/rest-auth/password/change/", {
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
          setMessage("تم تغيير كلمة المرور بنجاح!");
          setOldPassword("");
          setNewPassword("");
          setConfirmPassword("");
        } else {
          const data = await response.json();
          setMessage(data.detail || "خطأ في تغيير كلمة المرور");
        }
      } catch (error) {
        setMessage("حدث خطأ أثناء تحديث كلمة المرور");
      }
    };
  
    return (
<>
    <section  className="container" style={{marginTop: "200px", textAlign: "right"}} onClick={props.boxProfileStyle}>
      <div className="my-page-parent">
        <div className="my-page-child row">
            <h2 className="font-bold mb-4 font-family-cursive col-sm-12">ملف تعريف المستخدم</h2>
            <strong className="col-sm-3">اسم المستخدم :</strong> 
            <div className="col-sm-8 fs-5"> {user.username}   </div>
            <strong className="col-sm-3">بريد إلكتروني :</strong> 
            <div  className="col-sm-8 fs-5">{user.email}</div>
        </div>
        <br />
        <hr />
        <br />
        <div className="my-page-child">
            <h2 className="font-bold mb-4 font-family-cursive">تغيير كلمة المرور</h2>
            <form onSubmit={handlePasswordChange} className="mt-2 row">
        
                  <strong className="col-sm-3 mt-3">  كلمة المرور الحالية : </strong>
                  <input
                    type="password"    value={oldPassword} 
                    onChange={(e) => setOldPassword(e.target.value)} className="block w-full p-2 border rounded mt-1 col-sm-7"
                    required
                  />
                  <strong className="col-sm-3 mt-3">كلمة المرور الجديدة :</strong> 
                  <input
                    type="password"    value={newPassword}   
                    onChange={(e) => setNewPassword(e.target.value)} className="block w-full p-2 border rounded mt-2 col-sm-7"
                    required
                  />
                  <strong className="col-sm-3 mt-3">تأكيد كلمة المرور الجديدة :</strong>
                  <input
                    type="password"    value={confirmPassword}   
                    onChange={(e) => setConfirmPassword(e.target.value)}  className="block w-full p-2 border rounded mt-2 col-sm-7"
                    required
                  />
                  <div className="col-sm-3 mt-3">  </div>
                  <button type="submit" className="btn btn-outline-success mt-2 col-sm-7" >  تحديث كلمة المرور  </button>
            </form>
            <div className="text-center mt-4">
                {message && <p className="mt-2 text-red-500">{message}</p>}
            </div>
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
</>
    );
};

export default MyPage;