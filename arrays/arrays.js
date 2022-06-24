"use strict";
let chocolateBars = [`snickers`, `hundred grand`, `kitkat`, `skittles`];

//takes two parameters, we wanna add item to beginning of array
//return whole array

//not alter original array
//add el to beginning of array
function addElementToBeginningOfArray(arr, el){
   return [el, ...arr];
}

//alter original array
//adds the element to the beginning of the array
function destructivelyAddElementToBeginningOfArray(arr, el){
   return arr.unshift(el);
}

//add element to end of array
//do not alter original array
function addElementToEndOfArray(arr, el){
    return [...arr, el];
}

//alter original array
//pushes the element to the end of the array
function destructivelyAddElementToEndOfArray(arr, el){
   return arr.push(el);
}


//takes in array and index value
//should return the element at that index
function accessElementInArray(arr, index){
    return arr[index];
}

//only takes in an array, removes first element from it, return entire array
function destructivelyRemoveElementFromBeginningOfArray(arr){
    arr.shift();
    return arr;
}

//only takes in an array, removes first element from it, return entire array in the same line
function removeElementFromBeginningOfArray(arr){
    arr.slice(1); //would return a 3 item array
    return arr; //returns our unmodified array
}

function destructivelyRemoveElementFromEndOfArray(arr){
    arr.pop();
    return arr;

}

function removeElementFromEndOfArray(arr){
    arr.slice(0, arr.length -1 );
    return arr;
}
