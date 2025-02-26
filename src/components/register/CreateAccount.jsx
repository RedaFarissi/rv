import { useState } from "react"
import axios from 'axios';
import Footer from "../footer/Footer";

export default function CreateAccount(props){
    props.scrollY_to_0();
  
    const [formData, setFormData] = useState({
        username:"",
        email:"", 
        password1:"" ,
        password2:""
    })
    
    const hundleSubmit = async (event)=> {
        event.preventDefault()
        try{
          const request = await axios.post(`${props.url}/rest-auth/registration/`, formData);
          alert(request.data);
        }catch(err){
            alert(err);
        }
    }

    const changeValue = (event) => {
        setFormData({...formData , [event.target.name]: event.target.value})
    }
    
    return(
    <>
        <section onClick={props.boxProfileStyle} className="container" style={{ marginTop: "190px" , marginBottom: "60px" }}>
            <form  method="POST" onSubmit={hundleSubmit}>
                <div>
                    <label htmlFor="username">اسم المستخدم</label>
                    <input type="text" name="username" value={formData.username} 
                        onChange={changeValue} id="user_name" className="form-control mt-2"
                    />
                </div>
                <div className="mt-2">
                    <label htmlFor="email">بريد إلكتروني</label>
                    <input type="email" name="email" value={formData.email} 
                        onChange={changeValue} id="email" className="form-control mt-2"
                    />
                </div>
                <div className="mt-2">
                    <label htmlFor="password1">كلمة المرور</label>
                    <input type="password" name="password1" value={formData.password1} 
                        onChange={changeValue}  id="password1" className="form-control mt-2"
                    />
                </div>
                <div className="mt-2">
                    <label htmlFor="password2">تأكيد كلمة المرور</label>
                    <input type="password" name="password2" value={formData.password2} 
                        onChange={changeValue}  id="password2" className="form-control mt-2"
                    />
                </div>
                <input type="submit" value="إنشاء حساب" className="btn mt-4 text-white btn-block btn-primary"/>
            </form>
        </section>
        <Footer 
            widthFooter="100%"
            block_1={"col-sm-10 col-sm-10 col-md-8 col-lg-4 offset-lg-2 col-xl-4 offset-xl-1"}
            block_2={"col-sm-10 col-md-8 col-lg-4 col-xl-4"}
            blockChildStyle={{width: "90%" , margin:"auto"}}
        />
    </>
    )
}