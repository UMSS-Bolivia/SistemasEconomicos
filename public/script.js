function calcularVAN() {
    var inversion = parseFloat(document.getElementById("inversion").value);
    var interes = parseFloat(document.getElementById("interes").value) / 100;
    var flujosCaja = document.getElementById("flujos").value.split(",").map(Number);
    
    var van = 0;
    for (var i = 0; i < flujosCaja.length; i++) {
        van += flujosCaja[i] / Math.pow((1 + interes), i + 1);
    }
    van -= inversion;
    
    // Mostrar el resultado del VAN
    document.getElementById("result").innerHTML = "El Valor Actual Neto (VAN) es: " + van.toFixed(2);
    
    // Agregar el botón "Calcular VFN" debajo del resultado del VAN
    document.getElementById("result").innerHTML += "" + '<br><button onclick="calcularVFN1()">Calcular VFN</button>';
}

function calcularVFN1() {
    // Obtener el VAN calculado previamente
    var van = parseFloat(document.getElementById("result").innerText.split(": ")[1]);
    
    var interes = parseFloat(document.getElementById("interes").value) / 100;
    var periodos = parseFloat(document.getElementById("periodos").value);
    
    // Calcular el Valor Futuro Neto (VFN) utilizando el VAN como inversión inicial
    var vfn = van * Math.pow((1 + interes), periodos);

    // Mostrar el resultado en el div "result"
    document.getElementById("result").innerHTML = "El Valor Futuro Neto (VFN) es: " + vfn.toFixed(2);
}


function borrarDatos() {
    document.getElementById("inversion").value = "";
    document.getElementById("interes").value = "";
    document.getElementById("flujos").value = "";
    document.getElementById("result").innerHTML = "";
}



