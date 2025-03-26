

//recursion 

//1  countdown the n numbers and print done in the last

// function countdown(n){
//     if(n===0){
//         return console.log("Done!")
//     }
//     console.log(n)
//     return countdown(n-1)
// }

// countdown(10)

// 2 countdown 1 to nth number

// function countdown(n){
    
//     if(n===0){
//         return console.log("Done!")
//     }
//     console.log(n)
   
//     return countdown(n-1)
// }
// countdown(5)

// 3 sum of n numbers
// function sumOfNnumbers(n,sum=0){
//     if(n<1){
//         return sum
//     }
    
//     // console.log(n,"=",sum)
    
//     return sumOfNnumbers(n-1,sum+n)
// }
// console.log(sumOfNnumbers(5))

// 4 factorial of n Numbers

// function factorial(n){
//     if(n===0){
//         return 1
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(5))

// 5 fibonacci series

// function fibonacci(n){
//     if(n===0)return 0
//     if(n===1)return 1

//     return fibonacci(n-1)+fibonacci(n-2)
// }
// console.log(fibonacci(6))

// 6sumofDigts

// function sumOfDigits(n,sum=0){
//     str=n.toString()
//     if(str.length===0){                                           ////my code 
//         return sum
//     }
//     return sumOfDigits(str.slice(1),sum+Number(str[0]))
// }
// console.log(sumOfDigits(1234)); // Output: 10 (1+2+3+4)

////gpt code 

// function sumOfDigits(n) {
//     if (n === 0) {
//         return 0; // Base case: when n becomes 0, return 0
//     }
//     return (n % 10) + sumOfDigits(Math.floor(n / 10)); // Recursive call
// }

// console.log(sumOfDigits(1234)); // Output: 10 (1+2+3+4)
///////////////////////////////////////////////////////////////////////////////

//7 find the product of the numbers like 1*2*3*4*5=120

// function productOfDigits(n){
//    if(n===1){
//     return 1
//    }
//    return (n%10)* productOfDigits(Math.floor(n/10))
// }

// console.log(productOfDigits(1234)); // Output: 24 (1×2×3×4)

//// 8 reverse array

// function reverseArray(n){
//     if(n.length===0){
//         return [];
//     }
//     return [...reverseArray(n.slice(1)),n[0]]
// }

// console.log(reverseArray([1, 2, 3, 4])); // Output: [4, 3, 2, 1]

//9 string is a palindrom 

// function isPalindrome(n){
//     if(n.length<=1){
//       return true
//     }
//     if(n[0]!==n[n.length-1]){
//         return false
//     }

//     return isPalindrome(n.slice(1,-1))
// }


// console.log(isPalindrome("madam")); // Output: true
// console.log(isPalindrome("hello")); // Output: false

// function palindrom(n){
//     if(n.length<=1){
//         return true;
//     }
//     if(n[0]!= n[n.length-1]){
//         return false;
//     }
//     return palindrom(n.slice(1,-1))
// }
// console.log(palindrom('12321'))

// 10 find the number of zeros in an array

// function findZeros(arr,index=0,count=0){
//     if(index===arr.length){
//         return 0
//     }
//     if(arr[index]===0){
//         count++
//     }
//     return count+findZeros(arr,index+1)
// }
// let arr=[1,2,0,3,4,0,5,6,0,0,0]
// console.log(findZeros(arr))

// 11 reverse an array 

function reverse(arr){
    if(arr.length===0){
        return []
    }
    return [...reverse(arr.slice(1)),arr[0]]

}
let arr= [1,2,3]
console.log(reverse(arr))

