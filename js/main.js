//Botón subir y barra de Progreso

addEventListener('DOMContentLoaded', () => {
    const boton_ir_arriba = document.querySelector('#ir_arriba_boton')
    const barra_indicador = document.querySelector(".indicador_scroll")

    const obtener_pixeles_inicio = () => document.documentElement.scrollTop || document.body.scrollTop

    const irArriba = () => {
        if (obtener_pixeles_inicio() > 0) {
            requestAnimationFrame(irArriba)
            scrollTo(0, obtener_pixeles_inicio() - (obtener_pixeles_inicio() / 20))
        }
    }

    const indicar_scroll = () => {
        if(obtener_pixeles_inicio() > 50){
            boton_ir_arriba.className = 'mostrar'
        }else{
            boton_ir_arriba.classname = 'ocultar'
        }
        let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let avance_scroll = (obtener_pixeles_inicio() / alto) * 100
        barra_indicador.style.width = `${avance_scroll}%`
    }

    boton_ir_arriba.addEventListener('click', irArriba)
    window.addEventListener('scroll', indicar_scroll)
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