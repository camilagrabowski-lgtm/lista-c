function converter() {
    let metros = document.getElementById("metros").value;

    if (metros === "") {
        document.getElementById("resultado").textContent = "Por favor, insira um valor.";
        return;
    }

    let centimetros = metros * 100;
    
    document.getElementById("resultado").textContent = metros + " metros equivalem a " + centimetros + " centímetros.";


}
