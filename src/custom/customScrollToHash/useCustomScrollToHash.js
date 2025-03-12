import { useEffect } from "react";


export default function useCustomScrollToHash(){
    
    useEffect(()=>{ 
        // Scroll to id when print url  direct in browser
        const hash = window.location.hash;   //get The id  
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' , block: 'start', inline: 'nearest' });
                setTimeout(() => {
                    const scrollTop = window.scrollY - 140;
                    window.scrollTo({
                        top: scrollTop ,
                        behavior: 'smooth'
                    });
                }, 1000);  
            }
        }
    },[]);
}