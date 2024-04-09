import "./Footer.sass";
import images from "../images";

export default function Footer(props){
    return(
        <div 
            className="row d-flex align-items-center justify-content-center py-5 m-0"
            style={{width: props.widthFooter, backgroundColor: "#121926"}}
        >
	    	<div className={`${props.block_1}`}>
                <div style={props.blockChildStyle}>
                    <div className="img-logo-box">
                        <div className="my-logo"> R </div> 
                    </div>
                    <div className="mt-4">
                        <h4 className="footer-h4"> <i class="fa-solid fa-bullseye fs-4 ms-2"></i> هدف الموقع</h4>
                        <p>
                            تعلم  البرمجة  مجاني ومساعدة في تحسين البرمجة العربية مع التركيز على الأمتلة 
                            و هو المكان المناسب لأي شخص يطمح بأن يصبح مبرمجاً محترفاً و مبدعاً في العالم الرقمي
                        </p>
                    </div>
                </div>
          	</div>

	      	<div className={`${props.block_2 }`}>
                <div style={props.blockChildStyle}>
                    <div id="Paypal-me">
                        <h4 className="footer-h4"> <i className="fa-solid fa-gift fs-4 ms-2"></i> تبرع للموقع </h4>
                        <p>
                            في حال أردت تقديم دعم مادي لمطوري الموقع يمكنك التبرع مرة واحدة أو بشكل شهري بالمبلغ الذي تريده من خلال بايبال 
                        </p>
                        <button> Paypal </button>
                    </div>
                    <div className="mt-4">
                        <h4 className="footer-h4"> <i className="fa-solid fa-share-nodes fs-4 ms-2"></i> تابعنا </h4>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <img src={images.css_logo} alt="me" style={{width:"50px",height:"50px",borderRadius:"50%",marginLeft:"14px",filter:"grayscale(100%)"}} />
                            <samll> رضا السكوني مؤسس ومطور الموقع </samll>
                        </div>
                        <h4 className="footer-h4"> <i className="fa-solid fa-paperclip  fs-4 ms-2"></i> حسابات الموقع الرسمية</h4>
                    </div>
                    <div className="mt-4">
                        <div style={{marginTop:"20px"}}>
                            <img className="logo-connecte" alt="instagram" src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
                            <img className="logo-connecte" alt="facebook" src="https://img.icons8.com/fluency/48/000000/facebook.png"/>
                            <img className="logo-connecte" alt="telegram" src="https://img.icons8.com/color/48/000000/telegram-app--v1.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}