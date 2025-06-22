
let r = Math.random()
let a = prompt("Enter first number : ")
let c = prompt("Enter the operator : ")
let b = prompt("Enter second number : ")


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"

}
console.log(r)
if (r > 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b} `)}`)
    console.log(`The result is ${a} ${c} ${b}`)
}
else {
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}