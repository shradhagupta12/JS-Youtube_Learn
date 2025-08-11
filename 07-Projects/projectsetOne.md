# Project related to DOM

### Project Link
[Master Link](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


## Solution Code

### Project 1 - Background color change

``` javascript

const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach((button) => {
  button.addEventListener('click', (e) => {
    body.style.backgroundColor = e.target.id;
  });
});

```

### Project 2 - BMI Calculator

``` javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const result = document.getElementById('results');
  // console.log(typeof height); --String

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `<span>Please enter correct height ${height}</span>`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `<span>Please enter correct weight ${weight}</span>`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.6) {
      result.innerHTML = `${bmi} You are a under weight`;
    } else if (bmi >= 18.6 && bmi <= 24.6) {
      result.innerHTML = `${bmi} You have a normal weight`;
    } else {
      result.innerHTML = `${bmi} You are a overweight`;
    }
  }
});

```

### Project 3 - Digital Clock
``` javascript

const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project4 - Guess the Number
```javascript

/* 
We have two section in this page that is one Form input and another is result which has previous guesses and reamining guess .

So first we will take all the document variable in the js.
*/

// Random Number
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submitBtn = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');

const guessSlot = document.querySelector('.guesses');
const reamining = document.querySelector('.lastResult');

const lowOrhigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const paragraph = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const userGuess = parseInt(userInput.value);
    // console.log(userGuess);
    validateGuess(userGuess);
  });
}

function validateGuess(userGuess) {
  // This method will validate if the userInput is number or other
  if (isNaN(userGuess)) {
    alert('Please enter a valid number');
  } else if (userGuess < 1) {
    alert('Please enter a valid number');
  } else if (userGuess > 100) {
    alert('Please enter a valid number');
  } else {
    prevGuess.push(userGuess);
    if (numGuess === 11) {
      guessDisplay(userGuess);
      displayMessage(`Game Over the random number was ${randomNumber}`);
      endGame();
    } else {
      guessDisplay(userGuess);
      checkGuess(userGuess);
    }
  }
}

function checkGuess(userGuess) {
  // We will actual check if the  number is lower/higer to the random number

  if (userGuess === randomNumber) {
    displayMessage('You guess is right');
    endGame();
  } else if (userGuess < randomNumber) {
    displayMessage('Number is TOO low');
  } else if (userGuess > randomNumber) {
    displayMessage('Number is TOO high');
  }
}

function guessDisplay(userGuess) {
  // userInput value will be update and will cleanUp the input
  userInput.value = '';
  guessSlot.innerHTML += `${userGuess} , `;
  numGuess++;
  reamining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // will display the message
  lowOrhigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  // End the current game
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  paragraph.classList.add('button');
  paragraph.innerHTML = `<h2 id='newGame'>Start new game</h2>`;
  startOver.appendChild(paragraph);
  playGame = false;
  newGame();
}

function newGame() {
  //Start a new game
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', function (e) {
    // Reset all the attribute
    randomNumber = parseInt(Math.random() * 100 + 1);
    guessSlot.innerHTML = '';
    reamining.innerHTML = `10`;
    lowOrhigh.innerHTML = '';
    prevGuess = [];
    numGuess = 1;
    userInput.removeAttribute('disabled');
    startOver.removeChild(paragraph);
    playGame = true;
  });
}

```

## Project6- Random color generater
```javascript
// generate random color.

const randomColor = function () {
  const hexValue = '0123456789ABCDEF';
  let colorNew = '#';
  for (let i = 0; i < 6; i++) {
    colorNew += hexValue[Math.floor(Math.random() * 16)];
  }
  return colorNew;
};

let intervalId;
const startChangingColor = function () {
  function changeBodyColor() {
    document.body.style.backgroundColor = randomColor();
  }
  intervalId = setInterval(changeBodyColor, 1000);
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


```