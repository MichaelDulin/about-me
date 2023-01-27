function getUserName() {

  let userName = prompt('Please type your name: ');
  while (userName === '') {
    userName = prompt('That is not correct. Please enter your name: ');
  }
  alert('Hello, ' + userName + ' and welcome to my portfolio!');
}
// Get user name

// Question 1:
function qOne() {
  let userResponse1 = prompt('Have I ever lived in another Country?');
  if (userResponse1 === 'yes' || userResponse1 === 'y') {
    alert('Good job, ' + userName + ' That is correct!');
  } else {
    //console.log('Sorry, ' + userName + '. That is not correct.');
    alert('Sorry, ' + userName + '. That is not correct.');
  }
}

// Question 2:
function qTwo() {

  let userResponse2 = prompt('Do I coach baseball?');
  if (userResponse2 === 'yes' || userResponse2 === 'y') {
    alert('Good job, ' + userName + ' That is correct!');
  } else {
    //console.log('Sorry, ' + userName + '. That is not correct.');
    alert('Sorry, ' + userName + '. That is not correct.');
  }
}
// Question 3:
function qThree() {

  let userResponse3 = prompt('Was I in the military?');
  if (userResponse3 === 'yes' || userResponse3 === 'y') {
    alert('Good job, ' + userName + ' That is correct!');
  } else {
    //console.log('Sorry, ' + userName + '. That is not correct.');
    alert('Sorry, ' + userName + '. That is not correct.');
  }
}
// Question 4:
function qFour() {

  let userResponse4 = prompt('Have I ever lived in Canada?');
  if (userResponse4 === 'no' || userResponse4 === 'n') {
    alert('Good job, ' + userName + ' That is correct!');
  } else {
    ///console.log('Sorry, ' + userName + '. That is not correct.');
    alert('Sorry, ' + userName + '. That is not correct.');
  }
}
// Question 5:
function qFive() {

  let userResponse5 = prompt('Do I like programming?');
  if (userResponse5 === 'yes' || userResponse5 === 'y') {
    alert('Good job, ' + userName + ' That is correct!');
  } else {
    //console.log('Sorry, ' + userName + '. That is not correct.');
    alert('Sorry, ' + userName + '. That is not correct.');
  }
}

