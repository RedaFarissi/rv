import { useEffect } from "react";

export default function useCustomResizeAside(){
    
    function myStartFunctionOpen() { this.style.width = "0px" }
    function MyAnimationiterationOpen(){ this.style.width = "276px"; }

    useEffect(() => {
    
        // handle Resize
        const handleResize = () => {
            const asides = document.querySelectorAll('.aside');
            if(window.innerWidth > 1140){
                asides.forEach( (aside)=>{
                    aside.style.display = "block"
                    aside.style.animation  = "moveAsideOpen 1s forwards";
                    aside.addEventListener("animationstart", myStartFunctionOpen);
                    aside.addEventListener("animationiteration", MyAnimationiterationOpen);
                });
            }else{
                asides.forEach( (aside)=>{
                    aside.style.display = "none";    
                });
            }
        };
        
        window.addEventListener('resize', handleResize);
    }, []);

}