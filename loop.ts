//ASSIGNMENT NO 1
const myWork: { name: string; status: boolean }[] = [];
for (let i = 1; i <= 10; i++) {
  let lesson = {
    name: `"lesson"${i}`,
    status: i % 2 === 1 ? true : false,
  };
  myWork.push(lesson);
}
console.log(myWork);

//ASSIGNMENT NO 2
const MaximaumValue: number = 8;
const randomNumber = Math.floor(Math.random() * MaximaumValue) + 1;
console.log(randomNumber);
let guessArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let value: number = 0;
while (value < guessArray.length) {
  let currentGuess = guessArray[value];
  if (currentGuess === randomNumber) {
    console.log(`"congratulation you have guessed the number."\n YOU WON!!`);
  } else if (currentGuess < randomNumber) {
    console.log(" Unfortunately your guess is to LOW");
  } else if (currentGuess > randomNumber) {
    console.log("Your guess is to HIGH mate!!");
  }
  value++;
  console.log(currentGuess);
};

//ASSIGNMENT NO 3
let counter = 0;
let step =1;
do{console.log(counter);
    counter +=step
}while(counter<100);

//ASSIGNMENT NO 4
const myObject ={
    item1:"shirt",
    item2:"paint",
    item3:"coat",
};
for(let x in myObject){
    console.log(`${[x]} ${myObject[x]}`);
};

//ASSIGNMENT NO 5
let myArray: number[] = [];
for (let i = 1; i <= 10; i++) {
  myArray.push(i);
}
console.log(myArray);
for (let i = 0; i < myArray.length; i++) {
  console.log(`index: ${i}, value${myArray[i]}`);
}
for (let v of myArray) {
  console.log(`value of myArray ${v}`);
}

//all assignments are completed