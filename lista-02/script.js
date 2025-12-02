function calcular() {
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;

    if (base === altura) {
        document.getElementById("resultado").textContent = 
        "Por favor, preencha todos os campos.";
        return;
    }

    let area = base * altura;

    document.getElementById("resultado").textContent = "A área do retângulo é: " + area;
}
