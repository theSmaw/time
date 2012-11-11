var Mocks = Mocks || {};

Mocks.Hours = function () {}

Mocks.Hours.prototype.convert = function (rawHours) {
    var convertedHours;
    
    if (rawHours === 1) {
        convertedHours = 'one';
    } else if (rawHours === 12) {
        convertedHours = 'noon';
    } else if (rawHours === 0) {
        convertedHours = 'midnight';
    }
    
    return convertedHours;
}