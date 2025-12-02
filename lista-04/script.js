function calcular() {
    var valor = parseFloat(document.getElementById("valor").value);
    var resultado = document.getElementById("resultado");

    if (isNaN(valor)) {
        resultado.textContent = "Por favor, insira um valor válido.";
        return;
    }

    var conta = valor - (valor * 0.10);

    resultado.textContent = "Preço final com 10% de desconto: R$ " + conta.toFixed(2);
}
