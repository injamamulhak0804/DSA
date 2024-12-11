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

// 3. Optimal way

// function twoSum(nums, k){
//     let n = nums.length
//     let left = 0;
//     let right = n - 1;
//     let sortNums = nums.sort((a, b)=> a - b)
//     while(left < right){
//         let sum = sortNums[left] + sortNums[right]         
//         if(sum == k){
//             return "YES"
//         }
//         else if(sum < k){
//             console.log("sum is greater");
//             left++
//         }
//         else right--
//     }
//     return "NO"
// }
// console.log(twoSum([2,11,7,15], 9));


// 2. SORT ANY ARRAY OF 0 and 1 and 2

//-------------- 1.Brute use sort
 
// function SortZeroOneTwo(nums, n){
//     return nums.sort((a, b)=> a - b)
// }
// console.log(SortZeroOneTwo([0,1,1,2,0,0,2,1,1,1,0]));

//------------- 2. Better way

// function SortZeroOneTwo(nums){
//     let n = nums.length
    
//     let count0 = 0
//     let count1 = 0
//     let count2 = 0

//     for(let i = 0; i < n; i++){
//         if(nums[i]==0) count0++
//         if(nums[i]==1) count1++
//         if(nums[i]==2) count2++
//     }
    
//     for(let i = 0; i < count0; i++) nums[i] = 0
//     for(let i = count0; i < count0 + count1; i++) nums[i] = 1
//     for(let i = count0 + count1; i < n; i++) nums[i] = 2
//     return nums

// }
// console.log(SortZeroOneTwo([0,1,1,2,0,0,2,1,1,1,0]));

// -------------- 3.Optimal
 
// function SortZeroOneTwo(nums){
//     let n = nums.length;
//     let low = 0;
//     let mid = 0
//     let high = n - 1
//     while(mid <= high){
//         if(nums[mid] == 0){
//             let temp = nums[mid]
//             nums[mid] = nums[low]
//             nums[low] = temp
//             mid++
//             low++
//          }
//         else if(nums[mid] == 1) mid++
//         else {
//             let temp = nums[mid]
//             nums[mid] = nums[high]
//             nums[high] = temp
//             high--
//         }
//     }
//     return nums
// }
// console.log(SortZeroOneTwo([0,1,1,2,0]));
