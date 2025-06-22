document.querySelector(".child").addEventListener("click",(e) => {
    e.stopPropagation()
    alert("Child was cliccked")
} )

document.querySelector(".childcontainer").addEventListener("click",(e) => {
    e.stopPropagation()
    alert("Child Container  was cliccked")
} )

document.querySelector(".container").addEventListener("click",(e) => {
    e.stopPropagation()
    alert("Container was cliccked")
} )


setInterval(() => {
   document.querySelector(".child").style.backgroundColor = "red"
} ,1000)
setTimeout(() => {
   document.querySelector(".child").style.backgroundColor = "red"
} ,5000)