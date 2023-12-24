import "./Result.sass"


export default function ResultConfirm(props){
    
    return(
        <div className={`style-result`}>
            <div className="style-result-header">
              <div className="style-result-header-1">
                    <div className="style-result-header-1-left">
                        <div className="result-header-1-tab"> 
                            <div>
                                <div className="style-handle"></div>
                                <div className="div-img-box">
                                    {(props.logo)?(<img src={props.logo} alt="logo" />):(<i className="fa-solid fa-earth-americas text-light"></i>)}      
                                </div>
                                <p>
                                    {props.title}
                                </p>
                            </div>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className="style-result-header-1-right">
                        <i class="fa-solid fa-minus me-5"></i>
                        <i className="fa-regular fa-square me-5"></i>
                        <i className="fa-solid fa-xmark me-3"></i>
                    </div>
              </div>
              <div className="style-result-header-2">
                    <div className="style-result-header-2-left">
                        <i className="fa-solid fa-arrow-left"></i>
                        <i className="fa-solid fa-arrow-right"></i>
                        <i className="fa-solid fa-rotate-right"></i>
                        <i className="fa-solid fa-house"></i>
                    </div>
                    <div className="style-result-header-2-center">
                        <i className="fa-solid fa-globe"></i>
                        <p>{props.route}<span className="text-primary">{props.url_change}</span></p>
                    </div>
                    <div className="style-result-header-2-right">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
              </div>
            </div>
            <div className={`add-style-body  ${props.styleAdd}`}>
                <div dir="ltr" className={`alert window-confirm bg-secondary text-light ${(props.displayConfirm)?"d-block":"d-none"}`}>
                    <h6 className="text-center">This page says </h6>
                    <p className="text-center">{props.confirmValue}</p>
                    <div className="d-flex flex-row-reverse gap-1">
                        <button onClick={props.clickCancel} className="btn btn-primary me-2">cancel</button>
                        <button onClick={props.clickOk} className="btn btn-primary">OK</button>
                    </div>
                </div>
                {props.children}
            </div>
        </div>
    )
}