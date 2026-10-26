const IMAGE_DIV = document.getElementById('image');
const PREVIOUS_BTN = document.getElementById('previous');
const NEXT_BTN = document.getElementById('next');
const FIRST_BTN = document.getElementById('first');
const LAST_BTN = document.getElementById('last');
const SEARCH_BTN = document.getElementById('search');
const NAME_IN = document.getElementById('name');

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

if(FIRST_BTN) {
    FIRST_BTN.addEventListener('click', () => {
        currentIndex = 0;
        updateImage();
    });
}

if(LAST_BTN) {
    LAST_BTN.addEventListener('click', () => {
        currentIndex = IMAGES.length - 1;
        updateImage();
    });
}

if(SEARCH_BTN) {
    SEARCH_BTN.addEventListener('click', () => {
        var name = NAME_IN.value.trim();
        if(name === '') {
            alert('El nombre no puede estar vacío.')
            return;
        }
        name = name + '.jpg';
        var url = IMAGES.find((element) => element === name);
        if(url) {
            IMAGE_DIV.innerHTML = `<img src="/imagenes/${url}">`;
        } else alert('La imagen no ha sido encontrada.');
    })
}

function updateImage() {
    IMAGE_DIV.innerHTML =  `<img src="/imagenes/${IMAGES[currentIndex]}">`;;
}