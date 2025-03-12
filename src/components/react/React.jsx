import { Footer} from "./pathExemple";
import { useEffect } from "react";
import { Introduction , Component , Events , Lists , HandleImagesReact , Import, PropsChildren , Hooks , Packages ,Redux ,} from "./pathReact";

function React(props){  
    
    
    
    const matrix = props.react_matrix.map(e =>{ 
      var keys_map;  
      if ( Array.isArray(e) ) { 
         keys_map = e.map((key,index) => {
            if(index === 0){
                  return(<dt className="aside-dl-dt" key={key}>
                        <a href={`/react#${key.replace(/_/g, '-')}`} onClick={ props.scrollYAdd }>
                           <i className="fa-solid fa-caret-right me-1"></i> {key.replace(/_/g, ' ')}
                        </a>
                     </dt>);
            }else{
                return(<dd className="aside-dl-dd" key={key}>
                         <a href={`/react#${key}`} onClick={ props.scrollYAdd }>
                           <i className="fa-solid fa-circle"></i> {key.replace(/_/g, ' ')}
                         </a>
                      </dd>);
            } 
          });
      }else {
         keys_map = <dt className="aside-dl-simple" key={e}>
                          <a href={`/react#${e.replace(/_/g, '-')}`} onClick={ props.scrollYAdd }>
                              <i className="fa-solid fa-caret-right me-1"></i> {e.replace(/_/g, ' ')} 
                          </a>
                    </dt>;
      }
      return keys_map
    });
    
    
    // Scroll to the element with the hash on page load or when the hash changes
    useEffect(() => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1)); // Remove the '#' from the hash
        if (element) {
          const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 140;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
      }
    }, [window.location.hash]); // Run the effect when the hash changes


  return(
<>
<main onClick={ (event)=>{ props.clickMenuHeader(event, false);  props.closeSearchPhone(); props.boxProfileStyle();} }>
  <aside  className="aside">
      <dl className="list-group m-0">
          {matrix}
      </dl>
  </aside>
  <section className="section-conetent">
    <h1 className="heading-style"> REACT JS </h1>
    <Introduction />
    <Component />
    <Events />
    <Lists />
    <HandleImagesReact />
    <Import />
    <PropsChildren />
    <Hooks />
    <Packages />
    <Redux />
  </section>

</main>
<Footer 
    widthFooter={props.footerWidth.width}
    block_1={props.footerWidth.block_1}
    block_2={props.footerWidth.block_2}
    blockChildStyle={{width: "100%"}}
/>
</>
  )
}


export default React;