async function autoRetryPromise(fether, maximumRetryCount){
    let retryCount = 0;
    while(retryCount < maximumRetryCount){
        try{
            return await fether();
        }catch(err){
            retryCount++;
            console.log("retrying",retryCount);
        }
    }
    throw new Error("maximum retry count reached");
}

const p1 = new Promise((res, rej)=> res("p1 success"))
const p2 = new Promise((res, rej)=> {
    if(Math.random() < 0.5){
        res("p2 success")
    }else{
        rej("p2 error")
    }
})

autoRetryPromise(() => p2, 3).then((w) =>console.log("it is successful",w)).catch((er) => console.log("failure",er))