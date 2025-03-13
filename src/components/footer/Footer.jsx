
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Footer.sass";
import images from "../images";

export default function Footer(props) {
    const dispatch = useDispatch();
    const { width, block_1, block_2 } = useSelector(state => state.footer); // Ensure "footer" matches the key in the store

    const handleResizeFooterWithAside = () => {
            const asideElement = document.querySelector('aside'); // Check if the aside element exists
    
            if (asideElement) {
                // If aside exists, adjust footer width and classes based on window width
                if (window.innerWidth > 1140) {
                    dispatch({
                        type: 'UPDATE_FOOTER_WIDTH',
                        payload: {
                            width: "calc(100% - 265px)",
                            block_1: "col-sm-11 col-sm-11 col-md-9 col-lg-5 offset-lg-1 col-xl-5 offset-xl-1",
                            block_2: "col-sm-11 col-md-9 col-lg-5 col-xl-5"
                        }
                    });
                } else {
                    dispatch({
                        type: 'UPDATE_FOOTER_WIDTH',
                        payload: {
                            width: "100%",
                            block_1: "col-sm-10 col-sm-10 col-md-8 col-lg-4 offset-lg-2 col-xl-4 offset-xl-1",
                            block_2: "col-sm-10 col-md-8 col-lg-4 col-xl-4"
                        }
                    });
                }
            } else {
                // If aside does not exist, set footer width to 100% and adjust classes
                dispatch({
                    type: 'UPDATE_FOOTER_WIDTH',
                    payload: {
                        width: "100%",
                        block_1: "col-sm-10 col-sm-10 col-md-8 col-lg-4 offset-lg-2 col-xl-4 offset-xl-1",
                        block_2: "col-sm-10 col-md-8 col-lg-4 col-xl-4"
                    }
                });
            }
        };

    
    useEffect(() => {
        handleResizeFooterWithAside(); // Set initial width
        window.addEventListener('resize', handleResizeFooterWithAside);

        return () => {
            window.removeEventListener('resize', handleResizeFooterWithAside);
        };
    }, [dispatch]);


    return (
        <div 
            className="row d-flex align-items-center justify-content-center py-5 m-0"
            style={{ width: width, backgroundColor: "#121926" }}
        >
            <div className={`${block_1}`}>
                <div style={props.blockChildStyle}>
                    <div className="img-logo-box">
                        <div className="my-logo"> R </div> 
                    </div>
                    <div className="mt-4">
                        <h4 className="footer-h4"> <i className="fa-solid fa-bullseye fs-4 ms-2"></i> هدف الموقع</h4>
                        <p>
                            تم إنشاء هذا الموقع لتعلم البرمجة المجاني و للمراجعة وتذكر الكود الخاص بك بسهولة و سرعة
                        </p>
                    </div>
                </div>
            </div>

            <div className={`${block_2}`}>
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
                            <small> رضا السكوني مؤسس ومطور الموقع </small>
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
    );
}