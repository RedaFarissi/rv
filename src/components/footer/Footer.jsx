import "./Footer.css";
import images from "../images";

export default function Footer(){
    return(
    <footer dir="rtl">
        <div id="footer-div1">
            <div id="img_logo">
                <div className="w-100 h-100 my-logo"> R </div> 
            </div>
            <div className="footer_p">
                <h4 className="h4"> <i class="fa-solid fa-bullseye fs-4 ms-2"></i> هدف الموقع</h4>
                تعلم  البرمجة  مجاني ومساعدة في تحسين البرمجة العربية مع التركيز على الأمتلة 
                و هو المكان المناسب لأي شخص يطمح بأن يصبح مبرمجاً محترفاً و مبدعاً في العالم الرقمي
            </div>
        </div>

        <div id="footer-div2">
            <div id="tabara3_lilmaw9i3">
                <h4 className="h4"> <i className="fa-solid fa-gift fs-4 ms-2"></i> تبرع للموقع </h4>
                في حال أردت تقديم دعم مادي لمطوري الموقع يمكنك التبرع مرة واحدة أو بشكل شهري بالمبلغ الذي تريده من خلال بايبال 
                <button> Paypal </button>
            </div>
            <div className="footer_p">
                <h4 className="h4"> <i className="fa-solid fa-share-nodes fs-4 ms-2"></i> تابعنا</h4>
                <div style={{display: "flex"}}>
                  <img src={images.css_logo} style={{width:"50px",height:"50px",borderRadius:"50%",marginLeft:"14px",filter:"grayscale(100%)"}} />
                  <samll>رضا السكوني مؤسس ومطور الموقع</samll>
                </div>
                <h4 className="h4"> <i className="fa-solid fa-paperclip  fs-4 ms-2"></i> حسابات الموقع الرسمية</h4>

                <div style={{marginTop:"20px"}}>
                    <img className="logo-connecte" src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>
                    <img className="logo-connecte" src="https://img.icons8.com/fluency/48/000000/facebook.png"/>
                    <img className="logo-connecte" src="https://img.icons8.com/color/48/000000/telegram-app--v1.png"/>
                </div>
            </div>
        </div>
    </footer>
    )
}