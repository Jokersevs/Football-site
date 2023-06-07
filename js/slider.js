let slider = document.querySelector('.slider');
let images = slider.querySelectorAll('.slider-img');
let currentImageIndex = 0;

let info = slider.querySelectorAll('.team_info_hover');

function showNextSlide() {
    images[currentImageIndex].style.display = 'none';
    // images[currentImageIndex].style.opacity = '0';
    // info[currentImageIndex].style.display = "none"
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // images[currentImageIndex].style.opacity = '1';
    images[currentImageIndex].style.display = 'block';
    info[currentImageIndex].style.display = "none"


    let hover = images[currentImageIndex]

    hover.addEventListener("mouseover", function (){
        info[currentImageIndex].style.display = "block"
    });
    hover.addEventListener("mouseout", function (){
        info[currentImageIndex].style.display = "none"
    });
}

function showPreviousSlide() {
    images[currentImageIndex].style.display = 'none';
    // info[currentImageIndex].style.display = "none"
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    // images[currentImageIndex].style.opacity = '1';
    images[currentImageIndex].style.display = 'block';
    info[currentImageIndex].style.display = "none"
    // info[currentImageIndex].style.display = "block"


    let hover = images[currentImageIndex]

    hover.addEventListener("mouseover", function (){
        info[currentImageIndex].style.display = "block"
    });
    hover.addEventListener("mouseout", function (){
        info[currentImageIndex].style.display = "none"
    });
}

// Показуємо перший слайд
// images[currentImageIndex].style.opacity = '1';

info[currentImageIndex].style.display = "none"
images[currentImageIndex].style.display = 'block';


// Відображення тексту на першому слайді при наведені курсора
let hover = images[currentImageIndex]

    hover.addEventListener("mouseover", function (){
        info[currentImageIndex].style.display = "block"
    });
    hover.addEventListener("mouseout", function (){
        info[currentImageIndex].style.display = "none"
    });