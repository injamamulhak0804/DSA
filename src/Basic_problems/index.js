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

// 11.

// function ProductOfDigit(num){
//     const n = String(num).split('')
//     return n.reduce((acc, curr)=> acc * curr,1)
// }
// console.log(ProductOfDigit(1342));

// 12. 

// function SumInGivenRange(n1, n2){
//     let sum = 0
//     for(let i = n1; i <= n2; i++){
//         sum +=i
//     }
//     return sum
// }
// console.log(SumInGivenRange(1, 5));

// 13.
// function sumOfnNatural(n){
//     let sum = 0
//     for(let i = 1; i <= n; i++){
//         sum+=i
//     }
//     return sum
// }
// console.log(sumOfnNatural(5));

// 14.
// function PrimeOrNot(num){
//     let divisor = 0
//     for(let i = 1; i <= num; i++){
//         if(num%i == 0){
//             divisor+=1
//         }
//     }
//     if(divisor == 2){
//         return "The given number is Prime"
//     }else{
//         return "The given number is not a prime"
//     }
// }
// console.log(PrimeOrNot(93));

// 15.
// function Power(base, sup){
//     return base**sup
// }
// console.log(Power(2,3));

// 16.
// function Amstrong(num){
//     let sum = 0
//     let n = num
//     let sup = String(num).split('').length
//     while(num > 0){
//         const r = num%10;
//         sum += r**sup
//         num = Math.floor(num/10)
//     }
//     if(sum==n)return "Given number is Amstrong"
//     else return "Given number is not a Amstrong"
// }
// console.log(Amstrong(145));

// 17. 
// function strongNum(num){
//     let sum = 0
//     let same = num
//     while(num > 0){
//         let fact = 1
//         let r = num%10;
//         for(let i = 1; i <= r; i++){
//             fact *= i
//         }
//         sum+=fact
//         num = Math.floor(num/10)
//     }
//     if(same == sum) return "It's a Strong Number"
//     else return "It's Not a Strong Number"
// }
// console.log(strongNum(40585));

// 18.
// function ToggleString(str){
//     let result = "";
//     for(let i = 0; i <= str.length - 1; i++){
//         if(/[A-Z]/.test(str[i])){
//             result += str[i].toLowerCase()
//         }else{
//             result += str[i].toUpperCase()
//         }
//     }
//     return result
    
// }
// console.log(ToggleString("ApPle"));

// 19.
// function palindrome(str){
//     const res = str.split("").reverse().join("")    
//     if(res == str) return "It's a Palindrome"
//     else return "It's not a palindrome"
    
// }
// console.log(palindrome("mom")); 

// 20.
// function reverseStr(str){
//     return str.split("").reverse().join("")    
// }
// console.log(reverseStr("kumara"))


