/*
{

    const myPromise = new Promise ((res, rej)=>{
        console.log("promise is created")
        const btn = document.querySelector('#btn');
        btn.addEventListener('click',(e)=>{
            res("success")
            
        });
        const btn2 = document.querySelector('#btn2');
        btn2.addEventListener('click',(e)=> rej("error"))
        
    })
    
    myPromise.then((data)=>{console.log(data)}).catch((err)=>{
        console.log(err)
        myPromise.then((data)=>{console.log(data)})
    }).finally(()=>{console.log("done all work")})
    
}

{
    let count = 3
    function createPromiseWithRetry(retryCount) {
        return new Promise((res, rej) => {
            console.log("promise is created");
            const btn = document.querySelector('#btn');
            btn.addEventListener('click', (e) => {
                res("success");
            });
            const btn2 = document.querySelector('#btn2');
            btn2.addEventListener('click', (e) => rej("error"));
        }).catch(err => {
            if (retryCount > 0) {
                console.log("Retrying...");
                return createPromiseWithRetry(retryCount - 1);
            } else {
                console.log(err);
                throw new Error("Maximum retry count reached");
            }
        });
    }
    
    createPromiseWithRetry(count)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.error(err.message);
        })
        .finally(() => {
            console.log("done all work");
        });
    
}
*/
{
    let count = 3;
    function createPromiseWithRetry(count){
        return new Promise((res, rej)=>{
            console.log("promise created")
            const btn = document.querySelector('#btn');
            btn.addEventListener('click', ()=>{
                res("success")
            })
            const btn2 = document.querySelector('#btn2');
            btn2.addEventListener('click', ()=>{
                rej("error")
            })
        }).catch((err)=>{
            if(count > 0){
                console.log("retrying")
                return createPromiseWithRetry(count-1)
            }else{
                console.log(err)
                throw new Error("maximum retry count reached")
            }
        });
    }



    createPromiseWithRetry(count)
       .then((data)=>{
            console.log(data)
        })
       .catch((err)=>{
            console.log(err)
        })
       .finally(()=>{
            console.log("done all work")
        })
}