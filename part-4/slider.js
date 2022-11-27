const slider = document.querySelectorAll('.slider li');
const countEl = document.querySelector('.count');
const totalSlideEl = document.querySelector('.totalSlide');
const totalSlide = slider.length;

totalSlideEl.textContent = "0" + totalSlide;

let count = 0;
let interVal = setInterval(() => {
    for (let item of slider) {
        item.classList.remove('active');
    }
    slider[count].classList.add('active');
    count++;
    if (count < 10) {
        countEl.innerHTML = "0" + count;
    } else {
        countEl.innerHTML = count;
    }

    if (totalSlide == count) {
        // count = 0;
        clearInterval(interVal);
    }


}, 1500)