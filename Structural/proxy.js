function networkFetch(url) {
    return `${url} - response from the server`;
};

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArgument, argumentsList) {
    const url = argumentsList[0];

    if (cache.has(url)) {
      return `${url} - response from the CACHE`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArgument, argumentsList);
    }
  }
});

console.log('====================================');
console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('react.io'));
console.log(proxiedFetch('angular.io'));
console.log('====================================');