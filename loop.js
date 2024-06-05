//ASSIGNMENT NO 1
var myWork = [];
for (var i = 1; i <= 10; i++) {
    var lesson = {
        name: "\"lesson\"".concat(i),
        status: i % 2 === 1 ? true : false,
    };
    //if (i % 2 === 1) {
    // console.log("your operator is even");
    //} else console.log("your opperator is odd ");
    myWork.push(lesson);
}
console.log(myWork);
//ASSIGNMENT NO 2
var MaximaumValue = 8;
var randomNumber = Math.floor(Math.random() * MaximaumValue) + 1;
console.log(randomNumber);
var guessArray = [1, 2, 3, 4, 5, 6, 7, 8];
var value = 0;
while (value < guessArray.length) {
    var currentGuess = guessArray[value];
    if (currentGuess === randomNumber) {
        console.log("\"congratulation you have guessed the number.\"\n YOU WON!!");
    }
    else if (currentGuess < randomNumber) {
        console.log(" Unfortunately your guess is to LOW");
    }
    else if (currentGuess > randomNumber) {
        console.log("Your guess is to HIGH mate!!");
    }
    value++;
    console.log(currentGuess);
}
;
//ASSIGNMENT NO 3
var counter = 0;
var step = 1;
do {
    console.log(counter);
    counter += step;
} while (counter < 100);
//ASSIGNMENT NO 4
var myObject = {
    item1: "shirt",
    item2: "paint",
    item3: "coat",
};
for (var x in myObject) {
    console.log("".concat([x], " ").concat(myObject[x]));
}
;
//ASSIGNMENT NO 5
var myArray = [];
for (var i = 1; i <= 10; i++) {
    myArray.push(i);
}
console.log(myArray);
for (var i = 0; i < myArray.length; i++) {
    console.log("index: ".concat(i, ", value").concat(myArray[i]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var v = myArray_1[_i];
    console.log("value of myArray ".concat(v));
}
