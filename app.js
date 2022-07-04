/*let we have slides on a coursourel and the slides are relative in position the if we change or left slide
1st slide by 300px then it will effect the rest of the slide 
if we left slide the 1st slide by 300px then we will see half of 1st slide and half of 2nd slide 
it happened beacouse of relative position . so we will use that for our slides */
const carousel = document.querySelector('.carousel');   /*queryselector is used to select html element from javascript*/
let sliders = [];                                        /*array for slider  */

let slideIndex = 0; // to track current slide index.           /*variable for current slide index*/


const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classname
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }   //calc is css formula to do calculations 
    //-ve sign indicate, we want negative margin left
    //100 beacause we want slider to go 100 percent off the screen
    //multiplying 100 with this calculation beacuse we want negative 100% per slide
    //subtract 2 from slider.length becz we want second slide to be in the middle
    //and add % sign to indicate this is a percentage value
    //subracct the margi value from this 100percent
    //doing same calc but this time we are multiplying 30 beacuse we have 30 pixels margin on right
}

for(let i = 0; i < 3; i++){
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);
    
//video cards

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})


    




