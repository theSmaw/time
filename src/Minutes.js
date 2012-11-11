function Minutes () {
    this.prefixesList = ['just after'];
}

Minutes.prototype.convert = function (rawMinutes) {
    var convertedMinutes = {
            prefix : '',
            suffix : ''
        };
    
    if (rawMinutes > 0) {    
        if (rawMinutes < 32) {
            convertedMinutes.prefix = this.createPrefix(rawMinutes);
        }
    }
    
    return convertedMinutes;
};

Minutes.prototype.createPrefix = function (rawMinutes) {
    var prefixListPosition = Math.round(rawMinutes / 5) / 5;
    
    return this.prefixesList[prefixListPosition];
}