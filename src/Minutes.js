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

Minutes.prototype.convert = function (rawMinutes) {
    var prefixListPosition;
    
    if (rawMinutes > 0) {    
        prefixListPosition = Math.round(rawMinutes / 5);
    }
    
    return this.prefixesList[prefixListPosition] || '';
};