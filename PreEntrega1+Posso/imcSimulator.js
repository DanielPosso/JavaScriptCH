/** Calculadora de índice de masa corporal **/

alert("Vamos a calcular tu indice de masa corporal IMC")
let mensaje;
let opcion = confirm("Click en Aceptar o Cancelar");
if (opcion == true) {
    alert(mensaje = "OK continuemos");
} else {
    let n = 0
    while (n < 2) {
        alert(mensaje = "Seguro que no quieres continuar?");
        alert(mensaje = "Hiciste click en Cancelar maldit@ cerd@ 😱");
        n++;
    }
    alert("Ok, entendido, solo sal de mi sitio web");
}

function calculate() {
    let imc;
    let result = document.getElementById("result");
    let altura = parseInt(document.getElementById("altura").value);
    let peso = parseInt(document.getElementById("peso").value);
    //El valor del peso y de la altura deberia ser mostrado con la ayuda de "textContent".
    document.getElementById("valorPeso").textContent = peso + " kg";
    document.getElementById("valorAltura").textContent = altura + " cm";
    //Formula para el imc
    imc = (peso / Math.pow((altura / 100), 2)).toFixed(1);
    result.textContent = imc;
    //Si el índice de masa corporal es <18.5
    if (imc < 18.5) {
        category = "Estas bajit@ de peso 😒";
        result.style.color = "#ffc44d";
    }
    //Si el índice de masa corporal es >=18.5 y <=24.9
    else if (imc >= 18.5 && imc <= 24.9) {
        category = "Tienes un peso normal 😍";
        result.style.color = "#0be881";
    }
    //Si el índice de masa corporal >= 25 y <= 29.9
    else if (imc >= 25 && imc <= 29.9) {
        category = "Tienes un poco de sobrepeso 😮";
        result.style.color = "#ff884d";
    }
    //Si el índice de masa corporal es <= 30
    else {
        category = "Ya te pasaste de v*rga con la comida 😱";
        result.style.color = "#ff5e57";
    }
    //Se muestra el resultado.
    document.getElementById("category").textContent = category;
}