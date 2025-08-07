// ===============Control Structure==============

// 1]  Check if a number is positive or negative.

// let num = prompt("Enter a number");
// if(num >= 0 ){
//     console.log('number is positive');
// }else {
//     console.log('number is negative');
// }


// 2] Check if a number is even or odd.

// let num = prompt("Enter a number");
// if(num%2==0){
//     console.log("number is even");
// }else{
//     console.log("number is odd");
// }


// 3] Check if a person is eligible to vote (age >= 18).

// let age = prompt("Enter your age");
// if(age>=18){
//     console.log("Your eligible for vote");
// }else{
//     console.log("Your not eligible for vote");
// }


// 4] Find the greatest of two numbers.

// let num1 = 20;
// let num2 = 24;
// if(num1 > num2){
//     console.log("greatest number is:",num1)
// }else if(num1 < num2){
//     console.log("greatest number is:",num2);
// }else{
//     console.log("Both are equal numbers");
// }


// 5] Find the greatest of three numbers.

//  let num1 = 24;
//  let num2 = 19;
//  let num3 = 35;
 
// if(num1 >= num2 && num1 >= num3){
//        console.log("greatest num is",num1);
//  } else if(num2>=num1&&num2>=num3){
//     console.log("greatest num is",num2);
// } else{
//     console.log("greatest num is",num3);
// }


// 6] Check if a year is a leap year or not.

// let year = prompt("Enter year");
// if(year % 4=== 0 || year % 400 === 0 ){
//     console.log("It's a leap year.");
// } else {
//     console.log("It's not a leap year.");
// }



// 7] Check whether a character is a vowel or consonant.

// let char= prompt("Enter a character");
// if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
//     console.log("char is vowel:",char);
// }else{
//     console.log("char is constant:",char);
// }



// 8] Assign grades based on marks (A, B, C, F).

//  let marks = 80;
//  if (marks>=90){
//      console.log(" you got 'A' grade:",marks);
//  } else if (marks>=75 ){
//      console.log("you got 'B' grade:",marks);
//  } else if (marks>=50 ){
//      console.log("you got 'c' grade:",marks);
//  }else if (marks>=35 ){
//      console.log("you got 'F' grade:",marks);
//  }else {
//     console.log("you are failed:",marks);
//  }

// 9]  Check if a number is divisible by 5 and 11

// let num = prompt("Enter a number");
// if (num%5===0){
//     if(num%11===0){
//         console.log("number is divisible by both 5 and 11");
//     }else{
//         console.log("number is only divisible by 5 but not by 11");
//     }
// }else{
//      if(num%11===0){
//         console.log("number is only divisible by 11 but not by 5");
//     }else{
//          console.log("number is not divisible by both 5 and 11");
//     }
// }


// 10] . Use ternary operator to check if a number is even or odd.

// let num = prompt("Enter a number");
// let res = (num%2===0)? "number is even":"number is odd";
// console.log(res);

// =============== Loop Questions (for / while)=============

// 1] Print numbers from 1 to 10.

// for(let i = 1;i<=10;i++){
//     console.log(i);
// }


// 2] Print the sum of numbers from 1 to 100.

// let sum = 0;
// for(let i = 1;i<=100;i++){
//     sum += i;
//     console.log(sum);
// }


// 3] Print even numbers between 1 and 50.

// for(let i = 0;i<=50;i++){
//     if (i%2==0) {
//         console.log(i);
//     }
// }

// 4]  Print the multiplication table of a number (e.g., 7).

//  let n = 17;
//  for(let i=1;i<=10;i++){
//      console.log(`${n*i}`);
//  }


// 5]  Print reverse numbers from 10 to 1.

// for(let i =10;i>=1;i--){
//     console.log(i);    
// }

// 6] Find the factorial of a number.

// let number = prompt("Enter a number");
// let factorial = 1;
// for (let i = 1; i <= number; i++) {
//     factorial *= i;
//     console.log(`The factorial of ${number} is ${factorial}.`);
// }


// 7] Reverse a given number.

// let reverse = 0;
// let num = 12;
// while (num !== 0) {
//     let digit = num % 10; 
//     reverse = reverse * 10 + digit; 
//     num = Math.floor(num / 10); 
//     console.log(reverse);
// }


// 8]  Check if a number is a palindrome.

// let num = 121;
// let reverse = 0;
// let orignal =num ;
// while (num > 0) {
//     let digit = num % 10; 
//     reverse = reverse * 10 + digit; 
//     num = Math.floor(num / 10);
// }
// if (orignal === reverse){
//     console.log("number is a palindrome.");
// }else{
//     console.log("number is not a palindrome.");
// }


// 9] Find the sum of digits of a number.

// let num = 1234; 
// let sum = 0;
// while (num > 0) {
//     let digit = num % 10; 
//     sum += digit;            
//     num = Math.floor(num / 10); 
//     console.log("sum of digits:", sum);
// }


// 10]Print Fibonacci series up to N terms

// let N = 10; 
// let a = 0, b = 1, nextTerm;
// console.log("Fibonacci Series:");
// for (let i = 1; i <= N; i++) {
//     console.log(a); 
//     nextTerm = a + b;
//     a = b; 
//     b = nextTerm; 
// }


// =============== String Questions Using String Methods =============

// Q1. Take a string input and convert it to uppercase using a string method.

// let str = 'GeeksforGeeks';
// console.log(str.toUpperCase());

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q2. Take a string input and convert it to lowercase using a string method.

// let str = 'GeeksforGeeks';
// console.log(str.toLowerCase());

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q3.Ask the user for a string and print its length using a method.

// let myString = "Hello, world!";
// let lengthOfString = myString.length;
// console.log(lengthOfString); 

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q5.Take a string input and check if it ends with a particular word using endswith().

// let str = 'Geeks for Geeks';
// let wordtocheck = 's';
// console.log(str.endsWith(wordtocheck));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q6. Input a string and check whether it starts with a specific word using startswith().

// let str = 'Geeks for Geeks';
// let wordtocheck = 'G';
// console.log(str.endsWith(wordtocheck));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q7. Ask the user to input a string and remove leading and trailing spaces using strip().

// let str = prompt("Enter a word");
// let newStr = str.trim();
// console.log(newStr);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q8. Take a string and replace all spaces with hyphens (-) using replace().

//  let str = ' GeeksforGeeks';
//  let newStr = str.replace('','-');
//  console.log(newStr);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q9. Ask the user to input their name and print each character on a new line using a loop.

//   let str = prompt("Enter your name") ;
//   for(let i = 0;i <str.length; i++){
//      console.log(str[i]);
//   }

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Q10. Take a string input and split it into a list of words using split()

// let str = "Geeks-for-Geeks";
// console.log(str.split('-'));


// ===============  Array Programming Questions =============

//  1.Create an array and print all elements.
// let arr = [1, 2, 3];  
// console.log(arr);


//  2. Find the length of an array.
// let arr = [1, 2, 3];  
// console.log(arr.length);


//  3. Access the first and last element of an array.
// let arr = [10,20,30,40,50];
// console.log(arr[0]);
// console.log(arr[4]);


//  4. Add a new element to the end of the array.
// let fruits = ['apple','pomegranate','blackberry'];
// array.push('dragon fruit');
// console.log(fruits);          //['apple','pomegranate','blackberry','dragon fruit']


//  5. Remove the last element from the array.
// let array = [6,16,20,23,24,30];
// array.pop();
// console.log(array);         


//  6. Find the sum of all elements in a numeric array.
// let arr = [1,2,3,4,5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     console.log(sum);
// }


//  7. Check if an element exists in an array.
// let birds = ['dog','flamingo','cat','penguin'];
// console.log(birds.includes('flamingo'));          


//  8. Count how many even numbers are in the array.
// let arr = [1,2,3,4,5,6];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//      count++;
//      console.log(count);
//     }
// }


//  9. Print array elements in reverse order.
// let sorted = [18,20,11,24];
// sorted.reverse(); 
// console.log(sorted);            


//  10. Find the largest number in an array
// let arr = [10,20,330,44,50];
// let largest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }
// console.log(largest);

// ===============  Function Programming Questions =============

//  1. Create a function to print 'Hello, World!'.
// function hi(){
//     console.log("Hello, World!")
// }
// hi();


//  2. Create a function that takes two numbers and returns their sum.
// // function addition(a,b){
//     c = a+b;
//     console.log(c);
// }
// addition(10,10); 
// addition(10,14); 
// addition(22,14); 


//  3. Create a function that checks if a number is even or odd.
// // function num(a){
//     let res = (a % 2 == 0)? 'even':'odd';
//     console.log(res);
// }
// num(4);


//  4. Create a function that returns the square of a number.
// function square(num) {
//    let res = num * num;
//    console.log(res);
// }
// square(8);

//  5. Create a function that takes a name as input and prints a greeting message.
// function hi(){
//     let a = prompt("enter your name");
//     console.log("Hello, How can i help you !");
// }
// hi();


//  6. Create a function that returns the largest of three numbers.
// function largest(num1,num2,num3){
// if(num1 >= num2 && num1 >= num3){
//        console.log("maximum num is",num1);
//  } else if(num2>=num1&&num2>=num3){
//     console.log("maximum num is",num2);
// } else{
//     console.log("maximum num is",num3);
// }
// }
// largest(10,24,62);


//  7. Create a function to calculate the factorial of a number.
// function factorial(){
// let number = prompt("Enter a number");
// let factorial = 1;
// for (let i = 1; i <= number; i++) {
//     factorial *= i;
//     console.log(`The factorial of ${number} is ${factorial}.`);
// }
// }
// factorial();


//  8. Create a function that reverses a given string.
// function reverse(){
//     let str = "eye";
//     console.log(str.split().reverse().join());
// }
// reverse();


//  9. Create a function to check if a number is prime.
// 


//  10. Create a function that counts the number of vowels in a string
// function countVowels(str) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// countVowels("tiger");
