describe('Clock', function () {
    var clock;

    function before () {
        clock = new Clock();
    }

    it('should be a function', function () {
       expect(typeof(Clock)).toBe('function');
    });

    describe('instance of clock', function () {
        beforeEach(before);

        describe('telling the time', function () {

            it('should have a tell the time method', function () {
                expect(clock.tellTheTime).toBeDefined();
            });

            it('should return a string', function () {
                var time;

                time = clock.tellTheTime();
                expect(typeof(time)).toBe('string');
            });
            
            it('should return the hour only if there are no minutes and it is AM', function () {
                var rawTime = new Date(),
                    time;
                    
                rawTime.setHours(1, 0, 0, 0);                
                time = clock.tellTheTime(rawTime);
                expect(time).toBe('one o\'clock');
                rawTime.setHours(2, 0, 0, 0);                
                time = clock.tellTheTime(rawTime);
                expect(time).toBe('two o\'clock');
                rawTime.setHours(3, 0, 0, 0);                
                time = clock.tellTheTime(rawTime);
                expect(time).toBe('three o\'clock');
                rawTime.setHours(4, 0, 0, 0);                
                time = clock.tellTheTime(rawTime);
                expect(time).toBe('four o\'clock');
                rawTime.setHours(5, 0, 0, 0);                
                time = clock.tellTheTime(rawTime);
                expect(time).toBe('five o\'clock');
                rawTime.setHours(6, 0, 0, 0);                
                time = clock.tellTheTime(rawTime);
                expect(time).toBe('six o\'clock');
                rawTime.setHours(7, 0, 0, 0);                
                time = clock.tellTheTime(rawTime);
                expect(time).toBe('seven o\'clock');
                rawTime.setHours(8, 0, 0, 0);                
                time = clock.tellTheTime(rawTime);
                expect(time).toBe('eight o\'clock');
                rawTime.setHours(9, 0, 0, 0);                
                time = clock.tellTheTime(rawTime);
                expect(time).toBe('nine o\'clock');
                rawTime.setHours(10, 0, 0, 0);                
                time = clock.tellTheTime(rawTime);
                expect(time).toBe('ten o\'clock');
                rawTime.setHours(11, 0, 0, 0);                
                time = clock.tellTheTime(rawTime);
                expect(time).toBe('eleven o\'clock');
            });
        });
    });
});
