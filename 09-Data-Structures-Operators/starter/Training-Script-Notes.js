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

// ########### Spread operator, can spread all the array elements
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

// const ingredients = [
//   prompt("Lt's make paste!, ingredient 1?"),
//   prompt("Lt's make paste!, ingredient 2?"),
//   prompt("Lt's make paste!, ingredient 3?"),
// ];

// // Call function spreading the array into separate variables sent to the 3 arguements in the function
// restaurant.orderPasta(...ingredients);

//Spread function works on objects event if they are not iterabls
const newRestaurant = { foundedIn: 2889, ...restaurant, founder: 'Derek' };
console.log(newRestaurant);

//Shallow copies of objects
const restaurantCopy2 = { ...restaurant };
restaurantCopy2.name = 'Restaurant new';
console.log(restaurantCopy2.name);
console.log(restaurant.name);

// ################ REST pattern  to pack elements into an array when ... is on the left hand side
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

//############ Short Circuiting (&& and ||)

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

//### AND
// restaurant.numGuests = 0;
const guests3 = restaurant.numGuests && 10;
console.log(restaurant.numGuests);
console.log('Guests 3:' + guests3);

//##### Nullish Coalescing Operator, like or ||.
//##### Nullish: nul and undefoned (NOT 0 or '') if null or undefined, move on to the next value which is not null or undefined but accepts 0 and other values
restaurant.numGuests = 0;
const guests4 = restaurant.numGuests ?? 10;
console.log(restaurant.numGuests);
console.log('Guests 4:' + guests4);

// ##### Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  numGuests: 20,
  numGuests2: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni',
};

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

console.log(rest1);
console.log(rest2);

//# Logical operators OR
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

rest1.numGuests2 ??= 10;
rest2.numGuests2 ??= 10;

console.log(rest1);
console.log(rest2);

//# Logical operators AND
rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';
console.log(rest1);
console.log(rest2);

//## Assignment

const book = ['book1', 'book2', 'book3'];
const [firstBook, secondBook] = book;
console.log(firstBook, secondBook);

const [, , thirdBook] = book;

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];
2;
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];
const { title, author, ISBN } = books[0];
console.log(title, author, ISBN);

const { keywords: tags2 } = books[0];
console.log(tags2);

const { language, programmingLanguage = 'unknown' } = books[6];
console.log(language, programmingLanguage);

// let bookTitleName = 'unknown';
// let bookAuthorName = 'unknown';

const { title: bookTitleName, author: bookAuthorName } = books[0];
console.log(bookTitleName, bookAuthorName);

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];
console.log(bookRating);

function printBookInfo({ title, author, year = 'year unknown' }) {
  console.log(`${title} by ${author}, ${year} `);
}

printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: '2011',
});

printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' });

const bookAuthors = [...books[0].author, ...books[1].author];
console.log(bookAuthors);

function spellWord(strWord) {
  console.log(strWord);
  console.log(...strWord);
  const test = [...strWord];
  console.log(test);
}

spellWord('JavaScript');

const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
}

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

function hasExamplesInJava(booksObject) {
  return booksObject.programmingLanguage === 'Java' || 'No data available!';
}

console.log(hasExamplesInJava(books[1]));

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`${books[i].title}  provides online content`);
}

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(`${books[i].title}  provides no data about its online content`);
}

for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
}

for (let i = 0; i < books.length; i++) {
  books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
}

let pageSum = 0;
for (let book of books) {
  pageSum += book.pages;
}

const allAuthors = [];

console.log(typeof allAuthors);

for (let book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      console.log('Author' + author);
      allAuthors.push(author);
    }
  }
}

console.log(allAuthors);
