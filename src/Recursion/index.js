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

// 5. Recursion in Sum 
// function recursionSum(i, sum){
//     if(i < 1){
//         console.log(sum);
//         return sum
//     }
//     recursionSum(i - 1, sum + i)
// }
// recursionSum(3, 0)