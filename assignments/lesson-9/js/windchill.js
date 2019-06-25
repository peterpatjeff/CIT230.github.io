var t = 78; //  high + low / 2 )
var s = 5; // Wind Speed miles per hour
var f;
        f = 35.74 + 0.6215 * t - 35.75 * Math.pow( s, 0.16 ) + 0.4275 * t * Math.pow( s, 0.16 );
        document.getElementById("windChill").innerHTML = f.toFixed( 2 );
