// I have a js array as
// 
//         this.basicAPentatonicScale = [
//             [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
//             [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
//             [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
//             [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
//             [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
//             [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
//         ];
// 
// Id like u to make a function that takes a number and this kind of array as input
// I want the function returns the inputed array with all sub array value shifted by the inputed number.
// The function also need a way to handle negative number for the shift input so, "shiftArray(this.basicAPentatonicScale, -1)" should return the array with all sub array value to left.

function shiftArray(array, shift) {
    shift = shift % array[0].length;
    if (shift < 0) {
        shift = array[0].length + shift;
    }
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i].slice(shift).concat(array[i].slice(0, shift)));
    }
    return newArray;
}

// Make tests here:

var testArray = [
    [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
    [1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
];

console.log(shiftArray(testArray, 1));


