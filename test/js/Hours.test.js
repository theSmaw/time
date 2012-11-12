describe('Hours', function () {
    var hours;

    function before () {
        hours = new Hours();
    }

    it('should be a function', function () {
       expect(typeof(Hours)).toBe('function');
    });

    describe('instance of hours', function () {
        beforeEach(before);

        it('should have a convert method', function () {
            expect(hours.convert).toBeDefined();
        });

        describe('converting hours', function () {
            var rawHours,
                convertedHours;
            
            beforeEach(before);

            it('should return a string', function () {
                convertedHours = hours.convert();
                expect(typeof(convertedHours)).toBe('string');
            });
            
            it('should return the hour if it is AM', function () {                               
                convertedHours = hours.convert(1);
                expect(convertedHours).toBe('one');          
                convertedHours = hours.convert(2);
                expect(convertedHours).toBe('two');            
                convertedHours = hours.convert(3);
                expect(convertedHours).toBe('three');              
                convertedHours = hours.convert(4);
                expect(convertedHours).toBe('four');             
                convertedHours = hours.convert(5);
                expect(convertedHours).toBe('five');               
                convertedHours = hours.convert(6);
                expect(convertedHours).toBe('six');             
                convertedHours = hours.convert(7);
                expect(convertedHours).toBe('seven');              
                convertedHours = hours.convert(8);
                expect(convertedHours).toBe('eight');               
                convertedHours = hours.convert(9);
                expect(convertedHours).toBe('nine');              
                convertedHours = hours.convert(10);
                expect(convertedHours).toBe('ten');              
                convertedHours = hours.convert(11);
                expect(convertedHours).toBe('eleven');
            });
            
            it('should return "noon" if it is noon', function () {      
                convertedHours = hours.convert(12);
                expect(convertedHours).toBe('noon');
            });
            
            it('should return the hour if it is PM', function () { 
                convertedHours = hours.convert(13);
                expect(convertedHours).toBe('one');        
                convertedHours = hours.convert(14);
                expect(convertedHours).toBe('two');            
                convertedHours = hours.convert(15);
                expect(convertedHours).toBe('three');             
                convertedHours = hours.convert(16);
                expect(convertedHours).toBe('four');              
                convertedHours = hours.convert(17);
                expect(convertedHours).toBe('five');              
                convertedHours = hours.convert(18);
                expect(convertedHours).toBe('six');              
                convertedHours = hours.convert(19);
                expect(convertedHours).toBe('seven');               
                convertedHours = hours.convert(20);
                expect(convertedHours).toBe('eight');               
                convertedHours = hours.convert(21);
                expect(convertedHours).toBe('nine');               
                convertedHours = hours.convert(22);
                expect(convertedHours).toBe('ten');               
                convertedHours = hours.convert(23);
                expect(convertedHours).toBe('eleven');
            });
            
            it('should return "midnight" if it is midnight', function () {     
                convertedHours = hours.convert(0);
                expect(convertedHours).toBe('midnight');
            });
        });
    });
});
