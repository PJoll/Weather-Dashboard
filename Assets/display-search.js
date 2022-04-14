var userFormE1 = $("#user-form");
var nameInputE1 = $("#City");
var cityContainerE1 = $("#city-container");

var formSubmitHandler = function(event) {
    event.preventDefault();
var cityName = nameInputE1.value.trim();

if (cityName) {
    getUserRepos(cityName);

    cityContainerE1.textContent = "";
    nameInputE1.value = '';
} else{
    alert('Please enter a valid city');
}
};

var getUserRepos = function (user) {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=5552ed791afd8968c2385d0dab7c508d' + user + '/cities';
    fetch(apiUrl)
    .then(function (response){
        if (response.ok) {
            response.json().then(function (data){
                displayRepos(data, user);
            });
        }else {
            alert('Error' + response.statusText);
        }
    })
    .catch(function (error){
        alert('unable to connect to WeatherApi')
    });

};