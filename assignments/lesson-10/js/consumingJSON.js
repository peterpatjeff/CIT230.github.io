var section = document.querySelector('section');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open( 'GET', requestURL );
request.responseType = 'json';
request.send();
request.onload = function() {
  var townData = request.response;
  console.log( townData );
  showTownData( townData );
}

function showTownData( townData ) {
    var towns = townData['towns']
    for( var i = 0; i < towns.length; i++ ) {
        var article = document.createElement( 'article' );

        var title = document.createElement( 'h1' );
        var motto = document.createElement( 'h2' );
        var yearFounded = document.createElement('p');
        var currentPopulation = document.createElement('p');
        var averageRainfall = document.createElement('p');
        title.textContent = towns[i]['name'];
        motto.textContent = towns[i]['motto'];
        yearFounded.textContent = 'Year Founded: ' + towns[i]['yearFounded'];
        currentPopulation.textContent = 'Current Population: ' + towns[i]['currentPopulation'];
        averageRainfall.textContent = 'Average Rainfall: ' + towns[i]['averageRainfall'];

        article.appendChild( title );
        article.appendChild( motto );
        article.appendChild( yearFounded );
        article.appendChild( currentPopulation );
        article.appendChild( averageRainfall );

        section.appendChild( article );
    }
}