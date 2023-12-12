

// let nums = [1,2,3,10];
// for(let i = 0 ; i < nums.length; i++){
//     console.log(nums[i]);
// }

//for..of iterator

// for(let num of nums){
//     console.log(num);
// }

// const str = "hello";

// for(let char of str){
//     console.log(char.toUpperCase());
// }

// var uint8 = new Uint8Array([15, 192, 16]);

// for (var byte of uint8) {
//     console.log(byte);
//    console.log(byte.toString(2));
// }


//a simple iterator

let nums = [1,5,167];

function makeIterator( nums ) {
//     let start = 0;
//     let end = nums.length;
//     const iterables = [];
//     while (start <= end){
//         if (start === end){
//             iterables.push({value: undefined, done: true})
//         } else {
//             iterables.push({value: nums[start], done: false})
//         }
//         start++;
//     }
//   return {
//     next() {
        
//     }
//   }

let count = 0;

return {
    next(){
        if(count > nums.length - 1){
            return {value: undefined, done: true}
        }
        return {value: nums[count++], done: false}
    }
}
}
let iter = makeIterator(nums);
console.log(iter.next());
console.log(iter.next());