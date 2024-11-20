// Recursion => A function which called itself until the base condition satisify is called Recursion

// 1. Print name n times using recursion

// function recursionName(i, n){
//     if(i > n) return
//     console.log("zamam");
//     recursionName(i+ 1, n)
// }
// recursionName(1, 2)

// 2. Print linearly 1 to N

function recursionN(i, n){
    if(i > n)return 
    console.log(i)
    recursionN(i+1, n)
}
recursionN(1, 5)

// 3. print N to 1

// function recursion1(i, n){
//     if(i < n) return 
//     console.log(n);
//     recursion1(1, n - 1)
    
// }
// recursion1(1, 5)