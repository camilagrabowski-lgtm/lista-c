function desconto(campoIdade, campoSexo, campoResposta){
    var idade = parseInt(document.getElementById(campoIdade).value)
    var sexo = document.getElementById(campoSexo).value
    var resultado

    if (isNaN(idade) || sexo === "") {
        resultado = "Preencha todos os campos."
    }
    else if (sexo === "F" && idade > 40) {
        resultado = "Mulher com mais de 40 anos: tem direito ao desconto!"
    }
    else if (sexo === "M" && idade > 50) {
        resultado = "Homem com mais de 50 anos: tem direito ao desconto!"
    }
    else {
        resultado = "Não tem direito ao desconto."
    }

    document.getElementById(campoResposta).textContent = resultado
}
