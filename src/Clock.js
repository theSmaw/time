function Clock () {
    this.hours = {
        '1' : 'one',
        '2' : 'two',
        '3' : 'three',
        '4' : 'four',
        '5' : 'five',
        '6' : 'six',
        '7' : 'seven',
        '8' : 'eight',
        '9' : 'nine',
        '10' : 'ten',
        '11' : 'eleven',
        '12' : 'noon',
        '13' : 'one',
        '14' : 'two',
        '15' : 'three',
        '16' : 'four',
        '17' : 'five',
        '18' : 'six',
        '19' : 'seven',
        '20' : 'eight',
        '21' : 'nine',
        '22' : 'ten',
        '23' : 'eleven'
    }
}

Clock.prototype.createSuffix = function (time) {
    var suffix = '';
    
    if (time.hours !== 'noon') {
        suffix = ' o\'clock';
    }
    
    return suffix;
};

Clock.prototype.tellHours = function (rawTime) {
    var hours,
        rawHours = rawTime.getHours(),
        suffix = '';
    
    hours = this.hours[parseInt(rawHours, 10)];
    
    return hours;
};

Clock.prototype.tellTheTime = function (rawTime) {
    var time = {};
    
    if (rawTime && typeof(rawTime.getHours) === 'function') {
        time.hours = this.tellHours(rawTime);
    }

    return time.hours + this.createSuffix(time);
};
