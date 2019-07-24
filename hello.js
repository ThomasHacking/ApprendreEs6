
// generate alphabet from a to z
const generateAlphabet = () => (Array.from(String.fromCharCode(...Array(123).keys()).slice(97)))


// return diff between 2 array
const arrayDifference = (a, b) => {
  if (a && b) {
   return a.filter(item => !b.includes(item))
 }
 return a
}
  const array = [1, 2, -2, -1, -4, 3, 4, 5, 6, 7, 0]
  const arrayPositive = [4, 8, 9, 12, 7]
  console.log('input Array: ', ...array)
  console.log('input Array Positive: ', ...arrayPositive)
 console.log('generateAlphabet Array: ', ...generateAlphabet())
 console.log('array difference: ', ...arrayDifference(array, arrayPositive))
