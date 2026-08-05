const birthdayDate = new Date("August 10, 2026 00:00:00").getTime();

const timer = document.getElementById("timer");

function updateCountdown(){

    const now = new Date().getTime();

    const distance = birthdayDate - now;


    if(distance <= 0){

        timer.innerHTML = "🎂 Happy Birthday Angel ❤️";

        return;

    }


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );


    timer.innerHTML =
    `
    ${days} Days 
    ${hours} Hours 
    ${minutes} Minutes 
    ${seconds} Seconds
    `;

}


setInterval(updateCountdown,1000);

updateCountdown();