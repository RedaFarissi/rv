import { useState, useEffect } from "react";
import "./MyPage.sass";


const MyPage = (props) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    //const [user, setUser] = useState(null);
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem("auth_token");  // Ensure token is stored
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
    }, []);
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
    <section  className="container" style={{marginTop: "200px", textAlign: "right"}} onClick={props.boxProfileStyle}>
        <div>
            <h2 className="font-bold mb-4">ملف تعريف المستخدم</h2>
            <strong>اسم المستخدم :</strong> {user.username}
            <strong>بريد إلكتروني :</strong> {user.email}
        </div>
        <br />
        <br />
        <div>
            <h2 className="font-bold mb-4">تغيير كلمة المرور</h2>
            <form onSubmit={handlePasswordChange} className="mt-2">
                  <strong>  كلمة المرور الحالية : </strong><input
                    type="password"    value={oldPassword} 
                    onChange={(e) => setOldPassword(e.target.value)} className="block w-full p-2 border rounded mt-1 w-my-page-field"
                    required
                  /><br />
                  <strong>كلمة المرور الجديدة :</strong>
                  <input
                    type="password"    value={newPassword}   
                    onChange={(e) => setNewPassword(e.target.value)} className="block w-full p-2 border rounded mt-2 w-my-page-field"
                    required
                  /><br />
                  <strong>تأكيد كلمة المرور الجديدة :</strong>
                  <input
                    type="password"    value={confirmPassword}   
                    onChange={(e) => setConfirmPassword(e.target.value)}  className="block w-full p-2 border rounded mt-2 w-my-page-field"  
                    required
                  /><br />
                  <button type="submit" className="p-2 rounded mt-2 w-my-page-field">  تحديث كلمة المرور  </button>
            </form>
            {message && <p className="mt-2 text-red-500">{message}</p>}
        </div>
    </section>
    );
};

export default MyPage;