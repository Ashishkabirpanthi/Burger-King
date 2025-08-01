const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'),
 navClose = document.getElementById('nav-close')
const navLink = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll('section[id]')


function splitH2() {
    var text = document.querySelector(".delivery__data h2");
    var splitText = text.textContent;
    var clutter = "";

    // Create a span element for each character
    splitText.split("").forEach(function (elem) {
        var spanElem = document.createElement("span");
        spanElem.textContent = elem; // Set the text content of the span element
        clutter += spanElem.outerHTML; // Convert the span element to a string and append it to clutter
    });

    text.innerHTML = clutter; // Update the innerHTML of the original text element
}
splitH2();

function splitP() {
    var text = document.querySelector(".delivery__data p");
    var splitText = text.textContent;
    var clutter = "";

    // Create a span element for each character
    splitText.split("").forEach(function (elem) {
        var spanElem = document.createElement("span");
        spanElem.textContent = elem; // Set the text content of the span element
        clutter += spanElem.outerHTML; // Convert the span element to a string and append it to clutter
    });

    text.innerHTML = clutter; // Update the innerHTML of the original text element
}
splitP();


if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
 
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

document.addEventListener('mousemove', move);
function move(e) {
    const layers = document.querySelectorAll('.move');
    
    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        
        const x = (window.innerWidth - e.pageX * speed) / 120;
        const y = (window.innerHeight - e.pageY * speed) / 120;
        
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

const shadowHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader);

const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up');
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

gsap.from(".nav__menu li" ,{
    y:-30,
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger:0.2
})

gsap.from(".home__data, .home__burger",{
    y:-100,
    opacity:0,
    delay:0.5,
    duration:1,
})

gsap.from(".home__dish" ,{
    y:100,
    opacity:0,
    delay:0.5,
    duration:1,
})

gsap.from(".home__ingredient" ,{
    opacity:0,
    delay:1,
    duration:.5,
    stagger:0.2
})

gsap.from(".recipe__img" ,{
    x:-200,
    opacity:0,
    delay:0.5,
    duration:1,
    scrollTrigger:".recipe__img"
})

gsap.from(".recipe__data" ,{
    x:200,
    opacity:0,
    delay:0.5,
    duration:1,
    scrollTrigger:".recipe__data"
})

gsap.from(".recipe__image img" ,{
    y:30,
    duration:1.5,
    ease:"power1.inOut",
    repeat:-1,
    yoyo:true
})

gsap.from(".popular__card",{
    y:-30,
    opacity:0,
    delay:0.3,
    duration:0.5,
    stagger:0.18,
    scrollTrigger:".popular__card"
})

gsap.from(".delivery__data h2 span",{
    opacity:0,
    delay:0.8,
    duration:1,
    stagger:0.04,
    scrollTrigger:".delivery__data h2 span"
})

gsap.from(".delivery__data p span",{
    opacity:0,
    delay:0.8,
    duration:0.2,
    stagger:0.015,
    scrollTrigger:".delivery__data p span"
})

gsap.from(".delivery__data img, .delivery__data a",{
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.04,
    scrollTrigger:".delivery__data img, .delivery__data a"
})

gsap.from(".delivery__img",{
    x:-1300,
    delay:0.3,
    duration:4,
    ease:"power2.out",
    scrollTrigger:".delivery__img"
})

gsap.from(".contact__image" ,{
    x:-50,
    opacity:0,
    delay:0.3,
    duration:1,
    scrollTrigger:".contact__image"
})

gsap.from(".contact__data" ,{
    x:50,
    opacity:0,
    delay:0.3,
    duration:1,
    scrollTrigger:".contact__data"
})

gsap.from(".footer",{
    y:-100,
    opacity:0,
    delay:0.5,
    duration:1,
    scrollTrigger:".footer"
})