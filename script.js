/*document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("header h1");
    let text = title.innerText;
    title.innerText = "";
    
    text.split("").forEach((letter, i) => {
        setTimeout(() => {
            title.innerText += letter;
        }, i * 100);
    });
});*/
// const textAnim = document.querySelector('h1');
// new Typewriter(textAnim, {
//     //deleteSpeed: 20
// })
// .typeString('Moi c\'est GANVO Kevine !') 
// .pauseFor(1)
// .typeString('<strong> <br> Dev web & Graphiste</strong>')
// .start()
document.addEventListener("DOMContentLoaded", () => {
    const projets = document.querySelectorAll(".projet");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    projets.forEach(projet => {
        observer.observe(projet);
    });
});

//CAROUSSEL
//access the Images
let slideImages = document.querySelectorAll('main');
//access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
//access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;
//code for next button
next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter>= slideImages.length-1){
        counter = 0;
    }
    else{
        counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards'
};
//code for prev button
prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length-1;
    }
    else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards'
};
//auto sliding
function autoSliding(){
    deletInterval = setInterval(timer, 4000);
    function timer(){
        slideNext();
    }
}
autoSliding();
// Stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});
//resume sliding when mous is out
container.addEventListener('mouseout', autoSliding);


