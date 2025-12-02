function converter(){
    var c = document.getElementById("celsius").value
    var res = document.getElementById("resultado")

    if(c === ""){
        res.textContent = "Por favor, insira um valor."
        return
    }

    var f = (c * 9/5) + 32
    res.textContent = c + "°C = " + f.toFixed(2) + "°F"
}
