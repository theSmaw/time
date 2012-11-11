describe('Minutes', function () {
    var minutes;

    function before () {
        minutes = new Minutes();
    }

    it('should be a function', function () {
       expect(typeof(Minutes)).toBe('function');
    });
});