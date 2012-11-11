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
        '11' : 'eleven'
        
    }
}

Clock.prototype.tellHours = function (rawTime) {
    var hours,
        rawHours = rawTime.getHours();
    
    hours = parseInt(rawHours, 10).toString();
    
    return this.hours[hours] + ' o\'clock';
}

Clock.prototype.tellTheTime = function (rawTime) {
    var hours = '';
    
    if (rawTime && typeof(rawTime.getHours) === 'function') {
        hours = this.tellHours(rawTime);
    }

    return hours;
};
