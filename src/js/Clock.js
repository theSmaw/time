function Clock (Hour, Minutes) {
    this.hour = new Hour();
    this.minutes = new Minutes();
}

Clock.prototype.advanceRawHour = function (rawHour) {
    var advancedRawHour;
    
    advancedRawHour = rawHour + 1;
    if (advancedRawHour === 24) {
        advancedRawHour = 0;
    }
    
    return advancedRawHour;
};

/**
 * Converts a Date object into a conversational string.
 *
 * @public
 * @param {Date} rawTime
 * @return {string} Converted dat
 */
Clock.prototype.convert = function (rawTime) {
    var convertedHour,
        prefix,
        rawHour = rawTime.getHours(),
        rawMinutes = rawTime.getMinutes(),
        suffix;

    prefix = this.createPrefix(rawMinutes);
    convertedHour = this.convertHour(rawHour, rawMinutes);
    suffix = this.createSuffix(convertedHour, rawMinutes);

    return prefix + convertedHour + suffix;
};

Clock.prototype.convertHour = function (rawHour, rawMinutes) {
    var hourToConvert = rawHour;
    
    if (rawMinutes > 32) {
        hourToConvert = this.advanceRawHour(hourToConvert);
    }
    
    return this.hour.convert(hourToConvert);
};

Clock.prototype.createPrefix = function (rawMinutes) {
    
    return this.minutes.convert(rawMinutes);
};

Clock.prototype.createSuffix = function (convertedHour, rawMinutes) {
    var suffix = '';
    
    if ((rawMinutes === 0) && (convertedHour !== 'noon') && (convertedHour !== 'midnight')) {
        suffix = ' o\'clock';
    }
    
    return suffix;
};
