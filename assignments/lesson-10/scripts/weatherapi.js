let weatherRequest = new XMLHttpRequest();
weatherRequest.open('Get', weatherUrl, true);
weatherRequest.send();
/**
 * @param {Number} aTemperature 
 * @param {Number} aSpeed 
 */
function ConvertWindChill(aTemperature, aSpeed) {
    var temp = Math.pow(aSpeed, 0.16); 
    var result = 35.74 + 0.6215 * aTemperature - 35.75 * temp + 0.4275 * aTemperature * temp; 
    return Math.round(result * 100) / 100;
}
weatherRequest.onload = function() {
let weatherData = JSON.parse(weatherRequest.responseText);

document.getElementById('highTemp').innerHTML = weatherData.main.temp_max; 
document.getElementById('current').innerHTML = weatherData.weather[0].description; 
document.getElementById('speed').innerHTML = weatherData.wind.speed; 
document.getElementById('humidity').innerHTML = weatherData.main.humidity; 
document.getElementById('windChill').innerHTML = ConvertWindChill(weatherData.main.temp, weatherData.wind.speed); }