function menuShow(){
    let menuMobile=document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector(".icon").src = "IMAGENS/menu.jpg"
    } else{
        menuMobile.classList.add('open');
        document.querySelector(".icon").src = "IMAGENS/menu.jpg"
    }
}
// Slider de promoções
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let prevButton = document.querySelector(".prev");
    let nextButton = document.querySelector(".next");

    // Esconder todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Incrementar slideIndex e exibir o slide correspondente
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "flex";

    // Configurar eventos de clique para os botões de navegação
    prevButton.addEventListener("click", () => {
        slideIndex--;
        if (slideIndex < 1) { slideIndex = slides.length; }
        updateSlides();
    });

    nextButton.addEventListener("click", () => {
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        updateSlides();
    });

    // Função para atualizar a exibição dos slides
    function updateSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "flex";
    }

    // Automatizar a mudança de slide a cada 2 segundos
    setTimeout(showSlides, 11000);
}

// Adiciona event listeners para as teclas do teclado
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        changeSlide(-1); // Tecla esquerda vai para o slide anterior
    } else if (event.key === 'ArrowRight') {
        changeSlide(+1); // Tecla direita vai para o próximo slide
    }
});

// Contagem regressiva para a inauguração
let countDownDate = new Date("november 02, 2024 23:59:00").getTime();

let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div>
            <span>${days}</span> Dias
        </div>
        <div>
            <span>${hours}</span> Horas
        </div>
        <div>
            <span>${minutes}</span> Minutos
        </div>
        <div>
            <span>${seconds}</span> Segundos
        </div>
    `;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRADO";
    }
}, 1000);