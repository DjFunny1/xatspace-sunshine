const slides = document.querySelector('.slides');

let index = 0;

    function showSlide(i) {
    index = (i + slides.children.length) % slides.children.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

    function nextSlide() {
    showSlide(index + 1);
}

    function prevSlide() {
    showSlide(index - 1);
}

//Cambiar automáticamente cada 10 segundos

setInterval(nextSlide, 10000);


//Ventanas Emergente Amigos

const modal = document.getElementById('myModal');

const btn = document.querySelector('#modalamigos');

const span = document.getElementsByClassName('close-btn')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
}
}

//Ventana Emergente BFF

const modal2 = document.getElementById('myModal2');

const btn2 = document.querySelector('#modalbff');

const span2 = document.getElementsByClassName('close-btn2')[0];

btn2.onclick = function() {
    modal2.style.display = 'block';
}

span2.onclick = function() {
    modal2.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = 'none';
}
}

//Ventana Youtube

const modal3 = document.getElementById('myModal3');

const btn3 = document.querySelector('#modalyoutube');

const span3 = document.getElementsByClassName('close-btn3')[0];

btn3.onclick = function() {
    modal3.style.display = 'block';
}

span3.onclick = function() {
    modal3.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = 'none';
}
}

