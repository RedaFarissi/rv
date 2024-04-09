import "./Login.css";
import Footer from "../footer/Footer";


export default function Login(){
    return(
<>
<section className="login-section">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
		<div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
		  	<form>
      	  	    <div className="form-outline mb-4">
      	  	      	<input type="email" id="form1Example13" className="form-control form-control-lg" dir='ltr' />
      	  	      	<label className="form-label" for="form1Example13">بريد إلكتروني</label>
      	  	    </div>
      	  	    <div className="form-outline mb-4">
      	  	      	<input type="password" id="form1Example23" className="form-control form-control-lg" dir='ltr' />
      	  	      	<label className="form-label" for="form1Example23">كلمة المرور</label>
      	  	    </div>
      	  	    <div className="d-flex justify-content-around align-items-center mb-4">
      	  	      	<div className="form-check">
      	  	      	  	<input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
      	  	      	  	<label className="form-check-label" for="form1Example3"> تذكرني </label>
      	  	      	</div>
      	  	      	<a href="#!">هل نسيت كلمة السر؟</a>
      	  	    </div>
      	  	    <button type="submit" className="btn btn-lg btn-block w-100 text-light"  style={{backgroundColor:"#19243e"}}>
						تسجيل الدخول
					</button>
      	  	    <div className="divider d-flex align-items-center my-4">
      	  	      	<p className="text-center fw-bold mx-3 mb-0 text-muted">أو</p>
      	  	    </div>
      	  	    <a className="btn btn-primary btn-lg btn-block w-100" style={{backgroundColor: "#3b5998"}} href="#!" role="button">
      	  	      	<i className="fab fa-facebook-f me-2"></i> تواصل مع الفيسبوك
      	  	    </a>
      	  	</form>
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