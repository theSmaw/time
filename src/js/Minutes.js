function Minutes () {
    this.prefixesList = [
        'just after ',
        'five past ',
        'ten past ',
        'a quarter past ',
        'twenty past ',
        'twenty-five minutes past ',
        'half past ',
        'twenty-five minutes to ',
        'twenty to ',
        'a quarter to ',
        'ten to ',
        'five to ',
        'just before '
    ];
}

/**
 * Creates a conversational prefix from a raw minutes value.
 *
 * @param {number} rawMinutes Minutes value as a number
 * @return {string} Conversational prefix
 */
Minutes.prototype.convert = function (rawMinutes) {
    var prefixListPosition;
    
    if (rawMinutes > 0) {    
        prefixListPosition = Math.round(rawMinutes / 5);
    }
    
    return this.prefixesList[prefixListPosition] || '';
};
