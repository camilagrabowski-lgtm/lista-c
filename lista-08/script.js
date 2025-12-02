function triplo(campoNumero, campoResposta){
    var numero = parseFloat(document.getElementById(campoNumero).value)
    var resultado

    if (isNaN(numero)) {
        resultado = "Por favor, insira um número."
    } else {
        resultado = numero * 3
    }

    document.getElementById(campoResposta).textContent = resultado
}
