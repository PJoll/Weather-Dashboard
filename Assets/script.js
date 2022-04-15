const Apikey = "";

const textInput = document.querySelector("#input-city");
const button = document.querySelector("#input-search");
const inputWrap = document.querySelector(".inputs");
const loading = document.querySelector("#loading");
const error =  document.querySelector("#error");
const result = document.querySelector("#result")

const getLatLng = async ( city ) => {
    const result = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${ city }&limit=1&appid=${ApiKey}` )
        if (result.lenght) {
            return{
            success: true,
            lat: result [ 0 ]?.lat,
            lng: result [ 0 ]?.lon, 
            }
        } else {
            return{
                success: false,
            }
        }
}
const getWeather = async ( lat, lng ) => {
    const result = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${ ApiKey }` )
return result?.weather?.main || "Not Found"     
}

button.addEventListener( "click", async (e) => {
    e.preventDefault()
    inputWrap.style.display = "none"
    error.style.display = "none"
    loading.style.diplay = "block"

    const city = textInput.value

    const coords = await getLatLng(city)
    if (!coords.success ||
        coords.lat === false ||
        !coords.lng === false
        ){
            error.style.diplay = "block"
            loading.style.diplay = "none"
            return
        }
} )



// 




// function handlerSearchFormSubmit(event) {
//     event.preventDefault();


// var searchInputVal = $("#City").value;

// if (!searchInputVal) {
//    alert("Please type a City");
// }

// var queryString = "./search-results.html?q=" + searchInputVal;

// location.assign(queryString);
// }

// searchFormE1.addEventListener("submit", handlerSearchFormSubmit)