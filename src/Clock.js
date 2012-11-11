function Clock (Hours) {
    this.hours = new Hours();
}

Clock.prototype.createSuffix = function (time) {
    var suffix = '';
    
    if ((time.hours !== 'noon') && (time.hours !== 'midnight')) {
        suffix = ' o\'clock';
    }
    
    return suffix;
};

Clock.prototype.convert = function (rawTime) {
    var time = {};
    
    if (rawTime && typeof(rawTime.getHours) === 'function') {
        time.hours = this.hours.convert(rawTime.getHours());
    }

    return time.hours + this.createSuffix(time);
};
