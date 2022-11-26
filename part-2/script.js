
var swiper = new Swiper(".hero-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
   
});

document.getElementById("arrowBtn").addEventListener('click', function () {
    document.querySelector('.content-bottom-card').classList.toggle('active');
})

document.getElementById("anotherSlide").addEventListener('click', function () {
    document.querySelector('.content-bottom-card-two').classList.toggle('active-two');

})