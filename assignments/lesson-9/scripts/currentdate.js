function UpdateElementWithDate(aId) { 
    var date = new Date(); 
    var day = ConvertDayToString(date.getDay());
    var monthName = ConvertMonthToString(date.getMonth()); 
    document.getElementById(aId).innerHTML = day + ", " + date.getDate() + " " + monthName + " " + date.getFullYear();
}
function ConvertDayToString(aDay) { 
    var result = ""; 
    switch (aDay) { 
        case 0: result = "Sunday"; break;
        case 1: result = "Monday"; break;
        case 2: result = "Tuesday"; break;
        case 3: result = "Wednesday"; break;
        case 4: result = "Thursday"; break;
        case 5: result = "Friday"; break;
        case 6: result = "Saturday"; break;
}
return result; 
}
function ConvertMonthToString(aMonth) { 
    var result = ""; 
    switch (aMonth) { 
        case 0: result = "January"; break;
        case 1: result = "February"; break;
        case 2: result = "March"; break;
        case 3: result = "April"; break;
        case 4: result = "May"; break;
        case 5: result = "June"; break;
        case 6: result = "July"; break;
        case 7: result = "August"; break;
        case 8: result = "September"; break;
        case 9: result = "October"; break;
        case 10: result = "November"; break;
        case 11: result = "December"; break;
}
return result; 
}
UpdateElementWithDate("currentDate"); 
