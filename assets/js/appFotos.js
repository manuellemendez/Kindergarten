
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons

const prevBtn= document.querySelector('#prevBtn');
const nextBtn= document.querySelector('#nextBtn');

//counter

let counter = 1;

const size= carouselImages[0].clientWidth;

carouselSlide.style.transform='translateX('+(-size * counter) + 'px)';




//Button Listeners//

nextbtn.addEventListener('click',() => {
    
    carouselSlide.style.transition= 'transform 0.4s ease-in-out';
    counter++;
    console.log(counter);
    carouselSlide.style.transform='translateX('+(-size* counter)+'px)';
});

prevbtn.addEventListener('click',()=>{
    carouselSlide.style.transition= 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform='translateX('+(-size* counter)+'px)';
});

carouselSlide.addEventListener('transitionend',() =>{
console.log('fired');
});