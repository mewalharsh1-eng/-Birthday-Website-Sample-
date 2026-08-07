  const hearts = document.getElementById("hearts");

const emojis = ["💖","💕","💗","💞","🤍"];

function createHeart(){

    const heart = document.createElement("div");

    heart.className="heart";

    heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(20+Math.random()*30)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    heart.style.opacity=Math.random();

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,350);

// Image Lightbox

const images = document.querySelectorAll(".gallery img");

const viewer = document.getElementById("imageViewer");

const viewerImage = document.getElementById("viewerImage");

const closeViewer = document.getElementById("closeViewer");


images.forEach(img=>{

    img.addEventListener("click",()=>{

        viewer.style.display="flex";

        viewerImage.src = img.src;

    });

});


closeViewer.addEventListener("click",()=>{

    viewer.style.display="none";

});


// Video Lightbox Smooth

const videos = document.querySelectorAll(".memory-video");

const videoViewer = document.getElementById("videoViewer");

const viewerVideo = document.getElementById("viewerVideo");

const closeVideo = document.getElementById("closeVideo");


videos.forEach(video=>{

    video.addEventListener("click",()=>{

        videoViewer.style.display="flex";

        viewerVideo.src = video.querySelector("source").src;

        viewerVideo.load(); // smooth loading

        // autoplay hata diya taaki lag na ho

    });

});


closeVideo.addEventListener("click",()=>{

    videoViewer.style.display="none";

    viewerVideo.pause();

    viewerVideo.src="";

});

 


// typeMessage();


// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

function revealSection(){

    const windowHeight = window.innerHeight;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();

/* ==========================
   Envelope Animation
========================== */

const envelope = document.getElementById("envelope");
const openLetterBtn = document.getElementById("openLetter");

let opened = false;

openLetterBtn.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    envelope.classList.add("open");

    openLetterBtn.style.display = "none";

    

    setTimeout(() => {

        loveText.innerHTML = "";
        letterindex = 0;
        typeMessage();

    }, 900);

});


 const loveText = document.getElementById("loveText");

const loveMessage =
"Hey My Love ❤️\n\n" +
"On your special day, I just want to say that you are the most beautiful part of my life. ✨\n\n" +
"Thank you for filling my days with happiness and endless smiles.\n\n" +
"I hope your life is always full of love, success and happiness.\n\n" +
"Happy Birthday ... ❤️";

let index = 0;

function typeMessage(){

    if(index < loveMessage.length){

        loveText.innerHTML += loveMessage.charAt(index);

        index++;

        setTimeout(typeMessage,50);

    }

}

// ==========================
// Premium Loader
// ==========================

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");
    const loadingText=document.getElementById("loadingText");

    const messages=[
        "Preparing Your Surprise... ❤️",
        "Collecting Memories... 📸",
        "Baking Your Cake... 🎂",
        "Writing Your Letter... 💌"
    ];

    let i=0;

    const changeText=setInterval(()=>{

        i++;

        if(i<messages.length){

            loadingText.textContent=messages[i];

        }

    },700);

    setTimeout(()=>{

        clearInterval(changeText);

        loader.classList.add("hide");

    },3000);

});

// ==========================
// Scroll Progress
// ==========================

const progressBar = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});

