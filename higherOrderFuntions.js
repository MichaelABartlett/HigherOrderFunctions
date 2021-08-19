
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

function funcForEach(){
    let forEachArray = [];
    for(i = 0; i < arrayForEach.length; i++){
        let word = arrayForEach[i];
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
// return true to keep in
// return false if you want it out of the new array
console.log('This can also be all put into a array: ', funcFilter(arrayFilter));




let friends = ['ff', 'gg', 'hh','ee','kk']

// this is what i want

let hiMessage = ['hi ff', 'hi gg', 'hi hh','hi ee','hi kk']


let newFriends = friends.map(function(element,index){
    return 'hi ' + element;
})

console.log(friends);
console.log(newFriends);


// original
let fruit = [
    // you have no idea what is in here
    // al you know is it ia a list of fruit
]

// write the code that will use .map()

// the return is line 'element = '

