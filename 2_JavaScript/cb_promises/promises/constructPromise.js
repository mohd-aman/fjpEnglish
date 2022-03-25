// let myPromise = new Promise(function(resolve,reject){
//     our code will come here

// })



let promise = new Promise(function(resolve,reject){
    const a = 4;
    const b = 4;
    if(a == b){
        resolve("Both are equal");
    }else{
        reject("Both are not equal");
    }
});


promise.then(function(data){
    console.log(data);
})

promise.catch(function(error){
    console.log(error);
})
