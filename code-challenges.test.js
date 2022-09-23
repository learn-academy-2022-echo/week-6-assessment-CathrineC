// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

describe("sentence", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
      expect(sentence(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])     
  })
})

    // FAIL  ./code-challenges.test.js
    // sentence
    //   ✕ returns an array with a sentence about each person with their name capitalized
    // ● sentence › returns an array with a sentence about each person with their name capitalized
    //   ReferenceError: sentence is not defined

// b) Create the function that makes the test pass.
// PSEUDO CODE:
// -Input: Array of objects
// -Output:returns an array with a sentence about each person with their name capitalized
// - create a function that can loop through the array of objects
// - Name needs to be capitalized
//   - name has a data type object and needs to be converted into an array to be iterated
//   - once it is an array, each value has to have their first letter capitalized
//   - added a variable to push the values into once they are modified
//   - once both of the values are changed, combine the values into 1 string
// - display(return) a sentence calling in the new variable and the occupation

const sentence = (array) => {
      splitName = (array.map(element => {
          return (element.name).split(' ', 2).reduce((name1, name2) => {
                name1.push(name2.charAt(0).toUpperCase() + name2.substr(1))      
                  return name1
                },[]).join(' ')
      }))
   return (array.map((value, i) => `${splitName[i+=0]} is ${value.occupation}.`))
}            

    // PASS  ./code-challenges.test.js
    //   sentence
    //     ✓ returns an array with a sentence about each person with their name capitalized (2 ms)

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("remainder", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
      expect(remainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(remainder(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

    // FAIL  ./code-challenges.test.js
    // remainder
    //   ✕ returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)
    // ● remainder › returns an array of only the REMAINDERS of the numbers when divided by 3
    //   ReferenceError: remainder is not defined

// b) Create the function that makes the test pass.
// PSEUDO CODE:
// - Input: array of values with different data type
// -Output: returns an array of only the REMAINDERS of the numbers when divided by 3
// - create a function that can loop through the array
// - create a variable the will hold only numbers and filter out values with data type string, true, and false
// - create another variable that will loop through the numbers array and divide each number by 3
// - create a variable with empty array that will hold the remainders
// - return only the remainders and display the number 0 if there's no remainder

const remainder = (array) => {
    onlyNum = array.filter((value)=>{
      return (typeof value !== 'string' && value !== true && value !== false)
})
    remNum = []
    div3 = onlyNum.filter((num) =>{
      if (num % 3 == 0) {
        return remNum.push(0)
      } else 
        return remNum.push(num % 3)
})
return remNum      
}

    // PASS  ./code-challenges.test.js
    // remainder
    //   ✓ returns an array of only the REMAINDERS of the numbers when divided by 3 (2 ms)

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

describe("sumNum", () => {
  it("returns the sum of all the numbers cubed", () => {
      expect(sumNum(cubeAndSum1)).toEqual(99)
      expect(sumNum(cubeAndSum2)).toEqual(1125)
  })
})

  // FAIL  ./code-challenges.test.js
  // sumNum
  //   ✕ returns the sum of all the numbers cubed (1 ms)
  // ● sumNum › returns the sum of all the numbers cubed
  //   ReferenceError: remainder is not defined

// b) Create the function that makes the test pass.
// PSEUDO CODE:
// - create a function that can loop through the array

// PSEUDO CODE:
// - Input: array of numbers
// - Output: sum of all the cubed numbers
// - create a function that can loop through the array
// - create a variable that will hold the cubed numbers
// - cube the numbers using the ** 3
// - create another value that will hold the sum of numbers from each index
// - return the sum of the cubed numbers

const sumNum = (array) => {
  let cubed = (array.map(num => {
    return num ** 3
  }))  
  sum = cubed.reduce((value, i) => value += i, 0)
    return sum
  }

  // PASS  ./code-challenges.test.js
  // sumNum
  //   ✓ returns the sum of all the numbers cubed (2 ms)