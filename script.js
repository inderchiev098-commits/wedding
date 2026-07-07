// AOS.init({
//  duration: 1200,
//  once: true
// });
const weddingDate =
new Date("2026-08-07T16:00:00").getTime();

setInterval(() => {

const now =
new Date().getTime();

const distance =
weddingDate - now;

document.getElementById("days").innerHTML =
Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById("hours").innerHTML =
Math.floor((distance % (1000 * 60 * 60 * 24))
/ (1000 * 60 * 60));

document.getElementById("minutes").innerHTML =
Math.floor((distance % (1000 * 60 * 60))
/ (1000 * 60));

document.getElementById("seconds").innerHTML =
Math.floor((distance % (1000 * 60))
/ 1000);

},1000);

const music =
document.getElementById("music");

const btn =
document.querySelector(".music-btn");

btn.addEventListener("click",()=>{

if(music.paused){

music.play();
btn.innerHTML="🎵 Музыка";

}else{

music.pause();
btn.innerHTML="🔇 Без звука";

}

});
const openBtn = document.getElementById("openInvitation");
const welcome = document.getElementById("welcome-screen");

if (openBtn && welcome) {

    openBtn.addEventListener("click", () => {

        music.play().catch(err => console.log(err));

        welcome.classList.add("hideWelcome");

    });

}

const form = document.getElementById("rsvpForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send("service_k3th4la", "template_lf2h8w8", {
        name: document.getElementById("name").value,
        attendance: document.getElementById("attendance").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    })
    .then(function () {
        alert("Спасибо! Ваш ответ отправлен ❤️");
        form.reset();
    })
    .catch(function (error) {
        alert("Ошибка отправки!");
        console.log(error);
    });
});