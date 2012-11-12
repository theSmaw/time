function Hours () {
    this.hoursList = [
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

Hours.prototype.convert = function (rawHours) {
    var convertedHours,
        positionInHoursList;
    
    if (rawHours > 12) {
        positionInHoursList = rawHours - 12;
    } else {
        positionInHoursList = rawHours;
    }
    
    return this.hoursList[positionInHoursList] || '';
};