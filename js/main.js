//Botón subir y barra de Progreso

const progressBar = document.querySelector("#progress-bar");
const section = document.querySelector("section");

const animateProgressbar = () => {
    let scrollDistance = -section.getBoundingClientRect().top;
    let progressWidth = (scrollDistance / (section.getBoundingClientRect().height-document.documentElement.clientHeight))*100;
    let value = Math.floor(progressWidth);
    progressBar.style.width = value + "%";
};

window.addEventListener("scroll", animateProgressbar);

$(document).ready(function(){
    $('.ir-arriba').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        }, 300);
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.ir-arriba').slideDown(300);
        }else{
            $('.ir-arriba').slideUp(300);
        }
    });
});

//Botón de switch modo oscuro.

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    
    //Guardamos el modo en local Storage.
    if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
    }else{
        localStorage.setItem('dark-mode', 'false');
    }
});

//Obtenemos el modo actual.
if(localStorage.getItem('dark-mode') === 'true' ){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
}else{
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
};

//Página de Contacto, se escribe sola.

var typed = new Typed('.typed', {
    strings: [
    '<i>si un artículo ha dejado de funcionar inesperadamente.</i>',
    '<i>si haz encontrado un error dentro de algún artículo.</i>',
    '<i>por motivos de trabajo.</i>',
    '<i>o seguirme en mis redes sociales y ver mis trabajos realizados en github.</i>'],

	typeSpeed: 55, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 40, // Velocidad en milisegundos para borrrar una letra,
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});