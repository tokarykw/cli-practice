// This file will contain tests for the program. The purpose of these tests is to
// ensure that the core program logic works as expected.

// This project uses a testing library called Jest. You can learn more about Jest
// here: https://jestjs.io/.

// Test files can contain multiple tests, so long as those tests are grouped logically.
// Included below is a function and a test that makes assertions about the behaviour
// of the function. In most cases the subject of a test will be defined in a separate
// file. In this case we've defined the function and the corresponding test in the
// same file for illustrative and learning purposes.

//function myCoolFunction() {
//  return 'Wow, what a cool function';
//}

var { getRate } = require('../src/get-rate');

describe('getRate()', function() {

  test('should return the correct rate when the rates, initial currency, and target currency are valid', function() {
    var rates = {
      USD: {
        CAD: 2,
      },
    };
    var initialCurrency = 'USD';
    var targetCurrency = 'CAD';

    var rate = getRate(rates, initialCurrency, targetCurrency);

    expect(rate).toBe(2);
  });

});



//describe('myCoolFunction()', function() {

  //test('should return the message: "Wow, what a cool function"', function() {
    //const result = myCoolFunction();

    //expect(result).toBe('Wow, what a cool function');
  //});

//});
