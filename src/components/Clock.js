import React from 'react';

function Clock(props) {
    //const displayTime = () => props.onClickFunction(props.increment);
    //const time = displayTime();

    ///////////


    //USE THIS
    //https://dev.to/albertomontalesi/tutorial-create-a-pomodoro-clock-with-javascript-13om


    /////////////////
    let minutes = 25;
    let seconds = 10;
    let fullTime;
    setInterval(function () {
        seconds--;
        if (seconds >= 0) {
            minutes--;
        }
    }, 1000);
    const doneMessage = "Time is up!";

/*    if (minutes === 0) {
        doneMessage;
    }*/

    fullTime = minutes + ":" + seconds;

    function zeros(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    function timer() {
        let totalTime;
        const count = 1;
        const minutes = zeros(Math.floor(count / 60));
        const seconds = zeros(count % 60);
        if (displayTime === 0) {
            doneMessage;
        }
        if (displayTime < 0) {
            clearInterval(counter);
            return;
        }
        totalTime = minutes + ':' + seconds;
        return totalTime;
    }


return (
    <div>
        {fullTime};
        {totalTime}
    </div>
);
}

export default Clock;
