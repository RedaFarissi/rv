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
    <ResultAlert title='React App' logo={props.images} clickOk={clickOk} displayAlert={resultAlertDisplayAlert} alertValue={"take Shoot function"} route="localhost:3000">
        <button onClick={addAlert}>Shoot!</button>
    </ResultAlert>
    )
}

export default EventExemple;