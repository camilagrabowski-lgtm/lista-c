function mostrar(campoNome, campoIdade, campoResposta){
    var nome = document.getElementById(campoNome).value
    var idade = document.getElementById(campoIdade).value
    var resultado

    if (nome === "" || idade === "") {
        resultado = "Preencha todos os campos."
    } else {
        resultado = "Olá,(nome) !Você tem + idade anos."
    }

    document.getElementById(campoResposta).textContent = resultado
}
