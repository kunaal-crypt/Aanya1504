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
