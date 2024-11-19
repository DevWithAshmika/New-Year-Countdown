let cDay;
let cHour;
let cMin;
let cSec;
let cMonth;
let daysLeft;
let cYear;
let daysPerYear; // 365 or 366
let daysinFeb;


let interval = window.setInterval(function () {
    let cDate = new Date();
    cHour = cDate.getHours();
    cMin = cDate.getMinutes();
    cSec = cDate.getSeconds();
    cDay = cDate.getDate();
    cMonth = cDate.getMonth() + 1;
    cYear = cDate.getFullYear();

    if (cYear % 4 == 0) {
        daysPerYear = 366;
        daysinFeb = 29;
    } else {
        daysPerYear = 365;
        daysinFeb = 28;
    }

    switch (cMonth) {
        case 1:
            daysLeft = daysPerYear;
            break;

        case 2:
            daysLeft = daysPerYear - 31;
            break;

        case 3:
            daysLeft = daysPerYear - (31 + daysinFeb);
            break;

        case 4:
            daysLeft = daysPerYear - (31 + daysinFeb + 30);
            break;

        case 5:
            daysLeft = daysPerYear - (31 + daysinFeb + 30 + 31);
            break;

        case 6:
            daysLeft = daysPerYear - (31 + daysinFeb + 30 + 31 + 30);
            break;

        case 7:
            daysLeft = daysPerYear - (31 + daysinFeb + 30 + 31 + 30 + 31);
            break;

        case 8:
            daysLeft = daysPerYear - (31 + daysinFeb + 30 + 31 + 30 + 31 + 31);
            break;

        case 9:
            daysLeft = daysPerYear - (31 + daysinFeb + 30 + 31 + 30 + 31 + 31 + 30);
            break;

        case 10:
            daysLeft = daysPerYear - (31 + daysinFeb + 30 + 31 + 30 + 31 + 31 + 30 + 31);
            break;

        case 11:
            daysLeft = daysPerYear - (31 + daysinFeb + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30);
            break;

        case 12:
            daysLeft = daysPerYear - (31 + daysinFeb + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30 + 31);
            break;
    }

    document.getElementById('sec').innerHTML = 60 - cSec;
    document.getElementById('min').innerHTML = 60 - cMin;
    document.getElementById('hour').innerHTML = 24 - cHour;
    document.getElementById('days').innerHTML = daysLeft - cDay;
}, 1000);