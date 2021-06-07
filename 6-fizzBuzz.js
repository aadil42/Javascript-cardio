const fizzBuzz = (numberArr) => {

numberArr.forEach(element => {
  
  if(element % 3 !== 0 && element % 5 !== 0) console.log(element);
  if(element % 3 === 0 && element % 5 !== 0) console.log("Fizz");
  if(element % 5 === 0 && element % 3 !== 0) console.log("Buzz");
  if(element % 3 === 0 && element % 5 === 0) console.log("FizzBuzz");
});
} 

// this is the array that will be passed to the funciton 
let emptyArr = [];
for(let i = 1; i < 101; i++) {
  emptyArr.push(i);
}


console.log(fizzBuzz(emptyArr));