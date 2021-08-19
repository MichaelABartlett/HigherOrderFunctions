// day July 13th
// week 7

// when using map, if you return and then use ticks to enclose you return statement
// it works,
// but if you return " ", variable

// map: rember to invoke the function? what does this reallymean

// forEach: vs map why does map have a return but forEach does not?

// callbacks, higher order functions
// what are callbacks; they are functions that you pass to other functions

// for(let i = 0; i<theArray.length; i++){
//     let element = theArray[i];
//     //
//     // what to do with every element
//     //
// }

// today:
// forEach - execute the logic for every element in the array - replaces the for loop
// filter - return a new array, where element meets the criteria passed in
// map - return a new array, and converts every element from the original array to a new element based on the criteria

let friends = ['Jenny','Jason', 'Jack', 'Amy'];

friends.forEach(function(element, index){
    console.log(index, '->', element);
    console.log(element);
    // send a email to everyone
    // send a letter to everyone
    // attach the person's name to a case file
    // sent a invoice
})

// you can also pass in a function

let print = function(name, number){
    console.log(`${name} is number ${number}`);
}

friends.forEach( print );

// this function is still available for other uses
print('Little Big Man', 2);


// ****************************** .filter ***********************

// 

let jFriends = friends.filter(function(element, index){
        // send email to everyone
        // invite to party
        // just like a forEach if put here
        console.log('filter looking at all ', element);  // this will log every element because it is not filtered yet
    if(element[0] === 'J'){
        console.log('has been filtered', element);  // this will log every element that meets the conditional
        return true;
    } else {
        return false;
    }
})
console.log('jFriends: ', jFriends);


//************************************** map *****************************************
console.log('****************** map ************************');

//
let buds = ['Jenny','Jason', 'Jack', 'Amy'];

let allCaps = buds.map(function(element, index){
        // you can do something to everything here
    let newName = element.toUpperCase();
    return newName;
})

console.log('allCaps: ', allCaps);


// ************************************ make a object from array ***************************


let people = ['Jenny Jones','Jason Giles', 'Jack riggle', 'Amy White'];

let createObject = function(element, index){
    let parts = element.split(" ");
    let obj = {};
    obj.first = parts[0];
    obj.last = parts[1];
    return obj; // if you do not put in this return nothing happens
}

let peopleAsObjects = people.map(createObject);

console.log('people as objects: ', peopleAsObjects)


// we talked about MasterMind at end of video
// we talked about MasterMind at end of video
// we talked about MasterMind at end of video