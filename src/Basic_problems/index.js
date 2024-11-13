// Solving some Basic Problems 

// 1.  Even or Odd

// function OddorEven(n){
//     if(n>=0){
//     if(n%2==0) return "Even";
//     else return "Odd"
//     }else{
//         return "Enter a number Greater than postive or greater than 0"
//     }
// }
// console.log(OddorEven(99));


//2. A chracter a vowel or constants
//Finding Vowels in a String
// function chracterVowelOrConstant(n){
//     const vowles = ['a','e','i','o','u']
//     let count = 0
//     if(!n.length > 0) return "Enter a Chracter"
//     n.split('').map((i)=> vowles.includes(i) ? count++ : count)
//     return "Vowels present in a Given String is: " + count
// }

//Finding Vowels in a single Chracter
// function chracterVowelOrConstant1(n){
//     if(n == 'a' || n == 'e'|| n == 'i' || n == 'o' || n == 'u') return "It's a vowels"
//     return "It's not a Vowels"
// }

// console.log(chracterVowelOrConstant1('i'));

// 3. Finding Greatest numbers

// function findingGreatest(n){
//     let high = n[0]
//     for(let i = 1; i < n.length; i++){
//         if(n[i] > high){
//             high = n[i]
//         }
//     }
//     return high 
// }

// console.log(findingGreatest([13,23,67,24,56]));

// 4. 

// function postiveOrNegative(n){
//     if(n == 0) return "Enter a number positive or negative number"
//     if(n > 0) return "Given number is positive"
//     else return "Given number is Negative"
// }
// console.log(postiveOrNegative(90));

// 5.

// function isAlphabet(str){
//     if(Number.isInteger(str))return "Give input is Number"
//     if(/\d/.test(str)) return "Given Input is Number"
//     if(/[A-Z]/.test(str) || /[a-z]/.test(str)) return "Given input is Alphabet"
// }
// console.log(isAlphabet("ljb"));

// 6. 

// function GreatestOfTwoNumbers(n, n1){
//     if(n > n1) return `${n} is Greater Number`
//     else return `${n1} is Greater Number`
// }
// console.log(GreatestOfTwoNumbers(23, 34));

// 7. 

// function ASCII(char){
//     return char.charCodeAt(0)
// }
// console.log(ASCII("a"));

// 8. 

// function NoOfDigits(no){
//     return String(no).split('').length
// }
// console.log(NoOfDigits("siug"));

// 9. 
// function SomOfDigits(num){
//     let sum = 0
//     while(num > 0){
//         let r = num % 10
//         sum += r 
//         num  = Math.floor(num/10)
//     }
//     return sum
// }
// console.log(SomOfDigits(290));

// 10. 
// function reverseNumber(num){
//     return String(num).split("").reverse().join('')
// }
// console.log(reverseNumber(123));