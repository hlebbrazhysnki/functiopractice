
// 1

// Function that returns a string representing a cup of green tea

const prepareTea = () => "greenTea";
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);


// 2


// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';
const prepareGreenTea = () => 'greenTea';
/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13)
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

// 3

// the global variable
var fixedValue = 4;

function incrementer() {
  // Add your code below this line
  return fixedValue + 1;

  // Add your code above this line
}

// 4

// The global variable
let fixedValue = 4;

// Only change code below this line
function incrementer(value) {
  return value + 1;
// Only change code above this line
}

// 5

// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName); 
  return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  let newArr = [...arr];
  if (newArr.indexOf(bookName) >= 0) { 
    newArr.splice(newArr.indexOf(bookName), 1); 
    return newArr;

    // Change code above this line
    }
}

const newBookList = add(bookList, 'A Brief History of Time');
const newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
const newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);



// 6


// Only change code below this line

const ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"]
}));

// Only change code above this line

console.log(JSON.stringify(ratings));

// 7

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});

// 8

var filteredList = watchList
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  })
  .filter(movie => {
    return parseFloat(movie.rating) >= 8.0;
  });

// 9


// Only change code below this line

var filteredList = watchList
  .map(movie => {
    return {
      title: movie.Title,
      rating: movie.imdbRating
    };
  })
  .filter(movie => {
    return parseFloat(movie.rating) >= 8.0;
  });
// Only change code above this line

console.log(filteredList);

// 10

let newArray = [];
this.forEach(function(x) {
  if (callback(x) == true) {
    newArray.push(x);
  }
});

// 11

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  let newArray = [];
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

// 12

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
    let newArray = [];
  this.forEach(function(x) {
    if (callback(x) == true) {
      newArray.push(x);
    }
  });
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});