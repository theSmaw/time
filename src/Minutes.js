function Minutes () {}

Minutes.prototype.convert = function (rawMinutes) {
    var convertedMinutes = {};
    
    if (rawMinutes === 0) {
        convertedMinutes.suffix = ' o\'clock';
    }
    
    return convertedMinutes;
};