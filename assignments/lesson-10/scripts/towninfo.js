var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var townSection = document.getElementById('localTowns');
    var townInformation = request.response; 
    ShowTownInfo(townInformation, townSection); 
}