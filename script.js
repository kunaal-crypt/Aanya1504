/*=========================================
      PROJECT ANYA
      script.js
      Part 1C.1
=========================================*/

const loadingScreen = document.getElementById("loadingScreen");
const introSection = document.getElementById("introSection");
const passwordSection = document.getElementById("passwordSection");

const beginBtn = document.getElementById("beginBtn");
const unlockBtn = document.getElementById("unlockBtn");

const passwordInput =
document.getElementById("passwordInput");

const wrongPassword =
document.getElementById("wrongPassword");

const stars =
document.getElementById("stars");

const particles =
document.getElementById("particles");

const cursorGlow =
document.getElementById("cursorGlow");

/*=========================================
          INITIAL STATE
=========================================*/

passwordSection.style.display = "none";
wrongPassword.style.display = "none";

/*=========================================
        LOADING SCREEN
=========================================*/

window.addEventListener("load", () => {

setTimeout(() => {

loadingScreen.style.opacity = "0";

loadingScreen.style.pointerEvents = "none";

setTimeout(() => {

loadingScreen.remove();

},1000);

},4200);

});

/*=========================================
          BEGIN BUTTON
=========================================*/

beginBtn.addEventListener("click",()=>{

introSection.style.opacity="0";

introSection.style.transform="scale(.96)";

setTimeout(()=>{

introSection.style.display="none";

passwordSection.style.display="flex";

passwordSection.style.opacity="0";

setTimeout(()=>{

passwordSection.style.opacity="1";

},80);

},700);

});

/*=========================================
          PASSWORD
=========================================*/

unlockBtn.addEventListener("click",checkPassword);

passwordInput.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

checkPassword();

}

});

function checkPassword(){

const pass =
passwordInput.value.trim();

if(pass==="15-04"){

unlockDiary();

}

else{

wrongPassword.style.display="block";

wrongPassword.animate([

{

transform:"translateX(-8px)"

},

{

transform:"translateX(8px)"

},

{

transform:"translateX(0)"

}

],{

duration:350

});

passwordInput.value="";

}

}

/*=========================================
          UNLOCK
=========================================*/

function unlockDiary(){

unlockBtn.innerHTML="Unlocked 💚";

unlockBtn.style.background=
"#4FD1C5";

setTimeout(()=>{

document.body.style.background="#05070d";

alert(
"Diary opening animation will be added in Part 2 ❤️"
);

},800);

}

/*=========================================
            STARS
=========================================*/

for(let i=0;i<180;i++){

const star=
document.createElement("div");

star.className="star";

const size=
Math.random()*3+1;

star.style.width=size+"px";

star.style.height=size+"px";

star.style.left=
Math.random()*100+"%";

star.style.top=
Math.random()*100+"%";

star.style.animationDelay=
Math.random()*5+"s";

stars.appendChild(star);

}

/*=========================================
         FLOATING PARTICLES
=========================================*/

for(let i=0;i<45;i++){

const particle=
document.createElement("span");

particle.className="particle";

particle.style.left=
Math.random()*100+"%";

particle.style.animationDelay=
Math.random()*10+"s";

particle.style.animationDuration=
8+Math.random()*12+"s";

particles.appendChild(particle);

}

/*=========================================
        CURSOR GLOW
=========================================*/

document.addEventListener("mousemove",(e)=>{

cursorGlow.style.left=
e.clientX+"px";

cursorGlow.style.top=
e.clientY+"px";

});

document.addEventListener("touchmove",(e)=>{

cursorGlow.style.left=
e.touches[0].clientX+"px";

cursorGlow.style.top=
e.touches[0].clientY+"px";

});

/*=========================================
        BUTTON RIPPLE
=========================================*/

document.querySelectorAll("button")

.forEach(button=>{

button.addEventListener("click",()=>{

button.animate([

{

transform:"scale(.95)"

},

{

transform:"scale(1)"

}

],{

duration:250

});

});

});
/*=========================================
            PART 1C.2
=========================================*/

// Smooth cursor animation
let mouseX = 0;
let mouseY = 0;
let glowX = 0;
let glowY = 0;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateGlow() {
    glowX += (mouseX - glowX) * 0.15;
    glowY += (mouseY - glowY) * 0.15;

    cursorGlow.style.left = glowX + "px";
    cursorGlow.style.top = glowY + "px";

    requestAnimationFrame(animateGlow);
}

animateGlow();

// Random loading messages
const loadingMessages = [
    "Collecting stars...",
    "Writing memories...",
    "Preparing the diary...",
    "Gathering little moments...",
    "Almost ready..."
];

const loadingText =
document.querySelector(".loadingText");

let msg = 0;

const loadingInterval = setInterval(() => {

    msg++;

    if(msg >= loadingMessages.length){

        clearInterval(loadingInterval);

        return;

    }

    loadingText.textContent =
    loadingMessages[msg];

},800);

// Button hover glow
document.querySelectorAll("button")
.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.boxShadow =
        "0 0 30px rgba(79,209,197,.45)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.boxShadow="";

    });

});

// Focus input automatically
passwordInput.focus();
/*=========================================
            DIARY TRANSITION
=========================================*/

const diaryCover = document.getElementById("diaryCover");
const openDiary = document.getElementById("openDiary");

function unlockDiary(){

    unlockBtn.innerHTML = "Unlocked 💚";

    unlockBtn.disabled = true;

    setTimeout(()=>{

        passwordSection.classList.add("fadeOut");

        setTimeout(()=>{

            passwordSection.style.display="none";

            diaryCover.style.display="flex";

            requestAnimationFrame(()=>{

                diaryCover.style.opacity="1";

            });

        },700);

    },500);

}

openDiary.addEventListener("click",()=>{

    openDiary.innerHTML="Opening... 📖";

    openDiary.disabled=true;

    setTimeout(()=>{

        alert("Home Page will be added in Part 2.");

    },900);

});

/*=========================================
        HOME PAGE TRANSITION
=========================================*/

const homePage = document.getElementById("homePage");

openDiary.addEventListener("click", () => {

    const diaryFront =
    document.querySelector(".diaryFront");

    diaryFront.classList.add("open");

    setTimeout(() => {

        diaryCover.style.opacity = "0";

    },900);

    setTimeout(() => {

        diaryCover.style.display = "none";

        homePage.style.display = "block";

        requestAnimationFrame(()=>{

            homePage.style.opacity="1";

        });

    },1400);

});

/*=========================================
        MENU CARD EFFECT
=========================================*/

document.querySelectorAll(".menuCard")

.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.animate([

{
transform:"translateY(0px)"
},

{
transform:"translateY(-8px)"
}

],{

duration:250,

fill:"forwards"

});

});

});

/*=========================================
        PREMIUM ENTRANCE
=========================================*/

window.setTimeout(()=>{

document.querySelectorAll(".menuCard")

.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(35px)";

setTimeout(()=>{

card.style.transition=".6s ease";

card.style.opacity="1";

card.style.transform="translateY(0px)";

},index*120);

});

},200);

/*=========================================
        JOURNEY PAGE NAVIGATION
=========================================*/

const journeyPage = document.getElementById("journeyPage");
const backHome = document.getElementById("backHome");

document.querySelector('[data-page="journey"]')
.addEventListener("click",()=>{

    homePage.style.opacity="0";

    setTimeout(()=>{

        homePage.style.display="none";

        journeyPage.style.display="block";

        requestAnimationFrame(()=>{

            journeyPage.style.opacity="1";

        });

    },500);

});

backHome.addEventListener("click",()=>{

    journeyPage.style.opacity="0";

    setTimeout(()=>{

        journeyPage.style.display="none";

        homePage.style.display="block";

        requestAnimationFrame(()=>{

            homePage.style.opacity="1";

        });

    },500);

});

/*=========================================
        TIMELINE CARD ANIMATION
=========================================*/

const timelineCards =
document.querySelectorAll(".timelineCard");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

timelineCards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".7s ease";

observer.observe(card);

});

/*=========================================
        LETTER PAGE NAVIGATION
=========================================*/

const letterPage = document.getElementById("letterPage");
const letterBack = document.getElementById("letterBack");

document.querySelector('[data-page="letter"]')
.addEventListener("click", () => {

    homePage.style.opacity = "0";

    setTimeout(() => {

        homePage.style.display = "none";

        letterPage.style.display = "block";

        requestAnimationFrame(() => {

            letterPage.style.opacity = "1";

        });

    }, 500);

});

letterBack.addEventListener("click", () => {

    letterPage.style.opacity = "0";

    setTimeout(() => {

        letterPage.style.display = "none";

        homePage.style.display = "block";

        requestAnimationFrame(() => {

            homePage.style.opacity = "1";

        });

    }, 500);

});

/*=========================================
      TYPEWRITER EFFECT
=========================================*/

const letterContent =
document.getElementById("letterContent");

const fullLetter =
letterContent.innerHTML;

letterContent.innerHTML = "";

let letterPlayed = false;

function startLetterAnimation(){

    if(letterPlayed) return;

    letterPlayed = true;

    let i = 0;

    const typing = setInterval(() => {

        letterContent.innerHTML += fullLetter.charAt(i);

        i++;

        if(i >= fullLetter.length){

            clearInterval(typing);

        }

    },18);

}

document.querySelector('[data-page="letter"]')
.addEventListener("click", () => {

    setTimeout(startLetterAnimation,700);

});

/*=========================================
      PREMIUM HOME INTERACTIONS V2
=========================================*/

// Ripple Effect
document.querySelectorAll(".menuCard").forEach(card=>{

card.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

const rect=card.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";
ripple.style.height=size+"px";

ripple.style.left=(e.clientX-rect.left-size/2)+"px";
ripple.style.top=(e.clientY-rect.top-size/2)+"px";

ripple.className="ripple";

card.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});

// Floating animation delay

document.querySelectorAll(".menuCard")

.forEach((card,index)=>{

card.style.animationDelay=(index*0.18)+"s";

});

// Luxury Tilt Effect

document.querySelectorAll(".menuCard")

.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;

const rotateX=((y/rect.height)-0.5)*-12;

card.style.transform=

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

});

// Fade Cards One by One

window.addEventListener("load",()=>{

const cards=document.querySelectorAll(".menuCard");

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(30px)";

setTimeout(()=>{

card.style.transition=".6s ease";

card.style.opacity="1";

card.style.transform="translateY(0)";

},150*index);

});

});

// Luxury Click Glow

document.querySelectorAll(".menuCard")

.forEach(card=>{

card.addEventListener("mousedown",()=>{

card.style.boxShadow=

"0 0 50px rgba(79,209,197,.45)";

});

card.addEventListener("mouseup",()=>{

card.style.boxShadow="";

});

});

/*=========================================
      THINGS I ADORE NAVIGATION
=========================================*/

const adorePage =
document.getElementById("adorePage");

const adoreBack =
document.getElementById("adoreBack");

const adoreButton =
document.querySelector('[data-page="adore"]');

if(adoreButton){

adoreButton.addEventListener("click",()=>{

homePage.style.opacity="0";

homePage.style.transform="scale(.98)";

setTimeout(()=>{

homePage.style.display="none";

adorePage.style.display="block";

requestAnimationFrame(()=>{

adorePage.style.opacity="1";

});

},500);

});

}

if(adoreBack){

adoreBack.addEventListener("click",()=>{

adorePage.style.opacity="0";

setTimeout(()=>{

adorePage.style.display="none";

homePage.style.display="block";

requestAnimationFrame(()=>{

homePage.style.opacity="1";

homePage.style.transform="scale(1)";

});

},500);

});

}

/*=========================================
      ADORE CARD ENTRANCE
=========================================*/

const adoreCards =
document.querySelectorAll(".adoreCard");

const adoreObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0) scale(1)";

}

});

},{
threshold:.15
});

adoreCards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(50px) scale(.96)";

card.style.transition=
".7s ease";

card.style.transitionDelay=
(index*.12)+"s";

adoreObserver.observe(card);

});

/*=========================================
      SOFT HOVER GLOW
=========================================*/

adoreCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX-rect.left;

const y =
e.clientY-rect.top;

card.style.background =

`radial-gradient(
circle at ${x}px ${y}px,
rgba(79,209,197,.18),
rgba(255,255,255,.08) 70%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background=

"rgba(255,255,255,.08)";

});

});

/*=========================================
        CUTE MOMENTS PAGE
=========================================*/

const momentsPage =
document.getElementById("momentsPage");

const momentsBack =
document.getElementById("momentsBack");

const momentsButton =
document.querySelector('[data-page="moments"]');

/*========== OPEN PAGE ==========*/

if(momentsButton){

momentsButton.addEventListener("click",()=>{

homePage.style.opacity="0";

homePage.style.transform="scale(.98)";

setTimeout(()=>{

homePage.style.display="none";

momentsPage.style.display="block";

requestAnimationFrame(()=>{

momentsPage.style.opacity="1";

momentsPage.style.transform="translateY(0)";

});

},500);

});

}

/*========== BACK HOME ==========*/

if(momentsBack){

momentsBack.addEventListener("click",()=>{

momentsPage.style.opacity="0";

momentsPage.style.transform="translateY(20px)";

setTimeout(()=>{

momentsPage.style.display="none";

homePage.style.display="block";

requestAnimationFrame(()=>{

homePage.style.opacity="1";

homePage.style.transform="scale(1)";

});

},500);

});

}

/*========== CARD ENTRANCE ==========*/

const memoryCards =
document.querySelectorAll(".memoryCard");

const memoryObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0) scale(1)";

}

});

},{
threshold:.15
});

memoryCards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform="translateY(60px) scale(.95)";

card.style.transition=".75s ease";

card.style.transitionDelay=
(index*0.12)+"s";

memoryObserver.observe(card);

});

/*========== PARALLAX GLOW ==========*/

memoryCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX-rect.left;

const y =
e.clientY-rect.top;

card.style.background=

`radial-gradient(
circle at ${x}px ${y}px,
rgba(79,209,197,.22),
rgba(255,255,255,.08) 70%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background=

"linear-gradient(135deg,rgba(255,255,255,.09),rgba(255,255,255,.05))";

});

});

/*========== FLOATING HEARTS ==========*/

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML="💚";

heart.style.position="fixed";

heart.style.left=
Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=
(14+Math.random()*18)+"px";

heart.style.opacity=".7";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

heart.style.transition="6s linear";

document.body.appendChild(heart);

requestAnimationFrame(()=>{

heart.style.transform=

`translateY(-120vh)
translateX(${(Math.random()*120)-60}px)
rotate(${Math.random()*360}deg)`;

heart.style.opacity="0";

});

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(()=>{

if(momentsPage.style.display==="block"){

createHeart();

}

},900);

/*========== BUTTON PRESS ==========*/

document.querySelectorAll("#momentsBack")
.forEach(btn=>{

btn.addEventListener("mousedown",()=>{

btn.style.transform="scale(.96)";

});

btn.addEventListener("mouseup",()=>{

btn.style.transform="scale(1)";

});

});
/*=========================================
        PREMIUM GALLERY
=========================================*/

const galleryPage =
document.getElementById("galleryPage");

const galleryBack =
document.getElementById("galleryBack");

const galleryButton =
document.querySelector('[data-page="gallery"]');

const lightbox =
document.getElementById("lightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const closeLightbox =
document.getElementById("closeLightbox");

/*========== OPEN GALLERY ==========*/

if(galleryButton){

galleryButton.addEventListener("click",()=>{

homePage.style.opacity="0";

homePage.style.transform="scale(.98)";

setTimeout(()=>{

homePage.style.display="none";

galleryPage.style.display="block";

requestAnimationFrame(()=>{

galleryPage.style.opacity="1";

galleryPage.style.transform="translateY(0)";

});

},500);

});

}

/*========== BACK HOME ==========*/

if(galleryBack){

galleryBack.addEventListener("click",()=>{

galleryPage.style.opacity="0";

galleryPage.style.transform="translateY(20px)";

setTimeout(()=>{

galleryPage.style.display="none";

homePage.style.display="block";

requestAnimationFrame(()=>{

homePage.style.opacity="1";

homePage.style.transform="scale(1)";

});

},500);

});

}

/*========== LIGHTBOX ==========*/

document.querySelectorAll(".photoCard img")

.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.style.display="flex";

requestAnimationFrame(()=>{

lightbox.style.opacity="1";

});

lightboxImage.src=image.src;

});

});

if(closeLightbox){

closeLightbox.addEventListener("click",()=>{

lightbox.style.opacity="0";

setTimeout(()=>{

lightbox.style.display="none";

},350);

});

}

/*========== CLICK OUTSIDE ==========*/

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.opacity="0";

setTimeout(()=>{

lightbox.style.display="none";

},350);

}

});

/*========== ESC KEY ==========*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

lightbox.style.opacity="0";

setTimeout(()=>{

lightbox.style.display="none";

},350);

}

});

/*========== PHOTO ENTRANCE ==========*/

const photos =
document.querySelectorAll(".photoCard");

const galleryObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0) scale(1)";

}

});

},{
threshold:.15
});

photos.forEach((photo,index)=>{

photo.style.opacity="0";

photo.style.transform="translateY(60px) scale(.95)";

photo.style.transition=".75s ease";

photo.style.transitionDelay=(index*.12)+"s";

galleryObserver.observe(photo);

});

/*========== IMAGE GLOW ==========*/

photos.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(79,209,197,.22),
rgba(255,255,255,.08) 70%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.08)";

});

});
