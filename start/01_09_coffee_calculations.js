// Write your code here
// array of int > 0
// price per coffee: 1.25
// return "The total bill is ${total}"

function calculateTotal(ordersArray) {
  const price = 1.25;
  const total = ordersArray.reduce(
    (total, order) => total + (order * price), 0
  )
  return `The total bill is $${total}`;
}

console.log(calculateTotal([1,2,3,7]))