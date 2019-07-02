var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var eventSection = document.getElementById('events'); 
    var townInformation = request.response; 
    ShowTownEvents(townInformation, "Preston", eventSection); 
}