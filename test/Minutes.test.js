describe('Minutes', function () {
    var minutes;

    function before () {
        minutes = new Minutes();
    }

    it('should be a function', function () {
       expect(typeof(Minutes)).toBe('function');
    });
    
    describe('instance of Minutes', function () {
        beforeEach(before);

        it('should have a convert method', function () {
            expect(minutes.convert).toBeDefined();
        });
        
        it('should return no prefix or suffix if there are no minutes', function () {
            var convertedMinutes = minutes.convert(0);
            
            expect(convertedMinutes.prefix).toBe('');
            expect(convertedMinutes.suffix).toBe('');
        });
        
        it('should return a "just after" prefix if it is 2 or less minutes past the hour', function () {
            var convertedMinutes = minutes.convert(0);
            
            expect(convertedMinutes.prefix).toBe('just after');
            convertedMinutes = minutes.convert(1);
            expect(convertedMinutes.prefix).toBe('just after');
            convertedMinutes = minutes.convert(2);
            expect(convertedMinutes.prefix).toBe('just after');
        });
    });
});