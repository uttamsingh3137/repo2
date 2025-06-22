// let n = 5

// function fact(n){
//     let ans = 1
//     for(let i=1 ; i<= n ;i++){
//          ans = ans*i
//     }
//     return ans
// }
// console.log(fact(n))



// var array = [];

// function factor(num) {
//   for (i = 1; i <= num; i++) {
//     array.push(i);
//   }  
//   array.reduce(function(a, b) {return a*b})
// };

// console.log(factor(7))


// let a = 6

// function factorial(number) {
//   let arr = Array.from(Array(number).keys())
//   console.log(arr.slice(1,))

//   let c = arr.slice(1,).reduce((a, b) => a * b)
//   console.log (c)
// }

// factorial(a)


let n = 6

function fact(n){

  let ans = 1

  for (let i = 1; i < n; i++) {
    ans *=i
  }

  return ans
}
console.log(fact(n))