/**
 * 1. var, let and const
 * 2. default paramter
 * 3. template string
 * 4. arrow functions
 * 5.destructuring and spread opearator
 * 6. Object.keys(), Object.values(), Object.entries()
 * 7.for of used in array and string
 * 8.for in used in object
 * 
 */


const {age, z, ...others} = {x:2, y:5, z:3, name: 'bleh', age: 55};

const [first, second, ...remaining ] = ['ram', 'sam', 'jodhu', 'modhu']