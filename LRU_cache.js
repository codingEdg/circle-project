// LRU - chrome storage automatic eviction
const CACHE_KEY_SIZE = 20;
const cache = {

}

function getCacheValue(key) {
    if(!cache[key]) return "key not found";
    cache[key].timestamp = Date.now();
    return cache[key] && cache[key].value;

}

function setCache(key, value) {
    cache[key] = {
        value: value,
        timestamp: Date.now()
    }

    const cacheKey = Object.keys(cache)
    if(cacheKey.length > CACHE_KEY_SIZE){
        const oldestKey = cacheKey.sort((a, b) => cache[a].timestamp - cache[b].timestamp)[0]
        delete cache[oldestKey]
    }
}