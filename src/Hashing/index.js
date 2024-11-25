// function hashing(){
    // const array = [1,2,3,1,2,4,3]
//     const hash = new Array(12).fill(0);
//     for(let i = 0; i < array.length; i++){
//         hash[array[i]] += 1; 
//     }
//     const input = [1,4,3,6, 8, 2];
    // let i = 0
    // while(i < input.length){
    //     console.log(input[i] + " : " + hash[input[i]]);
    //     i++
    // }
// }
// hashing()


// const hasingChar = ()=>{
//     const array = ['a', 'd', 'e', 'a', 'e', 'f']
//     const hash = new Array(26).fill(0)

//     for(let i = 0; i < array.length; i++){
//             hash[array[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
//     }

    // const input = ['a', 'c', 'e', 'z'];
    // let i = 0
    
    // while(i < input.length){
    //     console.log(input[i] + " : " + hash[input[i].charCodeAt(0) - 'a'.charCodeAt(0)]);
    //     i++
    // }

// }
// hasingChar()

// function hasingCharUsingMap(){
//     const array = [1,2,3,1,2,4,3]
//     const map = new Map()
//     for(let i = 0; i < array.length; i++){
//         if (map.has(array[i])) {
//             map.set(array[i], map.get(array[i]) + 1);
//         } else {
//             map.set(array[i], 1);
//         }
//     }
//     const input = [2,4,1,5,7];
//     let i = 0    
//     while(i < input.length){
//         const frequency = map.get(input[i]) || 0;
//         console.log(input[i] + " : " + frequency);
//         i++;
//     }
    
// }
// hasingCharUsingMap()






