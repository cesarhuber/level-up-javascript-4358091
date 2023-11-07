// Write your code here
// iteration way
// function numPermutations(str) {
//   let total;
//   for (let i = 1; i <= str.length; i++) {
//     if (total === undefined) {
//       total = i;
//       continue
//     }
//     total *= i;
//   }
//   return total;
// }

// console.log(numPermutations("permutations"))

// recursive way
function numPermutations(letters) {
  if (letters.length === 1) return 1
  return letters.length * numPermutations(letters.slice(1))
}

console.log(numPermutations("hello"))