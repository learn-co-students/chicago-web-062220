//
//-------------------------------
// Arrow Functions
//-------------------------------

// when can i remove brackets? if the function is a single liner
// when do i use the return statement? if i dont have curly brackets
// when can i remove parens?  when i have a single argument


/*
function sum(a, b)  {
  return a + b
}


const arrowSum = (a, b) =>  { a + b }





console.log(sum(3, 4))
console.log(arrowSum(3, 4))
*/











 /*



function isPositive(num) {
  return num > 0
}

const isPositive2 = num => num > 0


console.log(isPositive(45), '------');
console.log(isPositive2(45), '------');

*/





/*


function randomNum() {
  return Math.random() * 10
}


const randomNum2 =  () => Math.random() * 10


console.log(randomNum())
console.log(randomNum2())

*/













































class Person {
  constructor(name){
    this.isHuman = true
    this.name = name 
  }

  sayName(){
    setInterval(() => {
      console.log('hi, my name is', this.name)
    }, 1000)
  }
}

// const seth= new Person('seth')

// seth.sayName()































//-------------------------------
// **Spread Operator**
//-------------------------------


// add key/val pairs of one obj to another:
 


const human = {
  name: 'raza',
  city: 'chicago'
}


// const updatedHuman = {
  // name: human.name,
  // city: human.city,
  // neighborhood: 'uptown'
// }

const updatedHuman = {
  ...human,
  name: 'haley'
}

// console.log(updatedHuman)










// add elements of one array to another:
const oddsArr = [1, 3, 5, 11]


const biggerOddsArr = [113, ...oddsArr, 45, 99]















// pass elements of an array into a f(x) as args



const foo = [1, 3, 5]


function addEm(x, y, z) {
  console.log(x + y + z)
}

// addEm(foo[0], foo[1], foo[2])
// addEm(...foo)































//-------------------------------
// **Rest Operator**
//-------------------------------
// condenses multiple elements into an array




function lotsOfArgs(mainVar, ...theRest){
  console.log('this is mainVar', mainVar);
  console.log('this is rest', theRest);
}


lotsOfArgs('hello', 'world', '!!!')



























//-------------------------------
// **Destructuring Operator**
//-------------------------------


// basic var assignment from obj
const eggs = {henA: 5, henB: 8}

const { henA, henB } = eggs

console.log(henB) // 8
console.log(henA) // 5

console.log(eggs.henB) //8
console.log(eggs.henA) //8










// nested var assignment from obj
const person= { 
  name: { 
    first: 'rob',
    last: 'cob',
  }, 
  city: 'chicago'
}

const { city } = person

const { name: { first, last } } = person



















// assign var assignment from arr 

const colors = ['red', 'white', 'yellow', 'green'];

const [ primaryColor, secondaryColor, ...backups ] = colors;

console.log(primaryColor) 
console.log(secondaryColor) 
console.log(backups) 















