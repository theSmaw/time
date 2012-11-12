describe('Hour', function () {
    var hour;

    function before () {
        hour = new Hour();
    }

    it('should be a function', function () {
       expect(typeof(Hour)).toBe('function');
    });

    describe('instance of hours', function () {
        beforeEach(before);

        it('should have a convert method', function () {
            expect(hour.convert).toBeDefined();
        });

        describe('converting hours', function () {
            var convertedHour;
            
            beforeEach(before);

            it('should return a string', function () {
                convertedHour = hour.convert();
                expect(typeof(convertedHour)).toBe('string');
            });
            
            it('should return the hour if it is AM', function () {                               
                convertedHour = hour.convert(1);
                expect(convertedHour).toBe('one');
                convertedHour = hour.convert(2);
                expect(convertedHour).toBe('two');
                convertedHour = hour.convert(3);
                expect(convertedHour).toBe('three');
                convertedHour = hour.convert(4);
                expect(convertedHour).toBe('four');
                convertedHour = hour.convert(5);
                expect(convertedHour).toBe('five');
                convertedHour = hour.convert(6);
                expect(convertedHour).toBe('six');
                convertedHour = hour.convert(7);
                expect(convertedHour).toBe('seven');
                convertedHour = hour.convert(8);
                expect(convertedHour).toBe('eight');
                convertedHour = hour.convert(9);
                expect(convertedHour).toBe('nine');
                convertedHour = hour.convert(10);
                expect(convertedHour).toBe('ten');
                convertedHour = hour.convert(11);
                expect(convertedHour).toBe('eleven');
            });
            
            it('should return "noon" if it is noon', function () {      
                convertedHour = hour.convert(12);
                expect(convertedHour).toBe('noon');
            });
            
            it('should return the hour if it is PM', function () { 
                convertedHour = hour.convert(13);
                expect(convertedHour).toBe('one');
                convertedHour = hour.convert(14);
                expect(convertedHour).toBe('two');
                convertedHour = hour.convert(15);
                expect(convertedHour).toBe('three');
                convertedHour = hour.convert(16);
                expect(convertedHour).toBe('four');
                convertedHour = hour.convert(17);
                expect(convertedHour).toBe('five');
                convertedHour = hour.convert(18);
                expect(convertedHour).toBe('six');
                convertedHour = hour.convert(19);
                expect(convertedHour).toBe('seven');
                convertedHour = hour.convert(20);
                expect(convertedHour).toBe('eight');
                convertedHour = hour.convert(21);
                expect(convertedHour).toBe('nine');
                convertedHour = hour.convert(22);
                expect(convertedHour).toBe('ten');
                convertedHour = hour.convert(23);
                expect(convertedHour).toBe('eleven');
            });
            
            it('should return "midnight" if it is midnight', function () {     
                convertedHour = hour.convert(0);
                expect(convertedHour).toBe('midnight');
            });
        });
    });
});
