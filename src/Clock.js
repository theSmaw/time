function Clock (Hours, Minutes) {
    this.hours = new Hours();
    this.minutes = new Minutes();
}

Clock.prototype.convertHours = function (rawTime) {
    var rawHours = rawTime.getHours();
    
    return this.hours.convert(rawHours);
};

Clock.prototype.convertMinutes = function (rawTime) {
    var rawMinutes = rawTime.getMinutes();
    
    return this.minutes.convert(rawMinutes);
};

Clock.prototype.convert = function (rawTime) {
    var convertedHours = this.convertHours(rawTime),
        convertedMinutes = this.convertMinutes(rawTime);
        

    return convertedMinutes.prefix + convertedHours + convertedMinutes.suffix;
};
