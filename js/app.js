'use strict';

let userName;
let userResponse1;
let userResponse2;
let userResponse3;
let userResponse4;
let userResponse5;
let guessesLeft = 4;
let userPoints = 0;
let userResponse7;

getUserName();
q1();q2();q3();q4();q5();q6();q7();

function getUserName() {
  // Get user name
  userName = prompt('Please type your name: ');
  while (userName === '') {
    userName = prompt('That is not correct. Please enter your name: ');
  }
  alert('Hello, ' + userName + ' and welcome to my portfolio!');
}

function calcPoints() {
  alert('Total Points: ' + userPoints);
}

// Question 1:
function q1() {
  userResponse1 = prompt('Have I ever lived in another Country?');
  if (userResponse1 === 'yes' || userResponse1 === 'y') {
    alert('Good job, ' + userName + ' That is correct!');
    userPoints += 1;
  } else {
    //console.log('Sorry, ' + userName + '. That is not correct.');
    alert('Sorry, ' + userName + '. That is not correct.');
  }
  calcPoints();
}

// Question 2:
function q2() {

  userResponse2 = prompt('Do I coach baseball?');
  if (userResponse2 === 'yes' || userResponse2 === 'y') {
    alert('Good job, ' + userName + ' That is correct!');
    userPoints += 1;
  } else {
    //console.log('Sorry, ' + userName + '. That is not correct.');
    alert('Sorry, ' + userName + '. That is not correct.');
  }
  calcPoints();
}

// Question 3:
function q3() {

  userResponse3 = prompt('Was I in the military?');
  if (userResponse3 === 'yes' || userResponse3 === 'y') {
    alert('Good job, ' + userName + ' That is correct!');
    userPoints += 1;
  } else {
    //console.log('Sorry, ' + userName + '. That is not correct.');
    alert('Sorry, ' + userName + '. That is not correct.');
  }
  calcPoints();
}

// Question 4:
function q4() {

  userResponse4 = prompt('Have I ever lived in Canada?');
  if (userResponse4 === 'no' || userResponse4 === 'n') {
    alert('Good job, ' + userName + ' That is correct!');
    userPoints += 1;
  } else {
    ///console.log('Sorry, ' + userName + '. That is not correct.');
    alert('Sorry, ' + userName + '. That is not correct.');
  }
  calcPoints();
}
// Question 5:
function q5() {

  userResponse5 = prompt('Do I like programming?');
  if (userResponse5 === 'yes' || userResponse5 === 'y') {
    alert('Good job, ' + userName + ' That is correct!');
    userPoints += 1;
  } else {
    //console.log('Sorry, ' + userName + '. That is not correct.');
    alert('Sorry, ' + userName + '. That is not correct.');
  }
  calcPoints();
}


function q6() {
  let correctNum = 7;
  let condition = 0;
  let userNum = prompt('Guess a number between 1 and 10:');
  while (condition !== 1) {
    if (+userNum < correctNum) {
      guessesLeft -= 1;
      userNum = prompt('That is too low! Guesses remaining = '
      + guessesLeft + '. Guess a number beteween 1 and 10:');
    } else if (+userNum > correctNum) {
      guessesLeft -= 1;
      userNum = prompt('That is too high! Guesses remaining = '
      + guessesLeft + '. Guess a number beteween 1 and 10:');
    }
    if (+userNum === correctNum) {
      userPoints += 1;
      condition = 1;
      alert('That is correct!');
    }
    if (guessesLeft <= 0) {
      condition = 1;
      alert('You ran out of chances!');
    }
  }
  calcPoints();
}

/*
function q7() {
  guessesLeft = 6;
  let correctGuesses = 0;
  let myArr = ['seattle', 'yokosuka', 'norfolk', 'jacksonville'];
  while (guessesLeft > 0 && correctGuesses < 4){
    userResponse7 = prompt('What 4 cities have I lived in? (guesses reamining = ' + guessesLeft + '): ');
    for (let i = 0; i < myArr.length; i++) {
      if (userResponse7 === myArr[i]) {
        alert('That is a correct answer! I have lived in ' + userResponse7);
        correctGuesses += 1;
        guessesLeft -= 1;
        userPoints += 1;
      } else if (userResponse7 !== myArr[i] && i === 3){
        alert('That is not correct. Try again!');
        guessesLeft -= 1;
      }
    }
  }
  alert('Here all all the places I have lived: ' + myArr);
  alert('Thanks for playing, ' + userName + '! Your final score: ' + userPoints);
}
*/

function q7() {
  guessesLeft = 6;
  let correctGuesses = 0;
  let myArr = ['seattle', 'yokosuka', 'norfolk', 'jacksonville'];
  while (guessesLeft > 0 && correctGuesses < 3) {
    userResponse7 = prompt('What 4 cities have I lived in? (guesses reamining = ' + guessesLeft + '): ');
    let cur = myArr.some(checkAnswer);
    function checkAnswer (correct){
      return correct == userResponse7;
    }
    if (cur === true) {
      alert('That is a correct answer! I have lived in ' + userResponse7);
        correctGuesses += 1;
        guessesLeft -= 1;
        userPoints += 1;
    } else {
      alert('That is not correct. Try again!');
      guessesLeft -= 1;
    }
  }
  alert('Here all all the places I have lived: ' + myArr);
  alert('Thanks for playing, ' + userName + '! Your final score: ' + userPoints);
}
