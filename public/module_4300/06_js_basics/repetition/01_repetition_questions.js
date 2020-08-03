/* Follow the guidelines in the comments */
/* Some code is incorrect and needs fixing */

/* 1. Define a string called name and make it equal to your own name  */
let name = 'Tobia Prezioso';

/* 2. Define a number called age and make it equal to your own age */
let age = 25;

/* 3. Define a string called hobby and make it equal to your favorite hobby */
let hobby = 'Gaming';

/* 4. Fix this console log so that it correctly concatenates your string */

console.log('My name is ' + name + ', I am ' + age + ' years old and love ' + hobby + '!');

/* 5. This console.log should be printing out 25, fix it */

var num = 25;

if (num === 25) {
  console.log(num);
}

/* 6. Something is wrong with this shopping list */

// var shoppingList = [apples; bananas; pears ; 'lettuce' };
var shoppingList = ['apples', 'bananas', 'pears', 'lettuce'];

/* 7. Now that you have fixed the shopping list, lets print out each individual item to the console using a loop*/

for (let i = 0; i < shoppingList.length; i++) {
  console.log(shoppingList[i]);
}
