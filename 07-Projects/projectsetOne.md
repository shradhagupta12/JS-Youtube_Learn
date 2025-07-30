# Project related to DOM

### Project Link
[Master Link](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


## Solution Code

### Project 1

``` javascript

const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');

btn.forEach((button) => {
  button.addEventListener('click', (e) => {
    body.style.backgroundColor = e.target.id;
  });
});

```

### Project 2

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