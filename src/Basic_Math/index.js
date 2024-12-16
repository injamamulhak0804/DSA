// 1. print all Divisor

// function PrintAllDivisor(n){
//     for(let i = 1; i <= n; i++){
//        if(n%i==0){
//         console.log(i);
//        }
//     }
// }
// PrintAllDivisor(36)

// -------- Optimal way 

// function PrintAllDivisor(n){
//     for(let i = 1; i <= Math.sqrt(n); i++){
//         if(n%i==0){
//             console.log(i)
//             if(n/i != i){
//                 console.log(n/i)
//             }
//         }
//     }
// }
// PrintAllDivisor(36)

// function GCD(a, b){
//     let res = 0
//     while(a > 0 && b > 0){
//         if(a < b){
//             let temp = a 
//             a = b 
//             b = temp
//         }
//         a = a % b 
//     }    
//     console.log(b);
    
// }
// GCD(20, 10)



// 4. Maximum Sub Array Sum

// function MaximumSubArraySum(arr){
//     let n = arr.length
//     let maximumSum = arr[0]
//     let sum = 0
//     for(let i = 0; i < n; i++){
//         for(let j = 0; j < n; j++){
//             sum += arr[j]
//         }       
//     }
//     return maximumSum
// }
// console.log(MaximumSubArraySum([-2,1,-3,4,-1,2,1,-5,4]));


function MaximumSubArraySum(arr){
    let n = arr.length
    let maximumSum = arr[0]
    let sum = 0
    for(let i = 0; i < n; i++){
        sum+=arr[i]
        maximumSum = Math.max(maximumSum, sum)     
        if(sum < 0) sum = 0
    }
    return maximumSum
}
console.log(MaximumSubArraySum([-2,1,-3,4,-1,2,1,-5,4]));