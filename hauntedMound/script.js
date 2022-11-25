const countDownDate = new Date("Mar 5, 2023 19:30:00").getTime();



let x = setInterval(function (){
    let todaysDate = new Date().getTime();

    distance = countDownDate - todaysDate;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds "; 
}, 1000);


