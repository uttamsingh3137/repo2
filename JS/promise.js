console.log('This is a Promise')

let prom1 = new Promise((resolve,reject) => {
    let a = Math.random()
    if(a<0.5){
        reject("Not Working")
    }
    else{
        setTimeout(()=>{
            console.log("It is working")
            resolve("Done")

        },2000);
    }
})


let prom2 = new Promise((resolve,reject) => {
    let a = Math.random()
    if(a<0.5){
        reject("Not Working")
    }
    else{
        setTimeout(()=>{
            console.log("It is working 2")
            resolve("Done 2")

        },2000);
    }
})

// prom1.then((a) => {
//     console.log(a)
// }).catch((err) =>{
//     console.log(err)
// })

// let promx = Promise.all([prom1,prom2])
// promx.then((a) =>{
//     console.log(a)
// })
let promy = Promise.race([prom1,prom2]) //output the first which is executed
promy.then((a) =>{
    console.log(a)
})
// let promy = Promise.allSettled([prom1,prom2])
// promy.then((a) =>{
//     console.log(a)
// })
