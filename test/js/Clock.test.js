describe('Clock', function () {
    var clock;

    function before () {
        clock = new Clock(Mocks.Hours, Mocks.Minutes);
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
            
            it('should return the minutes prefix and hour if it is not noon or midnight', function () {                    
                rawTime.setHours(1, 1, 0, 0);
                convertedTime = clock.convert(rawTime);
                expect(convertedTime).toBe('prefix one');
            });
            
            it('should add an "o\'clock" suffix if there are no minutes and it is not midnight or noon', function () {
                rawTime.setHours(1, 0, 0, 0);
                convertedTime = clock.convert(rawTime);
                expect(convertedTime).toBe('prefix one o\'clock');
            });
            
            it('should return "noon" if it is noon', function () {                
                rawTime.setHours(12, 0, 0, 0);                
                convertedTime = clock.convert(rawTime);
                expect(convertedTime).toBe('prefix noon');
            });
            
            it('should return "midnight" if it is midnight', function () {                
                rawTime.setHours(0, 0, 0, 0);                
                convertedTime = clock.convert(rawTime);
                expect(convertedTime).toBe('prefix midnight');
            });
            
            it('should increment the returned hour if the time is closer than 28 minutes to it', function () {
                rawTime.setHours(0, 33, 0, 0);
                convertedTime = clock.convert(rawTime);
                expect(convertedTime).toBe('prefix one');
                rawTime.setHours(1, 33, 0, 0);
                convertedTime = clock.convert(rawTime);
                expect(convertedTime).toBe('prefix two');
                rawTime.setHours(23, 33, 0, 0);
                convertedTime = clock.convert(rawTime);
                expect(convertedTime).toBe('prefix midnight'); 
            });
        });
    });
});
