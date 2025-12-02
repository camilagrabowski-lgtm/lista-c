function comparar(campo1, campo2, campoResposta){
    var id1 = parseInt(document.getElementById(campo1).value)
    var id2 = parseInt(document.getElementById(campo2).value)
    var resultado

    if (isNaN(id1) || isNaN(id2)) {
        resultado = "Preencha as duas idades."
    }
    else if (id1 > id2) {
        resultado = "A primeira pessoa é mais velha."
    } 
    else if (id2 > id1) {
        resultado = "A segunda pessoa é mais velha."
    } 
    else {
        resultado = "As duas pessoas têm a mesma idade."
    }

    document.getElementById(campoResposta).textContent = resultado
}
