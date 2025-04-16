const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
  },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // Destructuring object arguement
  orderDeliveryObjCall({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDeliveryObjCall({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  StarterIndex: 2,
});
// **************** Destructuring ARRAY EXAMPLES *****************
const arr = [2, 3, 4];

// Assigning array values to seperate variables
const [x, y, z] = arr;
const [first, second] = restaurant.categories;

let [main, , secondary] = restaurant.categories;

// Switching variables
[secondary, main] = [main, secondary];

// Receive 2 values from a function that returns an array
const [starter, main2] = restaurant.order(2, 0);

// Array with nested array
const nested = [2, 4, [5, 6]];

//array values with nested array assigned to j
const [i, , j] = nested;

// Get values from nested array
const [p, , [l, m]] = nested;

// Set Default values when there is no value for an index in the array
const [u = 1, o = 1, t = 2] = [8, 9];

// **************** Destructuring Object EXAMPLES *****************

// Separating objectproperties to seperate variables
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Seperating values into new variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Set default valuae to object properties
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;

// need brackets when mutating
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//Nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// See in object above, the function DeliveryOBjCall which destructures the object arguement.  The order
// of the objects does not matter because the object properties are being set

// Spread operator, can spread all the array elements
const arr4 = [7, 8, 9];
const newArr = [1, 2, ...arr4];
console.log(newArr);

//Seperate values to print from the array
console.log(...newArr);

//add vslues to the rray, can accept values seperated arrguements
const newMenu = [...restaurant.mainMenu, 'New Element'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu]; // Shallow arrey

//Join 2 arrays
const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu2);

// Iterables are arrays, strings, maps, and sessionStorage, NOT objects, can use spread operator on strings
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

//cannot add ${...str} in `` syntax

const ingredients = [
  prompt("Lt's make paste!, ingredient 1?"),
  prompt("Lt's make paste!, ingredient 2?"),
  prompt("Lt's make paste!, ingredient 3?"),
];

// Call function spreading the array into separate variables sent to the 3 arguements in the function
restaurant.orderPasta(...ingredients);

//Spread function works on objects event if they are not iterabls
const newRestaurant = { foundedIn: 2889, ...restaurant, founder: 'Derek' };
console.log(newRestaurant);

//Shallow copies of objects
const restaurantCopy2 = { ...restaurant };
restaurantCopy2.name = 'Restaurant new';
console.log(restaurantCopy2.name);
console.log(restaurant.name);

// REST pattern  to pack elements into an array when ... is on the left hand side
const [ad, bc, ...others] = [1, 2, 3, 4, 5];
console.log(ad, bc, others);

const [pizza, , rissotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rissotto, otherFood);

// REST with Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// Function using spread and rest
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  return sum;
};

console.log(add(2, 3));

add(8, 3, 4, 6, 3, 5, 3);

// Spreading an array to a function and rest in function to create an array with the list of values
const x2 = [2, 3, 4];
add(...x2);

restaurant.orderPizza('pep', 'cheese', 'mushrooms');

//Short Circuiting (&& and ||)

// Use any data type and return any data type, short circuiting
console.log('-------- OR ---------');
console.log(3 || 'Jonas'); //OR operator, if first value is a truefy, then the first value will be returned

console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('-------- AND ---------');
console.log(0 && 'Jonas'); //AND returns the first falsy - returns zero since zero is a falsy value
console.log('Hello' && 23 && null && 'jonas');

restaurant.orderPizza && restaurant.orderPizza('mu', 'dkdk');
