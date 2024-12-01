// function largest(arr) {
//     let large = arr[0]
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > large){
//             large = arr[i]
//         }
//     }
//     return large
// }

// console.log(largest([1, 8, 7, 56, 90]));


// function getSecondLargest(arr) {
//     let largest = arr[0]
//     let sLargest = -1;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             sLargest = largest;
//             largest = arr[i] 
//         }
//         if(arr[i] < largest&&arr[i] > sLargest){
//             sLargest = arr[i]
//         }
//     }
//     return sLargest
// }
// console.log("second largset: ",getSecondLargest([12, 35, 1, 10, 34, 1]));

// function ifSorted(arr){
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] >= arr[i - 1]){}
//         else {
//             return false
//         }
//     }
//     return true
// }
// console.log(ifSorted([1,2,2]));