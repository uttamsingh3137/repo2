// let obj = {
//     a:1,
//     b:12,
//     c:123
// }

// console.log(obj)


// let student = {
//     // class : "12th",
//     // section : "X",
//     Roll_no : "52"
// };
// let citizen = {
//     // country : "India",
//     // State : "delhi", 
//     district : "shahdra" 
// };

// student.__proto__ = citizen;
// console.log(student)

class Animal {
    constructor(name,color){
        this.name = name
        this.color = color
        console.log("Object bn gaya.........")
    }
    skills(){
        console.log("Maar deta h ")
    }
    habbits(){
        console.log("Sota h or khata h bs ")
    }
}
class Lion extends Animal{
	constructor(name,color){
        super(name,color)
        console.log("Object bn gaya.........")
    }
}

let a = new Animal("rabbit","white")
let b = new Animal("bear","black")

console.log(a)
console.log(b)

let l = new Lion("simba","yellow")



