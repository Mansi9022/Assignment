// ================================================= Looping Programming Questions===============================================================//

// Q1. Print numbers from 1 to 10. Write a program to print numbers from 1 to 10 using a loop.

// let i = 0;
// for(i = 1;i <= 10;i++){
//     console.log(i);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q2. Print even numbers between 1 and 20. Use a loop to print all even numbers from 1 to 20.

// let i = 0;
// for(i=1;i<=20;i++){
//     if(i % 2 == 0){
//     console.log(i);
//     }
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q3. Sum of first N natural numbers Ask the user to enter a number N. Use a loop to calculate the sum from 1 to N.

// let n = prompt("Enter a number");
// let sum = 0;
// for(let i = 1; i <= n; i++){
//     sum += i;
//     console.log(`the sum of first ${n} natural number is : ${sum}`);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q4. Print multiplication table of a number. Ask the user to enter a number and print its table (e.g., 2 × 1 = 2 ... 2 × 10 = 20).

// let n = prompt("Enter a number");
// for(let i=1;i<=10;i++){
//     console.log(`${n}*${i}=${n*i}`);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q5.Factorial of a number. Ask the user to input a number and print its factorial using a loop.

// let number = prompt("Enter a number");
// let factorial = 1;
// for (let i = 1; i <= number; i++) {
//     factorial *= i;
//     console.log(`The factorial of ${number} is ${factorial}.`);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q6.Print numbers in reverse order from N to 1. Ask the user to enter N and print numbers in reverse order from N to 1.

// let num = prompt("Enter a number");
// for(let i=num;i >=1;i--){
//     console.log(i);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q7.Count digits of a number. Ask the user for a number and use a loop to count how many digits it has.

// let number = prompt("Enter a number:");
// let digitCount = 0;
// while (number > 0) {
//   number = Math.floor(number / 10); 
//    digitCount++; 
//   consol.log("The number has " + digitCount + " digits.");
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// q8. Find the sum of digits of a number. Take a number as input and find the sum of its digits using a loop.

// let num = 24;
// let sum = 0;
// while (num > 0) {
//   let digit = num % 10; 
//   sum += digit;           
//   num = Math.floor(num / 10); 
//   console.log("The sum of the digits is:", sum);
// }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q9. Check whether a number is prime. Ask the user to input a number and check if it's a prime number using a loop.


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q10. Fibonacci series up to N terms. Print the first N terms of the Fibonacci series (0, 1, 1, 2, 3, 5...)

