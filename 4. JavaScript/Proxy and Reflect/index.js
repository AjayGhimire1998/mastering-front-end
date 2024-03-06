

let target = {}; 

let proxy = new Proxy(target, {}); //empty handler


proxy.test = 5;

console.log(proxy);
console.log(target);


for(let key in proxy){
    console.log(key);
}