function cachingDecoratorNew(func) {
  let cache = {};
  return function (...args) {
    let hash = args.join(",");
    let keys = Object.keys(cache); 
    if(hash in cache) {
      console.log("Из кэша: " + cache[hash]);
      return "Из кэша: " + cache[hash];
    }
    else{
      if(keys.length === 5) {
        delete cache[keys[0]];
      }
      cache[hash] = func(...args);
      console.log("Вычисляем: " + cache[hash]);
      return "Вычисляем: " + cache[hash];
    }
  }
}


function debounceDecoratorNew(func,timeout) {
  let timeoutId = null;
  function wrapper(...args) {
    wrapper.allCount++;
    if(timeoutId){
      timeoutId = null;
      clearTimeout(timeoutId);
    }else {
      wrapper.count++;
      func(...args);
      timeoutId = setTimeout(()=> func(...args) ,timeout);
    }
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}