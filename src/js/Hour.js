function Hour () {
    this.hourList = [
        'midnight',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'noon'
    ];
}

Hour.prototype.convert = function (rawHour) {
    var positionInHourList;
    
    if (rawHour > 12) {
        positionInHourList = rawHour - 12;
    } else {
        positionInHourList = rawHour;
    }
    
    return this.hourList[positionInHourList] || '';
};
