import PowerShell_logo from "../../assests/images/logo/PowerShell_logo.png";

export default function CodePowerShell(props){
    return(
        <div className="text-light" dir="ltr" style={{backgroundColor: "#012456"}}>
            <h6 class="bg-light text-dark mb-3"> <img src={PowerShell_logo} alt="PowerShell_logo" className="ms-1 mb-1" style={{ width : "20px"}} /> Windows PowerShell</h6>
            {props.children}
        </div>
    )
}