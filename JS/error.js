let a = prompt("Enter first number : ")
let b = prompt("Enter second number : ")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("You have not entered an int")
}

let sum = parseInt(a) + parseInt(b)

console.log("The sum is : "+ sum)


function main(){

    let x = 1;

    try {
    console.log("The sum is : "+ sum*x)
    } catch (error) {
    console.log("The sum is error bro")
    }
    finally{
    console.log("finally agya ")
    }

}
let c = main()