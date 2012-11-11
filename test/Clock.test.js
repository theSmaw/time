describe('Clock', function () {
    var clock;

    function before () {
        clock = new Clock(Mocks.Hours);
    }

    it('should be a function', function () {
       expect(typeof(Clock)).toBe('function');
    });

    describe('instance of clock', function () {
        beforeEach(before);

        it('should have a convert method', function () {
            expect(clock.convert).toBeDefined();
        });

        describe('converting a time', function () {
            var rawTime,
                convertedTime;
            
            beforeEach(function () {
                before();
                rawTime = new Date()
            });

            it('should return a string', function () {
                convertedTime = clock.convert(rawTime);
                expect(typeof(convertedTime)).toBe('string');
            });
            
            it('should return only the hour with the " o\'clock" suffix if it is not noon or midnight', function () {                    
                rawTime.setHours(1, 0, 0, 0);
                convertedTime = clock.convert(rawTime);
                expect(convertedTime).toBe('one o\'clock');
            });
            
            it('should return "noon" if it is noon', function () {                
                rawTime.setHours(12, 0, 0, 0);                
                convertedTime = clock.convert(rawTime);
                expect(convertedTime).toBe('noon');
            });
            
            it('should return "midnight" if it is midnight', function () {                
                rawTime.setHours(0, 0, 0, 0);                
                convertedTime = clock.convert(rawTime);
                expect(convertedTime).toBe('midnight');
            });
        });
    });
});
