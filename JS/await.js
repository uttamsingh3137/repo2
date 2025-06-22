async function main(){
    console.log(" Printing Line 1")
    console.log(" Printing Line 2")
    let i = await func()
    console.log(i)
    console.log(" Printing Line 5")
    console.log(" Printing Line 6")
}

async function func(){

    let x  = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data
}
// async function func(){

    
//     console.log(" Printing Line 3")
//     console.log(" Printing Line 4")

//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             resolve(7488)
//         },3000)
//     })
    
// }
main()