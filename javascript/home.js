var countDownDate = new Date("Nov 1, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);


// form

const newsletter = document.querySelector('.newsletter');
const request = document.querySelector('.request')
const closeBtn = document.querySelector('.close');
const submit = document.querySelector('#submit');
const req = document.querySelector('.request-sent');
const displayNews = document.querySelector('.display-news');
const textInfo = document.querySelector('#text-info');


request.addEventListener('click', () => newsletter.classList.add('active'));
closeBtn.addEventListener('click', () => newsletter.classList.remove('active'));

submit.addEventListener('click', (e) => {

    if (textInfo.value) {
        e.preventDefault();
        displayNews.classList.add('hide-news')
        req.classList.add('show-sent')
    } else {
        textInfo.required = true
    }

})