
var segundoInicio = 000;

function actualizar() {
    document.getElementById('countdown').innerHTML = segundoInicio;

    if (segundoInicio == 1000000) {

        document.getElementById('countdown').innerHTML = "";
    } else {
        segundoInicio+=1;
        setTimeout(actualizar, 1E3);
    }
}

actualizar();
