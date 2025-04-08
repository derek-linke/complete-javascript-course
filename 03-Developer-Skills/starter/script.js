// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Degrees celsius for each item in the array
//Each entry value in the array, the index represents the number of days
//Need to create a function tahat accepts an array arguement and prints the temperature and number of days
// --Need a loop to build a string with the temperature and numer of days into a variable
// --Once the string is created, print the string value

const forecastMaxTemp1 = [17, 21, 23];
const forecastMaxTemp2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let printStringVal = ' ... ';

  for (let dayNum = 0; dayNum < arr.length; dayNum++) {
    printStringVal += `${arr[dayNum]} Celsius in ${dayNum + 1} days ... `;
  }

  console.log(printStringVal);
};

printForecast(forecastMaxTemp1);
printForecast(forecastMaxTemp2);
