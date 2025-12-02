function verificar(campoNota, campoResposta){
    var nota = parseFloat(document.getElementById(campoNota).value)
    var resultado

    if (isNaN(nota)) {
        resultado = "Por favor, insira uma nota."
    } 
    else if (nota >= 60) {
        resultado = "Aluno aprovado!"
    } 
    else {
        resultado = "Aluno reprovado."
    }

    document.getElementById(campoResposta).textContent = resultado
}
