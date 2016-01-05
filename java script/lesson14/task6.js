function Clock(options) {
    this._template = options.template;
}

Clock.prototype._render = function () {
    var date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var time = this._template.replace(/hh/, hours)
        .replace(/mm/, minutes)
        .replace(/ss/, seconds);

    console.log(time);
};

Clock.prototype.start = function () {
    this._render();
    var context = this;
    this._timer = setInterval(function () {
        context._render();
    }, 1000);
};

Clock.prototype.stop = function () {
    clearInterval(this._timer);
};

var clock = new Clock({
    template: 'hh:mm:ss'
});

clock.start();
//clock.stop();