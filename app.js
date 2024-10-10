let image1Btn = document.querySelector('#image1');
let image2Btn = document.querySelector('#image2');
let image3Btn = document.querySelector('#image3');
let image4Btn = document.querySelector('#image4');
let bike = document.getElementById('bike');

image1Btn.addEventListener('click', () => {
    console.log('image1 is clicked');
    bike.style.backgroundImage = 'url(image1.png)';
});

image2Btn.addEventListener('click', () => {
    bike.style.backgroundImage = 'url(image2.jpg)';
});

image3Btn.addEventListener('click', () => {
    bike.style.backgroundImage = 'url(image3.jpg)';
});

image4Btn.addEventListener('click', () => {
    bike.style.backgroundImage = 'url(image4.jpg)';
});