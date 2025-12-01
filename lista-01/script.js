function converter() {
    let metros = document.getElementById("metros").value;

    if (metros === "") {
        document.getElementById("resultado").innerText = "Por favor, insira um valor.";
        return;
    }

    let centimetros = metros * 100;

    document.getElementById("resultado").innerText =
        `${metros} metros equivalem a ${centimetros} centímetros.`;
}
