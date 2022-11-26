
const colors = ['red', 'green', 'blue', 'orange', 'yellow'];
const colorsLength = colors.length;
let index = 1;

document.querySelector('.swiper-button-prev').addEventListener('click', function () {

    let pickColor = colors[index];
    document.querySelector('.before').style.backgroundColor = pickColor;
    index++;
    if (colorsLength === index) {
        index = 1;
    }

})

var swiper = new Swiper(".hero-slider", {
    spaceBetween: 30,
    effect: "fade",
    fadeEffect: { crossFade: true },
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

var swiper = new Swiper(".bg-slider", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
    },
    reverseDirection: true,
});