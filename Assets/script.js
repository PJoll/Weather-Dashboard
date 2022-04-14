var searchFormE1 = $("#search-form");

function handlerSearchFormSubmit(event) {
    event.preventDefault();


var searchInputVal = $("#City").value;

if (!searchInputVal) {
   alert("Please type a City");
}

var queryString = "./search-results.html?q=" + searchInputVal;

location.assign(queryString);
}

searchFormE1.addEventListener("submit", handlerSearchFormSubmit)