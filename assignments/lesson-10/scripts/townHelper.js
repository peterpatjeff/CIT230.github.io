/**
 * @param {Object} jsonObj 
 */
function ShowTownInfo(jsonObj, aDomSection) {
    var towns = jsonObj['towns'];
    var urls = { 'Preston': 'images/preston.jpg', 'Soda Springs': 'images/sodaSprings.jpg', 'Fish Haven': 'images/fishHaven.jpg'};
    for (var index = 0; index < towns.length; index++) {
     if (towns[index].name == "Preston" || towns[index].name == "Soda Springs" || towns[index].name == "Fish Haven") {
        var article = document.createElement('article'); 
        var article = CreateTownInfoElement(towns[index], urls[towns[index].name]);
            aDomSection.appendChild(article);
        }
    }
}
/**
 * @param {String} aTown 
 * @param {String} aImageUrl 
 */
function CreateTownInfoElement(aTown, aImageUrl) {
   var result = document.createElement('article');
    var header = document.createElement('h2');
   header.textContent = aTown.name;
   result.appendChild(header);
    var p1 = document.createElement('p');
   p1.textContent = aTown.motto;
   result.appendChild(p1);
    var p2 = document.createElement('p');
   p2.textContent = 'Year Founded: ' + aTown.yearFounded;
   result.appendChild(p2);
    var p3 = document.createElement('p');
   p3.textContent = 'Population: ' + aTown.currentPopulation;
   result.appendChild(p3);
    var p4 = document.createElement('p');
   p4.textContent = 'Annual Rain Fall:' + aTown.averageRainfall;
   result.appendChild(p4);
    var image = document.createElement('img');
   image.src = aImageUrl; 
   result.appendChild(image);
    return result;
}
/**
 * @param {Object} aTownInformation 
 * @param {String} aTownName 
 * @param {HTMLElement} aDomSection 
 */
function ShowTownEvents(aTownInformation, aTownName, aDomSection) {
    var townList = aTownInformation['towns']; 
    for (var townIndex = 0; townIndex < townList.length; townIndex++) { 
    if (townList[townIndex].name == aTownName) { 
    for (var eventIndex = 0; eventIndex < townList[townIndex].events.length; eventIndex++) { 
                var eventP = document.createElement('p'); 
                eventP.textContent = townList[townIndex].events[eventIndex]; 
                aDomSection.appendChild(eventP); 
            }
        }
    }
}
        