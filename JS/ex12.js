
const colors = {
    c1 : "green",
    c2 : "red",
    c3 : "blue",
    c4 : "pink",
    c5 : "purple",
    c6 : "brown",
    c7 : "gray",
    c8 : "yellow"
    
}


function coloring() {

    let arr = document.getElementsByClassName("box")

    for (let i = 0; i < 5; i++) {
        arr[i].style.backgroundColor = colors[`c${Math.floor(Math.random()*7)+1}`]
        arr[i].style.color = colors[`c${Math.floor(Math.random()*2)+1}`]
        
    }
    
}
coloring()
