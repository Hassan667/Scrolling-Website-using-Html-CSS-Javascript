let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat6 = document.getElementById("boat6");
let hassan = document.querySelector(".hassan");

window.onscroll = function() {
    let value = scrollY;
    stars.style.left = value + "px";
    moon.style.top = value * 3 + "px";
    mountains3.style.top = value * 2 + "px";
    mountains4.style.top = value * 1.5 + "px";
    river.style.top = value + "px";
    boat.style.top = value + "px";
    boat.style.left = value * 2.5 + "px";
    hassan.style.fontsize = value + "px";
    if (scrollY >= 67) {
        hassan.style.fontsize = 67 + "px";
        // hassan.style.position = fixed;
        if (scrollY >= 470) {
            hassan.style.disply = "none";
        } else {
            hassan.style.disply = "block";
        }
        if (scrollY >= 130) {
            document.querySelector('.main').style.background = ' linear.gradient(#000,#fff)'
        }
    }
};