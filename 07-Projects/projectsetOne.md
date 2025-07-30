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