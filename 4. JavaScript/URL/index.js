let url = new URL('https://google.com/search');



url.searchParams.set('q', 'test me!');
console.log(url);

url.searchParams.set('tbs', 'qdr:y'); // 
console.log(url);

for(let [name, value] of url.searchParams) {
    console.log(`${name}=${value}`); // q=test me!, then tbs=qdr:y
  }