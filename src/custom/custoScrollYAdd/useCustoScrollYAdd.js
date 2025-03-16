const useCustoScrollYAdd = () => {
     
    setTimeout(() => {
        const scrollTop = window.scrollY - 140;
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }, 1000);
};

export default  useCustoScrollYAdd;