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
})

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
});