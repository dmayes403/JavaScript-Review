var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

  //code here

function last(arr){
  return arr[arr.length-1];
}

alert(last(threeItems));

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even
var evenArray = [1,2,3,6,22,98,45,23,22,12];

  //code here

evenArray.filter(function(item){
  if(item % 2 === 0){
    return item;
  }
})


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full of numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

  //code here

  var rando = getRandomArbitrary();
  console.log(rando);

  var result = randomArray.some((item) => item === rando)
  console.log(result)

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

second = first.slice(0,5);
second.push(6,7);
console.log(second);

  //code here

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

  //code here

function longest(sentence){
  var longer = sentence.split(' ');
  var longestArr = ''
  longer.forEach(function(item){
    if(item.length > longestArr.length){
      longestArr = item;
    }
  })
  console.log(longestArr);
}

longest(sentence);
/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
function Capitalize(poem){
  var splitter = poem.split(' ');
  var newArr = [];
  splitter.forEach(function(item){
     newArr.push(item.slice(0,1).toUpperCase() + item.slice(1));
  })
  newArr = newArr.join(' ')
  console.log(newArr);
}


//write a function called capitalize that takes in the myPoem variable and capitalizes every word
var myPoem = 'What is a jQuery but a misunderstood object?'

Capitalize(myPoem);
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

  //code here



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function vowelCounter(vowels){
  var splitter = vowels.split('');
  var counter = 0;
  splitter.forEach(function(item){
    if(item === 'a' || item === 'A' || item === 'e' || item === 'E' || item === 'i' || item === 'I' || item === 'o' || item === 'O' || item === 'u' || item === 'U' || item === 'y' || item === 'Y'){
      counter++;
    }
  })
  console.log(counter);
}

vowelCounter(theOdyssey);
