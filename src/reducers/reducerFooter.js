const initialFooter = {
    width: "", 
    block_1: "", 
    block_2: ""
};
  

// handle Resize Footer With Aside
const reducerFooter = (state = initialFooter, action) => {
    if(window.innerWidth > 1140){
        return {
            width: "calc( 100% - 265px )",
            block_1: "col-sm-11 col-sm-11 col-md-9 col-lg-5 offset-lg-1 col-xl-5 offset-xl-1" ,
            block_2: "col-sm-11 col-md-9 col-lg-5 col-xl-5"
        };
    }else{
        return {
            width: "100%",
            block_1: "col-sm-10 col-sm-10 col-md-8 col-lg-4 offset-lg-2 col-xl-4 offset-xl-1" ,
            block_2: "col-sm-10 col-md-8 col-lg-4 col-xl-4"
        };
    }
};
  
export default reducerFooter;