/* =========================
LOADING SCREEN
========================= */

window.onload = ()=>{

setTimeout(()=>{

document.getElementById("loading").style.opacity = "0";

setTimeout(()=>{

document.getElementById("loading").style.display = "none";

},1000);

},2500);

};

/* =========================
OPEN INVITATION
========================= */

function openInvitation(){

document.getElementById("opening").style.opacity = "0";

setTimeout(()=>{

document.getElementById("opening").style.display = "none";

},1000);

/* MUSIC */

const music = document.getElementById("music");

music.volume = 0.3;

music.play();

/* CONFETTI */

confetti({

particleCount:200,
spread:120,
origin:{ y:0.6 }

});

}

/* =========================
GUEST NAME FROM URL
========================= */

const urlParams = new URLSearchParams(window.location.search);

const to = urlParams.get('to');

if(to){

document.getElementById("guest").innerHTML =
"Kepada Yth. <br><br><strong>" + to + "</strong>";

document.getElementById("guest-name").innerHTML =
to;

}

/* =========================
CURSOR GLOW
========================= */

const glow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove',(e)=>{

glow.style.left = e.clientX + 'px';

glow.style.top = e.clientY + 'px';

});

/* =========================
COUNTDOWN
========================= */

const targetDate = new Date("Nov 21, 2026 00:00:00").getTime();

setInterval(()=>{

const now = new Date().getTime();

const distance = targetDate - now;

/* DAYS */

document.getElementById("days").innerHTML =
Math.floor(distance / (1000*60*60*24));

/* HOURS */

document.getElementById("hours").innerHTML =
Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);

/* MINUTES */

document.getElementById("minutes").innerHTML =
Math.floor(
(distance%(1000*60*60))
/
(1000*60)
);

/* SECONDS */

document.getElementById("seconds").innerHTML =
Math.floor(
(distance%(1000*60))
/
1000
);

},1000);

/* =========================
SCROLL ANIMATION
========================= */

const fade = document.querySelectorAll('.fade');

window.addEventListener('scroll',()=>{

fade.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){

el.classList.add('show');

}

});

});

/* =========================
SWIPER GALLERY
========================= */

var swiper = new Swiper(".mySwiper",{

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

/* =========================
LENIS SMOOTH SCROLL
========================= */

const lenis = new Lenis({

duration:1.5,

smoothWheel:true,

smoothTouch:false

});

function raf(time){

lenis.raf(time);

requestAnimationFrame(raf);

}

requestAnimationFrame(raf);

/* =========================
GSAP
========================= */

gsap.registerPlugin(ScrollTrigger);

/* HERO TITLE */

gsap.from(".hero-center h1",{

y:100,
opacity:0,
duration:2,
ease:"power4.out"

});

/* HERO SUBTITLE */

gsap.from(".hero-center h5",{

y:40,
opacity:0,
duration:1.5,
delay:.3,
ease:"power4.out"

});

/* HERO BUTTON */

gsap.from(".hero-center button",{

y:50,
opacity:0,
duration:1.5,
delay:1,
ease:"power4.out"

});

/* LEFT CHARACTER */

gsap.from(".left-character",{

x:-200,
opacity:0,
duration:2,
ease:"power4.out"

});

/* RIGHT CHARACTER */

gsap.from(".right-character",{

x:200,
opacity:0,
duration:2,
ease:"power4.out"

});

/* FLOATING CHARACTER */

gsap.to(".left-character img",{

y:20,
duration:4,
repeat:-1,
yoyo:true,
ease:"sine.inOut"

});

gsap.to(".right-character img",{

y:-20,
duration:4,
repeat:-1,
yoyo:true,
ease:"sine.inOut"

});

/* SECTION FADE */

gsap.utils.toArray(".fade").forEach((section)=>{

gsap.from(section,{

scrollTrigger:{
trigger:section,
start:"top 80%",
},

y:120,
opacity:0,
duration:1.8,
ease:"power4.out"

});

});

/* HERO PARALLAX */

gsap.to(".hero-premium",{

backgroundPosition:"50% 100%",

ease:"none",

scrollTrigger:{
trigger:".hero-premium",
start:"top top",
end:"bottom top",
scrub:true
}

});

/* =========================
COPY REKENING
========================= */

function copyRek(){

navigator.clipboard.writeText("1234567890");

alert("Nomor rekening berhasil disalin");

}

/* =========================
RSVP FORM DEMO
========================= */

const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const name = form.querySelector("input").value;

const message = form.querySelector("textarea").value;

if(name === "" || message === ""){

alert("Isi nama dan ucapan terlebih dahulu");

return;

}

const wishes = document.getElementById("wishes");

const div = document.createElement("div");

div.classList.add("wish-card","glass");

div.innerHTML = `

<img src="assets/images/avatar.webp">

<div>

<h3>${name}</h3>

<p>${message}</p>

</div>

`;

wishes.prepend(div);

form.reset();

});

/* =========================
PARTICLES RANDOM
========================= */

for(let i=0;i<20;i++){

const particle = document.createElement('span');

particle.classList.add('particle-item');

particle.style.left = Math.random()*100 + '%';

particle.style.animationDuration =
5 + Math.random()*10 + 's';

particle.style.opacity =
Math.random();

document.body.appendChild(particle);

}

