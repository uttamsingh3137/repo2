let button = document.getElementById("btn")

button.addEventListener("click" , () =>{
    // alert("I am clicked")
    document.querySelector(".box").innerHTML = "<b>I a being clicked by you</b>"
})
button.addEventListener("dblclick" , () =>{
    // alert("I am clicked")
    document.querySelector(".box").innerHTML = "<b>I a being double clicked by you</b>"
})

document.addEventListener("keydown" , (e) => {
    console.log(e.key)
})