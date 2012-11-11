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
        '12' : 'noon'
    }
}

Clock.prototype.tellHours = function (rawTime) {
    var hour,
        rawHours = rawTime.getHours(),
        suffix = '';
        debugger
    
    hour = this.hours[parseInt(rawHours, 10)];
    if (hour !== 'noon') {
        suffix = ' o\'clock';
    }
    
    return hour + suffix;
}

Clock.prototype.tellTheTime = function (rawTime) {
    var hours = '';
    
    if (rawTime && typeof(rawTime.getHours) === 'function') {
        hours = this.tellHours(rawTime);
    }

    return hours;
};
