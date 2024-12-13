/**
 * you have an array of objects:
 * const instructor = [
 *    {name: 'Nodi', age: 28, position: Senior},
 *    {name: 'Akil', age: 26, position: Junior},
 *    {name: 'Shobuj', age: 30, position: Senior}
 * ]
 * 
 * your task is to display the instructor names that has the position senior using filter
 */


const instructor = [
  {name: 'Nodi', age: 28, position: 'Senior'},
  {name: 'Akil', age: 26, position: 'Junior'},
  {name: 'Shobuj', age: 30, position: 'Senior'}
]

const seniors = instructor.filter(ins => ins.position === 'Senior')
console.log(seniors);

const people = [
  {name: 'Meena', age: 20},
  {name: 'Rina', age: 15},
  {name: 'Suchorita', age: 22}
]

const sumAge = people.reduce((prev, current)=> prev + current.age,0);
console.log(sumAge);
