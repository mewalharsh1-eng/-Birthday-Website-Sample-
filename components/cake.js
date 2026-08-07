 const cutBtn = document.getElementById("cutCake");

cutBtn.addEventListener("click", function(){

    const knife = document.getElementById("knife");
    const left = document.querySelector(".cake-part.left");
    const right = document.querySelector(".cake-part.right");
    const flames = document.querySelectorAll(".flame");


    knife.style.left = "95px";


    setTimeout(function(){

        flames.forEach(function(flame){

            flame.style.opacity = "0";

        });


        left.style.transform =
        "translateX(-45px) rotate(-12deg)";


        right.style.transform =
        "translateX(45px) rotate(12deg)";

const msg = document.createElement("h3");

msg.innerHTML = "🎉 Happy Birthday... ❤️ 🎉";

msg.style.marginTop = "30px";
msg.style.color = "#ff2d75";
msg.style.fontSize = "30px";

document.getElementById("cakeSection").appendChild(msg);

    },1000);




    cutBtn.disabled = true;


setTimeout(()=>{

    document.getElementById("letter").scrollIntoView({
        behavior:"smooth"
    });

    document.getElementById("openLetter").focus();

},3000);

});
