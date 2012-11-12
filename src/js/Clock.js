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

/**
 * Converts a Date object into a conversational string.
 *
 * @public
 * @param {Date} rawTime
 * @return {string} Converted date
 */
Clock.prototype.convert = function (rawTime) {
    var prefix,
        rawHours = rawTime.getHours(),
        rawMinutes = rawTime.getMinutes(),
        suffix;

    prefix = this.createPrefix(rawMinutes);
    convertedHours = this.convertHours(rawHours, rawMinutes);
    suffix = this.createSuffix(convertedHours, rawMinutes);

    return prefix + convertedHours + suffix;
};

Clock.prototype.convertHours = function (rawHours, rawMinutes) {
    var hoursToConvert = rawHours;
    
    if (rawMinutes > 32) {
        hoursToConvert = this.advanceRawHours(hoursToConvert);
    }
    
    return this.hours.convert(hoursToConvert);
};

Clock.prototype.createPrefix = function (rawMinutes) {
    
    return this.minutes.convert(rawMinutes);
};

Clock.prototype.createSuffix = function (convertedHours, rawMinutes) {
    var suffix = '';
    
    if ((rawMinutes === 0) && (convertedHours !== 'noon') && (convertedHours !== 'midnight')) {
        suffix = ' o\'clock';
    }
    
    return suffix;
};
