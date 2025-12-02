function tabuada(campoNumero, campoResposta){
    var numero = parseInt(document.getElementById(campoNumero).value)
    var resultado = ""

    if (isNaN(numero)) {
        resultado = "Por favor, insira um número."
    } else {
        for (var i = 0; i <= 10; i++) {
            resultado += numero + " + " + i + " = " + (numero + i) + "<br>"
        }
    }

    document.getElementById(campoResposta).innerHTML = resultado
}
