// Super quick and dirty, but now with objects!

function Timer(minutes, seconds, milliseconds) {
    this.minutes = minutes || 0; 
    this.seconds = seconds || 0;
    this.milliseconds = milliseconds || 0;
}

Timer.prototype.changeMinutes = function(minutesDifference) {
    this.minutes += minutesDifference;
};

Timer.prototype.changeSeconds = function(secondsDifference) {
    var newSeconds = this.seconds + secondsDifference;
    if (newSeconds >= 0) {
        this.seconds = newSeconds % 60;
    } else {
        this.seconds = 60 + (newSeconds % 60);
        this.changeMinutes(Math.floor(newSeconds / 60));
    }
};

Timer.prototype.changeMilliseconds = function(millisecondsDifference) {
    var newMilliseconds = this.milliseconds + millisecondsDifference;
    if (newMilliseconds >= 0) {
        this.milliseconds = newMilliseconds % 1000;
    } else {
        this.milliseconds = 1000 + (newMilliseconds % 1000);
        this.changeSeconds(Math.floor(newMilliseconds / 1000));
    }
};

Timer.prototype.countdown = function() {
    console.log('minutes: ' + this.minutes);
    console.log(this.seconds);
    console.log(this.milliseconds);
    this.changeMilliseconds(-1);
    this.displayTimer();
};

Timer.prototype.displayTimer = function() {
    var minutesElement = document.getElementById("minute");
    var secondsElement = document.getElementById("second");
    var millisecondsElement = document.getElementById("millisecond");
    minutesElement.innerHTML = this.minutes;
    secondsElement.innerHTML = this.seconds;
    millisecondsElement.innerHTML = this.milliseconds;
};

var firstTimer = new Timer(30);
//
theTime = document.getElementById("time");
theTime.addEventListener("click", function(){setInterval(function() {firstTimer.countdown()}, 1)}, false);