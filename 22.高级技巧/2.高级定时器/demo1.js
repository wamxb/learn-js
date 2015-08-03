/**
 * Created by zplus on 2015/6/2.
 */

var duration = 3e+3;
window.setTimeout(function timer() {
    console.log('start setTimeout');

    timerProcess(getRandomInt(2e+3, 4e+3), function () {
        window.setTimeout(timer, duration);
    });
}, duration);

function timerProcess(duration, callback) {
    setTimeout(function () {
        console.log('long process: ' + duration);
        callback();
    }, duration);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
