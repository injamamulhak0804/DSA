// questions: https://spicy-fire-848.notion.site/Must-do-Patterns-Code-Thanish-4e6c8985d3aa4f98b3b2bc7b083334c4

// a 
// for(let i = 1; i < 6; i++){
//     let star = ""
//     for(let j = 1; j < 6; j++){
//         star += "*"
//     }
//     console.log(star)
// }


// b 
// for(let i = 1; i < 6; i++){
//     let no = ""
//     for(let j = 0; j < 6; j++){
//         no += i
//     }
//     console.log(no);
// }


// c
// for(let i = 1; i < 6; i++){
//     let star = ""
//     for(let j = 1; j <= i; j++){
//         star += "* "
//     }
//     console.log(star);
// }


// d 
// for(let i = 1; i < 6; i++){
//     let no = ""
//     for (let j = 1; j <= i; j++){
//         no += j
//     }
//     console.log(no)
// }


// e 
// for(let i = 1; i < 6; i++){
//     let print = ""
//     let value = i%2==0 ? 0 : 1 
//     for(let j = 1; j <= i; j++){
//         print += value
//         value = value==1?0:1
//     }
//     console.log(print)
// }

// f 
// let count = 1
// for(let i = 1; i < 6; i++){
//     let print = ""
//     for(let j = 1; j <= i; j++){
//         print += count++ + " "
//     }
//     console.log(print)
// }


// g  use my own method
// for(let i = 6; i > 0; i--){
//     let print = ""
//     for(let j = 1; j < i; j++){
//         print += "*"
//     }
//     console.log(print)
// }


// using thanish method (g)
// function patterng(n){
//     for(let i = 1; i <= n; i++){
//         let print = "";
//         for(let j = 1; j <= n - (i - 1); j++){
//             print += "*"
//         }
//         console.log(print);
//     }
// }
// patterng(5)

// h
// function patternh(n){
//     for(let i = n; i >= 0; i--){
//         let print = "";
//         for(let j = 1; j <= i; j++){
//             print += i
//         }
//         console.log(print);
//     }
// }
// patternh(5)

// function patternh(n){
//     for(let i = 1; i <= n; i++){
//         let print = "";
//         for(let j = 1; j <= n - i +1; j++){
//             print += n - i + 1
//         }
//         console.log(print);
//     }
// }
// patternh(5)

// I
// function patternI(n){
//     for(let i = 1; i <= n; i++){
//         let print = ""
//         for(let j = 1; j <= n - (i - 1); j++){
//             print += j + " "
//         }
//         console.log(print)
//     }
// }
// patternI(5)

// j
// function patternJ(n){
    // for(let i = 1; i <= (n*2)-1; i++){
    //     let print = ""
    //     if(i > 5){
    //         for(let j = 1; j <= (n*2)-i; j++){
    //             print+="*"
    //         }
    //     }
    //     else{
    //         for(let j = 1; j <= i; j++){
    //             print += "*"
    //         }
    //     }
    //     console.log(print);
        
//     }
// }

// function patternJ(n){
//     for(let i = 1; i <= (n*2)-1; i++){
//         let print = ""
//         let rowChange = i > 5 ? (n * 2)-i : i
//         for(let j = 1; j <= rowChange; j++){
            
//             print += "*"
//         }
//         console.log(print);
//     }
// }
// patternJ(5)

// function patternK(n){
//     for(let i = 1; i <= n; i++){
//         let print = ""
//         for(let j = 1; j <= n - i; j++){
//             print += " "
//         }
//         for(let k = 1; k <= i; k++){
//             print += "*"
//         }
//         console.log(print);
        
//     }
// }
// patternK(5)

// function patternL(n){
//     for(let row = 1; row <= n; row++){
//         let print = ""
//         for(let space = 1; space <= row - 1; space++){
//             print += " "
//         }
//         for(let col = 1; col <= n - (row - 1); col++){
//             print += "*"
//         }
//         console.log(print);
//     }
// }
// patternL(5)

// function patternM(n){
    // for(let row = 1; row <= n; row++){
    //     let print = ""
        // for(let space = 1; space <= n - row; space++){
        //     print+=" "
        // }
        // for(let star = 1; star <= (row * 2) - 1; star++){
        //     print+="*"
        // }
        // console.log(print);
    // }
// }
// patternM(5)


// function patternN(n){
//     for(let row = 1; row <= n; row++){
//         let print = ""
        // for(let space = 1; space <= row - 1; space++){
        //     print+="-"
        // }
        // for(let star = 1; star <= (n * 2) - (row + (row -1)); star++){
        //     print+="*"
        // }
        // console.log(print);
//     }
// }
// patternN(5)

// function patternO(n){
//     for(let row = 1; row <= n*2-1; row++){
//         let print = ""
//         let rowChanges = row > n ? (n*2) - row :row;
//             for(let space = 1; space <= n - rowChanges; space++){
//                 print+=" "
//             }
//             for(let star = 1; star <= rowChanges * 2 - 1; star++){
//                 print+="*"
//             }
        
//         console.log(print);
        
//     }
// }

// patternO(5)


// function patternP(n){
//     for(let row = 1; row <= n; row++){
//         let print = ""
//         for(let space = 1; space <= row - 1; space++){
//             print+=" "
//         }
//         for(let star = 1; star<= n - (row - 1); star++){
//             print+= " *"
//         }
//         console.log(print)
//     }
//     for(let row = 1; row <= n; row++){
//         let print = ""
//         for(let space = 1; space <= n - row; space++){
//             print+="-"
//         }
//         for(let star = 1; star<= row; star++){
//             print+= " *"
//         }
//         console.log(print)
//     }
// }
// patternP(5)


// function patternQ(n){
//     for(let row = 0; row <= n; row++){
//         let print = ""
//         for(let space = 1; space <= n - row; space++){
//             print+= " "
//         }
//         for(let star = 1; star <= (row*2) - 1; star++){
//            if(star==1 || star == (row*2) - 1 || row == n){
//             print+="*"
//            }else{
//             print+= " "
//            }
//         }
//         console.log(print);
//     }
// }
// patternQ(5)


// function patternR(n){
//     for(let row = n; row >= 1; row--){
//         let print = ""
//         for(space = 1; space <= n - row; space++){
//             print+= "-"
//         }
//         for(let star = 1; star <= 2 * row - 1; star++){
//             if(star == 1 || star == 2 * row - 1 || row == n){
//                 print+="*"
//             }else{
//                 print+=" "
//             }
//         }
//         console.log(print); 
//     }
// }
// patternR(5)

// function patternS(n){
//     for(let row = 1; row <= n; row++){
//         let print = ""
//         for(space = 1; space <= n - row; space++){
//             print+= " "
//         }
//         for(let star = 1; star <= 2 * row - 1; star++){
//             if(star == 1 || star == 2 * row - 1){
//                 print+= "*"
//             }else{
//                 print+=" "
//             }
//         }
//         console.log(print); 
//     }
//     for(let row = n; row >= 1; row--){
//         let print = ""
//         for(space = 1; space <= n - row; space++){
//             print+= " "
//         }
//         for(let star = 1; star <= 2 * row - 1; star++){
//             if(star == 1 || star == 2 * row - 1){
//                 print+= "*"
//             }else{
//                 print+=" "
//             }
//         }
//         console.log(print); 
//     }
// }
// patternS(5)

// function PatterT(n){
//     for(let row = 1; row <= n; row++){
//         let print=""
//         for(let col = 1; col <= n; col++){
//             if(row == 1 || col==1 && row%2!=0|| col==n&&row%2!=0){
//                 print+="*"
//             }else{
//                 print+=" "
//             }
//         }
//         console.log(print);   
//     }
//     for(let row = 2; row <= n; row++){
//         let print=""
//         for(let col = 1; col <= n; col++){
//             if(row == n ||col==1 && row%2!=0|| col==n&&row%2!=0){
//                 print+="*"
//             }else{
//                 print+=" "
//             }
//         }
//         console.log(print);   
//     }

// }
// PatterT(5)


// function patternV(n){
//     for(let row = 1; row <= n*2; row++){
//         let print=""
//         let rowChange = row > n ? (n*2)-(row-1) : row 
//         for(let col = 1; col<= n*2; col++){
//             if(col <= n - rowChange + 1 || col >= n + rowChange - 1){
//                 print+= "*"
//             }else{
//                 print+=" "
//             }
//         }
//         console.log(print);
        
//     }
// }
// patternV(5)

