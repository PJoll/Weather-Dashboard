




function getParams() {
    var searchParamsArr = document.location.search.split("&");
    var query = searchParamsArr[0].split("=").pop()
    
    searchApi(query);
}