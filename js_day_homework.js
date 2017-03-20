// Section 1

// What types are these?

/* 1.1 */ 1; //number
/* 1.2 */ "cat"; // string
/* 1.3 */ true; // boolean
/* 1.4 */ []; //array
/* 1.5 */ {}; // object
/* 1.6 */ 1.1; //number
/* 1.7 */ var myVariable; //undefined


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1; //true
/* 2.2 */ "cat"; //true
/* 2.3 */ true; // true
/* 2.4 */ NaN; //false
/* 2.5 */ []; //true
/* 2.6 */ {}; // true
/* 2.7 */ undefined; // false
/* 2.8 */ ""; //true but if " " false.
/* 2.9 */ 0; //false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number  // var number = 1;
// 3.2 Assign a variable that is a string // var aString = "cat";
// 3.3 Assign a variable that is a boolean // var truey = true;
// 3.4 Assign a variable that is an object // var obj = {};


// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

  function maybeHello(boo){
    if (boo === true){
      console.log("hello");
    }
    else {
      console.log("bye");
    }
  }

  maybeHello("true");
  maybeHello(true);

// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
 var firstAnimal = animals.shift();


// 5.2. Assign the last element to a variable
var lastAnimal = animals.pop();


// 5.3. Assign the length of an array to a variable
  var lengtharr = animals.length;


// 5.4. Add an item to the end of the array
  animals.push("cat");

// 5.5. Add an item to the start of the array
animals.unshift("dog");
console.log(animals);

// 5.6. Assign the index of hedgehog to a variable
  var indexforHedge = animals.indexOf("hedgehog");
  console.log(indexforHedge);


// Section 6

// 6.1 Create an array of 5 that should be vegetables

var vegetablesArr = ["Bacon", "Tomato", "Lettuce", "Onion", "Cheese"];

// 6.2 Loop over the array and write to the console using a "while"
  

  function whileLoop(arr){
    var i = 0;
  while ( i < arr.length){
    console.log(i);
    i++
  }
}

whileLoop(vegetablesArr);

// 6.3 Loop again using a "for" with a counter

function forLoopWithCounter(arr){
  for (var i = 0; i < arr.length; i++ ){
    console.log(arr[i]);
  }
}

forLoopWithCounter(vegetablesArr);

// 6.4 Loop again using a "for of"

function forLoop(arr){
  for (var vege of arr){
    console.log(vege);
  }
}

forLoop(vegetablesArr);


// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts

  var total = 0;
  for (var account of accounts){
      total += account.amount;
    }
  console.log(total);

// 7.2 Find the amount of money in the account with the largest balance
  var arr = [];
  for (var account of accounts){
      arr.push(account.amount);
  }

var max = Math.max.apply(null, arr);
console.log(max);

// 7.3 Find the name of the account with the smallest balance

  var arr = [];

  function findName(accounts){
  for (var account of accounts){
      arr.push(account.amount);
  }
    var min = Math.min.apply(null, arr);
    console.log(min);

  for (var account of accounts){
    if (account.amount === min){
      return account.name;
    }
  }
}

 console.log(findName(accounts));

// 7.4 Calculate the average bank account value

  function findAvgBankAccountvalue(){
     var total = 0;
    for (var account of accounts){
      total += account.amount;

    }
     var avg = total / accounts.length;
     return avg;
  }

  console.log(findAvgBankAccountvalue());

// 7.5 Find the value of marcs bank account
// 7.6 Find the holder of the largest bank account
// 7.7 Calculate the total cash in business accounts
// 7.8 Find the largest personal account owner


// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method
