let P = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("数据");
        // reject();
    
    },2000)
});



setInterval(function(){
    console.log(P);
},5000)