export default function InteractivCss(props){
    return(
    <div className="row reactive-css-exemple" dir="ltr">
      <div className="col-lg-12 code mb-3">
          <h3> {props.property} : <span className="text-warning">{props.value}</span> ; </h3>
      </div>
      <div className="option col-lg-6">
          {props.children}
      </div>
      <div className="col-lg-6 result">
            <div className={`bg-light w-100 class-parent ${props.classParent}`} >
              <div className={props.classChild} ref={props.resultRef}>
                   {props.textInResult} 
              </div>
            </div>
      </div>
  </div>
    )
} 