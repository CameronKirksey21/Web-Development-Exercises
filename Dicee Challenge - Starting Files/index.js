const randomNumber1 = Math.floor(
  Math.random() * (Math.floor(6) - Math.ceil(1) + 1) + Math.ceil(1)
);

const imageSelector = `dice${randomNumber1}.png`;

const randomImageSource = `images/${imageSelector}`;

const image1 = document.querySelectorAll('img')[0];

image1.setAttribute('src', randomImageSource);

const randomNumber2 = Math.floor(
  Math.random() * (Math.floor(6) - Math.ceil(1) + 1) + Math.ceil(1)
);

const imageSelector2 = `dice${randomNumber2}.png`;

const randomImageSource2 = `images/${imageSelector2}`;

const image2 = document.querySelectorAll('img')[1];

image2.setAttribute('src', randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = '🚩 Player 1 wins!';
} else if (randomNumber1 < randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player 2 wins! 🚩';
} else {
  document.querySelector('h1').innerHTML = 'Draw!';
}
