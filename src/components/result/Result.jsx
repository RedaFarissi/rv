import "./Result.sass"


export default function Result(props){
    return(
        <div className="style-result">
            <div className="style-result-header">
              <div className="style-result-header-1">
                    <div className="style-result-header-1-left">
                        <div className="result-header-1-tab"> 
                            <div>
                                <div className="div-img-box">
                                    {(props.logo)?(<img src={props.logo} alt="logo" />):(<span className="text-light" style={{fontSize:"10px"}}>Life</span>)}      
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
                        <p>{props.route}</p>
                    </div>
                    <div className="style-result-header-2-right">
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </div>
              </div>
            </div>
            <div className="p-2">
                {props.children}
            </div>
        </div>
    )
}