var Mocks = Mocks || {};

Mocks.Hour = function () {}

Mocks.Hour.prototype.convert = function (rawHour) {
    var convertedHour;
    
    if (rawHour === 1) {
        convertedHour = 'one';
    } else if (rawHour === 2) {
        convertedHour = 'two';
    } else if (rawHour === 12) {
        convertedHour = 'noon';
    } else if (rawHour === 0) {
        convertedHour = 'midnight';
    }
    
    return convertedHour;
}
