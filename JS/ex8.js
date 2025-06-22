let r = Math.random()

if(r<0.3){
    let x = "Crazy"
}
else if(r>=0.33 && r<0.66){
    let x = "Amazing"
}
else{
    let x = "Fire"
}

//.........................
if(r<0.3){
    let y = "Engine"
}
else if(r>=0.33 && r<0.66){
    let y = "Food"
}
else{
    let y = "Garment"
}
//..........................
if(r<0.3){
    let z = "Bros"
}
else if(r>=0.33 && r<0.66){
    let z = "Limited"
}
else{
    let z = "Hub"
}
//..........................
alert(`${eval(`${x} ${y} ${z}`)}`)
console.log(`${x}${y}${z}`)