/***************************  Aside animation and event click ***************************/

function myStartFunctionOpen() { this.style.width = "0px"; }
function MyAnimationiterationOpen(){ this.style.width = "276px"; }


function useCustomClickMenuHeader(event , clickFromMenu ){
    event.stopPropagation();
    const asides = document.querySelectorAll('.aside');
    asides.forEach( aside => {
        if( aside.style.display !== 'block' && clickFromMenu === true  )  {
            aside.style.display = "block"
            aside.style.animation  = "moveAsideOpen 1s forwards";
            aside.addEventListener("animationstart", myStartFunctionOpen);
            aside.addEventListener("animationiteration", MyAnimationiterationOpen);
        }else{
            if( window.innerWidth <= 1140 )  aside.style.display = "none"
        }
    });
}

export default useCustomClickMenuHeader;