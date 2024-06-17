console.log("start");

let resolved = false;

document.getElementById("btn").addEventListener("click", () => {
    resolved = true;
});

function createPromiseWithRetry(promiseFn, retryCount, retryDelay) {
    return new Promise((resolve, reject) => {
        let retries = 0;

        function tryPromise() {
            promiseFn().then(resolve).catch((err) => {
                retries++;
                if (retries <= retryCount) {
                    console.log("retrying");
                    setTimeout(tryPromise, retryDelay);
                } else {
                    reject(err);
                    throw new Error("retry limit exceeded");
                }
            });
        }

        tryPromise();
    });
}

function createPromise() {
    return new Promise((res, rej) => {
        console.log("promise is created");
        if (resolved) {
            setTimeout(() => {
                res("success");
            }, 0);
        } else {
            rej(new Error("failed"));
        }
    });
}

createPromiseWithRetry(createPromise, 5, 5000)
    .then((result) => {
        console.log("Promise resolved with:", result);
    })
    .catch((error) => {
        console.error("Promise rejected with:", error);
    });

console.log("end");
