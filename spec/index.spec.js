var casper = require('casper').create();
var utils = require('utils');

function convertTime(hours, minutes) {

    return casper.evaluate(function (hour, minutes) {
        document.getElementById('hour').value = hour;
        document.getElementById('minutes').value = minutes;
        document.getElementById('submit').click();

        return document.getElementById('results').innerText;
    }, {
        hours : hours,
        minutes : minutes
    });
}

casper.start();
casper.open('src/index.html');

casper.then(function () {
    this.test.assertTitle('Talking clock', 'should be on the correct page');
});

casper.then(function () {
    this.test.assertTitle('Talking clock', 'should be on the correct page');
});

casper.then(function () {
    this.test.assert(this.exists('#hour'), 'should have an hour field');
});

casper.then(function () {
    this.test.assert(this.exists('#minutes'), 'should have a minutes field');
});

casper.then(function () {
    this.test.assert(this.exists('#submit'), 'should have a submit button');
});

casper.then(function () {
    this.test.assert(this.exists('#results'), 'should have a results area');
});

casper.then(function () {
    this.test.assertEquals(convertTime(10, 30), 'half past ten', 'should correctly convert 10:30');
});

casper.then(function () {
    this.test.assertEquals(convertTime(23, 55), 'five to midnight', 'should correctly convert 23:55');
});

casper.then(function () {
    this.test.assertEquals(convertTime(23, 58), 'just before midnight', 'should correctly convert 23:58');
});

casper.then(function () {
    this.test.assertEquals(convertTime(16, 00), 'four o\'clock', 'should correctly convert 16:00');
});

casper.then(function () {
    this.test.assertEquals(convertTime(12, 01), 'just after noon', 'should correctly convert 12:01');
});

casper.then(function () {
    this.test.assertEquals(convertTime(5, 1), 'five past one', 'should correctly convert 5:01');
});

casper.then(function () {
    this.test.assertEquals(convertTime(2, 09), 'ten past two', 'should correctly convert 2:09');
});

casper.then(function () {
    this.test.assertEquals(convertTime(15, 15), 'a quarter past three', 'should correctly convert 15:15');
});

casper.then(function () {
    this.test.assertEquals(convertTime(04, 20), 'twenty past four', 'should correctly convert 4:20');
});

casper.then(function () {
    this.test.assertEquals(convertTime(17, 27), 'twenty-five minutes past five', 'should correctly convert 17:27');
});

casper.then(function () {
    this.test.assertEquals(convertTime(8, 36), 'twenty-five minutes to eight', 'should correctly convert 8:36');
});

casper.then(function () {
    this.test.assertEquals(convertTime(21, 41), 'twenty to nine', 'should correctly convert 21:41');
});

casper.then(function () {
    this.test.assertEquals(convertTime(00, 43), 'a quarter to one', 'should correctly convert 00:43');
});

casper.run(function () {
    this.test.renderResults(true, 0, 'results/SPEC-index.xml');
});
