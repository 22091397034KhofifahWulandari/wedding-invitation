/* LOADING */

window.onload = ()=>{

setTimeout(()=>{

document.getElementById("loading").style.opacity = "0";

setTimeout(()=>{

document.getElementById("loading").style.display = "none";

},1000);

},2500);

};

/* OPEN INVITATION */

function openInvitation(){

document.getElementById("opening").style.opacity = "0";

setTimeout(()=>{

document.getElementById("opening").style.display = "none";

},1000);

const music = document.getElementById("music");

music.volume = 0.3;

music.play();

/* CONFETTI */

confetti({
particleCount:200,
spread:120
});

}

/* GUEST NAME FROM URL */

const urlParams = new URLSearchParams(window.location.search);

const to = urlParams.get('to');

if(to){

document.getElementById("guest").innerHTML =
"Kepada Yth. <br><br><strong>" + to + "</strong>";

}

/* COUNTDOWN */

const targetDate = new Date("Nov 21, 2026 00:00:00").getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = targetDate - now;

document.getElementById("days").innerHTML =
Math.floor(distance / (1000*60*60*24));

document.getElementById("hours").innerHTML =
Math.floor((distance%(1000*60*60*24))/(1000*60*60));

document.getElementById("minutes").innerHTML =
Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("seconds").innerHTML =
Math.floor((distance%(1000*60))/1000);

},1000);

/* SCROLL ANIMATION */

const fade = document.querySelectorAll('.fade');

window.addEventListener('scroll',()=>{

fade.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

el.classList.add('show');

}

});

});

/* SWIPER */

var swiper = new Swiper(".mySwiper", {

effect:"coverflow",

grabCursor:true,

centeredSlides:true,

slidesPerView:"auto",

coverflowEffect:{
rotate:0,
stretch:0,
depth:300,
modifier:1,
slideShadows:true,
},

loop:true,

autoplay:{
delay:2500,
disableOnInteraction:false,
}

});
