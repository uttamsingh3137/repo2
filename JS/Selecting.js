console.log("coding hori h guys")

let a = document.getElementsByClassName("box")
console.log(a)

a[2].style.backgroundColor = "red"

document.getElementById("greenbox").style.backgroundColor = "green"

document.querySelector(".box").style.backgroundColor ="brown"
document.querySelectorAll(".box").forEach(e =>{

        e.style.backgroundColor = "green"
})

console.log(document.getElementsByTagName("div"))
 
let x = document.getElementsByTagName("div")

console.log(x[2].matches("#greenbox") )
console.log(x[2].closest("container") )
console.log(x[2].closest("box") )
console.log(x[2].closest("html") )