function Clock (Hours, Minutes) {
    this.hours = new Hours();
    this.minutes = new Minutes();
}

Clock.prototype.advanceRawHours = function (rawHours) {
    var advancedRawHours;
    
    advancedRawHours = rawHours += 1;
    if (advancedRawHours === 24) {
        advancedRawHours = 0;
    }
    
    return advancedRawHours;
};

Clock.prototype.convert = function (rawTime) {
    var convertedHours,
        convertedMinutes,
        rawHours = rawTime.getHours(),
        rawMinutes = rawTime.getMinutes();
        
        if (rawMinutes > 32) {
            rawHours = this.advanceRawHours(rawHours);
        }
        convertedHours = this.hours.convert(rawHours);
        convertedMinutes = this.minutes.convert(rawMinutes);

    return convertedMinutes + convertedHours;
};
