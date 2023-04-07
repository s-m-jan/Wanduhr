let date = new Date();

setInterval(() => {
    let date = new Date();
    let secArrow = document.querySelector(".arrows .second");
    let sec = date.getSeconds();
    let secDeg = sec * 6;
    secArrow.style.transform = `rotate(${secDeg}deg)`
    let minArrow = document.querySelector(".arrows .minute");
    let min = date.getMinutes();
    let minDeg = min * 6;
    minArrow.style.transform = `rotate(${minDeg}deg)`
    let hourArrow = document.querySelector(".arrows .hour");
    let hour =  date.getHours() % 12;
    let hourDeg = hour * 30;
    hourArrow.style.transform = `rotate(${hourDeg}deg)`
}, 1000);