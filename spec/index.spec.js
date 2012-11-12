var casper = require('casper').create();
var utils = require('utils');

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

casper.run(function () {
    this.test.renderResults(true, 0, 'results/SPEC-index.xml');
});
