// This file will contain the primary logic for the currency conversion program.
// To run the program use the `node` command followed by the name of this file.
// ie. `node currency-converter.js`.

// This file has been split up into several sections, each of which focuses on a
// portion of the program. Completing each of these sections in order should result
// in a functional, testable program. However, please free to approach the problem
// differently. There are many paths and approaches that result in a perfectly
// valid finished product.

 
// var { validateUserInput } = require('./validate-user-input');
// var ?

//The above code exports and imports files from other locations

// --------------------------------------------------
// Step 1: Capture user input
// --------------------------------------------------
// In this step we will capture the command line  information supplied by the user.

// We will store each piece of information in a dedicated variable for later use.
// console.log(process.argv);
//process.argv.map(function(item) {
//    console.log(item);
 //   return item;
//});

// node currency-converter.js 50 USD CAD
var amount = process.argv[2] //This should contain the first input
var initialCurrency = process.argv[3]; //This should contain the second input
var targetCurrency = process.argv[4]; //This should contain the third input

//console.log('The amount is:', amount);
//console.log('The initialCurrency is:', initialCurrency);
//console.log('The targetCurrency is:', targetCurrency);

// --------------------------------------------------
// Step 2: Validate user input
// --------------------------------------------------
// Next we will ensure that the user has provided all of the require information.

// If any of the required information is missing, display a meaningful message
// and exit the program.

//function validateUserInput(amount, initialCurrency, targetCurrency) {
if (amount === undefined || initialCurrency === undefined || targetCurrency === undefined) {
    console.log('Whoops, you did not provide the amount, initial currency, or target currency.');
    process.exit();
}

//function validateUserInput() {
    //if (amount === undefined || initialCurrency === undefined || targetCurrency === undefined) {
        //console.log('Whoops, you did not provide the amount, initial currency, or target currency.');
        //process.exit();
        //}
    //}

//imported from Node
//
//validateUserInput(amount, initialCurrency, targetCurrency);

//console.log('This message comes after the if statement');


// --------------------------------------------------
// Step 3: Define currency conversion rates
// --------------------------------------------------
// Here we will define which currency conversions are supported, as well as the
// rates between each currency. We will capture this information as an object
// and store it in dedicated varaible for later use.

// We will use the official currency abbreviation for each currency (eg. USD, CAD, etc.).

// The conversion rates do not have to be accurate, athough this resource contains
// up-to-date rate information: https://www.xe.com/

// var usdToCadRate = 2;
// var cadToUsdRate = 0.5;

var rates = {
   USD: {
       CAD: 2,
   },

   CAD: {
      USD: 0.5, 
  },
};

//console.log(rates);
//console.log(rates[initialCurrency]);
//console.log(rates[initialCurrency][targetCurrency]);

// --------------------------------------------------
// Step 4: Ensure that a conversion rate exists
// --------------------------------------------------
// Since it is possible for the user to supply invalid or unsupported currencies,
// we must check for the presence of a rate before attempting to convert.

// If the user supplies an invalid initial or target currency, display a meaningful
// warning message and exit the program.
if (rates[initialCurrency] === undefined) {
    console.log('Whoops, the initial currency is invalid.', initialCurrency);
    process.exit();
}

if (rates[initialCurrency] !== undefined && rates[initialCurrency][targetCurrency] === undefined) {
    console.log('Whoops, target currency is invalid.', targetCurrency);
    process.exit();
}

//console.log('The following currencies are valid:', initialCurrency, targetCurrency);

// --------------------------------------------------
// Step 5: Perform conversion
// --------------------------------------------------
// At this point we've confirmed that the user has supplied all of the necessary
// information, and that a rate exists for each of the currencies.

// Now we will compute the rate, apply it to the amount, and capture the result.
//function getRate(rates, initialCurrency, targetCurrency)
//{
   // return rates[initialCurrency][targetCurrency];
////}
//module.exports = {
//    getrate,
//};

var rate = rates[initialCurrency][targetCurrency];
//console.log('The rate is:', rate);

var result = amount * rate;
//console.log('The result is:', result);



// --------------------------------------------------
// Step 6: Display results
// --------------------------------------------------
// Finally we will display the result as part of a meaningful message.

// This message should also include the original amount and currency information
// supplied by the user.
console.log(`Successfully converted ${amount} ${initialCurrency} into ${result} ${targetCurrency}.`);
