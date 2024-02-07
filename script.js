"use strict"

document.querySelector('.next').addEventListener('click', next);
document.querySelector('.prev').addEventListener('click', prev)
const images = document.querySelectorAll('.item');
const indicators = document.querySelectorAll('.indicator');
const inner = document.querySelector('.inner');

let move = 0;
let timer;

function next(){
  images[move].classList.remove('item_active');
  indicators[move].classList.remove('indicator_active')
  move++;  
  if(move == images.length){
    move = 0;
  }
  images[move].classList.add('item_active');
  indicators[move].classList.add('indicator_active') 
  clearTimeout(timer);
  autoplay();
}

function prev(){
  images[move].classList.remove('item_active');
  indicators[move].classList.remove('indicator_active')
  move--;  
  if(move < 0){
    move = images.length - 1;
  }
  images[move].classList.add('item_active');
  indicators[move].classList.add('indicator_active')
  clearTimeout(timer);
  
}

for (let i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener('click', function(){
    for (let j = 0; j < indicators.length; j++) {
      indicators[j].classList.remove('indicator_active');
      images[j].classList.remove('item_active')
    }
    this.classList.add('indicator_active');
    const index = this.getAttribute('slide-to');
    images[index].classList.add('item_active');
    move = index;
  })
}

function autoplay(){
  timer = setTimeout(next,2000)
}
autoplay();

inner.onmouseover = function(){
  clearTimeout(timer)
}
inner.onmouseout = function(){
  autoplay()
}