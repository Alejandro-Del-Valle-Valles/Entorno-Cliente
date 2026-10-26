const IMAGE_DIV = document.getElementById('image');
const PREVIOUS_BTN = document.getElementById('previous');
const NEXT_BTN = document.getElementById('next');

const IMAGES = ['zorro1.jpg', 'zorro2.jpg', 'zorro3.jpg', 'zorro4.jpg'];
let currentIndex = 0;

updateImage();

if(NEXT_BTN) {
    NEXT_BTN.addEventListener('click', () => {
        currentIndex++;
        if(currentIndex >= IMAGES.length) currentIndex = 0;
        updateImage();
    });
}

if(PREVIOUS_BTN) {
    PREVIOUS_BTN.addEventListener('click', () => {
        currentIndex--;
        if(currentIndex < 0) currentIndex = IMAGES.length - 1;
        updateImage();
    });
}

function updateImage() {
    IMAGE_DIV.innerHTML =  `<img src="/imagenes/${IMAGES[currentIndex]}">`;;
}