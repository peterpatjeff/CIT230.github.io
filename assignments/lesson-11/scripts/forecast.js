let forecastRequest = new XMLHttpRequest();
forecastRequest.open('Get', forecastUrl, true);
forecastRequest.send();
forecastRequest.onload = function() {
   let forecastData = JSON.parse(forecastRequest.responseText);
   var section = document.getElementById('dailyForecast'); 
   CreateFiveDayForecast(forecastData, section); 
}
/**
 * @param {Object} aForecastData 
 * @param {HTMLElement} aParentElement 
 */

function CreateFiveDayForecast(aForecastData, aParentElement) {
   var index = 0; 
   while (!aForecastData.list[index].dt_txt.includes("18:00:00")) index++; 
   for (var offset = 0; offset < 5; offset++) { 
      var day = (new Date(aForecastData.list[index].dt_txt).getDay()) % 7; 
      var article = CreateForecastElement(day, aForecastData.list[index].weather[0].icon, aForecastData.list[index].weather[0].description, Math.round(aForecastData.list[index].main.temp)); // Call function that will create Html parent article.
      aParentElement.appendChild(article); 
      index += 8; 
   }
}
/**
 * @param {Number} aDay 
 * @param {String} aIconId 
 * @param {String} aIconDescription 
 * @param {Number} aTemperature 
 * @returns {HTMLElement} 
 */
function CreateForecastElement(aDay, aIconId, aIconDescription, aTemperature) {

   var result = document.createElement('article'); 
   var header = document.createElement('h4'); 
   header.textContent = GetDayName(aDay); 
   result.appendChild(header); 
   var image = document.createElement('img');
   image.src = "http://openweathermap.org/img/w/" + aIconId + ".png";  
   image.alt = aIconDescription;
   result.appendChild(image);
   var paragraph = document.createElement('p');
   paragraph.textContent = aTemperature + "\u00B0 F";
   result.appendChild(paragraph);
   return result;
}
/**
 * @param {Number} aDay 
 * @returns {String} 
 */
function GetDayName(aDay) {
    var result = "MON"; 
    switch (aDay % 7) { 
        case 0: result = "Sun"; break;
        case 1: result = "Mon"; break;
        case 2: result = "Tue"; break;
        case 3: result = "Wed"; break;
        case 4: result = "Thu"; break;
        case 5: result = "Fri"; break;
        case 6: result = "Sat"; break;
    }
    return result;
}






