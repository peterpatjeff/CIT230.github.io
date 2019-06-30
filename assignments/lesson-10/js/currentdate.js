var date =  new Date();
var weekdayList = [ "Sunday", "Monday", "Tuesday", 
                "Wednesday", "Thursday", "Friday", "Saturday" ];
var monthList = [ "January", "February", "March", "April", "May", "June", "July",
                "August", "September", "October", "November", "December" ];

var day = weekdayList[ date.getDay() ];
var month = monthList[ date.getMonth() ];
var year = date.getFullYear();
var dayNumber = date.getDate(); // Get day number in the Month

document.getElementById("currentdate").innerHTML = day + ", " + dayNumber + " " + 
                                                    month + " " + year;
