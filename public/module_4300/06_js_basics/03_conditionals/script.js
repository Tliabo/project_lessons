var a = 10;
var b = 15;
var c = 20;

if (a === b) {
  console.log('A is equal to B')
} else {
  console.log('A is not equal to B')
}

if (a === b || c > a || c < b) {
  console.log('success')
} else {
  console.log('failure')
}

// else if ..

if (a == b || c == a || b == a) {
  console.log('option 1')
} else if (b == b || a == c) {
  console.log('option 2') // we get this option
} else {
  console.log('option 3')
}

if (b > a) {
  if (a != 10) {
    console.log('A is not 10')
  } else {
    console.log('Else') // this is it
  }
} else if (c > a) {
  if (a == 10) {
    console.log('A is 10')
  } else {
    console.log('else')
  }
} else {
  console.log('none of the above')
}