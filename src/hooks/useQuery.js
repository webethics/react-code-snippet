
function useQueryParam(location) {  
    let urlSearchParams = new URLSearchParams(location.search);
    const Urlparams = Object.fromEntries(urlSearchParams.entries());
    return Urlparams;
}


export default useQueryParam;

  // import useLocation() hook then passs into it other comp like const params = useQueryParam(useLocation());

  