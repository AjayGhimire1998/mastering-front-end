export let admin = {
  name: "John",
};

console.log(import.meta.url);

// 📁 say.js
export function hi() {
  alert(`Hello`);
}

export function bye() {
  alert(`Bye`);
}
