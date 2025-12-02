function somarTres(c1, c2, c3, campoResposta){
    var n1 = parseFloat(document.getElementById(c1).value)
    var n2 = parseFloat(document.getElementById(c2).value)
    var n3 = parseFloat(document.getElementById(c3).value)
    var resultado

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultado = "Preencha todos os valores."
    } 
    else {
        resultado = n1 + n2 + n3
    }

    document.getElementById(campoResposta).textContent = resultado
}
