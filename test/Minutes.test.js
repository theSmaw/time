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
    });
});