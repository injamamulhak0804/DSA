// Recursion => A function which called itself until the base condition satisify is called Recursion

// 1. Print name n times using recursion

// function recursionName(i, n){
//     if(i > n) return
//     console.log("zamam");
//     recursionName(i+ 1, n)
// }
// recursionName(1, 2)

// 2. Print linearly 1 to N

// function recursionN(i, n){
//     if(i > n)return 
//     console.log(i)
//     recursionN(i+1, n)
// }
// recursionN(1, 5)

// 3. print N to 1

// function recursion1(i, n){
//     if(i > n) return 
//     console.log(n);
//     recursion1(1, n - 1)
// }
// recursion1(1, 5)

// 4. Recursion from 1 to N without + operator

// function recursion2(i, n){
//    if(i < 1)return
//    recursion2(i - 1, n)
//     console.log(i);
// }
// console.log(recursion2(3, 3));

// 5. Recursion in Sum and multiply  
// function recursionSum(i, sum){
//     if(i < 1){
//         return 0
//     }
//     return recursionSum(i - 1, sum + i)
// }
// recursionSum(3, 0)

// 6. Reverse an Array 
// Double pointer
// function recursionRevArray(l, r, arr){
//     if(l >= r) return 
//     let a = arr[l]
//     arr[l] = arr[r]
//     arr[r] = a
//     recursionRevArray(l + 1, r - 1, arr)
// }
// let arr = [1,2,4, 5, 6, 7]
// recursionRevArray(0, 5, arr)
// console.log(arr);


// single pointer

// function recursionDP(i, n, arr){
//     if(i >= Math.floor( n/2)) return 
//     let temp = arr[i];
//     arr[i] = arr[n - 1 - i]
//     arr[n - i - 1] = temp 
//     recursionDP(i + 1, n , arr)
// }
// let arr = [1,2,3]
// recursionDP(0, 3, arr)

// console.log(arr);


// 8.  Recursion for Fibbonacci

// function Fibbonacci(num){
//     if(num <= 1)
//         return num 
//     let last = Fibbonacci(num - 1)
//     let sLast = Fibbonacci(num - 2)
//     return last + sLast
// }
// console.log(Fibbonacci(4));


// 9. Array subSequence 

// function Sub(n, res = [], arr){
//     if(n >= 1){
//         console.log(arr);
//         return
//     }
//     res.push()
// }
// Sub(3, [], [3,2,1,])

// 10. Recursion to print subsequence

function RecursionSubSequence(idx, list, arr, n){
    if(idx == n){
        console.log(list.join(" "));
        if(list == 0) console.log([]);
        return
    }
    list.push(arr[idx])
    RecursionSubSequence(idx + 1, list, arr, n);
    list.pop(arr[idx])
    RecursionSubSequence(idx + 1, list, arr, n);
}
const array = [3,2,1]
const list = []
RecursionSubSequence(0, list,array, 3)