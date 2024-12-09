// 1. Two Sum

// 1. Brute Force

// function twoSum(arr, k){
//     let n = arr.length
//     for(let i = 0; i < n; i++){
//         let sum = 0
//         for(let j = i + 1; j < n; j++){
//             sum = arr[i] + arr[j]
//             if(sum == k){
//                 return [i, j]
//             }
//         }
//     }
//     return [ -1, -1]
// }
// console.log(twoSum([2,7,11,15], 9));


// 2. Better way

// function twoSum(arr, k){
//     const map = new Map();
//     for(let i = 0; i < arr.length; i++){
//         let a = arr[i]
//         let moreNeeded = k - a
//         if (map.has(moreNeeded)) {
//             return [map.get(moreNeeded), i];
//         }
//         map.set(a, i);
//         console.log(map);
        
//     }
//     return [ -1, -1]
// }
// console.log(twoSum([2,7,11,15], 9));

// 3.