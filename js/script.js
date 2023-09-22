const itemsCarousel = document.querySelector('.items-carousel');
const btnUp = document.querySelector('.up');
const btnDown = document.querySelector('.down');
const thumbnails = document.querySelector('.thumbnails');


let counter = 0;

// svuoto elementi nell html
itemsCarousel.innerHTML = '';
thumbnails.innerHTML = '';

const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
]

for(let i = 0; i < images.length;i++){
  const image = images[i];
  itemsCarousel.innerHTML += `<img src="${image}" class= "newItem hide">`;
  thumbnails.innerHTML += `<img src="${image}"class= "thumbItem inactive">`;

}

const newItem = document.getElementsByClassName('newItem');

const thumbItem = document.getElementsByClassName('thumbItem')


// prendi indice 0 del nuovo array
newItem[0].classList.remove('hide');
thumbItem[0].classList.add('active');

// bottone down
btnDown.addEventListener('click',function(){
  

  newItem[counter].classList.add('hide');
  thumbItem[counter].classList.remove('active');
  
  counter++;
  if (counter === newItem.length) counter = 0;
  newItem[counter].classList.remove('hide');
  thumbItem[counter].classList.add('active');
})

// bottone  su
btnUp.addEventListener('click',function(){
    
  newItem[counter].classList.add('hide');
  thumbItem[counter].classList.remove('active');

  counter--;
  if(counter < 0) counter = newItem.length -1;
  newItem[counter].classList.remove('hide');
  
  btnDown.classList.remove('hide');
  thumbItem[counter].classList.add('active');
})

