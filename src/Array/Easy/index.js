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

// function LRotateByOne(arr){
//     let temp = arr[0]
//     for(let i = 1; i < arr.length; i++){
//         arr[i - 1] = arr[i]
//     }
//     arr[arr.length - 1] = temp
//     return arr
// }
// console.log(LRotateByOne([1,2,3,4,5]))


// function LRotateByD(arr, k){
//     let temp = []
//     let n = arr.length
//     k = k%n 
//     console.log(k);
    
//     for(let i = 0; i < k; i++){
//         temp.push(arr[i])
//     }
//     for(let i = k; i < n; i++){
//         arr[i - k] = arr[i]
//     }
//     for(let i = n - k; i < n; i++){
//         arr[i] = temp[i - (n-k)]
//     }
//     console.log(arr);
    
// }
// LRotateByD([1,2,3,4,5],4)

// function RRotateByD(nums, k){
//     let n = nums.length    
//     k = k%n
//     let temp = nums.slice(n - k);
    
//     for (let i = n - 1; i >= k; i--) {
//         nums[i] = nums[i - k];
//     }
//     for(let i = 0 ; i < k; i++){
//         nums[i] =  temp[i]
//     }
//     console.log(nums);
    
// }
// RRotateByD([1,2,3,4,5,6,7], 3)