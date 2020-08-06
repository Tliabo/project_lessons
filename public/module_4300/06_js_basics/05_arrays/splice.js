/*
  Splice
 */

// array.splice(start[,deleteCount[,item[,item]]])

let month = ['Jan', 'March', 'April', 'June'];

let extras = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez'];

// month.splice(1, 3, 'Feb');

// Add 'Feb' in index 1 deleting 0 items
month.splice(1, 0, 'Feb');

month.splice(4, 0, 'Mai');

for (let i = 0; i < extras.length; i++) {
  // month.push(extras[i]);
  month.splice(month.length, 0, extras[i]);
}

console.log(month);
