let report = [
  {
    client: {
      firstName: 'Harry',
      lastName: 'Potter',
      title: 'Mr.'
    },
    purchases: [
      {
        item: 'Polyjuice Potion',
        price: 50,
        quantity: 3
      }, {
        item: 'Book of Monsters',
        price: 34,
        quantity: 1
      }, {
        item: 'Nimbus 2020 Deluxe',
        price: 2999,
        quantity: 1
      }
    ],
    shop: 'ShopItAll - Diagon Alley',
    date: '15 Aug 1996'
  },
  {
    client: {
      firstName: 'Hermiony',
      lastName: 'Granger',
      title: 'Ms.'
    },
    purchases: [
      {
        item: 'Pixie Hair Wand',
        price: 89,
        quantity: 1
      }, {
        item: 'History of Hogwarts',
        price: 35,
        quantity: 1
      }, {
        item: 'Hair Pin',
        price: 0.89,
        quantity: 5
      }, {
        item: 'Gryffindor Scarf',
        price: 3.97,
        quantity: 5
      }
    ],
    shop: 'ShopItAll - Hogsmeade',
    date: '21 Aug 1996'
  },
  {
    client: {
      firstName: 'Luna',
      lastName: 'Lovewood',
      title: 'Ms.'
    },
    purchases: [
      {
        item: 'Butterbeer',
        price: 1.25,
        quantity: 5
      }, {
        item: 'Lion Hat',
        price: 89.99,
        quantity: 1
      }, {
        item: 'Spectrespecs',
        price: 23,
        quantity: 1
      }, {
        item: 'Quibbler',
        price: 2.14,
        quantity: 4
      }
    ],
    shop: 'ShopItAll - Diagon Alley',
    date: '20 Sep 1996'
  }
];

function getPurchaseList(purchases) {

  let receipt = ``;
  let totalPrice = 0;

  for (let i = 0; i < purchases.length; i++) {

    let quantity = purchases[i].quantity;
    let item = purchases[i].item;
    let price = purchases[i].price;

    receipt += `\n\t\t${quantity}x ${item} for ${price}G. Total : ${quantity * price}G \n`;
    totalPrice += price * quantity;
  }

  receipt += `
-----------------------------------------
TOTAL: ${totalPrice}G
-----------------------------------------`;

  return receipt;
}

function getReceipt(reportPos) {
  return `^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Dear ${reportPos.client.title} ${reportPos.client.firstName} ${reportPos.client.lastName},

Thank you for visiting us at ${reportPos.shop}

Here is your online receipt :
${getPurchaseList(reportPos.purchases)}
Please do not hesitate to contact us if you have any questions
${reportPos.date}
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`;
}

// console.log(getReceipt(report[0]));

// for (let i = 0; i < report.length; i++) {
//   console.log(getReceipt(report[i]));
// }

// Array.forEach()

// report.forEach(function (clientDetails) {
//   console.log(clientDetails)
// })

// foreach with arrowFunction
// report.forEach( clientDetails => {
//   console.log(clientDetails)
// })