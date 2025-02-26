import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./Login.css";
import Footer from "../footer/Footer";

export default function Login(props){
	props.scrollY_to_0();
  
	const [login , setLogin] = useState({ username:"" , password:"" });
	const navigate = useNavigate();
	
	const handleLogin =(e)=>{
	  setLogin({...login , [e.target.name]: e.target.value});
	}
	
	const handleSubmit = async (event) => {
		event.preventDefault();
		try{
			const response = await axios.post(`${props.url}/rest-auth/login/`, login);
			console.log(response.data.key)
			localStorage.setItem('auth_token', response.data.key );
			setLogin({ username:"" , password:"" });
			navigate('/');
		}catch(err){
			alert(err);
		}
	}

    return(
<>
<section className="login-section" onClick={props.boxProfileStyle}>
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
		<div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
		  	<form method="POST" onSubmit={handleSubmit}>
      	  	    <div className="form-outline mb-4">
      	  	      	<input type="text" name="username" onChange={handleLogin}  id="form1Example13" className="form-control form-control-lg" dir='ltr' />
      	  	      	<label className="form-label" for="form1Example13">اسم المستخدم</label>
      	  	    </div>
      	  	    <div className="form-outline mb-4">
      	  	      	<input type="password" name="password" onChange={handleLogin} id="form1Example23" className="form-control form-control-lg" dir='ltr' />
      	  	      	<label className="form-label" for="form1Example23">كلمة المرور</label>
      	  	    </div>
      	  	    <div className="d-flex justify-content-around align-items-center mb-4">
      	  	      	<div className="form-check">
      	  	      	  	<input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
      	  	      	  	<label className="form-check-label" for="form1Example3"> تذكرني </label>
      	  	      	</div>
      	  	      	<a  style={{backgroundColor: "#171c2c", color: "blue"}} href="#">هل نسيت كلمة السر؟</a>
      	  	    </div>
      	  	    <button type="submit" className="btn btn-lg btn-block w-100 text-light"  style={{backgroundColor:"#19243e"}}>
						تسجيل الدخول
				</button>
      	  	</form>
			<div className='mt-4'>
				<Link style={{backgroundColor: "#171c2c", color: "blue" , fontSize: "20px"}} to='/register'> قم بإنشاء حساب جديد </Link>
	      	</div>
      	</div>
	  	<div className="col-md-8 col-lg-7 col-xl-6 my-5">
      	  	<img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
      	    className="img-fluid" alt="Phone icon" />
      	</div>
    </div>
  </div>
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