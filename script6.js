const add = (a, b) => {
    console.log("Add function is called to get new value");
    return a+b;
};
const subtract = (a, b) => a-b;
const memoizedAdd = memoizeOne(add);

console.log(memoizedAdd(1, 2)); // 3
// Add function is called to get new value

console.log(memoizedAdd(1, 2)); // 3
// Add function is not executed: previous result is returned

// memoizedAdd(2, 3); // 5
// Add function is called to get new value

// memoizedAdd(2, 3); // 5
// Add function is not executed: previous result is returned

function memoizeOne(fn){
    const cache = {};
    return function(...args){
        const key = JSON.stringify(args);
        console.log(key)
        if(key in cache){
            console.log("memoize result")
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    }
}