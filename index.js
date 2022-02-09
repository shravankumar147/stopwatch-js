window.onload = function () {
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;
    
    
    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    buttonStop.onclick = function () {
        clearInterval(Interval);

    };

    buttonReset.onclick = function () {
        clearInterval(Interval);
        seconds = 00;
        tens = 00;
        appendSeconds.innerHTML = '00';
        appendTens.innerHTML = '00';
    };


    function startTimer() {
        tens++;
        appendTens.innerHTML = tens;
        if (tens > 60) {
            tens = 0;
            seconds++;
            appendTens.innerHTML = tens;
            if (seconds <= 9) {
                appendSeconds.innerHTML = "0" + seconds;
            } else {
                appendSeconds.innerHTML = seconds;
            }
                
        }
    }



};