function verificar() {
    var n = parseInt(document.getElementById("num").value)
    var res = document.getElementById("res")

    if (isNaN(n)) {
        res.textContent = "Digite um valor válido."
    } else if (n % 5 === 0) {
        res.textContent = "O número é múltiplo de 5."
    } else {
        res.textContent = "O número NÃO é múltiplo de 5."
    }
}
