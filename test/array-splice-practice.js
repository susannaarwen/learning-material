const myArray = ['My', 'name', 'is', 'Susanna', 'and', 'I', 'am', 'so', 'awesome'];

console.log(myArray.join(' ') + '.');

myArray.splice(3, 1, 'Francesca');

console.log(myArray.join(' ') + '.');

myArray.splice(4, 0, 'everyone', 'alive', 'says');

console.log(myArray.join(' ') + '.');

// I am Susanna and my little sister's name is Francesca :) 