const mainArea = document.querySelector('.big-img');

const collapsedSidebar = document.querySelector('.collapsed-sidebar');



let mainAreaWidth = mainArea.clientWidth;

// width


collapsedSidebar.addEventListener('click', function () {


    collapsedSidebar.classList.toggle('slide-menu');


})


