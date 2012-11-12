var casper = require('casper').create();

casper.start();
casper.open('src/index.html');

casper.then(function () {
    this.test.assertTitle('Talking clock', 'should be on the correct page');
});

casper.run(function () {
    this.test.renderResults(true, 0, 'results/SPEC-index.xml');
});
