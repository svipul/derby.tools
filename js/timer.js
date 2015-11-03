// Super quick and dirty

var go = function() {
    var theTime = document.getElementById("time");
    theTime.addEventListener("click", setInterval(millisecondCountdown, 1), false);
};

var millisecondCountdown = function() {
    var milliseconds = document.getElementById("milliseconds");
    var millisecondDisplay = milliseconds.innerHTML;
    console.log(Number(millisecondDisplay));
    if(Number(millisecondDisplay) == 0) {
        secondCountdown();
        milliseconds.innerHTML = "999";
    } else {
        milliseconds.innerHTML = formatCounter(3, Number(millisecondDisplay) - 1);
    }
};

var secondCountdown = function() {
    var seconds = document.getElementById("seconds");
    var secondDisplay = seconds.innerHTML;
        console.log(secondDisplay);
    if(Number(secondDisplay) == 0) {
        minuteCountdown();
        seconds.innerHTML = "59";
    } else {
        seconds.innerHTML = formatCounter(2, Number(secondDisplay) - 1);
    }
};

var minuteCountdown = function() {
    var minutes = document.getElementById("minutes");
    var minuteDisplay = minutes.innerHTML;
    if(Number(minuteDisplay) == 0) {
        minuteCountdown();
        minutes.innerHTML = "59";
    } else {
        minutes.innerHTML = formatCounter(2, Number(minuteDisplay) - 1);
    }
};


var formatCounter = function(numberOfDigits, value) {
    var valueString = value.toString();
    while (valueString.length < numberOfDigits) {
        valueString = "0" + valueString;
    }
    return valueString;
};

go();