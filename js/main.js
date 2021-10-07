var regresar = $("#ir-arriba");

regresar.on("click", function(evento){
    evento.preventDefault();
    $("html, body").animate({scrollTop: 0}, 300)
});