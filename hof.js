

//             used in arrays
// higher order functions : easier way to do functions (short cuts)

// callbacks : they are functions that you pass to other function
//              - they are defined in the higher order function

// findIndex - returns the index of the first element in the array that meets the criteria

// find - returns the first element in the array that meets the criteria

// forEach : exicute the logic for every element in the array

// filter : return a new array, where every element meets the criteria passed in
//    - returns a new array with the elements that neet the criteria

// map : returns a new array, and converts every element from the original array to a new element based on the criteria

// reduce - reduces as array of elements to a single object

//          example: give me the name of the tallest person in class
//                  give me the age of the most succesfull basket ball player in 2020
//                  give me the average grade for John's test scores

// ****************** reduce example ******************
// the prev is the result of the last run of the function
// curr is the current value that is going to be proessed
// if curr is left out then the first value is put into its place

let numbers = [23,123,6,1,3,3,4];

// function to add all the elements in a array
let sum = function(prev, curr, index){
    return prev + curr;
}

// function to return the smallest element in the array
let smallest = function(prev, curr, index){
    if(prev < curr){
        return prev;
    } else{
        return curr;
    }
}


let total = numbers.reduce(sum,10);
console.log('total: ', total);

let min = numbers.reduce(smallest);
console.log('Smallest: ', min);

//
//****************** .forEach() *************************
// write a plain old for-loop that will invoke the callback on every element

//let forEachScratch = function(theArray, callback){

//};

//
//********************* .map() *************************************

// let process = + 20;

// let mapScratchArrow = () => {
//     let newMapNumbers = [];

//     for(i = 0; i < theArray.length; i ++){
//         let element = theArray[i];
//         //console.log('element:', element)

//         newMapNumbers.push(newElement);
//     }
// }

let mapScratch = function(theArray, callback){

    let newMapNumbers = [];

    for(i = 0; i < theArray.length; i ++){
        let element = theArray[i] ;
        //console.log('element:', element)
        let newElement = callback(element, i);
        //console.log('newElement: ',newElement)
        newMapNumbers.push(newElement);
    }
    return newMapNumbers;
}

let mapNumbers = [2,6,12,45,2,-5]

let runFunction = mapScratch(mapNumbers, function(element){
    console.log('element: ',element)
    return element + 10;
})
console.log('mapNumbers: ', mapNumbers);
console.log('newMapNumbers: ', runFunction);


//*************************************** .find() **********************************

// find - returns the first element in the array that meets the criteria

const numbers2 = [6,15,35,42,9];

function goodNumber(){
    for(i = 0; i < numbers2.length; i++){
        let num = numbers2[i];
        if(num > 37){
            return num;
        }
    }
}
console.log('the first number greater than 37 is: ', goodNumber(numbers2));


// ********************************* .findIndex() ******************************

// findIndex - returns the index of the first element in the array that meets the criteria

const numbersFindIndex = [6,15,35,42,9];

function goodNumberFindIndex(){
    for(i = 0; i < numbersFindIndex.length; i++){
        let num = numbersFindIndex[i];
        console.log('num: ',num)
        if(num === 42){
            return i;
        } 
    }
}
console.log('The index position of the number 42 is: ', goodNumberFindIndex(numbersFindIndex));


// ************************************ .forEach() ***************************************

// forEach : exicute the logic for every element in the array

const arrayForEach = ['drill','end mill','vise','CAM sofrware'];

function funcForEach(arr ){
    let forEachArray = [];
    for(i = 0; i < arr.length; i++){
        let word = arr[i];
        console.log('word: ',word)
        forEachArray.push(word);
    }
   return forEachArray
}

console.log('This can also be all put into a array: ', funcForEach(arrayForEach));


// ************************************** .filter **************************************

// filter : return a new array, where every element meets the criteria passed in
//    - returns a new array with the elements that neet the criteria

const arrayFilter = ['drill','end mill','vise','CAM sofrware'];

function funcFilter(){
    let filterArray = [];
    for(i = 0; i < arrayFilter.length; i++){
        let word = arrayFilter[i];
        if(word[1] === 'i' || word[2] === 'i'){
            console.log('word: ',word)
            filterArray.push(word);
        }
        
    }
   return filterArray
}

console.log('This can also be all put into a array: ', funcFilter(arrayFilter));
