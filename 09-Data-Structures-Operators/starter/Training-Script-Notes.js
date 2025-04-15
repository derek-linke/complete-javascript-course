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

// **************** Destructuring ARRAY EXAMPLES *****************
const arr = [2, 3, 4];

// Assigning array values to seperate variables
const [x, y, z] = arr;
const [first, second] = restaurant.categories;

let [main, , secondary] = restaurant.categories;

// Switching variables
[secondary, main] = [main, secondary];

// Receive 2 values from a function
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

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
