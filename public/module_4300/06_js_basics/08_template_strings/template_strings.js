// Template String - Template Literal

// let myString = `I am` + (25 * 7) + ' years old in dog years'
let myString = `I am ${(25 * 7)} years old in dog years`

// Zeldas shop

let firstName = 'Princess'
let lastName = 'Zelda'
let middleName = 'of Hyrule'

let qty = 3;
let item = 'Empty Jar'
let price = 50;
let shopName = 'Beedles Shop Ship'

let message = `
Hello ${firstName},

Thanks for purchasing ${qty} ${item}(s).

Order Details:
    ${firstName} ${lastName} ${middleName},
    ${qty} x $${price} = $${qty * price} of ${item}

You can pick your items up at will in 30 minutes
Thanks,
${shopName}`

console.log(message);