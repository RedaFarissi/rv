import { ResultAlert } from "../../path"
import { useState } from "react";

function EventExemple(props){
    const [resultAlertDisplayAlert ,setResultAlertDisplayAlert] = useState(false)
    function clickOk(){
        setResultAlertDisplayAlert(false)
    }
    function addAlert(){
        if(resultAlertDisplayAlert === false){
            setResultAlertDisplayAlert(true)
        }
    }
    return (
    <ResultAlert title='Output' logo={props.images} clickOk={clickOk} displayAlert={resultAlertDisplayAlert} alertValue={"take Shoot function"} route="file:///C:/Users/SURFACE%20BOOK/Desktop/html/index.html">
        <button onClick={addAlert}>Shoot!</button>
    </ResultAlert>
    )
}

export default EventExemple;