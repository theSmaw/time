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
            var convertedMinutes = minutes.convert(1);

            expect(convertedMinutes.prefix).toBe('just after');
            convertedMinutes = minutes.convert(2);
            expect(convertedMinutes.prefix).toBe('just after');
        });
        
        it('should return a prefix rounded to the nearest 5 minutes for all times up to 3 minues before the next hour', function () {
            var convertedMinutes,
                i;
            
            for (i = 3; i < 8; i += 1) {
                convertedMinutes = minutes.convert(i);
                expect(convertedMinutes.prefix).toBe('five past');
            }
            for (i = 8; i < 13; i += 1) {
                convertedMinutes = minutes.convert(i);
                expect(convertedMinutes.prefix).toBe('ten past');
            }
            for (i = 13; i < 18; i += 1) {
                convertedMinutes = minutes.convert(i);
                expect(convertedMinutes.prefix).toBe('a quarter past');
            }
            for (i = 18; i < 23; i += 1) {
                convertedMinutes = minutes.convert(i);
                expect(convertedMinutes.prefix).toBe('twenty past');
            }
            for (i = 23; i < 28; i += 1) {
                convertedMinutes = minutes.convert(i);
                expect(convertedMinutes.prefix).toBe('twenty-five minutes past');
            }
            for (i = 28; i < 33; i += 1) {
                convertedMinutes = minutes.convert(i);
                expect(convertedMinutes.prefix).toBe('half past');
            }
            for (i = 33; i < 38; i += 1) {
                convertedMinutes = minutes.convert(i);
                expect(convertedMinutes.prefix).toBe('twenty-five minutes to');
            }
            for (i = 38; i < 43; i += 1) {
                convertedMinutes = minutes.convert(i);
                expect(convertedMinutes.prefix).toBe('twenty to');
            }
            for (i = 43; i < 48; i += 1) {
                convertedMinutes = minutes.convert(i);
                expect(convertedMinutes.prefix).toBe('a quarter to');
            }
            for (i = 48; i < 53; i += 1) {
                convertedMinutes = minutes.convert(i);
                expect(convertedMinutes.prefix).toBe('ten to');
            }
            for (i = 53; i < 58; i += 1) {
                convertedMinutes = minutes.convert(i);
                expect(convertedMinutes.prefix).toBe('five to');
            }
        });
        
        it('should return a "just before" prefix if it is 2 or less minutes past the hour', function () {
            var convertedMinutes = minutes.convert(58);

            expect(convertedMinutes.prefix).toBe('just before');
            convertedMinutes = minutes.convert(59);
            expect(convertedMinutes.prefix).toBe('just before');
        });
    });
});