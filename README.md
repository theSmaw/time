The Conversational Clock
====

Takes a time (JavaScript Date object) and returns the time in a conversational format.

## Example

   var clock = new Clock(Hour, Minutes);
   var convertedTime = clock.convert(new Date());

An example implementation of the Conversational Clock can be viewed by running /src/index.html in a browser.

Integration tests for this example are located at spec/index.spec.js. They are written with CasperJS and can be run with the following command casperjs spec/index.spec.js src/index.html

## Development process

The Conversational Clock is built of 3 'classes', Clock, Hour and Minutes. Each 'class' was built in a TDD style and tested in isolation using Jasmine. Unit test files and mocks can be found at /test/js and can be run locally by opening /test/js/testrunner.html?pretty in a browser or by using the following command phantomjs test/js/testrunner.js test/js/testrunner.html

Unit and integrations tests are run under CI using Travis-CI. The build project can be viewed at https://travis-ci.org/theSmaw/time

Commit history for this project is particularly atomic, showing the development workflow.

## Dependencies

The following 3rd party code is included in this project:
  - /test/js/lib
  - /test/js/testrunner.js
