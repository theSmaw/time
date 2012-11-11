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
        
        it('should return "o\'clock" as a suffix if there are no minutes', function () {
            minutes.convert(0);
            expect(minutes.suffix).toBe(' o\'clock');
        });
    });
});