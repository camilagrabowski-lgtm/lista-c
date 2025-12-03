function comparar(Peso1, Peso2, campoResposta){
    var peso1 = document.getElementById(Peso1).value
    var peso2 = document.getElementById(Peso2).value
    var resultado

    if (p1 === "" || p2 === "") {
        resultado = "Preencha todos os campos."
    } else {
        p1 = parseFloat(p1)
        p2 = parseFloat(p2)

        if (p1 > p2) {
            resultado = "A primeira pessoa é mais pesada."
        } else if (p2 > p1) {
            resultado = "A segunda pessoa é mais pesada."
        } else {
            resultado = "Os pesos são iguais."
        }
    }

    document.getElementById(campoResposta).textContent = resultado
}
