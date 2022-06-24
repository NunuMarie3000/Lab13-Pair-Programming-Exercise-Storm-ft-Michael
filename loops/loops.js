"use strict";

// ATTENTION: Please create functions for each exercise and test them with your function calls.


// 1) Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// Example output: 
// 276 + 351 = 627
//calculates all items in an individual array
//i'm sure there's a better way to do this
function calculateMultipleArrSums(arr1, arr2){
    //initialize 2 variables to handle counting sums for first array and second array
    let sum1=0;
    let sum2=0;
    //set a loop to sum all numbers in first array
    for(let i=0; i<arr1.length; i++){
        sum1 += arr1[i];
    }
    //set loop to sum all numbers in second array
    for(let i=0; i<arr2.length; i++){
        sum2 += arr2[i];
    }
    //add first sum and second sum and return the value
    return sum1 + sum2;
}
calculateMultipleArrSums(arr_1, arr_2);

// 2) Using a for loop print all even numbers up to and including n. Don’t include 0.

let n1 = 22; 
// Example output: 
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
//create function that takes in a number and only prints even numbers counting up to that number
//exclude 0
//include n
function printAllEven(n){
    //create my counter and start at 2
    //run the loop for as long as i(the counter) is less than n(number entered into function)
    //i++ means i=i+1, i need every even number, so increment 2, i+=2
    for (let i = 2; i <= n; i+=2) { // shows 0, then 1, then 2
        console.log(i);
    }
}
printAllEven(n1);


// 3) Using a for loop output the elements in reverse order

let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3.5  be  false cannot  true 9 what 43 OR each item on a new line
//function to print array in reverse
function printInReverse(arr){
    //create new empty array
    let newArr=[];
    //for the length of the given array and incrementing by 1
    for(let i=0; i<arr.length; i++){
        //take each old array item and add it to the beginning of the new array
        newArr.unshift(arr[i]);
    }
    //.join method to take brackets away and add a comma and space between all items
    console.log(newArr.join(', '));
}
printInReverse(arr);


// 4) Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.

 
let arr_3   = [4, 6, 7];
let arr_4    = [8, 1, 9];
// Example output: 
// [12, 7, 16]
function addArrayIndexesAndMakeNewArray(arr3, arr4){
    //i need to access each array's index values and add them that way
    //create new array
    let newArray=[];
    //i don't think i need to do anything crazy, they said i can assume both arrays are of the same length;
    newArray.push(arr3[0] + arr4[0]);
    newArray.push(arr3[1] + arr4[1]);
    newArray.push(arr3[2] + arr4[2]);
    console.log(newArray);
}
addArrayIndexesAndMakeNewArray(arr_3, arr_4);



// 5) Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.

// Sample numbers : 0, -1, 4
// Output : 4, 0, -1
function biggestToSmallest(num1, num2, num3){
    //if num1 is greater than num2 and num3
    if(num1 > num2 && num1 > num3){
        //check if num2 is greater than num3
        if (num2 > num3){
            //then its 1,2,3
            alert(`${num1}, ${num2}, ${num3}`)
        }else{
            //if num2<num3, then its 1,3,2
            alert(`${num1}, ${num3}, ${num2}`)
        }
    //if num2 is greater than num1 and num3
    }else if(num2 > num1 && num2 > num3){
        //check if num 3 is greater than num1 
        if(num3 > num1){
            alert(`${num2}, ${num3}, ${num1}`)
        }else{
            alert(`${num2}, ${num1}, ${num3}`)
        }
    }else if(num3 > num1 && num3 > num2){
        if(num1 > num2){
            alert(`${num3}, ${num1}, ${num2}`)
        }else{
            alert(`${num3}, ${num2}, ${num1}`)
        }
    }
}
biggestToSmallest(0, -1, 4);

// 6) Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0
function findLargest(a, b, c, d, e){
    //same logic as last question, check if all numbers are the largest
    if(a>b && a>c && a>d && a>e){
        alert(a);
    }else if(b>c && b>d && b>e && b>a){
        alert(b);
    }else if(c>d && c>e && c>a && c>b){
        alert(c);
    }else if(d>e && d>a && d>b && d>c){
        alert(d);
    }else{
        alert(e);
    }
}
findLargest(-5, -2, -6, 0, -1);