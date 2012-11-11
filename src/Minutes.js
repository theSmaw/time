function Minutes () {
    this.prefixesList = [
        'just after',
        'five past',
        'ten past',
        'a quarter past',
        'twenty past',
        'twenty-five minutes past',
        'half past',
        'twenty-five minutes to',
        'twenty to',
        'a quarter to',
        'ten to',
        'five to'
    ];
}

Minutes.prototype.convert = function (rawMinutes) {
    var convertedMinutes = {
            prefix : '',
            suffix : ''
        };
    
    if (rawMinutes > 0) {    
        convertedMinutes.prefix = this.createPrefix(rawMinutes);
    }
    
    return convertedMinutes;
};

Minutes.prototype.createPrefix = function (rawMinutes) {
    var prefixListPosition = Math.round(rawMinutes / 5);
    
    return this.prefixesList[prefixListPosition];
}