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
                var str;

                str = clock.tellTheTime();
                expect(typeof(str)).toBe('string');
            });
        });
    });
});
