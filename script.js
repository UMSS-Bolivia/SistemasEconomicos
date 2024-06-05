function calcularVAN() {
    var inversionInicial = parseFloat(document.getElementById("inversion_inicial").value);
    var tasaDescuento = parseFloat(document.getElementById("tasa_descuento").value);
    var periodos = parseInt(document.getElementById("periodos").value);
    var flujoEfectivo = [];
    var resultadoElemento = document.getElementById("resultado");

    for (var i = 0; i < periodos; i++) {
        var flujo = parseFloat(prompt("Ingrese el flujo de efectivo para el periodo " + (i + 1)));
        flujoEfectivo.push(flujo);
    }

    var van = -inversionInicial;
    for (var i = 0; i < periodos; i++) {
        van += flujoEfectivo[i] / Math.pow((1 + tasaDescuento), (i + 1));
    }

    resultadoElemento.innerHTML = "El Valor Actual Neto (VAN) del proyecto es: " + van.toFixed(2);
    
}
